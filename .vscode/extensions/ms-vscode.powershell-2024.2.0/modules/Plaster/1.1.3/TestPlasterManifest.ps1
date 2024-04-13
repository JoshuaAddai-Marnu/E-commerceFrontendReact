function Test-PlasterManifest {
    [CmdletBinding()]
    [OutputType([System.Xml.XmlDocument])]
    param(
        [Parameter(Position=0,
                   ParameterSetName="Path",
                   ValueFromPipeline=$true,
                   ValueFromPipelineByPropertyName=$true,
                   HelpMessage="Specifies a path to a plasterManifest.xml file.")]
        [Alias("PSPath")]
        [ValidateNotNullOrEmpty()]
        [string[]]
        $Path = @("$pwd\plasterManifest.xml")
    )

    begin {
        $schemaPath = [System.IO.Path]::Combine($PSScriptRoot, "Schema", "PlasterManifest-v1.xsd")

        # Schema validation is not available on .NET Core - at the moment.
        if ('System.Xml.Schema.XmlSchemaSet' -as [type]) {
            $xmlSchemaSet = New-Object System.Xml.Schema.XmlSchemaSet
            $xmlSchemaSet.Add($TargetNamespace, $schemaPath) > $null
        }
        else {
            $PSCmdLet.WriteWarning($LocalizedData.TestPlasterNoXmlSchemaValidationWarning)
        }
    }

    process {
        foreach ($aPath in $Path) {
            $aPath = $PSCmdLet.GetUnresolvedProviderPathFromPSPath($aPath)

            if (!(Test-Path -LiteralPath $aPath)) {
                $ex = New-Object System.Management.Automation.ItemNotFoundException ($LocalizedData.ErrorPathDoesNotExist_F1 -f $aPath)
                $category = [System.Management.Automation.ErrorCategory]::ObjectNotFound
                $errRecord = New-Object System.Management.Automation.ErrorRecord $ex,'PathNotFound',$category,$aPath
                $PSCmdLet.WriteError($errRecord)
                return
            }

            $filename = Split-Path $aPath -Leaf

            # Verify the manifest has the correct filename. Allow for localized template manifest files as well.
            if (!(($filename -eq 'plasterManifest.xml') -or ($filename -match 'plasterManifest_[a-zA-Z]+(-[a-zA-Z]+){0,2}.xml'))) {
                Write-Error ($LocalizedData.ManifestWrongFilename_F1 -f $filename)
                return
            }

            # Verify the manifest loads into an XmlDocument i.e. verify it is well-formed.
            $manifest = $null
            try {
                $manifest = [xml](Get-Content $aPath)
            }
            catch {
                $ex = New-Object System.Exception ($LocalizedData.ManifestNotWellFormedXml_F2 -f $aPath, $_.Exception.Message), $_.Exception
                $category = [System.Management.Automation.ErrorCategory]::InvalidData
                $errRecord = New-Object System.Management.Automation.ErrorRecord $ex,'InvalidManifestFile',$category,$aPath
                $psCmdlet.WriteError($errRecord)
                return
            }

            # Validate the manifest contains the required root element and target namespace that the following
            # XML schema validation will apply to.
            if (!$manifest.plasterManifest) {
                Write-Error ($LocalizedData.ManifestMissingDocElement_F2 -f $aPath,$TargetNamespace)
                return
            }

            if ($manifest.plasterManifest.NamespaceURI -cne $TargetNamespace) {
                Write-Error ($LocalizedData.ManifestMissingDocTargetNamespace_F2 -f $aPath,$TargetNamespace)
                return
            }

            # Valid flag is stashed in a hashtable so the ValidationEventHandler scriptblock can set the value.
            $manifestIsValid = @{Value = $true}

            # Configure an XmlReader and XmlReaderSettings to perform schema validation on xml file.
            $xmlReaderSettings = New-Object System.Xml.XmlReaderSettings

            # Schema validation is not available on .NET Core - at the moment.
            if ($xmlSchemaSet) {
                $xmlReaderSettings.ValidationFlags = [System.Xml.Schema.XmlSchemaValidationFlags]::ReportValidationWarnings
                $xmlReaderSettings.ValidationType = [System.Xml.ValidationType]::Schema
                $xmlReaderSettings.Schemas = $xmlSchemaSet
            }

            # Schema validation is not available on .NET Core - at the moment.
            if ($xmlSchemaSet) {
                # Event handler scriptblock for the ValidationEventHandler event.
                $validationEventHandler = {
                    param($sender, $eventArgs)

                    if ($eventArgs.Severity -eq [System.Xml.Schema.XmlSeverityType]::Error)
                    {
                        Write-Verbose ($LocalizedData.ManifestSchemaValidationError_F2 -f $aPath,$eventArgs.Message)
                        $manifestIsValid.Value = $false
                    }
                }

                $xmlReaderSettings.add_ValidationEventHandler($validationEventHandler)
            }

            [System.Xml.XmlReader]$xmlReader = $null
            try {
                $xmlReader = [System.Xml.XmlReader]::Create($aPath, $xmlReaderSettings)
                while ($xmlReader.Read()) {}
            }
            catch {
                Write-Error ($LocalizedData.ManifestErrorReading_F1 -f $_)
                $manifestIsValid.Value = $false
            }
            finally {
                # Schema validation is not available on .NET Core - at the moment.
                if ($xmlSchemaSet) {
                    $xmlReaderSettings.remove_ValidationEventHandler($validationEventHandler)
                }
                if ($xmlReader) { $xmlReader.Dispose() }
            }

            # Validate default values for choice/multichoice parameters containing 1 or more ints
            $xpath = "//tns:parameter[@type='choice'] | //tns:parameter[@type='multichoice']"
            $choiceParameters = Select-Xml -Xml $manifest -XPath $xpath  -Namespace @{tns=$TargetNamespace}
            foreach ($choiceParameterXmlInfo in $choiceParameters) {
                $choiceParameter = $choiceParameterXmlInfo.Node
                if (!$choiceParameter.default) { continue }

                if ($choiceParameter.type -eq 'choice') {
                    if ($null -eq ($choiceParameter.default -as [int])) {
                        $PSCmdLet.WriteVerbose(($LocalizedData.ManifestSchemaInvalidChoiceDefault_F3 -f $choiceParameter.default,$choiceParameter.name,$aPath))
                        $manifestIsValid.Value = $false
                    }
                }
                else {
                    if ($null -eq (($choiceParameter.default -split ',') -as [int[]])) {
                        $PSCmdLet.WriteVerbose(($LocalizedData.ManifestSchemaInvalidMultichoiceDefault_F3 -f $choiceParameter.default,$choiceParameter.name,$aPath))
                        $manifestIsValid.Value = $false
                    }
                }
            }

            # Validate that the requireModule attribute requiredVersion is mutually exclusive from both
            # the version and maximumVersion attributes.
            $requireModules = Select-Xml -Xml $manifest -XPath '//tns:requireModule' -Namespace @{tns = $TargetNamespace}
            foreach ($requireModuleInfo in $requireModules) {
                $requireModuleNode = $requireModuleInfo.Node
                if ($requireModuleNode.requiredVersion -and ($requireModuleNode.minimumVersion -or $requireModuleNode.maximumVersion)) {
                    $PSCmdLet.WriteVerbose(($LocalizedData.ManifestSchemaInvalidRequireModuleAttrs_F2 -f $requireModuleNode.name,$aPath))
                    $manifestIsValid.Value = $false
                }
            }

            # Validate that all the condition attribute values are valid PowerShell script.
            $conditionAttrs = Select-Xml -Xml $manifest -XPath '//@condition'
            foreach ($conditionAttr in $conditionAttrs) {
                $tokens = $errors = $null
                $null = [System.Management.Automation.Language.Parser]::ParseInput($conditionAttr.Node.Value, [ref] $tokens, [ref] $errors)
                if ($errors.Count -gt 0) {
                    $msg = $LocalizedData.ManifestSchemaInvalidCondition_F3 -f $conditionAttr.Node.Value, $aPath, $errors[0]
                    $PSCmdLet.WriteVerbose($msg)
                    $manifestIsValid.Value = $false
                }
            }

            # Validate all interpolated attribute values are valid within a PowerShell string interpolation context.
            $interpolatedAttrs  = @(Select-Xml -Xml $manifest -XPath '//tns:parameter/@default' -Namespace @{tns = $TargetNamespace})
            $interpolatedAttrs += @(Select-Xml -Xml $manifest -XPath '//tns:parameter/@prompt' -Namespace @{tns = $TargetNamespace})
            $interpolatedAttrs += @(Select-Xml -Xml $manifest -XPath '//tns:content/tns:*/@*' -Namespace @{tns = $TargetNamespace})
            foreach ($interpolatedAttr in $interpolatedAttrs) {
                $name = $interpolatedAttr.Node.LocalName
                if ($name -eq 'condition') { continue }

                $tokens = $errors = $null
                $value = $interpolatedAttr.Node.Value
                $null = [System.Management.Automation.Language.Parser]::ParseInput("`"$value`"", [ref] $tokens, [ref] $errors)
                if ($errors.Count -gt 0) {
                    $ownerName = $interpolatedAttr.Node.OwnerElement.LocalName
                    $msg = $LocalizedData.ManifestSchemaInvalidAttrValue_F5 -f $name, $value, $ownerName, $aPath, $errors[0]
                    $PSCmdLet.WriteVerbose($msg)
                    $manifestIsValid.Value = $false
                }
            }

            if ($manifestIsValid.Value) {
                # Verify manifest schema version is supported.
                $manifestSchemaVersion = [System.Version]$manifest.plasterManifest.schemaVersion

                # Use a simplified form (no patch version) of semver for checking XML schema version compatibility.
                if (($manifestSchemaVersion.Major -gt $LatestSupportedSchemaVersion.Major) -or
                    (($manifestSchemaVersion.Major -eq $LatestSupportedSchemaVersion.Major) -and
                     ($manifestSchemaVersion.Minor -gt $LatestSupportedSchemaVersion.Minor))) {

                    Write-Error ($LocalizedData.ManifestSchemaVersionNotSupported_F2 -f $manifestSchemaVersion,$aPath)
                    return
                }

                # Verify that the plasterVersion is supported.
                if ($manifest.plasterManifest.plasterVersion) {
                    $requiredPlasterVersion = [System.Version]$manifest.plasterManifest.plasterVersion

                    # Is user specifies major.minor, change build to 0 (from default of -1) so compare works correctly.
                    if ($requiredPlasterVersion.Build -eq -1) {
                        $requiredPlasterVersion = [System.Version]"${requiredPlasterVersion}.0"
                    }

                    if ($requiredPlasterVersion -gt $MyInvocation.MyCommand.Module.Version) {
                        $plasterVersion = $manifest.plasterManifest.plasterVersion
                        Write-Error ($LocalizedData.ManifestPlasterVersionNotSupported_F2 -f $aPath,$plasterVersion)
                        return
                    }
                }

                $manifest
            }
            else {
                if ($PSBoundParameters['Verbose']) {
                    Write-Error ($LocalizedData.ManifestNotValid_F1 -f $aPath)
                }
                else {
                    Write-Error ($LocalizedData.ManifestNotValidVerbose_F1 -f $aPath)
                }
            }
        }
    }
}

# SIG # Begin signature block
# MIIrfAYJKoZIhvcNAQcCoIIrbTCCK2kCAQExDzANBglghkgBZQMEAgEFADB5Bgor
# BgEEAYI3AgEEoGswaTA0BgorBgEEAYI3AgEeMCYCAwEAAAQQH8w7YFlLCE63JNLG
# KX7zUQIBAAIBAAIBAAIBAAIBADAxMA0GCWCGSAFlAwQCAQUABCCGJq429H4dvb0K
# GkR0cqBcecTVHZ7rJyFbjiL6U3hB26CCEW4wggh+MIIHZqADAgECAhM2AAAB33OB
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
# fiK9+iVTLdD1h/SxyxDpZMtimb4CgJQlMYIZZDCCGWACAQEwWDBBMRMwEQYKCZIm
# iZPyLGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUwEwYDVQQDEwxBTUUg
# Q1MgQ0EgMDECEzYAAAHfc4GXFr4y/Q0AAgAAAd8wDQYJYIZIAWUDBAIBBQCgga4w
# GQYJKoZIhvcNAQkDMQwGCisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisG
# AQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIEzw8BMuVWJFCrZ2LiuN8f2WMmLkePDd
# INaDiqptLeGFMEIGCisGAQQBgjcCAQwxNDAyoBSAEgBNAGkAYwByAG8AcwBvAGYA
# dKEagBhodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEBBQAEggEA
# fDyZcOxcBAdwRZ/P+fBqwLcwmOzcrTivN47ijnB2gjRlvtwqkAPqtJYox4o5eyzk
# yVltsQMCedWiO1NPAQ4G+SRyGqwJ4RM5LVA323Did6cRIOtKnhtXF1AkVNk+LoJz
# UmnQmY2W+x3qpY2bkBnpYmMm7QRuachBpBB2dxZsbBMCJzl0XEUbkycS92CZ405V
# 9qoZu8LxALw2PXmzg0Smvg1FyAXDlLCs67BuElI0bgPgQ66E5RRU+7z2pqi8surV
# KfB2wUuktQvHsG7U10bsm0fqLJPd18LFKGIJBTGqvqLVERv3irORkXVV6hu2URcZ
# 3zBdoSfRlQMEi05ibJCBXqGCFywwghcoBgorBgEEAYI3AwMBMYIXGDCCFxQGCSqG
# SIb3DQEHAqCCFwUwghcBAgEDMQ8wDQYJYIZIAWUDBAIBBQAwggFZBgsqhkiG9w0B
# CRABBKCCAUgEggFEMIIBQAIBAQYKKwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUA
# BCCE2XEca2U9Y5hw3lgM8mYA32GL1whf7izcZofM91V9nAIGZfyB145QGBMyMDI0
# MDQwMzIxMzQwNS4wNTFaMASAAgH0oIHYpIHVMIHSMQswCQYDVQQGEwJVUzETMBEG
# A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
# cm9zb2Z0IENvcnBvcmF0aW9uMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBP
# cGVyYXRpb25zIExpbWl0ZWQxJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOjg2REYt
# NEJCQy05MzM1MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNl
# oIIRezCCBycwggUPoAMCAQICEzMAAAHdXVcdldStqhsAAQAAAd0wDQYJKoZIhvcN
# AQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
# BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
# A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwHhcNMjMxMDEyMTkw
# NzA5WhcNMjUwMTEwMTkwNzA5WjCB0jELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
# c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
# b3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQgT3BlcmF0aW9u
# cyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjo4NkRGLTRCQkMtOTMz
# NTElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCCAiIwDQYJ
# KoZIhvcNAQEBBQADggIPADCCAgoCggIBAKhOA5RE6i53nHURH4lnfKLp+9JvipuT
# tctairCxMUSrPSy5CWK2DtriQP+T52HXbN2g7AktQ1pQZbTDGFzK6d03vYYNrCPu
# JK+PRsP2FPVDjBXy5mrLRFzIHHLaiAaobE5vFJuoxZ0ZWdKMCs8acjhHUmfaY+79
# /CR7uN+B4+xjJqwvdpU/mp0mAq3earyH+AKmv6lkrQN8zgrcbCgHwsqvvqT6lEFq
# Ypi7uKn7MAYbSeLe0pMdatV5EW6NVnXMYOTRKuGPfyfBKdShualLo88kG7qa2mbA
# 5l77+X06JAesMkoyYr4/9CgDFjHUpcHSODujlFBKMi168zRdLerdpW0bBX9EDux2
# zBMMaEK8NyxawCEuAq7++7ktFAbl3hUKtuzYC1FUZuUl2Bq6U17S4CKsqR3itLT9
# qNcb2pAJ4jrIDdll5Tgoqef5gpv+YcvBM834bXFNwytd3ujDD24P9Dd8xfVJvumj
# sBQQkK5T/qy3HrQJ8ud1nHSvtFVi5Sa/ubGuYEpS8gF6GDWN5/KbveFkdsoTVIPo
# 8pkWhjPs0Q7nA5+uBxQB4zljEjKz5WW7BA4wpmFm24fhBmRjV4Nbp+n78cgAjvDS
# fTlA6DYBcv2kx1JH2dIhaRnSeOXePT6hMF0Il598LMu0rw35ViUWcAQkUNUTxRnq
# GFxz5w+ZusMDAgMBAAGjggFJMIIBRTAdBgNVHQ4EFgQUbqL1toyPUdpFyyHSDKWj
# 0I4lw/EwHwYDVR0jBBgwFoAUn6cVXQBeYl2D9OXSZacbUzUZ6XIwXwYDVR0fBFgw
# VjBUoFKgUIZOaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9jcmwvTWlj
# cm9zb2Z0JTIwVGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSkuY3JsMGwGCCsGAQUF
# BwEBBGAwXjBcBggrBgEFBQcwAoZQaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
# aW9wcy9jZXJ0cy9NaWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAxMCgx
# KS5jcnQwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8EDDAKBggrBgEFBQcDCDAOBgNV
# HQ8BAf8EBAMCB4AwDQYJKoZIhvcNAQELBQADggIBAC5U2bINLgXIHWbMcqVuf9jk
# UT/K8zyLBvu5h8JrqYR2z/eaO2yo1Ooc9Shyvxbe9GZDu7kkUzxSyJ1IZksZZw6F
# Dq6yZNT3PEjAEnREpRBL8S+mbXg+O4VLS0LSmb8XIZiLsaqZ0fDEcv3HeA+/y/qK
# nCQWkXghpaEMwGMQzRkhGwcGdXr1zGpQ7HTxvfu57xFxZX1MkKnWFENJ6urd+4te
# UgXj0ngIOx//l3XMK3Ht8T2+zvGJNAF+5/5qBk7nr079zICbFXvxtidNN5eoXdW+
# 9rAIkS+UGD19AZdBrtt6dZ+OdAquBiDkYQ5kVfUMKS31yHQOGgmFxuCOzTpWHalr
# qpdIllsy8KNsj5U9sONiWAd9PNlyEHHbQZDmi9/BNlOYyTt0YehLbDovmZUNazk7
# 9Od/A917mqCdTqrExwBGUPbMP+/vdYUqaJspupBnUtjOf/76DAhVy8e/e6zR98Pk
# plmliO2brL3Q3rD6+ZCVdrGM9Rm6hUDBBkvYh+YjmGdcQ5HB6WT9Rec8+qDHmbhL
# hX4Zdaard5/OXeLbgx2f7L4QQQj3KgqjqDOWInVhNE1gYtTWLHe4882d/k7Lui0K
# 1g8EZrKD7maOrsJLKPKlegceJ9FCqY1sDUKUhRa0EHUW+ZkKLlohKrS7FwjdrINW
# kPBgbQznCjdE2m47QjTbMIIHcTCCBVmgAwIBAgITMwAAABXF52ueAptJmQAAAAAA
# FTANBgkqhkiG9w0BAQsFADCBiDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hp
# bmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
# b3JhdGlvbjEyMDAGA1UEAxMpTWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0
# aG9yaXR5IDIwMTAwHhcNMjEwOTMwMTgyMjI1WhcNMzAwOTMwMTgzMjI1WjB8MQsw
# CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
# ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
# b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDCCAiIwDQYJKoZIhvcNAQEBBQADggIP
# ADCCAgoCggIBAOThpkzntHIhC3miy9ckeb0O1YLT/e6cBwfSqWxOdcjKNVf2AX9s
# SuDivbk+F2Az/1xPx2b3lVNxWuJ+Slr+uDZnhUYjDLWNE893MsAQGOhgfWpSg0S3
# po5GawcU88V29YZQ3MFEyHFcUTE3oAo4bo3t1w/YJlN8OWECesSq/XJprx2rrPY2
# vjUmZNqYO7oaezOtgFt+jBAcnVL+tuhiJdxqD89d9P6OU8/W7IVWTe/dvI2k45GP
# sjksUZzpcGkNyjYtcI4xyDUoveO0hyTD4MmPfrVUj9z6BVWYbWg7mka97aSueik3
# rMvrg0XnRm7KMtXAhjBcTyziYrLNueKNiOSWrAFKu75xqRdbZ2De+JKRHh09/SDP
# c31BmkZ1zcRfNN0Sidb9pSB9fvzZnkXftnIv231fgLrbqn427DZM9ituqBJR6L8F
# A6PRc6ZNN3SUHDSCD/AQ8rdHGO2n6Jl8P0zbr17C89XYcz1DTsEzOUyOArxCaC4Q
# 6oRRRuLRvWoYWmEBc8pnol7XKHYC4jMYctenIPDC+hIK12NvDMk2ZItboKaDIV1f
# MHSRlJTYuVD5C4lh8zYGNRiER9vcG9H9stQcxWv2XFJRXRLbJbqvUAV6bMURHXLv
# jflSxIUXk8A8FdsaN8cIFRg/eKtFtvUeh17aj54WcmnGrnu3tz5q4i6tAgMBAAGj
# ggHdMIIB2TASBgkrBgEEAYI3FQEEBQIDAQABMCMGCSsGAQQBgjcVAgQWBBQqp1L+
# ZMSavoKRPEY1Kc8Q/y8E7jAdBgNVHQ4EFgQUn6cVXQBeYl2D9OXSZacbUzUZ6XIw
# XAYDVR0gBFUwUzBRBgwrBgEEAYI3TIN9AQEwQTA/BggrBgEFBQcCARYzaHR0cDov
# L3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9Eb2NzL1JlcG9zaXRvcnkuaHRtMBMG
# A1UdJQQMMAoGCCsGAQUFBwMIMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIAQwBBMAsG
# A1UdDwQEAwIBhjAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaAFNX2VsuP6KJc
# YmjRPZSQW9fOmhjEMFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6Ly9jcmwubWljcm9z
# b2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01pY1Jvb0NlckF1dF8yMDEwLTA2LTIz
# LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6Ly93d3cubWlj
# cm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljUm9vQ2VyQXV0XzIwMTAtMDYtMjMuY3J0
# MA0GCSqGSIb3DQEBCwUAA4ICAQCdVX38Kq3hLB9nATEkW+Geckv8qW/qXBS2Pk5H
# ZHixBpOXPTEztTnXwnE2P9pkbHzQdTltuw8x5MKP+2zRoZQYIu7pZmc6U03dmLq2
# HnjYNi6cqYJWAAOwBb6J6Gngugnue99qb74py27YP0h1AdkY3m2CDPVtI1TkeFN1
# JFe53Z/zjj3G82jfZfakVqr3lbYoVSfQJL1AoL8ZthISEV09J+BAljis9/kpicO8
# F7BUhUKz/AyeixmJ5/ALaoHCgRlCGVJ1ijbCHcNhcy4sa3tuPywJeBTpkbKpW99J
# o3QMvOyRgNI95ko+ZjtPu4b6MhrZlvSP9pEB9s7GdP32THJvEKt1MMU0sHrYUP4K
# WN1APMdUbZ1jdEgssU5HLcEUBHG/ZPkkvnNtyo4JvbMBV0lUZNlz138eW0QBjloZ
# kWsNn6Qo3GcZKCS6OEuabvshVGtqRRFHqfG3rsjoiV5PndLQTHa1V1QJsWkBRH58
# oWFsc/4Ku+xBZj1p/cvBQUl+fpO+y/g75LcVv7TOPqUxUYS8vwLBgqJ7Fx0ViY1w
# /ue10CgaiQuPNtq6TPmb/wrpNPgkNWcr4A245oyZ1uEi6vAnQj0llOZ0dFtq0Z4+
# 7X6gMTN9vMvpe784cETRkPHIqzqKOghif9lwY1NNje6CbaUFEMFxBmoQtB1VM1iz
# oXBm8qGCAtcwggJAAgEBMIIBAKGB2KSB1TCB0jELMAkGA1UEBhMCVVMxEzARBgNV
# BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
# c29mdCBDb3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQgT3Bl
# cmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjo4NkRGLTRC
# QkMtOTMzNTElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZaIj
# CgEBMAcGBSsOAwIaAxUANiNHGWXbNaDPxnyiDbEOciSjFhCggYMwgYCkfjB8MQsw
# CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
# ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
# b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDANBgkqhkiG9w0BAQUFAAIFAOm3eZow
# IhgPMjAyNDA0MDMxNDQ1NDZaGA8yMDI0MDQwNDE0NDU0NlowdzA9BgorBgEEAYRZ
# CgQBMS8wLTAKAgUA6bd5mgIBADAKAgEAAgIIBwIB/zAHAgEAAgIS8zAKAgUA6bjL
# GgIBADA2BgorBgEEAYRZCgQCMSgwJjAMBgorBgEEAYRZCgMCoAowCAIBAAIDB6Eg
# oQowCAIBAAIDAYagMA0GCSqGSIb3DQEBBQUAA4GBAI4LK7UITi50MqX/nN5GzHgd
# hocMaLjAyesAnekYkdzT+hG928IJ0OWVVUAv/SWwHmHPX2AFjiSb+5vX1WdaefRa
# gYkHAy13FIsnBz98DcbdA4C6SVNjgPQ4Y9GXgAI8a7zW5LyYIj1yyjNWMeWIJdIF
# fpFrECv6sgE+Gx5kaHSnMYIEDTCCBAkCAQEwgZMwfDELMAkGA1UEBhMCVVMxEzAR
# BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
# Y3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
# bXAgUENBIDIwMTACEzMAAAHdXVcdldStqhsAAQAAAd0wDQYJYIZIAWUDBAIBBQCg
# ggFKMBoGCSqGSIb3DQEJAzENBgsqhkiG9w0BCRABBDAvBgkqhkiG9w0BCQQxIgQg
# d98kvNp9SqMBTzfnvxFTKltoxGUbRkE7iFr/ZszkxacwgfoGCyqGSIb3DQEJEAIv
# MYHqMIHnMIHkMIG9BCBh/w4tmmWsT3iZnHtH0Vk37UCN02lRxY+RiON6wDFjZjCB
# mDCBgKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
# VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAk
# BgNVBAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB3V1XHZXU
# raobAAEAAAHdMCIEIEbNoZmHiLbtQ10tLa9RoQ7IC5vUN4e0U1bGA7bLqgqnMA0G
# CSqGSIb3DQEBCwUABIICAGiVAFVFKUohVtqgCijSXUzfH3k7gCS/JCuyua5fJkIW
# i/8o5EKlHFsoznnxmLffVTuSAKB9fzl8AceiRK3129Nz0UuSQw2Go97DIt+2/Sfi
# xCPjpreNCveAfSH5d0PXxGYh3Ffl55kxW/SgxNZDG7e03nb9LhYshDnaFTjS/FZd
# 6oitueS7bwwzYcley3qGYWF5lqr1HiMo5PUXIXEOUbNYsdJVOVRrcB2JTD/Z1zgJ
# cQcD9/WbWD8HBKRVhsy5ZRVjLFs5yfMKRVkG1FMI19b3cw8WEaUX6wHWaqSNLGeD
# 1O/nQverspX6EgfCtDoQJJK8bj7QrNRmDFS4Hv+LAUGuXlCHQYceJffdtHC2cF7W
# PrZVW4mv0R7B6J3Vkv0456j7AHHUVlgcljRuTIj6YBgNN1b/56RQDxn1totfEUEF
# O/ONASPiGp23A7OXdZdFpGosTB0K3qFW5RLhuy3U8dRcUJ5iCHbv9AqAbjw1+hjl
# 7+9kxE/dYmAUGpjs1SgwTrqT0aZO8WIi/B3vLiLdV37eVn4rlyZHonZ8IE1maCCh
# ImFr09oKK/Iwj0f9zjmvPvAh07uZGzL1wop1b+42Akh9ncx7mpBV58uAgSDrOskW
# a4bMfCdCQLOzfwexhSwvm+FV5+6v77YgOE+Wwg/wT0DlEub43umkO1hGkrgo4KXl
# SIG # End signature block
