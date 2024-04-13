## DEVELOPERS NOTES & CONVENTIONS
##
##  1. All text displayed to the user except for Write-Debug (or $PSCmdlet.WriteDebug()) text must be added to the
##     string tables in:
##         en-US\Plaster.psd1
##         Plaster.psm1
##  2. If a new manifest element is added, it must be added to the Schema\PlasterManifest-v1.xsd file and then
##     processed in the appropriate function in this script.  Any changes to <parameter> attributes must be
##     processed not only in the ProcessParameter function but also in the dynamicparam function.
##
##  3. Non-exported functions should avoid using the PowerShell standard Verb-Noun naming convention.
##     They should use PascalCase instead.
##
##  4. Please follow the scripting style of this file when adding new script.

function Invoke-Plaster {
    [System.Diagnostics.CodeAnalysis.SuppressMessage('PSAvoidShouldContinueWithoutForce', '', Scope='Function', Target='CopyFileWithConflictDetection')]
    [System.Diagnostics.CodeAnalysis.SuppressMessage('PSAvoidUsingConvertToSecureStringWithPlainText', '', Scope='Function', Target='ProcessParameter')]
    [System.Diagnostics.CodeAnalysis.SuppressMessage('PSShouldProcess', '', Scope='Function', Target='CopyFileWithConflictDetection')]
    [System.Diagnostics.CodeAnalysis.SuppressMessage('PSShouldProcess', '', Scope='Function', Target='ProcessFile')]
    [System.Diagnostics.CodeAnalysis.SuppressMessage('PSShouldProcess', '', Scope='Function', Target='ProcessModifyFile')]
    [System.Diagnostics.CodeAnalysis.SuppressMessage('PSShouldProcess', '', Scope='Function', Target='ProcessNewModuleManifest')]
    [System.Diagnostics.CodeAnalysis.SuppressMessage('PSShouldProcess', '', Scope='Function', Target='ProcessRequireModule')]
    [CmdletBinding(SupportsShouldProcess=$true)]
    param(
        [Parameter(Position = 0, Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [string]
        $TemplatePath,

        [Parameter(Position = 1, Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [string]
        $DestinationPath,

        [Parameter()]
        [switch]
        $Force,

        [Parameter()]
        [switch]
        $NoLogo,

        [Parameter()]
        [switch]
        $PassThru
    )

    # Process the template's Plaster manifest file to convert parameters defined there into dynamic parameters.
    dynamicparam {
        $paramDictionary = New-Object System.Management.Automation.RuntimeDefinedParameterDictionary

        $manifest = $null
        $manifestPath = $null
        $templateAbsolutePath = $null

        # Nothing to do until the TemplatePath parameter has been provided.
        if ($null -eq $TemplatePath) {
            return
        }

        try {
            # Let's convert non-terminating errors in this function to terminating so we
            # catch and format the error message as a warning.
            $ErrorActionPreference = 'Stop'

            # The constrained runspace is not available in the dynamicparam block.  Shouldn't be needed
            # since we are only evaluating the parameters in the manifest - no need for EvaluateConditionAttribute as we
            # are not building up multiple parametersets.  And no need for EvaluateAttributeValue since we are only
            # grabbing the parameter's value which is static.
            $templateAbsolutePath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($TemplatePath)
            if (!(Test-Path -LiteralPath $templateAbsolutePath -PathType Container)) {
                throw ($LocalizedData.ErrorTemplatePathIsInvalid_F1 -f $templateAbsolutePath)
            }

            # Load manifest file using culture lookup
            $manifestPath = GetPlasterManifestPathForCulture $templateAbsolutePath $PSCulture
            if (($null -eq $manifestPath) -or (!(Test-Path $manifestPath))) {
                return
            }

            $manifest = Plaster\Test-PlasterManifest -Path $manifestPath -ErrorAction Stop 3>$null

            # The user-defined parameters in the Plaster manifest are converted to dynamic parameters
            # which allows the user to provide the parameters via the command line.
            # This enables non-interactive use cases.
            foreach ($node in $manifest.plasterManifest.parameters.ChildNodes) {
                if ($node -isnot [System.Xml.XmlElement]) {
                    continue
                }

                $name = $node.name
                $type = $node.type
                $prompt = if ($node.prompt) { $node.prompt } else { $LocalizedData.MissingParameterPrompt_F1 -f $name }

                if (!$name -or !$type) { continue }

                # Configure ParameterAttribute and add to attr collection
                $attributeCollection = New-Object System.Collections.ObjectModel.Collection[System.Attribute]
                $paramAttribute = New-Object System.Management.Automation.ParameterAttribute
                $paramAttribute.HelpMessage = $prompt
                $attributeCollection.Add($paramAttribute)

                switch -regex ($type) {
                    'text|user-fullname|user-email' {
                        $param = New-Object System.Management.Automation.RuntimeDefinedParameter `
                                     -ArgumentList ($name, [string], $attributeCollection)
                        break
                    }

                    'choice|multichoice' {
                        $choiceNodes = $node.ChildNodes
                        $setValues = New-Object string[] $choiceNodes.Count
                        $i = 0

                        foreach ($choiceNode in $choiceNodes){
                            $setValues[$i++] = $choiceNode.value
                        }

                        $validateSetAttr = New-Object System.Management.Automation.ValidateSetAttribute $setValues
                        $attributeCollection.Add($validateSetAttr)
                        $type = if ($type -eq 'multichoice') { [string[]] } else { [string] }
                        $param = New-Object System.Management.Automation.RuntimeDefinedParameter `
                                     -ArgumentList ($name, $type, $attributeCollection)
                        break
                    }

                    default { throw ($LocalizedData.UnrecognizedParameterType_F2 -f $type,$name) }
                }

                $paramDictionary.Add($name, $param)
            }
        }
        catch {
            Write-Warning ($LocalizedData.ErrorProcessingDynamicParams_F1 -f $_)
        }

        $paramDictionary
    }

    begin {
        # Write out the Plaster logo if necessary
        $plasterLogo = @'
  ____  _           _
 |  _ \| | __ _ ___| |_ ___ _ __
 | |_) | |/ _` / __| __/ _ \ '__|
 |  __/| | (_| \__ \ ||  __/ |
 |_|   |_|\__,_|___/\__\___|_|
'@

        if (!$NoLogo) {
            $versionString = "v$PlasterVersion"
            Write-Host $plasterLogo
            Write-Host ((" " * (50 - $versionString.Length)) + $versionString)
            Write-Host ("=" * 50)
        }

        $boundParameters = $PSBoundParameters
        $constrainedRunspace = $null
        $templateCreatedFiles = @{}
        $defaultValueStore = @{}
        $fileConflictConfirmNoToAll = $false
        $fileConflictConfirmYesToAll = $false
        $flags = @{
            DefaultValueStoreDirty = $false
        }

        # Verify TemplatePath parameter value is valid.
        $templateAbsolutePath = $PSCmdlet.GetUnresolvedProviderPathFromPSPath($TemplatePath)
        if (!(Test-Path -LiteralPath $templateAbsolutePath -PathType Container)) {
            throw ($LocalizedData.ErrorTemplatePathIsInvalid_F1 -f $templateAbsolutePath)
        }

        # We will have a null manifest if the dynamicparam scriptblock was unable to load the template manifest
        # or it wasn't valid. If so, let's try to load it here. If anything, we can provide better errors here.
        if ($null -eq $manifest) {
            if ($null -eq $manifestPath) {
                $manifestPath = GetPlasterManifestPathForCulture $templateAbsolutePath $PSCulture
            }

            if (Test-Path -LiteralPath $manifestPath -PathType Leaf) {
                $manifest = Plaster\Test-PlasterManifest -Path $manifestPath -ErrorAction Stop 3>$null
                $PSCmdlet.WriteDebug("In begin, loading manifest file '$manifestPath'")
            }
            else {
                throw ($LocalizedData.ManifestFileMissing_F1 -f $manifestPath)
            }
        }

        # If the destination path doesn't exist, create it.
        $destinationAbsolutePath = $PSCmdlet.GetUnresolvedProviderPathFromPSPath($DestinationPath)
        if (!(Test-Path -LiteralPath $destinationAbsolutePath)) {
            New-Item $destinationAbsolutePath -ItemType Directory > $null
        }

        # Prepare output object if user has specified the -PassThru parameter.
        if ($PassThru) {
            $InvokePlasterInfo = [PSCustomObject]@{
                TemplatePath = $templateAbsolutePath
                DestinationPath = $destinationAbsolutePath
                Success = $false
                TemplateType = if ($manifest.plasterManifest.templateType) {$manifest.plasterManifest.templateType} else {'Unspecified'}
                CreatedFiles = [string[]]@()
                UpdatedFiles = [string[]]@()
                MissingModules = [string[]]@()
                OpenFiles = [string[]]@()
            }
        }

        # Create the pre-defined Plaster variables.
        InitializePredefinedVariables $templateAbsolutePath $destinationAbsolutePath

        # Check for any existing default value store file and load default values if file exists.
        $templateId = $manifest.plasterManifest.metadata.id
        $templateVersion = $manifest.plasterManifest.metadata.version
        $templateName = $manifest.plasterManifest.metadata.name
        $storeFilename = "$templateName-$templateVersion-$templateId.clixml"
        $defaultValueStorePath = Join-Path $ParameterDefaultValueStoreRootPath $storeFilename
        if (Test-Path $defaultValueStorePath) {
            try {
                $PSCmdlet.WriteDebug("Loading default value store from '$defaultValueStorePath'.")
                $defaultValueStore = Import-Clixml $defaultValueStorePath -ErrorAction Stop
            }
            catch {
                Write-Warning ($LocalizedData.ErrorFailedToLoadStoreFile_F1 -f $defaultValueStorePath)
            }
        }

        function NewConstrainedRunspace() {
            $iss = [System.Management.Automation.Runspaces.InitialSessionState]::Create()
            if (!$IsCoreCLR) {
                $iss.ApartmentState = [System.Threading.ApartmentState]::STA
            }
            $iss.LanguageMode = [System.Management.Automation.PSLanguageMode]::ConstrainedLanguage
            $iss.DisableFormatUpdates = $true

            $sspe = New-Object System.Management.Automation.Runspaces.SessionStateProviderEntry 'Environment',([Microsoft.PowerShell.Commands.EnvironmentProvider]),$null
            $iss.Providers.Add($sspe)

            $sspe = New-Object System.Management.Automation.Runspaces.SessionStateProviderEntry 'FileSystem',([Microsoft.PowerShell.Commands.FileSystemProvider]),$null
            $iss.Providers.Add($sspe)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Get-Content',([Microsoft.PowerShell.Commands.GetContentCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Get-Date',([Microsoft.PowerShell.Commands.GetDateCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Get-ChildItem',([Microsoft.PowerShell.Commands.GetChildItemCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Get-Item',([Microsoft.PowerShell.Commands.GetItemCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Get-ItemProperty',([Microsoft.PowerShell.Commands.GetItemPropertyCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Get-Module',([Microsoft.PowerShell.Commands.GetModuleCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Get-Variable',([Microsoft.PowerShell.Commands.GetVariableCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Test-Path',([Microsoft.PowerShell.Commands.TestPathCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Out-String',([Microsoft.PowerShell.Commands.OutStringCommand]),$null
            $iss.Commands.Add($ssce)

            $ssce = New-Object System.Management.Automation.Runspaces.SessionStateCmdletEntry 'Compare-Object',([Microsoft.PowerShell.Commands.CompareObjectCommand]),$null
            $iss.Commands.Add($ssce)

            $scopedItemOptions = [System.Management.Automation.ScopedItemOptions]::AllScope
            $plasterVars = Get-Variable -Name PLASTER_*,PSVersionTable
            if (Test-Path Variable:\IsLinux) {
                $plasterVars += Get-Variable -Name IsLinux
            }
            if (Test-Path Variable:\IsOSX) {
                $plasterVars += Get-Variable -Name IsOSX
            }
            if (Test-Path Variable:\IsMacOS) {
                $plasterVars += Get-Variable -Name IsMacOS
            }
            if (Test-Path Variable:\IsWindows) {
                $plasterVars += Get-Variable -Name IsWindows
            }
            foreach ($var in $plasterVars) {
                $ssve = New-Object System.Management.Automation.Runspaces.SessionStateVariableEntry `
                            $var.Name,$var.Value,$var.Description,$scopedItemOptions
                $iss.Variables.Add($ssve)
            }

            # Create new runspace with the above defined entries. Then open and set its working dir to $destinationAbsolutePath
            # so all condition attribute expressions can use a relative path to refer to file paths e.g.
            # condition="Test-Path src\${PLASTER_PARAM_ModuleName}.psm1"
            $runspace = [System.Management.Automation.Runspaces.RunspaceFactory]::CreateRunspace($iss)
            $runspace.Open()
            if ($destinationAbsolutePath) {
                $runspace.SessionStateProxy.Path.SetLocation($destinationAbsolutePath) > $null
            }
            $runspace
        }

        function ExecuteExpressionImpl([string]$Expression) {
            try {
                $powershell = [PowerShell]::Create()

                if ($null -eq $constrainedRunspace) {
                    $constrainedRunspace = NewConstrainedRunspace
                }
                $powershell.Runspace = $constrainedRunspace

                try {
                    $powershell.AddScript($Expression) > $null
                    $res = $powershell.Invoke()
                    $res
                }
                catch {
                    throw ($LocalizedData.ExpressionInvalid_F2 -f $Expression,$_)
                }

                # Check for non-terminating errors.
                if ($powershell.Streams.Error.Count -gt 0) {
                    $err = $powershell.Streams.Error[0]
                    throw ($LocalizedData.ExpressionNonTermErrors_F2 -f $Expression,$err)
                }
            }
            finally {
                if ($powershell) {
                    $powershell.Dispose()
                }
            }
        }

        function InterpolateAttributeValue([string]$Value, [string]$Location) {
            if ($null -eq $Value) {
                return [string]::Empty
            }
            elseif ([string]::IsNullOrWhiteSpace($Value)) {
                return $Value
            }

            try {
                $res = @(ExecuteExpressionImpl "`"$Value`"")
                [string]$res[0]
            }
            catch {
                throw ($LocalizedData.InterpolationError_F3 -f $Value.Trim(),$Location,$_)
            }
        }

        function EvaluateConditionAttribute([string]$Expression, [string]$Location) {
            if ($null -eq $Expression) {
                return [string]::Empty
            }
            elseif ([string]::IsNullOrWhiteSpace($Expression)) {
                return $Expression
            }

            try {
                $res = @(ExecuteExpressionImpl $Expression)
                [bool]$res[0]
            }
            catch {
                throw ($LocalizedData.ExpressionInvalidCondition_F3 -f $Expression,$Location,$_)
            }
        }

        function EvaluateExpression([string]$Expression, [string]$Location) {
            if ($null -eq $Expression) {
                return [string]::Empty
            }
            elseif ([string]::IsNullOrWhiteSpace($Expression)) {
                return $Expression
            }

            try {
                $res = @(ExecuteExpressionImpl $Expression)
                [string]$res[0]
            }
            catch {
                throw ($LocalizedData.ExpressionExecError_F2 -f $Location,$_)
            }
        }

        function EvaluateScript([string]$Script, [string]$Location) {
            if ($null -eq $Script) {
                return @([string]::Empty)
            }
            elseif ([string]::IsNullOrWhiteSpace($Script)) {
                return $Script
            }

            try {
                $res = @(ExecuteExpressionImpl $Script)
                [string[]]$res
            }
            catch {
                throw ($LocalizedData.ExpressionExecError_F2 -f $Location,$_)
            }
        }

        function GetErrorLocationFileAttrVal([string]$ElementName, [string]$AttributeName) {
            $LocalizedData.ExpressionErrorLocationFile_F2 -f $ElementName,$AttributeName
        }

        function GetErrorLocationModifyAttrVal([string]$AttributeName) {
            $LocalizedData.ExpressionErrorLocationModify_F1 -f $AttributeName
        }

        function GetErrorLocationNewModManifestAttrVal([string]$AttributeName) {
            $LocalizedData.ExpressionErrorLocationNewModManifest_F1 -f $AttributeName
        }

        function GetErrorLocationParameterAttrVal([string]$ParameterName, [string]$AttributeName) {
            $LocalizedData.ExpressionErrorLocationParameter_F2 -f $ParameterName,$AttributeName
        }

        function GetErrorLocationRequireModuleAttrVal([string]$ModuleName, [string]$AttributeName) {
            $LocalizedData.ExpressionErrorLocationRequireModule_F2 -f $ModuleName,$AttributeName
        }

        function ConvertToDestinationRelativePath($Path) {
            $fullDestPath = $DestinationPath
            if (![System.IO.Path]::IsPathRooted($fullDestPath)) {
                $fullDestPath = $PSCmdlet.GetUnresolvedProviderPathFromPSPath($DestinationPath)
            }

            $fullPath = $PSCmdlet.GetUnresolvedProviderPathFromPSPath($Path)
            if (!$fullPath.StartsWith($fullDestPath, 'OrdinalIgnoreCase')) {
                throw ($LocalizedData.ErrorPathMustBeUnderDestPath_F2 -f $fullPath, $fullDestPath)
            }

            $fullPath.Substring($fullDestPath.Length).TrimStart('\','/')
        }

        function VerifyPathIsUnderDestinationPath([ValidateNotNullOrEmpty()][string]$FullPath) {
            if (![System.IO.Path]::IsPathRooted($FullPath)) {
                $PSCmdlet.WriteDebug("The FullPath parameter '$FullPath' must be an absolute path.")
            }

            $fullDestPath = $DestinationPath
            if (![System.IO.Path]::IsPathRooted($fullDestPath)) {
                $fullDestPath = $PSCmdlet.GetUnresolvedProviderPathFromPSPath($DestinationPath)
            }

            if (!$FullPath.StartsWith($fullDestPath, [StringComparison]::OrdinalIgnoreCase)) {
                throw ($LocalizedData.ErrorPathMustBeUnderDestPath_F2 -f $FullPath, $fullDestPath)
            }
        }

        function WriteContentWithEncoding([string]$path, [string[]]$content, [string]$encoding) {
            if ($encoding -match '-nobom') {
                $encoding,$dummy = $encoding -split '-'

                $noBomEncoding = $null
                switch ($encoding) {
                    'utf8' { $noBomEncoding = New-Object System.Text.UTF8Encoding($false) }
                }

                if ($null -eq $content) {
                    $content = [string]::Empty
                }

                [System.IO.File]::WriteAllLines($path, $content, $noBomEncoding)
            }
            else {
                Set-Content -LiteralPath $path -Value $content -Encoding $encoding
            }
        }

        function ColorForOperation($operation) {
            switch ($operation) {
                $LocalizedData.OpConflict      { 'Red' }
                $LocalizedData.OpCreate        { 'Green' }
                $LocalizedData.OpForce         { 'Yellow' }
                $LocalizedData.OpIdentical     { 'Cyan' }
                $LocalizedData.OpModify        { 'Magenta' }
                $LocalizedData.OpUpdate        { 'Green' }
                $LocalizedData.OpMissing       { 'Red' }
                $LocalizedData.OpVerify        { 'Green' }
                default { $Host.UI.RawUI.ForegroundColor }
            }
        }

        function GetMaxOperationLabelLength {
            ($LocalizedData.OpCreate,   $LocalizedData.OpIdentical,
             $LocalizedData.OpConflict, $LocalizedData.OpForce,
             $LocalizedData.OpMissing,  $LocalizedData.OpModify,
             $LocalizedData.OpUpdate,   $LocalizedData.OpVerify |
                 Measure-Object -Property Length -Maximum).Maximum
        }

        function WriteOperationStatus($operation, $message) {
            $maxLen = GetMaxOperationLabelLength
            Write-Host ("{0,$maxLen} " -f $operation) -ForegroundColor (ColorForOperation $operation) -NoNewline
            Write-Host $message
        }

        function WriteOperationAdditionalStatus([string[]]$Message) {
            $maxLen = GetMaxOperationLabelLength
            foreach ($msg in $Message) {
                $lines = $msg -split "`n"
                foreach ($line in $lines) {
                    Write-Host ("{0,$maxLen} {1}" -f "",$line)
                }
            }
        }

        function GetGitConfigValue($name) {
            # Very simplistic git config lookup
            # Won't work with namespace, just use final element, e.g. 'name' instead of 'user.name'

            # The $Home dir may not be reachable e.g. if on network share and/or script not running as admin.
            # See issue https://github.com/PowerShell/Plaster/issues/92
            if (!(Test-Path -LiteralPath $Home)) {
                return
            }

            $gitConfigPath = Join-Path $Home '.gitconfig'
            $PSCmdlet.WriteDebug("Looking for '$name' value in Git config: $gitConfigPath")

            if (Test-Path -LiteralPath $gitConfigPath) {
                $matches = Select-String -LiteralPath $gitConfigPath -Pattern "\s+$name\s+=\s+(.+)$"
                if (@($matches).Count -gt 0)
                {
                    $matches.Matches.Groups[1].Value
                }
            }
        }

        function PromptForInput($prompt, $default) {
            do {
                $value = Read-Host -Prompt $prompt
                if (!$value -and $default) {
                    $value = $default
                }
            } while (!$value)

            $value
        }

        function PromptForChoice([string]$ParameterName, [ValidateNotNull()]$ChoiceNodes, [string]$prompt,
                                 [int[]]$defaults, [switch]$IsMultiChoice) {
            $choices = New-Object 'System.Collections.ObjectModel.Collection[System.Management.Automation.Host.ChoiceDescription]'
            $values = New-Object object[] $ChoiceNodes.Count
            $i = 0

            foreach ($choiceNode in $ChoiceNodes) {
                $label = InterpolateAttributeValue $choiceNode.label (GetErrorLocationParameterAttrVal $ParameterName label)
                $help  = InterpolateAttributeValue $choiceNode.help  (GetErrorLocationParameterAttrVal $ParameterName help)
                $value = InterpolateAttributeValue $choiceNode.value (GetErrorLocationParameterAttrVal $ParameterName value)

                $choice = New-Object System.Management.Automation.Host.ChoiceDescription -Arg $label,$help
                $choices.Add($choice)
                $values[$i++] = $value
            }

            $retval = [PSCustomObject]@{Values=@(); Indices=@()}

            if ($IsMultiChoice) {
                $selections = $Host.UI.PromptForChoice('', $prompt, $choices, $defaults)
                foreach ($selection in $selections) {
                    $retval.Values += $values[$selection]
                    $retval.Indices += $selection
                }
            }
            else {
                if ($defaults.Count -gt 1) {
                    throw ($LocalizedData.ParameterTypeChoiceMultipleDefault_F1 -f $ChoiceNodes.ParentNode.name)
                }

                $selection = $Host.UI.PromptForChoice('', $prompt, $choices, $defaults[0])
                $retval.Values = $values[$selection]
                $retval.Indices = $selection
            }

            $retval
        }

        # All Plaster variables should be set via this method so that the ConstrainedRunspace can be
        # configured to use the new variable. This method will null out the ConstrainedRunspace so that
        # later, when we need to evaluate script in that runspace, it will get recreated first with all
        # the latest Plaster variables.
        function SetPlasterVariable() {
            param(
                [Parameter(Mandatory=$true)]
                [ValidateNotNullOrEmpty()]
                [string]$Name,

                [Parameter(Mandatory=$true)]
                [AllowNull()]
                $Value,

                [Parameter()]
                [bool]
                $IsParam = $true
            )

            # Variables created from a <parameter> in the Plaster manifset are prefixed PLASTER_PARAM all others
            # are just PLASTER_.
            $variableName = if ($IsParam) { "PLASTER_PARAM_$Name" } else { "PLASTER_$Name" }

            Set-Variable -Name $variableName -Value $Value -Scope Script -WhatIf:$false

            # If the constrained runspace has been created, it needs to be disposed so that the next string
            # expansion (or condition eval) gets an updated runspace that contains this variable or its new value.
            if ($null -ne $script:ConstrainedRunspace) {
                $script:ConstrainedRunspace.Dispose()
                $script:ConstrainedRunspace = $null
            }
        }

        function ProcessParameter([ValidateNotNull()]$Node) {
            $name = $Node.name
            $type = $Node.type
            $store = $Node.store

            $condition = $Node.condition
            if ($condition -and !(EvaluateConditionAttribute $condition "'<$($Node.LocalName)>'")) {
                # Define the parameter so later conditions can use it but its value will be $null
                SetPlasterVariable -Name $name -Value $null -IsParam $true
                $PSCmdlet.WriteDebug("Skipping parameter $($Node.localName), condition evaluated to false.")
                return
            }

            $prompt = InterpolateAttributeValue $Node.prompt (GetErrorLocationParameterAttrVal $name prompt)
            $default = InterpolateAttributeValue $Node.default (GetErrorLocationParameterAttrVal $name default)

            # Check if parameter was provided via a dynamic parameter.
            if ($boundParameters.ContainsKey($name)) {
                $value = $boundParameters[$name]
            }
            else {
                # Not a dynamic parameter so prompt user for the value but first check for a stored default value.
                if ($store -and ($null -ne $defaultValueStore[$name])) {
                    $default = $defaultValueStore[$name]
                    $PSCmdlet.WriteDebug("Read default value '$default' for parameter '$name' from default value store.")

                    if (($store -eq 'encrypted') -and ($default -is [System.Security.SecureString])) {
                        try {
                            $cred = New-Object -TypeName PSCredential -ArgumentList 'jsbplh',$default
                            $default = $cred.GetNetworkCredential().Password
                            $PSCmdlet.WriteDebug("Unencrypted default value for parameter '$name'.")
                        }
                        catch [System.Exception] {
                            Write-Warning ($LocalizedData.ErrorUnencryptingSecureString_F1 -f $name)
                        }
                    }
                }

                # If the prompt message failed to evaluate or was empty, supply a diagnostic prompt message
                if (!$prompt) {
                    $prompt = $LocalizedData.MissingParameterPrompt_F1 -f $name
                }

                # Some default values might not come from the template e.g. some are harvested from .gitconfig if it exists.
                $defaultNotFromTemplate = $false

                # Now prompt user for parameter value based on the parameter type.
                switch -regex ($type) {
                    'text' {
                        # Display an appropriate "default" value in the prompt string.
                        if ($default) {
                            if ($store -eq 'encrypted') {
                                $obscuredDefault = $default -replace '(....).*', '$1****'
                                $prompt += " ($obscuredDefault)"
                            }
                            else {
                                $prompt += " ($default)"
                            }
                        }
                        # Prompt the user for text input.
                        $value = PromptForInput $prompt $default
                        $valueToStore = $value
                    }
                    'user-fullname' {
                        # If no default, try to get a name from git config.
                        if (!$default) {
                            $default = GetGitConfigValue('name')
                            $defaultNotFromTemplate = $true
                        }

                        if ($default) {
                            if ($store -eq 'encrypted') {
                                $obscuredDefault = $default -replace '(....).*', '$1****'
                                $prompt += " ($obscuredDefault)"
                            }
                            else {
                                $prompt += " ($default)"
                            }
                        }

                        # Prompt the user for text input.
                        $value = PromptForInput $prompt $default
                        $valueToStore = $value
                    }
                    'user-email' {
                        # If no default, try to get an email from git config
                        if (-not $default) {
                            $default = GetGitConfigValue('email')
                            $defaultNotFromTemplate = $true
                        }

                        if ($default) {
                            if ($store -eq 'encrypted') {
                                $obscuredDefault = $default -replace '(....).*', '$1****'
                                $prompt += " ($obscuredDefault)"
                            }
                            else {
                                $prompt += " ($default)"
                            }
                        }

                        # Prompt the user for text input.
                        $value = PromptForInput $prompt $default
                        $valueToStore = $value
                    }
                    'choice|multichoice' {
                        $choices = $Node.ChildNodes
                        $defaults = [int[]]($default -split ',')

                        # Prompt the user for choice or multichoice selection input.
                        $selections = PromptForChoice $name $choices $prompt $defaults -IsMultiChoice:($type -eq 'multichoice')
                        $value = $selections.Values
                        $OFS = ","
                        $valueToStore = "$($selections.Indices)"
                    }
                    default  { throw ($LocalizedData.UnrecognizedParameterType_F2 -f $type, $Node.LocalName) }
                }

                # If parameter specifies that user's input be stored as the default value,
                # store it to file if the value has changed.
                if ($store -and (($default -ne $valueToStore) -or $defaultNotFromTemplate)) {
                    if ($store -eq 'encrypted') {
                        $PSCmdlet.WriteDebug("Storing new, encrypted default value for parameter '$name' to default value store.")
                        $defaultValueStore[$name] = ConvertTo-SecureString -String $valueToStore -AsPlainText -Force
                    }
                    else {
                        $PSCmdlet.WriteDebug("Storing new default value '$valueToStore' for parameter '$name' to default value store.")
                        $defaultValueStore[$name] = $valueToStore
                    }

                    $flags.DefaultValueStoreDirty = $true
                }
            }

            # Make template defined parameters available as a PowerShell variable PLASTER_PARAM_<parameterName>.
            SetPlasterVariable -Name $name -Value $value -IsParam $true
        }

        function ProcessMessage([ValidateNotNull()]$Node) {
            $text = InterpolateAttributeValue $Node.InnerText '<message>'
            $nonewline = $Node.nonewline -eq 'true'

            # Eliminate whitespace before and after the text that just happens to get inserted because you want
            # the text on different lines than the start/end element tags.
            $trimmedText = $text -replace '^[ \t]*\n','' -replace '\n[ \t]*$',''

            $condition  = $Node.condition
            if ($condition -and !(EvaluateConditionAttribute $condition "'<$($Node.LocalName)>'")) {
                $debugText = $trimmedText -replace '\r|\n',' '
                $maxLength = [Math]::Min(40, $debugText.Length)
                $PSCmdlet.WriteDebug("Skipping message '$($debugText.Substring(0, $maxLength))', condition evaluated to false.")
                return
            }

            Write-Host $trimmedText -NoNewline:($nonewline -eq 'true')
        }

        function CopyModuleManifestPropertyToHashtable([PSModuleInfo]$oldModuleManifest, [hashtable]$hashtable, [string[]]$Property) {
            foreach ($prop in $Property) {
                if ($oldModuleManifest.$prop) {
                    $hashtable["$prop"] = $oldModuleManifest.$prop
                }
            }
        }

        function ProcessNewModuleManifest([ValidateNotNull()]$Node) {
            $moduleVersion = InterpolateAttributeValue $Node.moduleVersion (GetErrorLocationNewModManifestAttrVal moduleVersion)
            $rootModule = InterpolateAttributeValue $Node.rootModule (GetErrorLocationNewModManifestAttrVal rootModule)
            $author = InterpolateAttributeValue $Node.author (GetErrorLocationNewModManifestAttrVal author)
            $companyName = InterpolateAttributeValue $Node.companyName (GetErrorLocationNewModManifestAttrVal companyName)
            $description = InterpolateAttributeValue $Node.description (GetErrorLocationNewModManifestAttrVal description)
            $dstRelPath = InterpolateAttributeValue $Node.destination (GetErrorLocationNewModManifestAttrVal destination)
            $powerShellVersion = InterpolateAttributeValue $Node.powerShellVersion (GetErrorLocationNewModManifestAttrVal powerShellVersion)
            $nestedModules = InterpolateAttributeValue $Node.NestedModules (GetErrorLocationNewModManifestAttrVal NestedModules)
            $dscResourcesToExport = InterpolateAttributeValue $Node.DscResourcesToExport (GetErrorLocationNewModManifestAttrVal DscResourcesToExport)

            # We could choose to not check this if the condition eval'd to false
            # but I think it is better to let the template author know they've broken the
            # rules for any of the file directives (not just the ones they're testing/enabled).
            if ([System.IO.Path]::IsPathRooted($dstRelPath)) {
                throw ($LocalizedData.ErrorPathMustBeRelativePath_F2 -f $dstRelPath,$Node.LocalName)
            }

            $dstPath = $PSCmdlet.GetUnresolvedProviderPathFromPSPath((Join-Path $DestinationPath $dstRelPath))

            $condition  = $Node.condition
            if ($condition -and !(EvaluateConditionAttribute $condition "'<$($Node.LocalName)>'")) {
                $PSCmdlet.WriteDebug("Skipping module manifest generation for '$dstPath', condition evaluated to false.")
                return
            }

            $encoding = $Node.encoding
            if (!$encoding) {
                $encoding = $DefaultEncoding
            }

            if ($PSCmdlet.ShouldProcess($dstPath, $LocalizedData.ShouldProcessNewModuleManifest)) {
                $manifestDir = Split-Path $dstPath -Parent
                if (!(Test-Path $manifestDir)) {
                    VerifyPathIsUnderDestinationPath $manifestDir
                    Write-Verbose ($LocalizedData.NewModManifest_CreatingDir_F1 -f $manifestDir)
                    New-Item $manifestDir -ItemType Directory > $null
                }

                $newModuleManifestParams = @{}

                # If there is an existing module manifest, load it so we can reuse old values not specified by
                # template.
                if (Test-Path -LiteralPath $dstPath) {
                    $oldModuleManifest = Test-ModuleManifest -Path $dstPath -ErrorAction SilentlyContinue
                    if ($? -and $oldModuleManifest) {
                        $props = 'Guid', 'Description', 'DefaultCommandPrefix', 'RootModule', 'AliasesToExport',
                                 'CmdletsToExport', 'DscResourcesToExport', 'VariablesToExport',
                                 'FormatsToProcess', 'TypesToProcess', 'ScriptsToProcess', 'NestedModules',
                                 'PowerShellVersion'

                        CopyModuleManifestPropertyToHashtable $oldModuleManifest $newModuleManifestParams $props
                    }
                }

                if (![string]::IsNullOrWhiteSpace($moduleVersion)) {
                    $newModuleManifestParams['ModuleVersion'] = $moduleVersion
                }
                if (![string]::IsNullOrWhiteSpace($rootModule)) {
                    $newModuleManifestParams['RootModule'] = $rootModule
                }
                if (![string]::IsNullOrWhiteSpace($author)) {
                    $newModuleManifestParams['Author'] = $author
                }
                if (![string]::IsNullOrWhiteSpace($companyName)) {
                    $newModuleManifestParams['CompanyName'] = $companyName
                }
                if (![string]::IsNullOrWhiteSpace($description)) {
                    $newModuleManifestParams['Description'] = $description
                }
                if (![string]::IsNullOrWhiteSpace($powerShellVersion)) {
                    $newModuleManifestParams['PowerShellVersion'] = $powerShellVersion
                }
                if (![string]::IsNullOrWhiteSpace($nestedModules)) {
                    $newModuleManifestParams['NestedModules'] = $nestedModules
                }
                if (![string]::IsNullOrWhiteSpace($dscResourcesToExport)) {
                    $newModuleManifestParams['DscResourcesToExport'] = $dscResourcesToExport
                }

                $tempFile = $null

                try {
                    $tempFileBaseName = "moduleManifest-" + [Guid]::NewGuid()
                    $tempFile = [System.IO.Path]::GetTempPath() + "${tempFileBaseName}.psd1"
                    $PSCmdlet.WriteDebug("Created temp file for new module manifest - $tempFile")
                    $newModuleManifestParams['Path'] = $tempFile

                    # Generate manifest into a temp file.
                    New-ModuleManifest @newModuleManifestParams

                    # Typically the manifest is re-written with a new encoding (UTF8-NoBOM) because Git hates UTF-16.
                    $content = Get-Content -LiteralPath $tempFile -Raw

                    # Replace the temp filename in the generated manifest file's comment header with the actual filename.
                    $dstBaseName = [System.IO.Path]::GetFileNameWithoutExtension($dstPath)
                    $content = $content -replace "(?<=\s*#.*?)$tempFileBaseName", $dstBaseName

                    WriteContentWithEncoding -Path $tempFile -Content $content -Encoding $encoding

                    CopyFileWithConflictDetection $tempFile $dstPath

                    if ($PassThru -and ($Node.openInEditor -eq 'true')) {
                        $InvokePlasterInfo.OpenFiles += $dstPath
                    }
                }
                finally {
                    if ($tempFile -and (Test-Path $tempFile)) {
                        Remove-Item -LiteralPath $tempFile
                        $PSCmdlet.WriteDebug("Removed temp file for new module manifest - $tempFile")
                    }
                }
            }
        }

        #
        # Begin ProcessFile helper methods
        #
        function NewBackupFilename([string]$Path) {
            $dir = [System.IO.Path]::GetDirectoryName($Path)
            $filename = [System.IO.Path]::GetFileName($Path)
            $backupPath = Join-Path -Path $dir -ChildPath "${filename}.bak"
            $i = 1;
            while (Test-Path -LiteralPath $backupPath) {
                $backupPath = Join-Path -Path $dir -ChildPath "${filename}.bak$i"
                $i++
            }

            $backupPath
        }

        function AreFilesIdentical($Path1, $Path2) {
            $file1 = Get-Item -LiteralPath $Path1 -Force
            $file2 = Get-Item -LiteralPath $Path2 -Force

            if ($file1.Length -ne $file2.Length) {
                return $false
            }

            $hash1 = (Get-FileHash -LiteralPath $path1 -Algorithm SHA1).Hash
            $hash2 = (Get-FileHash -LiteralPath $path2 -Algorithm SHA1).Hash

            $hash1 -eq $hash2
        }

        function NewFileSystemCopyInfo([string]$srcPath, [string]$dstPath) {
            [PSCustomObject]@{SrcFileName=$srcPath; DstFileName=$dstPath}
        }

        function ExpandFileSourceSpec([string]$srcRelPath, [string]$dstRelPath) {
            $srcPath = Join-Path $templateAbsolutePath $srcRelPath
            $dstPath = Join-Path $destinationAbsolutePath $dstRelPath

            if ($srcRelPath.IndexOfAny([char[]]('*','?')) -lt 0) {
                # No wildcard spec in srcRelPath so return info on single file.
                # Also, if dstRelPath is empty, then use source rel path.
                if (!$dstRelPath) {
                    $dstPath = Join-Path $destinationAbsolutePath $srcRelPath
                }

                return NewFileSystemCopyInfo $srcPath $dstPath
            }

            # Prepare parameter values for call to Get-ChildItem to get list of files based on wildcard spec.
            $gciParams = @{}
            $parent = Split-Path $srcPath -Parent
            $leaf = Split-Path $srcPath -Leaf
            $gciParams['LiteralPath'] = $parent
            $gciParams['File'] = $true

            if ($leaf -eq '**') {
                $gciParams['Recurse'] = $true
            }
            else {
                if ($leaf.IndexOfAny([char[]]('*','?')) -ge 0) {
                    $gciParams['Filter'] = $leaf
                }

                $leaf = Split-Path $parent -Leaf
                if ($leaf -eq '**') {
                    $parent = Split-Path $parent -Parent
                    $gciParams['LiteralPath'] = $parent
                    $gciParams['Recurse'] = $true
                }
            }

            $srcRelRootPathLength = $gciParams['LiteralPath'].Length

            # Generate a FileCopyInfo object for every file expanded by the wildcard spec.
            $files = @(Microsoft.PowerShell.Management\Get-ChildItem @gciParams)
            foreach ($file in $files) {
                $fileSrcPath = $file.FullName
                $relPath = $fileSrcPath.Substring($srcRelRootPathLength)
                $fileDstPath = Join-Path $dstPath $relPath
                NewFileSystemCopyInfo $fileSrcPath $fileDstPath
            }

            # Copy over empty directories - if any.
            $gciParams.Remove('File')
            $gciParams['Directory'] = $true
            $dirs = @(Microsoft.PowerShell.Management\Get-ChildItem @gciParams |
                          Where-Object {$_.GetFileSystemInfos().Length -eq 0})
            foreach ($dir in $dirs) {
                $dirSrcPath = $dir.FullName
                $relPath = $dirSrcPath.Substring($srcRelRootPathLength)
                $dirDstPath = Join-Path $dstPath $relPath
                NewFileSystemCopyInfo $dirSrcPath $dirDstPath
            }
        }

        # Plaster zen for file handling.  All file related operations should use this method
        # to actually write/overwrite/modify files in the DestinationPath.  This method
        # handles detecting conflicts, gives the user a chance to determine how to handle
        # conflicts.  The user can choose to use the Force parameter to force the overwriting
        # of existing files at the destination path.
        # File processing (expanding substitution variable, modifying file contents) should always
        # be done to a temp file (be sure to always remove temp file when done).  That temp file
        # is what gets passed to this function as the $SrcPath.  This allows Plaster to alert the
        # user when the repeated application of a template will modify any existing file.
        # NOTE: Plaster keeps track of which files it has "created" (as opposed to overwritten)
        # so that any later change to that file doesn't trigger conflict handling.
        function CopyFileWithConflictDetection([string]$SrcPath, [string]$DstPath) {
            # Just double-checking that DstPath parameter is an absolute path otherwise
            # it could fail the check that the DstPath is under the overall DestinationPath.
            if (![System.IO.Path]::IsPathRooted($DstPath)) {
                $DstPath = $PSCmdlet.GetUnresolvedProviderPathFromPSPath($DstPath)
            }

            # Check if DstPath file conflicts with an existing SrcPath file.
            $operation = $LocalizedData.OpCreate
            $opmessage = (ConvertToDestinationRelativePath $DstPath)
            if (Test-Path -LiteralPath $DstPath) {
                if (AreFilesIdentical $SrcPath $DstPath) {
                    $operation = $LocalizedData.OpIdentical
                }
                elseif ($templateCreatedFiles.ContainsKey($DstPath)) {
                    # Plaster created this file previously during template invocation
                    # therefore, there is no conflict.  We're simply updating the file.
                    $operation = $LocalizedData.OpUpdate
                }
                elseif ($Force) {
                    $operation = $LocalizedData.OpForce
                }
                else  {
                    $operation = $LocalizedData.OpConflict
                }
            }

            # Copy the file to the destination
            if ($PSCmdlet.ShouldProcess($DstPath, $operation)) {
                WriteOperationStatus $operation $opmessage

                if ($operation -eq $LocalizedData.OpIdentical) {
                    # If the files are identical, no need to do anything
                    return
                }

                if (($operation -eq $LocalizedData.OpCreate) -or ($operation -eq $LocalizedData.OpUpdate)) {
                    Copy-Item -LiteralPath $SrcPath -Destination $DstPath
                    if ($PassThru) {
                        $InvokePlasterInfo.CreatedFiles += $DstPath
                    }
                    $templateCreatedFiles[$DstPath] = $null
                }
                elseif ($Force -or $PSCmdlet.ShouldContinue(($LocalizedData.OverwriteFile_F1 -f $DstPath),
                                                             $LocalizedData.FileConflict,
                                                             [ref]$fileConflictConfirmYesToAll,
                                                             [ref]$fileConflictConfirmNoToAll)) {
                    $backupFilename = NewBackupFilename $DstPath
                    Copy-Item -LiteralPath $DstPath -Destination $backupFilename
                    Copy-Item -LiteralPath $SrcPath -Destination $DstPath
                    if ($PassThru) {
                        $InvokePlasterInfo.UpdatedFiles += $DstPath
                    }
                    $templateCreatedFiles[$DstPath] = $null
                }
            }
        }

        #
        # End ProcessFile helper methods
        #

        # Processes both the <file> and <templateFile> directives.
        function ProcessFile([ValidateNotNull()]$Node) {
            $srcRelPath = InterpolateAttributeValue $Node.source (GetErrorLocationFileAttrVal $Node.localName source)
            $dstRelPath = InterpolateAttributeValue $Node.destination (GetErrorLocationFileAttrVal $Node.localName destination)

            # We could choose to not check this if the condition eval'd to false
            # but I think it is better to let the template author know they've broken the
            # rules for any of the file directives (not just the ones they're testing/enabled).
            if ([System.IO.Path]::IsPathRooted($srcRelPath)) {
                throw ($LocalizedData.ErrorPathMustBeRelativePath_F2 -f $srcRelPath,$Node.LocalName)
            }

            if ([System.IO.Path]::IsPathRooted($dstRelPath)) {
                throw ($LocalizedData.ErrorPathMustBeRelativePath_F2 -f $dstRelPath,$Node.LocalName)
            }

            $condition  = $Node.condition
            if ($condition -and !(EvaluateConditionAttribute $condition "'<$($Node.LocalName)>'")) {
                $PSCmdlet.WriteDebug("Skipping $($Node.localName) '$srcRelPath' -> '$dstRelPath', condition evaluated to false.")
                return
            }

            # Check if node is the specialized, <templateFile> node.
            # Only <templateFile> nodes expand templates and use the encoding attribute.
            $isTemplateFile = $Node.localName -eq 'templateFile'
            if ($isTemplateFile) {
                $encoding = $Node.encoding
                if (!$encoding) {
                    $encoding = $DefaultEncoding
                }
            }

            # Check if source specifies a wildcard and if so, expand the wildcard
            # and then process each file system object (file or empty directory).
            $fileSystemCopyInfoObjs = ExpandFileSourceSpec $srcRelPath $dstRelPath
            foreach ($fileSystemCopyInfo in $fileSystemCopyInfoObjs) {
                $srcPath = $fileSystemCopyInfo.SrcFileName
                $dstPath = $fileSystemCopyInfo.DstFileName

                # The file's destination path must be under the DestinationPath specified by the user.
                VerifyPathIsUnderDestinationPath $dstPath

                # Check to see if we're copying an empty dir
                if (Test-Path -LiteralPath $srcPath -PathType Container) {
                    if (!(Test-Path -LiteralPath $dstPath)) {
                        if ($PSCmdlet.ShouldProcess($parentDir, $LocalizedData.ShouldProcessCreateDir)) {
                            WriteOperationStatus $LocalizedData.OpCreate `
                                ($dstRelPath.TrimEnd(([char]'\'),([char]'/')) + [System.IO.Path]::DirectorySeparatorChar)
                            New-Item -Path $dstPath -ItemType Directory > $null
                        }
                    }

                    continue
                }

                # If the file's parent dir doesn't exist, create it.
                $parentDir = Split-Path $dstPath -Parent
                if (!(Test-Path -LiteralPath $parentDir)) {
                    if ($PSCmdlet.ShouldProcess($parentDir, $LocalizedData.ShouldProcessCreateDir)) {
                        New-Item -Path $parentDir -ItemType Directory > $null
                    }
                }

                $tempFile = $null

                try {
                    # If processing a <templateFile>, copy to a temp file to expand the template file,
                    # then apply the normal file conflict detection/resolution handling.
                    $target = $LocalizedData.TempFileTarget_F1 -f (ConvertToDestinationRelativePath $dstPath)
                    if ($isTemplateFile -and $PSCmdlet.ShouldProcess($target, $LocalizedData.ShouldProcessExpandTemplate)) {
                        $content = Get-Content -LiteralPath $srcPath -Raw

                        # Eval script expression delimiters
                        if ($content -and ($content.Count -gt 0)) {
                            $newContent = [regex]::Replace($content, '(<%=)(.*?)(%>)', {
                                param($match)
                                $expr = $match.groups[2].value
                                $res = EvaluateExpression $expr "templateFile '$srcRelPath'"
                                $PSCmdlet.WriteDebug("Replacing '$expr' with '$res' in contents of template file '$srcPath'")
                                $res
                            },  @('IgnoreCase'))

                            # Eval script block delimiters
                            $newContent = [regex]::Replace($newContent, '(^<%)(.*?)(^%>)', {
                                param($match)
                                $expr = $match.groups[2].value
                                $res = EvaluateScript $expr "templateFile '$srcRelPath'"
                                $res = $res -join [System.Environment]::NewLine
                                $PSCmdlet.WriteDebug("Replacing '$expr' with '$res' in contents of template file '$srcPath'")
                                $res
                            },  @('IgnoreCase', 'SingleLine', 'MultiLine'))

                            $srcPath = $tempFile = [System.IO.Path]::GetTempFileName()
                            $PSCmdlet.WriteDebug("Created temp file for expanded templateFile - $tempFile")

                            WriteContentWithEncoding -Path $tempFile -Content $newContent -Encoding $encoding
                        }
                        else {
                            $PSCmdlet.WriteDebug("Skipping template file expansion for $($Node.localName) '$srcPath', file is empty.")
                        }
                    }

                    CopyFileWithConflictDetection $srcPath $dstPath

                    if ($PassThru -and ($Node.openInEditor -eq 'true')) {
                        $InvokePlasterInfo.OpenFiles += $dstPath
                    }
                }
                finally {
                    if ($tempFile -and (Test-Path $tempFile)) {
                        Remove-Item -LiteralPath $tempFile
                        $PSCmdlet.WriteDebug("Removed temp file for expanded templateFile - $tempFile")
                    }
                }
            }
        }

        function ProcessModifyFile([ValidateNotNull()]$Node) {
            $path = InterpolateAttributeValue $Node.path (GetErrorLocationModifyAttrVal path)

            # We could choose to not check this if the condition eval'd to false
            # but I think it is better to let the template author know they've broken the
            # rules for any of the file directives (not just the ones they're testing/enabled).
            if ([System.IO.Path]::IsPathRooted($path)) {
                throw ($LocalizedData.ErrorPathMustBeRelativePath_F2 -f $path,$Node.LocalName)
            }

            $filePath = $PSCmdlet.GetUnresolvedProviderPathFromPSPath((Join-Path $DestinationPath $path))

            # The file's path must be under the DestinationPath specified by the user.
            VerifyPathIsUnderDestinationPath $filePath

            $condition = $Node.condition
            if ($condition -and !(EvaluateConditionAttribute $condition "'<$($Node.LocalName)>'")) {
                $PSCmdlet.WriteDebug("Skipping $($Node.LocalName) of '$filePath', condition evaluated to false.")
                return
            }

            $fileContent = [string]::Empty
            if (Test-Path -LiteralPath $filePath) {
                $fileContent = Get-Content -LiteralPath $filePath -Raw
            }

            # Set a Plaster (non-parameter) variable in this and the constrained runspace.
            SetPlasterVariable -Name FileContent -Value $fileContent -IsParam $false

            $encoding = $Node.encoding
            if (!$encoding) {
                $encoding = $DefaultEncoding
            }

            # If processing a <modify> directive, write the modified contents to a temp file,
            # then apply the normal file conflict detection/resolution handling.
            $target = $LocalizedData.TempFileTarget_F1 -f $filePath
            if ($PSCmdlet.ShouldProcess($target, $LocalizedData.OpModify)) {
                WriteOperationStatus $LocalizedData.OpModify ($LocalizedData.TempFileOperation_F1 -f (ConvertToDestinationRelativePath $filePath))

                $modified = $false

                foreach ($childNode in $Node.ChildNodes) {
                    if ($childNode -isnot [System.Xml.XmlElement]) { continue }

                    switch ($childNode.LocalName) {
                        'replace' {
                            $condition  = $childNode.condition
                            if ($condition -and !(EvaluateConditionAttribute $condition "'<$($Node.LocalName)><$($childNode.LocalName)>'")) {
                                $PSCmdlet.WriteDebug("Skipping $($Node.LocalName) $($childNode.LocalName) of '$filePath', condition evaluated to false.")
                                continue
                            }

                            if ($childNode.original -is [string]) {
                                $original = $childNode.original
                            }
                            else {
                                $original = $childNode.original.InnerText
                            }

                            if ($childNode.original.expand -eq 'true') {
                                $original = InterpolateAttributeValue $original (GetErrorLocationModifyAttrVal original)
                            }

                            if ($childNode.substitute -is [string]) {
                                $substitute = $childNode.substitute
                            }
                            else {
                                $substitute = $childNode.substitute.InnerText
                            }

                            if ($childNode.substitute.expand -eq 'true') {
                                $substitute = InterpolateAttributeValue $substitute (GetErrorLocationModifyAttrVal substitute)
                            }

                            $fileContent = $fileContent -replace $original,$substitute

                            # Update the Plaster (non-parameter) variable's value in this and the constrained runspace.
                            SetPlasterVariable -Name FileContent -Value $fileContent -IsParam $false

                            $modified = $true
                        }
                        default { throw ($LocalizedData.UnrecognizedContentElement_F1 -f $childNode.LocalName) }
                    }
                }

                $tempFile = $null

                try {
                    # We could use CopyFileWithConflictDetection to handle the "identical" (not modified) case
                    # but if nothing was changed, I'd prefer not to generate a temp file, copy the unmodified contents
                    # into that temp file with hopefully the right encoding and then potentially overwrite the original file
                    # (different encoding will make the files look different) with the same contents but different encoding.
                    # If the intent of the <modify> was simply to change an existing file's encoding then the directive will
                    # need to make a whitespace change to the file.
                    if ($modified) {
                        $tempFile = [System.IO.Path]::GetTempFileName()
                        $PSCmdlet.WriteDebug("Created temp file for modified file - $tempFile")

                        WriteContentWithEncoding -Path $tempFile -Content $PLASTER_FileContent -Encoding $encoding
                        CopyFileWithConflictDetection $tempFile $filePath

                        if ($PassThru -and ($Node.openInEditor -eq 'true')) {
                            $InvokePlasterInfo.OpenFiles += $filePath
                        }
                    }
                    else {
                        WriteOperationStatus $LocalizedData.OpIdentical (ConvertToDestinationRelativePath $filePath)
                    }
                }
                finally {
                    if ($tempFile -and (Test-Path $tempFile)) {
                        Remove-Item -LiteralPath $tempFile
                        $PSCmdlet.WriteDebug("Removed temp file for modified file - $tempFile")
                    }
                }
            }
        }

        function ProcessRequireModule([ValidateNotNull()]$Node) {
            $name = $Node.name

            $condition = $Node.condition
            if ($condition -and !(EvaluateConditionAttribute $condition "'<$($Node.LocalName)>'")) {
                $PSCmdlet.WriteDebug("Skipping $($Node.localName) for module '$name', condition evaluated to false.")
                return
            }

            $message = InterpolateAttributeValue $Node.message (GetErrorLocationRequireModuleAttrVal $name message)
            $minimumVersion = $Node.minimumVersion
            $maximumVersion = $Node.maximumVersion
            $requiredVersion = $Node.requiredVersion

            $getModuleParams = @{
                ListAvailable = $true
                ErrorAction = 'SilentlyContinue'
            }

            # Configure $getModuleParams with correct parameters based on parameterset to be used.
            # Also construct an array of version strings that can be displayed to the user.
            $versionInfo = @()
            if ($requiredVersion) {
                $getModuleParams["FullyQualifiedName"] = @{ModuleName = $name; RequiredVersion = $requiredVersion}
                $versionInfo += $LocalizedData.RequireModuleRequiredVersion_F1 -f $requiredVersion
            }
            elseif ($minimumVersion -or $maximumVersion) {
                $getModuleParams["FullyQualifiedName"] = @{ModuleName = $name}

                if ($minimumVersion) {
                    $getModuleParams.FullyQualifiedName["ModuleVersion"] = $minimumVersion
                    $versionInfo += $LocalizedData.RequireModuleMinVersion_F1 -f $minimumVersion
                }
                if ($maximumVersion) {
                    $getModuleParams.FullyQualifiedName["MaximumVersion"] = $maximumVersion
                    $versionInfo += $LocalizedData.RequireModuleMaxVersion_F1 -f $maximumVersion
                }
            }
            else {
                $getModuleParams["Name"] = $name
            }

            # Flatten array of version strings into a single string.
            $versionRequirements = ""
            if ($versionInfo.Length -gt 0) {
                $OFS = ", "
                $versionRequirements = " ($versionInfo)"
            }

            # PowerShell v3 Get-Module command does not have the FullyQualifiedName parameter.
            if ($PSVersionTable.PSVersion.Major -lt 4) {
                $getModuleParams.Remove("FullyQualifiedName")
                $getModuleParams["Name"] = $name
            }

            $module = Get-Module @getModuleParams

            $moduleDesc = if ($versionRequirements) { "${name}:$versionRequirements" } else { $name }

            if ($null -eq $module) {
                WriteOperationStatus $LocalizedData.OpMissing ($LocalizedData.RequireModuleMissing_F2 -f $name,$versionRequirements)
                if ($message) {
                    WriteOperationAdditionalStatus $message
                }
                if ($PassThru) {
                    $InvokePlasterInfo.MissingModules += $moduleDesc
                }
            }
            else {
                if ($PSVersionTable.PSVersion.Major -gt 3) {
                    WriteOperationStatus $LocalizedData.OpVerify ($LocalizedData.RequireModuleVerified_F2 -f $name,$versionRequirements)
                }
                else {
                    # On V3, we have to the version matching with the results that Get-Module return.
                    $installedVersion = $module | Sort-Object Version -Descending | Select-Object -First 1 | Foreach-Object Version
                    if ($installedVersion.Build -eq -1) {
                        $installedVersion = [System.Version]"${installedVersion}.0.0"
                    }
                    elseif ($installedVersion.Revision -eq -1) {
                        $installedVersion = [System.Version]"${installedVersion}.0"
                    }

                    if (($requiredVersion -and ($installedVersion -ne $requiredVersion)) -or
                        ($minimumVersion -and ($installedVersion -lt $minimumVersion)) -or
                        ($maximumVersion -and ($installedVersion -gt $maximumVersion))) {

                        WriteOperationStatus $LocalizedData.OpMissing ($LocalizedData.RequireModuleMissing_F2 -f $name,$versionRequirements)
                        if ($PassThru) {
                            $InvokePlasterInfo.MissingModules += $moduleDesc
                        }
                    }
                    else {
                        WriteOperationStatus $LocalizedData.OpVerify ($LocalizedData.RequireModuleVerified_F2 -f $name,$versionRequirements)
                    }
                }
            }
        }
    }

    end {
        try {
            # Process parameters
            foreach ($node in $manifest.plasterManifest.parameters.ChildNodes) {
                if ($node -isnot [System.Xml.XmlElement]) { continue }
                switch ($node.LocalName) {
                    'parameter'  { ProcessParameter $node }
                    default      { throw ($LocalizedData.UnrecognizedParametersElement_F1 -f $node.LocalName) }
                }
            }

            # Outputs the processed template parameters to the debug stream
            $parameters = Get-Variable -Name PLASTER_* | Out-String
            $PSCmdlet.WriteDebug("Parameter values are:`n$($parameters -split "`n")")

            # Stores any updated default values back to the store file.
            if ($flags.DefaultValueStoreDirty) {
                $directory = Split-Path $defaultValueStorePath -Parent
                if (!(Test-Path $directory)) {
                    $PSCmdlet.WriteDebug("Creating directory for template's DefaultValueStore '$directory'.")
                    New-Item $directory -ItemType Directory > $null
                }

                $PSCmdlet.WriteDebug("DefaultValueStore is dirty, saving updated values to '$defaultValueStorePath'.")
                $defaultValueStore | Export-Clixml -LiteralPath $defaultValueStorePath
            }

            # Output the DestinationPath
            $LocalizedData.DestPath_F1 -f $destinationAbsolutePath

            # Process content
            foreach ($node in $manifest.plasterManifest.content.ChildNodes) {
                if ($node -isnot [System.Xml.XmlElement]) { continue }

                switch -Regex ($node.LocalName) {
                    'file|templateFile' { ProcessFile $node; break }
                    'message'           { ProcessMessage $node; break }
                    'modify'            { ProcessModifyFile $node; break }
                    'newModuleManifest' { ProcessNewModuleManifest $node; break }
                    'requireModule'     { ProcessRequireModule $node; break }
                    default             { throw ($LocalizedData.UnrecognizedContentElement_F1 -f $node.LocalName) }
                }
            }

            if ($PassThru) {
                $InvokePlasterInfo.Success = $true
                $InvokePlasterInfo
            }
        }
        finally {
            # Dispose of the ConstrainedRunspace.
            if ($constrainedRunspace) {
                $constrainedRunspace.Dispose()
                $constrainedRunspace = $null
            }
        }
    }
}

###############################################################################
# Helper functions
###############################################################################

function InitializePredefinedVariables([string]$TemplatePath, [string]$DestPath) {
    # Always set these variables, even if the command has been run with -WhatIf
    $WhatIfPreference = $false

    Set-Variable -Name PLASTER_TemplatePath -Value $TemplatePath.TrimEnd('\','/') -Scope Script

    $destName = Split-Path -Path $DestPath -Leaf
    Set-Variable -Name PLASTER_DestinationPath -Value $DestPath.TrimEnd('\','/') -Scope Script
    Set-Variable -Name PLASTER_DestinationName -Value $destName -Scope Script
    Set-Variable -Name PLASTER_DirSepChar      -Value ([System.IO.Path]::DirectorySeparatorChar) -Scope Script
    Set-Variable -Name PLASTER_HostName        -Value $Host.Name -Scope Script
    Set-Variable -Name PLASTER_Version         -Value $MyInvocation.MyCommand.Module.Version -Scope Script

    Set-Variable -Name PLASTER_Guid1 -Value ([Guid]::NewGuid()) -Scope Script
    Set-Variable -Name PLASTER_Guid2 -Value ([Guid]::NewGuid()) -Scope Script
    Set-Variable -Name PLASTER_Guid3 -Value ([Guid]::NewGuid()) -Scope Script
    Set-Variable -Name PLASTER_Guid4 -Value ([Guid]::NewGuid()) -Scope Script
    Set-Variable -Name PLASTER_Guid5 -Value ([Guid]::NewGuid()) -Scope Script

    $now = [DateTime]::Now
    Set-Variable -Name PLASTER_Date -Value ($now.ToShortDateString()) -Scope Script
    Set-Variable -Name PLASTER_Time -Value ($now.ToShortTimeString()) -Scope Script
    Set-Variable -Name PLASTER_Year -Value ($now.Year) -Scope Script
}

function GetPlasterManifestPathForCulture([string]$TemplatePath, [ValidateNotNull()][CultureInfo]$Culture) {
    if (![System.IO.Path]::IsPathRooted($TemplatePath)) {
        $TemplatePath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($TemplatePath)
    }

    # Check for culture-locale first.
    $plasterManifestBasename = "plasterManifest"
    $plasterManifestFilename = "${plasterManifestBasename}_$($culture.Name).xml"
    $plasterManifestPath = Join-Path $TemplatePath $plasterManifestFilename
    if (Test-Path $plasterManifestPath) {
        return $plasterManifestPath
    }

    # Check for culture next.
    if ($culture.Parent.Name) {
        $plasterManifestFilename = "${plasterManifestBasename}_$($culture.Parent.Name).xml"
        $plasterManifestPath = Join-Path $TemplatePath $plasterManifestFilename
        if (Test-Path $plasterManifestPath) {
            return $plasterManifestPath
        }
    }

    # Fallback to invariant culture manifest.
    $plasterManifestPath = Join-Path $TemplatePath "${plasterManifestBasename}.xml"
    if (Test-Path $plasterManifestPath) {
        return $plasterManifestPath
    }

    $null
}

# SIG # Begin signature block
# MIIr5AYJKoZIhvcNAQcCoIIr1TCCK9ECAQExDzANBglghkgBZQMEAgEFADB5Bgor
# BgEEAYI3AgEEoGswaTA0BgorBgEEAYI3AgEeMCYCAwEAAAQQH8w7YFlLCE63JNLG
# KX7zUQIBAAIBAAIBAAIBAAIBADAxMA0GCWCGSAFlAwQCAQUABCA9aCtikZ4a1Wkm
# EjR0J6rWIL5qj8eJYdx/WsTesjruQaCCEW4wggh+MIIHZqADAgECAhM2AAAB33OB
# lxa+Mv0NAAIAAAHfMA0GCSqGSIb3DQEBCwUAMEExEzARBgoJkiaJk/IsZAEZFgNH
# QkwxEzARBgoJkiaJk/IsZAEZFgNBTUUxFTATBgNVBAMTDEFNRSBDUyBDQSAwMTAe
# Fw0yNDAxMjAwMTMzNDRaFw0yNTAxMTkwMTMzNDRaMCQxIjAgBgNVBAMTGU1pY3Jv
# c29mdCBBenVyZSBDb2RlIFNpZ24wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
# AoIBAQDVucAmkbIWpspYysyydQyyRh2L8q5igYFcy2vDk8xGvVMRBhxwbOsJIEd0
# wY8N7WU/xgkYMnSsM4vmc2B49DGdrAjSJqbsx0zf+DLFjrBITUecdRhlq0VKGX8U
# bVOkg0aIfFNLRs4DSrCZYh26zyB8qkL/jUmB7DhcBEhhgOlXRQ4LHnUv7qf+iXqD
# uwFz9tUTAh8JGsgLRBK0oSsRfUB+FJF2KyUxzmeFXJKiEynsWz4kqoM91ag1Yw0U
# 8d0e+RgAKi3Ft1cXA+3qKM6I1H11e/NdIjh7oThvrBtfEngwlwbTF3KZOHdhLBFZ
# 18U4v8VeTlb4r94346CY2+SKnQa7AgMBAAGjggWKMIIFhjApBgkrBgEEAYI3FQoE
# HDAaMAwGCisGAQQBgjdbAQEwCgYIKwYBBQUHAwMwPQYJKwYBBAGCNxUHBDAwLgYm
# KwYBBAGCNxUIhpDjDYTVtHiE8Ys+hZvdFs6dEoFgg93NZoaUjDICAWQCAQ4wggJ2
# BggrBgEFBQcBAQSCAmgwggJkMGIGCCsGAQUFBzAChlZodHRwOi8vY3JsLm1pY3Jv
# c29mdC5jb20vcGtpaW5mcmEvQ2VydHMvQlkyUEtJQ1NDQTAxLkFNRS5HQkxfQU1F
# JTIwQ1MlMjBDQSUyMDAxKDIpLmNydDBSBggrBgEFBQcwAoZGaHR0cDovL2NybDEu
# YW1lLmdibC9haWEvQlkyUEtJQ1NDQTAxLkFNRS5HQkxfQU1FJTIwQ1MlMjBDQSUy
# MDAxKDIpLmNydDBSBggrBgEFBQcwAoZGaHR0cDovL2NybDIuYW1lLmdibC9haWEv
# QlkyUEtJQ1NDQTAxLkFNRS5HQkxfQU1FJTIwQ1MlMjBDQSUyMDAxKDIpLmNydDBS
# BggrBgEFBQcwAoZGaHR0cDovL2NybDMuYW1lLmdibC9haWEvQlkyUEtJQ1NDQTAx
# LkFNRS5HQkxfQU1FJTIwQ1MlMjBDQSUyMDAxKDIpLmNydDBSBggrBgEFBQcwAoZG
# aHR0cDovL2NybDQuYW1lLmdibC9haWEvQlkyUEtJQ1NDQTAxLkFNRS5HQkxfQU1F
# JTIwQ1MlMjBDQSUyMDAxKDIpLmNydDCBrQYIKwYBBQUHMAKGgaBsZGFwOi8vL0NO
# PUFNRSUyMENTJTIwQ0ElMjAwMSxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIwU2Vy
# dmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUsREM9R0JM
# P2NBQ2VydGlmaWNhdGU/YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
# aG9yaXR5MB0GA1UdDgQWBBSO7i0qme7tjtjFjyuIjlmGM6cbCTAOBgNVHQ8BAf8E
# BAMCB4AwRQYDVR0RBD4wPKQ6MDgxHjAcBgNVBAsTFU1pY3Jvc29mdCBDb3Jwb3Jh
# dGlvbjEWMBQGA1UEBRMNMjM2MTY3KzUwMTk3MDCCAeYGA1UdHwSCAd0wggHZMIIB
# 1aCCAdGgggHNhj9odHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpaW5mcmEvQ1JM
# L0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9jcmwxLmFtZS5nYmwv
# Y3JsL0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9jcmwyLmFtZS5n
# YmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9jcmwzLmFt
# ZS5nYmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcmyGMWh0dHA6Ly9jcmw0
# LmFtZS5nYmwvY3JsL0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcmyGgb1sZGFwOi8v
# L0NOPUFNRSUyMENTJTIwQ0ElMjAwMSgyKSxDTj1CWTJQS0lDU0NBMDEsQ049Q0RQ
# LENOPVB1YmxpYyUyMEtleSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
# Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jZXJ0aWZpY2F0ZVJldm9jYXRpb25MaXN0
# P2Jhc2U/b2JqZWN0Q2xhc3M9Y1JMRGlzdHJpYnV0aW9uUG9pbnQwHwYDVR0jBBgw
# FoAUllGE4Gtve/7YBqvD8oXmKa5q+dQwHwYDVR0lBBgwFgYKKwYBBAGCN1sBAQYI
# KwYBBQUHAwMwDQYJKoZIhvcNAQELBQADggEBAJe/YXNSCoXitLf/X5pfJZpep3cs
# jdqmBgg+8Kr++8XMjWwdm4tiLasJMUPCgmp5NYn3wC4GefGYwfF7Xm2FMSR2i6QU
# HjigGu6BjdWQh4EwGaNqXLkXlUM7Ww2Z0KrRtpCL16DCOTNZuCFPAytSHFskPWrr
# 6q3EBuiM6P5VLgFSKiAxcunldJorbrBrvZSZib1OINzFGAQszUR0ytovW6FOp+uo
# VhiQCqnOheC1ppnZPss7vnXoogyO0xgSW40bRlltGfwnlOd3IZ/43ZOj5XeeShg5
# 2SzVEiyYrZjD17MSNzQM1JKI07+mtAC7D+eZ/+g2pM/91oHcrDq9Nq4QrS0wggjo
# MIIG0KADAgECAhMfAAAAUeqP9pxzDKg7AAAAAABRMA0GCSqGSIb3DQEBCwUAMDwx
# EzARBgoJkiaJk/IsZAEZFgNHQkwxEzARBgoJkiaJk/IsZAEZFgNBTUUxEDAOBgNV
# BAMTB2FtZXJvb3QwHhcNMjEwNTIxMTg0NDE0WhcNMjYwNTIxMTg1NDE0WjBBMRMw
# EQYKCZImiZPyLGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUwEwYDVQQD
# EwxBTUUgQ1MgQ0EgMDEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDJ
# mlIJfQGejVbXKpcyFPoFSUllalrinfEV6JMc7i+bZDoL9rNHnHDGfJgeuRIYO1LY
# /1f4oMTrhXbSaYRCS5vGc8145WcTZG908bGDCWr4GFLc411WxA+Pv2rteAcz0eHM
# H36qTQ8L0o3XOb2n+x7KJFLokXV1s6pF/WlSXsUBXGaCIIWBXyEchv+sM9eKDsUO
# LdLTITHYJQNWkiryMSEbxqdQUTVZjEz6eLRLkofDAo8pXirIYOgM770CYOiZrcKH
# K7lYOVblx22pdNawY8Te6a2dfoCaWV1QUuazg5VHiC4p/6fksgEILptOKhx9c+ia
# piNhMrHsAYx9pUtppeaFAgMBAAGjggTcMIIE2DASBgkrBgEEAYI3FQEEBQIDAgAC
# MCMGCSsGAQQBgjcVAgQWBBQSaCRCIUfL1Gu+Mc8gpMALI38/RzAdBgNVHQ4EFgQU
# llGE4Gtve/7YBqvD8oXmKa5q+dQwggEEBgNVHSUEgfwwgfkGBysGAQUCAwUGCCsG
# AQUFBwMBBggrBgEFBQcDAgYKKwYBBAGCNxQCAQYJKwYBBAGCNxUGBgorBgEEAYI3
# CgMMBgkrBgEEAYI3FQYGCCsGAQUFBwMJBggrBgEFBQgCAgYKKwYBBAGCN0ABAQYL
# KwYBBAGCNwoDBAEGCisGAQQBgjcKAwQGCSsGAQQBgjcVBQYKKwYBBAGCNxQCAgYK
# KwYBBAGCNxQCAwYIKwYBBQUHAwMGCisGAQQBgjdbAQEGCisGAQQBgjdbAgEGCisG
# AQQBgjdbAwEGCisGAQQBgjdbBQEGCisGAQQBgjdbBAEGCisGAQQBgjdbBAIwGQYJ
# KwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0PBAQDAgGGMBIGA1UdEwEB/wQI
# MAYBAf8CAQAwHwYDVR0jBBgwFoAUKV5RXmSuNLnrrJwNp4x1AdEJCygwggFoBgNV
# HR8EggFfMIIBWzCCAVegggFToIIBT4YxaHR0cDovL2NybC5taWNyb3NvZnQuY29t
# L3BraWluZnJhL2NybC9hbWVyb290LmNybIYjaHR0cDovL2NybDIuYW1lLmdibC9j
# cmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwzLmFtZS5nYmwvY3JsL2FtZXJvb3Qu
# Y3JshiNodHRwOi8vY3JsMS5hbWUuZ2JsL2NybC9hbWVyb290LmNybIaBqmxkYXA6
# Ly8vQ049YW1lcm9vdCxDTj1BTUVSb290LENOPUNEUCxDTj1QdWJsaWMlMjBLZXkl
# MjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9uLERDPUFNRSxE
# Qz1HQkw/Y2VydGlmaWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENsYXNz
# PWNSTERpc3RyaWJ1dGlvblBvaW50MIIBqwYIKwYBBQUHAQEEggGdMIIBmTBHBggr
# BgEFBQcwAoY7aHR0cDovL2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL2NlcnRz
# L0FNRVJvb3RfYW1lcm9vdC5jcnQwNwYIKwYBBQUHMAKGK2h0dHA6Ly9jcmwyLmFt
# ZS5nYmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5jcnQwNwYIKwYBBQUHMAKGK2h0dHA6
# Ly9jcmwzLmFtZS5nYmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5jcnQwNwYIKwYBBQUH
# MAKGK2h0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0FNRVJvb3RfYW1lcm9vdC5jcnQw
# gaIGCCsGAQUFBzAChoGVbGRhcDovLy9DTj1hbWVyb290LENOPUFJQSxDTj1QdWJs
# aWMlMjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1Db25maWd1cmF0aW9u
# LERDPUFNRSxEQz1HQkw/Y0FDZXJ0aWZpY2F0ZT9iYXNlP29iamVjdENsYXNzPWNl
# cnRpZmljYXRpb25BdXRob3JpdHkwDQYJKoZIhvcNAQELBQADggIBAFAQI7dPD+jf
# XtGt3vJp2pyzA/HUu8hjKaRpM3opya5G3ocprRd7vdTHb8BDfRN+AD0YEmeDB5HK
# QoG6xHPI5TXuIi5sm/LeADbV3C2q0HQOygS/VT+m1W7a/752hMIn+L4ZuyxVeSBp
# fwf7oQ4YSZPh6+ngZvBHgfBaVz4O9/wcfw91QDZnTgK9zAh9yRKKls2bziPEnxeO
# ZMVNaxyV0v152PY2xjqIafIkUjK6vY9LtVFjJXenVUAmn3WCPWNFC1YTIIHw/mD2
# cTfPy7QA1pT+GPARAKt0bKtq9aCd/Ym0b5tPbpgCiRtzyb7fbNS1dE740re0COE6
# 7YV2wbeo2sXixzvLftH8L7s9xv9wV+G22qyKt6lmKLjFK1yMw4Ni5fMabcgmzRvS
# jAcbqgp3tk4a8emaaH0rz8MuuIP+yrxtREPXSqL/C5bzMzsikuDW9xH10graZzSm
# PjilzpRfRdu20/9UQmC7eVPZ4j1WNa1oqPHfzET3ChIzJ6Q9G3NPCB+7KwX0OQmK
# yv7IDimj8U/GlsHD1z+EF/fYMf8YXG15LamaOAohsw/ywO6SYSreVW+5Y0mzJutn
# BC9Cm9ozj1+/4kqksrlhZgR/CSxhFH3BTweH8gP2FEISRtShDZbuYymynY1un+Ry
# fiK9+iVTLdD1h/SxyxDpZMtimb4CgJQlMYIZzDCCGcgCAQEwWDBBMRMwEQYKCZIm
# iZPyLGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUwEwYDVQQDEwxBTUUg
# Q1MgQ0EgMDECEzYAAAHfc4GXFr4y/Q0AAgAAAd8wDQYJYIZIAWUDBAIBBQCgga4w
# GQYJKoZIhvcNAQkDMQwGCisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisG
# AQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIKHC77Kk6nbldtcG6S/vLG6QcH6XyHBc
# yq1uMRLfD72KMEIGCisGAQQBgjcCAQwxNDAyoBSAEgBNAGkAYwByAG8AcwBvAGYA
# dKEagBhodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEBBQAEggEA
# blx9jItEWECRpb3oqow1qGoPFidaRLhxEmmGVyDO/5LJVwpKhObDwPIB9M5C9xQ1
# TYmFKyawXgMaLy8i0EpCqIu/Ne+BVnYvgRzJ88IkVy5HFq4qH4L4s7GIz5R7PGnK
# lEyFfTi4L5aJiHKqI1sOEuLNEwhpK4DdKNDY9V+B8FaFXsHS8Jr0Wt6ZemLy1O1Q
# LR8iE1qadEYc8uIryvoyWJBt8kEFdMVy18sQUu4+LUvr1G+tZCJPsJEBCtvFFVJm
# 8+6nammxjceeoRowCsHPVQ/26E628s+q8OpTcf0kVutYl34iLC8Yz5EzG1X74D4e
# aQbx/zvc/Kzk3TR+mMnUxqGCF5QwgheQBgorBgEEAYI3AwMBMYIXgDCCF3wGCSqG
# SIb3DQEHAqCCF20wghdpAgEDMQ8wDQYJYIZIAWUDBAIBBQAwggFSBgsqhkiG9w0B
# CRABBKCCAUEEggE9MIIBOQIBAQYKKwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUA
# BCAvjs2XqIPamHbNuLHqlK/3dVEarWkiMsmHZHH/6slnVwIGZfLh3QsLGBMyMDI0
# MDQwMzIxMzQwNS40NDRaMASAAgH0oIHRpIHOMIHLMQswCQYDVQQGEwJVUzETMBEG
# A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
# cm9zb2Z0IENvcnBvcmF0aW9uMSUwIwYDVQQLExxNaWNyb3NvZnQgQW1lcmljYSBP
# cGVyYXRpb25zMScwJQYDVQQLEx5uU2hpZWxkIFRTUyBFU046QTQwMC0wNUUwLUQ5
# NDcxJTAjBgNVBAMTHE1pY3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2WgghHqMIIH
# IDCCBQigAwIBAgITMwAAAezgK6SC0JFSgAABAAAB7DANBgkqhkiG9w0BAQsFADB8
# MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
# bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1N
# aWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDAeFw0yMzEyMDYxODQ1MzhaFw0y
# NTAzMDUxODQ1MzhaMIHLMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
# bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
# aW9uMSUwIwYDVQQLExxNaWNyb3NvZnQgQW1lcmljYSBPcGVyYXRpb25zMScwJQYD
# VQQLEx5uU2hpZWxkIFRTUyBFU046QTQwMC0wNUUwLUQ5NDcxJTAjBgNVBAMTHE1p
# Y3Jvc29mdCBUaW1lLVN0YW1wIFNlcnZpY2UwggIiMA0GCSqGSIb3DQEBAQUAA4IC
# DwAwggIKAoICAQCwR/RuCTbgxUWVm/Vdul22uwdEZm0IoAFs6oIr39VK/ItP80cn
# +8TmtP67iabB4DmAKJ9GH6dJGhEPJpY4vTKRSOwrRNxVIKoPPeUF3f4VyHEco/u1
# QUadlwD132NuZCxbnh6Mi2lLG7pDvszZqMG7S3MCi2bk2nvtGKdeAIL+H77gL4r0
# 1TSWb7rsE2Jb1P/N6Y/W1CqDi1/Ib3/zRqWXt4zxvdIGcPjS4ZKyQEF3SEZAq4XI
# jiyowPHaqNbZxdf2kWO/ajdfTU85t934CXAinb0o+uQ9KtaKNLVVcNf5QpS4f6/M
# sXOvIFuCYMRdKDjpmvowAeL+1j27bCxCBpDQHrWkfPzZp/X+bt9C7E5hPP6HVRoq
# BYR7u1gUf5GEq+5r1HA0jajn0Q6OvfYckE0HdOv6KWa+sAmJG7PDvTZae77homzx
# 6IPqggVpNZuCk79SfVmnKu9F58UAnU58TqDHEzGsQnMUQKstS3zjn6SU0NLEFNCe
# tluaKkqWDRVLEWbu329IEh3tqXPXfy6Rh/wCbwe9SCJIoqtBexBrPyQYA2Xaz1fK
# 9ysTsx0kA9V1JwVV44Ia9c+MwtAR6sqKdAgRo/bs/Xu8gua8LDe6KWyu974e9mGW
# 7ZO8narDFrAT1EXGHDueygSKvv2K7wB8lAgMGJj73CQvr+jqoWwx6XdyeQIDAQAB
# o4IBSTCCAUUwHQYDVR0OBBYEFPRa0Edk/iv1whYQsV8UgEf4TIWGMB8GA1UdIwQY
# MBaAFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMF8GA1UdHwRYMFYwVKBSoFCGTmh0dHA6
# Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY3JsL01pY3Jvc29mdCUyMFRpbWUt
# U3RhbXAlMjBQQ0ElMjAyMDEwKDEpLmNybDBsBggrBgEFBQcBAQRgMF4wXAYIKwYB
# BQUHMAKGUGh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWlj
# cm9zb2Z0JTIwVGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSkuY3J0MAwGA1UdEwEB
# /wQCMAAwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/BAQDAgeAMA0G
# CSqGSIb3DQEBCwUAA4ICAQCSvMSkMSrvjlDPag8ARb0OFrAQtSLMDpN0UY3FjvPh
# wGKDrrixmnuMfjrmVjRq1u8IhkDvGF/bffbFTr+IAnDSeg8TB9zfG/4ybknuopkl
# beGjbt7MLxpfholCERyEc20PMZKJz9SvzfuO1n5xrrLOL8m0nmv5kBcv+y1AXJ5Q
# cLicmhe2Ip3/D67Ed6oPqQI03mDjYaS1NQhBNtu57wPKXZ1EoNToBk8bA6839w11
# 9b+a9WToqIskdRGoP5xjDIv+mc0vBHhZGkJVvfIhm4Ap8zptC7xVAly0jeOv5dUG
# MCYgZjvoTmgd45bqAwundmPlGur7eleWYedLQf7s3L5+qfaY/xEh/9uo17SnM/gH
# VSGAzvnreGhOrB2LtdKoVSe5LbYpihXctDe76iYtL+mhxXPEpzda3bJlhPTOQ3KO
# EZApVERBo5yltWjPCWlXxyCpl5jj9nY0nfd071bemnou8A3rUZrdgKIautsH7SHO
# iOebZGqNu+622vJta3eAYsCAaxAcB9BiJPla7Xad9qrTYdT45VlCYTtBSY4oVRse
# dSADv99jv/iYIAGy1bCytua0o/Qqv9erKmzQCTVMXaDc25DTLcMGJrRua3K0xivd
# tnoBexzVJr6yXqM+Ba2whIVRvGcriBkKX0FJFeW7r29XX+k0e4DnG6iBHKQjec6V
# NzCCB3EwggVZoAMCAQICEzMAAAAVxedrngKbSZkAAAAAABUwDQYJKoZIhvcNAQEL
# BQAwgYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
# EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xMjAwBgNV
# BAMTKU1pY3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAyMDEwMB4X
# DTIxMDkzMDE4MjIyNVoXDTMwMDkzMDE4MzIyNVowfDELMAkGA1UEBhMCVVMxEzAR
# BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
# Y3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
# bXAgUENBIDIwMTAwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDk4aZM
# 57RyIQt5osvXJHm9DtWC0/3unAcH0qlsTnXIyjVX9gF/bErg4r25PhdgM/9cT8dm
# 95VTcVrifkpa/rg2Z4VGIwy1jRPPdzLAEBjoYH1qUoNEt6aORmsHFPPFdvWGUNzB
# RMhxXFExN6AKOG6N7dcP2CZTfDlhAnrEqv1yaa8dq6z2Nr41JmTamDu6GnszrYBb
# fowQHJ1S/rboYiXcag/PXfT+jlPP1uyFVk3v3byNpOORj7I5LFGc6XBpDco2LXCO
# Mcg1KL3jtIckw+DJj361VI/c+gVVmG1oO5pGve2krnopN6zL64NF50ZuyjLVwIYw
# XE8s4mKyzbnijYjklqwBSru+cakXW2dg3viSkR4dPf0gz3N9QZpGdc3EXzTdEonW
# /aUgfX782Z5F37ZyL9t9X4C626p+Nuw2TPYrbqgSUei/BQOj0XOmTTd0lBw0gg/w
# EPK3Rxjtp+iZfD9M269ewvPV2HM9Q07BMzlMjgK8QmguEOqEUUbi0b1qGFphAXPK
# Z6Je1yh2AuIzGHLXpyDwwvoSCtdjbwzJNmSLW6CmgyFdXzB0kZSU2LlQ+QuJYfM2
# BjUYhEfb3BvR/bLUHMVr9lxSUV0S2yW6r1AFemzFER1y7435UsSFF5PAPBXbGjfH
# CBUYP3irRbb1Hode2o+eFnJpxq57t7c+auIurQIDAQABo4IB3TCCAdkwEgYJKwYB
# BAGCNxUBBAUCAwEAATAjBgkrBgEEAYI3FQIEFgQUKqdS/mTEmr6CkTxGNSnPEP8v
# BO4wHQYDVR0OBBYEFJ+nFV0AXmJdg/Tl0mWnG1M1GelyMFwGA1UdIARVMFMwUQYM
# KwYBBAGCN0yDfQEBMEEwPwYIKwYBBQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0
# LmNvbS9wa2lvcHMvRG9jcy9SZXBvc2l0b3J5Lmh0bTATBgNVHSUEDDAKBggrBgEF
# BQcDCDAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTALBgNVHQ8EBAMCAYYwDwYD
# VR0TAQH/BAUwAwEB/zAfBgNVHSMEGDAWgBTV9lbLj+iiXGJo0T2UkFvXzpoYxDBW
# BgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2Ny
# bC9wcm9kdWN0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0yMy5jcmwwWgYIKwYBBQUH
# AQEETjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtp
# L2NlcnRzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNydDANBgkqhkiG9w0BAQsF
# AAOCAgEAnVV9/Cqt4SwfZwExJFvhnnJL/Klv6lwUtj5OR2R4sQaTlz0xM7U518Jx
# Nj/aZGx80HU5bbsPMeTCj/ts0aGUGCLu6WZnOlNN3Zi6th542DYunKmCVgADsAW+
# iehp4LoJ7nvfam++Kctu2D9IdQHZGN5tggz1bSNU5HhTdSRXud2f8449xvNo32X2
# pFaq95W2KFUn0CS9QKC/GbYSEhFdPSfgQJY4rPf5KYnDvBewVIVCs/wMnosZiefw
# C2qBwoEZQhlSdYo2wh3DYXMuLGt7bj8sCXgU6ZGyqVvfSaN0DLzskYDSPeZKPmY7
# T7uG+jIa2Zb0j/aRAfbOxnT99kxybxCrdTDFNLB62FD+CljdQDzHVG2dY3RILLFO
# Ry3BFARxv2T5JL5zbcqOCb2zAVdJVGTZc9d/HltEAY5aGZFrDZ+kKNxnGSgkujhL
# mm77IVRrakURR6nxt67I6IleT53S0Ex2tVdUCbFpAUR+fKFhbHP+CrvsQWY9af3L
# wUFJfn6Tvsv4O+S3Fb+0zj6lMVGEvL8CwYKiexcdFYmNcP7ntdAoGokLjzbaukz5
# m/8K6TT4JDVnK+ANuOaMmdbhIurwJ0I9JZTmdHRbatGePu1+oDEzfbzL6Xu/OHBE
# 0ZDxyKs6ijoIYn/ZcGNTTY3ugm2lBRDBcQZqELQdVTNYs6FwZvKhggNNMIICNQIB
# ATCB+aGB0aSBzjCByzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24x
# EDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
# bjElMCMGA1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0aW9uczEnMCUGA1UE
# CxMeblNoaWVsZCBUU1MgRVNOOkE0MDAtMDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNy
# b3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloiMKAQEwBwYFKw4DAhoDFQCOHPtgVdz9
# EW0iPNL/BXqJoqVMf6CBgzCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
# YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
# Q29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAy
# MDEwMA0GCSqGSIb3DQEBCwUAAgUA6be7PjAiGA8yMDI0MDQwMzExMjU1MFoYDzIw
# MjQwNDA0MTEyNTUwWjB0MDoGCisGAQQBhFkKBAExLDAqMAoCBQDpt7s+AgEAMAcC
# AQACAgCFMAcCAQACAhPwMAoCBQDpuQy+AgEAMDYGCisGAQQBhFkKBAIxKDAmMAwG
# CisGAQQBhFkKAwKgCjAIAgEAAgMHoSChCjAIAgEAAgMBhqAwDQYJKoZIhvcNAQEL
# BQADggEBAGOEGg2aN3xyURELmw+L+GX8p2GLWI15sn26L5zZ1RCMYvrrEPzbIkBT
# j1NL0yFvaXLZb68bd179ylRdRB49JdGqFq0JlXlDpduzp+W9aX4OsZcimqvnX/aV
# v8vpwR0bkwQiF36Wlw3TXbw2aZdv/KnRY/COKkaoKxQxC9rgkNw5MLAx+GJfJFYx
# lMwxRj+jQkox5WIar2zQ+etv9rPjBrUmC2eDaY7gc8q8+3N/aVk/bE/j6LWpX5d5
# zJSjmZLTCPvHFakF75DP7NBXDK6u3RQgxwqvcQBdP3SXpw0P72aW5NEI3EAbdjiL
# caVi+qcCb/mHcVEsE/IQWfbRiTzLslgxggQNMIIECQIBATCBkzB8MQswCQYDVQQG
# EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
# A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQg
# VGltZS1TdGFtcCBQQ0EgMjAxMAITMwAAAezgK6SC0JFSgAABAAAB7DANBglghkgB
# ZQMEAgEFAKCCAUowGgYJKoZIhvcNAQkDMQ0GCyqGSIb3DQEJEAEEMC8GCSqGSIb3
# DQEJBDEiBCBnC/wWzFKX58npi7nL4s/v3ajX49jTorslS5ukuiTicjCB+gYLKoZI
# hvcNAQkQAi8xgeowgecwgeQwgb0EICcJ5vVqfTfIhx21QBBbKyo/xciQIXaoMWUL
# ejAE1QqDMIGYMIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
# b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
# dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTACEzMA
# AAHs4CukgtCRUoAAAQAAAewwIgQgKz3kSreOLui1ENgzHV9zHDupRYY2KLepgApY
# ryRPCEkwDQYJKoZIhvcNAQELBQAEggIANnd5tIqFMpHYoKkoGz6ZfDVSYo4LKwXX
# r6YG/SOdHAuu5QETE2lCg2FarD/cZs+06RhoY5TT9P97UEBWZ+5G84ALMXIryTQU
# mYhsBl7EGtXD75hRtutz0pC/+So/iTRsiA5hpUZ1UVV+vUowMdj1Xnooif1nDHHX
# muwsVon1tqbbKeLkwEzyPyOG7ReAO9CPPsr50OnMFQMM1nFT2xk55UH3G4BogDp6
# u6/p0HM19HwI6RSBwxuTbDhZIQ0YxRCBV0Us1sTTM6Y/FPJp6jMEybkjR9HvcnJ+
# SepGEQwI2yx3DXwb5kwzk17iPrvI9mGgXpHrcyfgKByE7ZLMtbiH1TcdsCZJrcph
# d5T+bpO0VL9zv/SM2Gt4nwW0pbSNBYYNYWVP2ubMOVGitu23C7ThgHrpHZ52cLtT
# cEtqsRZvz1ndSnWV01VWr4bgt0ItK3otieJsX4vKTBxlElaPuOG3+yIduHQHwKe7
# eH76D6P67oBSBb+Xo5xUm457yskB1MsZyS/AED9mTAi1sPJmbOzKoyHRklXkmSg6
# iFhX1Zr6yhv0VTQxHDFnsdqiK3GUW26suxI/baO0lonBmQ/wse+OGy8E74j6r7An
# CLdfeYVh3S7WApR6faflFt926ZLWyu9ioHCU3/TlGhPpF7IscuINUGJVU3qoujVC
# M7fBRJLr23E=
# SIG # End signature block
