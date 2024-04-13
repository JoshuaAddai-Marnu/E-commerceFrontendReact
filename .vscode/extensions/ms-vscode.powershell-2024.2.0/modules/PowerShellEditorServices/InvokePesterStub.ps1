#!/usr/bin/env pwsh

<#
.SYNOPSIS
    Stub around Invoke-Pester command used by VSCode PowerShell extension.
.DESCRIPTION
    The stub checks the version of Pester and if >= 4.6.0, invokes Pester
    using the LineNumber parameter (if specified). Otherwise, it invokes
    using the TestName parameter (if specified). If the All parameter
    is specified, then all the tests are invoked in the specifed file.
    Finally, if none of these three parameters are specified, all tests
    are invoked and a warning is issued indicating what the user can do
    to allow invocation of individual Describe blocks.
.EXAMPLE
    PS C:\> .\InvokePesterStub.ps1 ~\project\test\foo.tests.ps1 -LineNumber 14
    Invokes a specific test by line number in the specified file.
.EXAMPLE
    PS C:\> .\InvokePesterStub.ps1 ~\project\test\foo.tests.ps1 -TestName 'Foo Tests'
    Invokes a specific test by test name in the specified file.
.EXAMPLE
    PS C:\> .\InvokePesterStub.ps1 ~\project\test\foo.tests.ps1 -All
    Invokes all tests in the specified file.
.INPUTS
    None
.OUTPUTS
    None
#>
param(
    # Specifies the path to the test script.
    [Parameter(Position=0, Mandatory)]
    [ValidateNotNullOrEmpty()]
    [string]
    $ScriptPath,

    # Specifies the name of the test taken from the Describe block's name.
    [Parameter()]
    [string]
    $TestName,

    # Specifies the starting line number of the DescribeBlock.  This feature requires
    # Pester 4.6.0 or higher.
    [Parameter()]
    [ValidatePattern('\d*')]
    [string]
    $LineNumber,

    # If specified, executes all the tests in the specified test script.
    [Parameter()]
    [switch]
    $All,

    [Parameter()]
    [switch] $MinimumVersion5,

    [Parameter(Mandatory)]
    [string] $Output,

    [Parameter()]
    [string] $OutputPath
)

# add one line, so the subsequent output is not shifted to the side
Write-Output ''

# checking and importing PSKoans first as it will import the required Pester-version (v4 vs v5)
if ($ScriptPath -match '\.Koans\.ps1$') {
    $psKoansModule = Microsoft.PowerShell.Core\Get-Module PSKoans
    if (!$psKoansModule) {
        Write-Output "Importing PSKoans module..."
        $psKoansModule = Microsoft.PowerShell.Core\Import-Module PSKoans -ErrorAction Ignore -PassThru
    }

    if (!$psKoansModule) {
        Write-Warning "Failed to import PSKoans. You must install PSKoans module to run or debug tests in *.Koans.ps1 files."
        return
    }
}

$pesterModule = Microsoft.PowerShell.Core\Get-Module Pester
if (!$pesterModule) {
    Write-Output "Importing Pester module..."
    if ($MinimumVersion5) {
        $pesterModule = Microsoft.PowerShell.Core\Import-Module Pester -ErrorAction Ignore -PassThru -MinimumVersion 5.0.0
    }

    if (!$pesterModule) {
        $pesterModule = Microsoft.PowerShell.Core\Import-Module Pester -ErrorAction Ignore -PassThru
    }

    if (!$pesterModule) {
        Write-Warning "Failed to import Pester. You must install Pester module to run or debug Pester tests."
        Write-Warning "$(if ($MinimumVersion5) {"Recommended version to install is Pester 5.0.0 or newer. "})You can install Pester by executing: Install-Module Pester$(if ($MinimumVersion5) {" -MinimumVersion 5.0.0" }) -Scope CurrentUser -Force"
        return
    }
}

$pester4Output = switch ($Output) {
    "None" { "None" }
    "Minimal" { "Fails" }
    default { "All" }
}

if ($MinimumVersion5 -and $pesterModule.Version -lt "5.0.0") {
    Write-Warning "Pester 5.0.0 or newer is required because setting PowerShell > Pester: Use Legacy Code Lens is disabled, but Pester $($pesterModule.Version) is loaded. Some of the code lens features might not work as expected."
}


function Get-InvokePesterParams {
    $invokePesterParams = @{
        Script = $ScriptPath
    }

    if ($pesterModule.Version -ge '3.4.0') {
        # -PesterOption was introduced before 3.4.0, and VSCodeMarker in 4.0.3-rc,
        # but because no-one checks the integrity of this hashtable we can call
        # all of the versions down to 3.4.0 like this
        $invokePesterParams.Add("PesterOption", @{ IncludeVSCodeMarker = $true })
    }

    if ($pesterModule.Version -ge '3.4.5') {
        # -Show was introduced in 3.4.5
        $invokePesterParams.Add("Show", $pester4Output)
    }

    return $invokePesterParams
}

if ($All) {
    if ($pesterModule.Version -ge '5.0.0') {
        $configuration = @{
            Run = @{
                Path = $ScriptPath
            }
        }
        # only override this if user asks us to do it, to allow Pester to pick up
        # $PesterPreference from caller context and merge it with the configuration
        # we provide below, this way user can specify his output (and other) settings
        # using the standard [PesterConfiguration] object, and we can avoid providing
        # settings for everything
        if ("FromPreference" -ne $Output) {
            $configuration.Add('Output', @{ Verbosity = $Output })
        }

        if ($OutputPath) {
            $configuration.Add('TestResult', @{
                Enabled = $true
                OutputPath = $OutputPath
            })
        }
        Pester\Invoke-Pester -Configuration $configuration | Out-Null
    }
    else {
        $invokePesterParams = Get-InvokePesterParams
        Pester\Invoke-Pester @invokePesterParams
    }
}
elseif (($LineNumber -match '\d+') -and ($pesterModule.Version -ge '4.6.0')) {
    if ($pesterModule.Version -ge '5.0.0') {
        $configuration = @{
            Run = @{
                Path = $ScriptPath
            }
            Filter = @{
                Line = "${ScriptPath}:$LineNumber"
            }
        }
        if ("FromPreference" -ne $Output) {
            $configuration.Add('Output', @{ Verbosity = $Output })
        }

        if ($OutputPath) {
            $configuration.Add('TestResult', @{
                Enabled = $true
                OutputPath = $OutputPath
            })
        }

        Pester\Invoke-Pester -Configuration $configuration | Out-Null
    }
    else {
        Pester\Invoke-Pester -Script $ScriptPath -PesterOption (New-PesterOption -ScriptBlockFilter @{
            IncludeVSCodeMarker=$true; Line=$LineNumber; Path=$ScriptPath}) -Show $pester4Output
    }
}
elseif ($TestName) {
    if ($pesterModule.Version -ge '5.0.0') {
       throw "Running tests by test name is unsafe. This should not trigger for Pester 5."
    }
    else {
        $invokePesterParams = Get-InvokePesterParams
        Pester\Invoke-Pester @invokePesterParams
    }
}
else {
    if ($pesterModule.Version -ge '5.0.0') {
       throw "Running tests by expandable string is unsafe. This should not trigger for Pester 5."
    }

    # We get here when the TestName expression is of type ExpandableStringExpressionAst.
    # PSES will not attempt to "evaluate" the expression so it returns null for the TestName.
    Write-Warning "The Describe block's TestName cannot be evaluated. EXECUTING ALL TESTS instead."
    Write-Warning "To avoid this, install Pester >= 4.6.0 or remove any expressions in the TestName."

    $invokePesterParams = Get-InvokePesterParams
    Pester\Invoke-Pester @invokePesterParams
}

# SIG # Begin signature block
# MIIreQYJKoZIhvcNAQcCoIIrajCCK2YCAQExDzANBglghkgBZQMEAgEFADB5Bgor
# BgEEAYI3AgEEoGswaTA0BgorBgEEAYI3AgEeMCYCAwEAAAQQH8w7YFlLCE63JNLG
# KX7zUQIBAAIBAAIBAAIBAAIBADAxMA0GCWCGSAFlAwQCAQUABCCdG6913tPXez0m
# 71Gn7Zhv3gTpyO2tzGNy5UUYajKsyKCCEW4wggh+MIIHZqADAgECAhM2AAAB33OB
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
# fiK9+iVTLdD1h/SxyxDpZMtimb4CgJQlMYIZYTCCGV0CAQEwWDBBMRMwEQYKCZIm
# iZPyLGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUwEwYDVQQDEwxBTUUg
# Q1MgQ0EgMDECEzYAAAHfc4GXFr4y/Q0AAgAAAd8wDQYJYIZIAWUDBAIBBQCgga4w
# GQYJKoZIhvcNAQkDMQwGCisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisG
# AQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIAL9XuWY8YUivx6hqy19i8PvpM4w6NAA
# 4C7hxINioCMZMEIGCisGAQQBgjcCAQwxNDAyoBSAEgBNAGkAYwByAG8AcwBvAGYA
# dKEagBhodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEBBQAEggEA
# o/12Eja8l7Z+DxsO2YdZNhtPGfe8NVtPTuiGTKZJppik0Kb3Tc3fS8leSwKbpMBb
# QBiY/IJXh/oheE8hKSWiDOweO9boLMuFU4VLPmmHfTw1y4RRfSpDtuNGijcVGta6
# b5KBlis2ca56ZI3Y5lauBbshJk3ymSdP3Goy2KtAvFxsi8BZPTlf5rG5+CajqwRQ
# D1jlsA6mf8/a2mzsxs+BvqbX6PiqXdkEgqOx86CSuQFkHgPX83rwd+kFutTJr9lf
# KkD2QZua2OcTow6syN2qwvDsnCjPDbfDcpIW05UVQIl96ccjseYMideliwVYgQzf
# 8lNLSEHheIdz/NWyv3tQFqGCFykwghclBgorBgEEAYI3AwMBMYIXFTCCFxEGCSqG
# SIb3DQEHAqCCFwIwghb+AgEDMQ8wDQYJYIZIAWUDBAIBBQAwggFZBgsqhkiG9w0B
# CRABBKCCAUgEggFEMIIBQAIBAQYKKwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUA
# BCDZGJM6DkhutZrWpZpgbk3+DKPQXtVfYZ07px4r4bJ25AIGZfx5J+p4GBMyMDI0
# MDQwMzIxMzMzOS42MDVaMASAAgH0oIHYpIHVMIHSMQswCQYDVQQGEwJVUzETMBEG
# A1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
# cm9zb2Z0IENvcnBvcmF0aW9uMS0wKwYDVQQLEyRNaWNyb3NvZnQgSXJlbGFuZCBP
# cGVyYXRpb25zIExpbWl0ZWQxJjAkBgNVBAsTHVRoYWxlcyBUU1MgRVNOOjhENDEt
# NEJGNy1CM0I3MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNl
# oIIReDCCBycwggUPoAMCAQICEzMAAAHj372bmhxogyIAAQAAAeMwDQYJKoZIhvcN
# AQELBQAwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
# BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
# A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTAwHhcNMjMxMDEyMTkw
# NzI5WhcNMjUwMTEwMTkwNzI5WjCB0jELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
# c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
# b3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQgT3BlcmF0aW9u
# cyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjo4RDQxLTRCRjctQjNC
# NzElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCCAiIwDQYJ
# KoZIhvcNAQEBBQADggIPADCCAgoCggIBAL6kDWgeRp+fxSBUD6N/yuEJpXggzBeN
# G5KB8M9AbIWeEokJgOghlMg8JmqkNsB4Wl1NEXR7cL6vlPCsWGLMhyqmscQu36/8
# h2bx6TU4M8dVZEd6V4U+l9gpte+VF91kOI35fOqJ6eQDMwSBQ5c9ElPFUijTA7zV
# 7Y5PRYrS4FL9p494TidCpBEH5N6AO5u8wNA/jKO94Zkfjgu7sLF8SUdrc1GRNEk2
# F91L3pxR+32FsuQTZi8hqtrFpEORxbySgiQBP3cH7fPleN1NynhMRf6T7XC1L0PR
# yKy9MZ6TBWru2HeWivkxIue1nLQb/O/n0j2QVd42Zf0ArXB/Vq54gQ8JIvUH0cbv
# yWM8PomhFi6q2F7he43jhrxyvn1Xi1pwHOVsbH26YxDKTWxl20hfQLdzz4RVTo8c
# FRMdQCxlKkSnocPWqfV/4H5APSPXk0r8Cc/cMmva3g4EvupF4ErbSO0UNnCRv7UD
# xlSGiwiGkmny53mqtAZ7NLePhFtwfxp6ATIojl8JXjr3+bnQWUCDCd5Oap54fGeG
# YU8KxOohmz604BgT14e3sRWABpW+oXYSCyFQ3SZQ3/LNTVby9ENsuEh2UIQKWU7l
# v7chrBrHCDw0jM+WwOjYUS7YxMAhaSyOahpbudALvRUXpQhELFoO6tOx/66hzqgj
# STOEY3pu46BFAgMBAAGjggFJMIIBRTAdBgNVHQ4EFgQUsa4NZr41FbehZ8Y+ep2m
# 2YiYqQMwHwYDVR0jBBgwFoAUn6cVXQBeYl2D9OXSZacbUzUZ6XIwXwYDVR0fBFgw
# VjBUoFKgUIZOaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9jcmwvTWlj
# cm9zb2Z0JTIwVGltZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSkuY3JsMGwGCCsGAQUF
# BwEBBGAwXjBcBggrBgEFBQcwAoZQaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3Br
# aW9wcy9jZXJ0cy9NaWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAxMCgx
# KS5jcnQwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8EDDAKBggrBgEFBQcDCDAOBgNV
# HQ8BAf8EBAMCB4AwDQYJKoZIhvcNAQELBQADggIBALe+my6p1NPMEW1t70a8Y2hG
# xj6siDSulGAs4UxmkfzxMAic4j0+GTPbHxk193mQ0FRPa9dtbRbaezV0GLkEsUWT
# GF2tP6WsDdl5/lD4wUQ76ArFOencCpK5svE0sO0FyhrJHZxMLCOclvd6vAIPOkZA
# YihBH/RXcxzbiliOCr//3w7REnsLuOp/7vlXJAsGzmJesBP/0ERqxjKudPWuBGz/
# qdRlJtOl5nv9NZkyLig4D5hy9p2Ec1zaotiLiHnJ9mlsJEcUDhYj8PnYnJjjsCxv
# +yJzao2aUHiIQzMbFq+M08c8uBEf+s37YbZQ7XAFxwe2EVJAUwpWjmtJ3b3zSWTM
# mFWunFr2aLk6vVeS0u1MyEfEv+0bDk+N3jmsCwbLkM9FaDi7q2HtUn3z6k7AnETc
# 28dAvLf/ioqUrVYTwBrbRH4XVFEvaIQ+i7esDQicWW1dCDA/J3xOoCECV68611jr
# iajfdVg8o0Wp+FCg5CAUtslgOFuiYULgcxnqzkmP2i58ZEa0rm4LZymHBzsIMU0y
# MmuVmAkYxbdEDi5XqlZIupPpqmD6/fLjD4ub0SEEttOpg0np0ra/MNCfv/tVhJtz
# 5wgiEIKX+s4akawLfY+16xDB64Nm0HoGs/Gy823ulIm4GyrUcpNZxnXvE6OZMjI/
# V1AgSAg8U/heMWuZTWVUMIIHcTCCBVmgAwIBAgITMwAAABXF52ueAptJmQAAAAAA
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
# oXBm8qGCAtQwggI9AgEBMIIBAKGB2KSB1TCB0jELMAkGA1UEBhMCVVMxEzARBgNV
# BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
# c29mdCBDb3Jwb3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQgT3Bl
# cmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMgVFNTIEVTTjo4RDQxLTRC
# RjctQjNCNzElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZaIj
# CgEBMAcGBSsOAwIaAxUAPYiXu8ORQ4hvKcuE7GK0COgxWnqggYMwgYCkfjB8MQsw
# CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9u
# ZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYDVQQDEx1NaWNy
# b3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAxMDANBgkqhkiG9w0BAQUFAAIFAOm4GdQw
# IhgPMjAyNDA0MDQwMjA5MjRaGA8yMDI0MDQwNTAyMDkyNFowdDA6BgorBgEEAYRZ
# CgQBMSwwKjAKAgUA6bgZ1AIBADAHAgEAAgIGezAHAgEAAgIRrzAKAgUA6blrVAIB
# ADA2BgorBgEEAYRZCgQCMSgwJjAMBgorBgEEAYRZCgMCoAowCAIBAAIDB6EgoQow
# CAIBAAIDAYagMA0GCSqGSIb3DQEBBQUAA4GBAA+ta5agVF14PYLQGQBb8ivpmX66
# nqGZuWHCWp/c/HQ1R7gt2+ZWESnXLxD6XEbw+4bnPRj+GfGAv9GV79sOM/GOMYuN
# xEAdyQPIBiut/484FClgl/WHYqheEapPWRy6QPlG3mNU8tnxTwxFqqNbrNkXrbVx
# pvNnGtK6UmK5c6EzMYIEDTCCBAkCAQEwgZMwfDELMAkGA1UEBhMCVVMxEzARBgNV
# BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jv
# c29mdCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAg
# UENBIDIwMTACEzMAAAHj372bmhxogyIAAQAAAeMwDQYJYIZIAWUDBAIBBQCgggFK
# MBoGCSqGSIb3DQEJAzENBgsqhkiG9w0BCRABBDAvBgkqhkiG9w0BCQQxIgQgztK7
# Cb+GoYblVgOg76HeBwVmxylcoZOaG3Rl4KrMf6kwgfoGCyqGSIb3DQEJEAIvMYHq
# MIHnMIHkMIG9BCAz1COr5bD+ZPdEgQjWvcIWuDJcQbdgq8Ndj0xyMuYmKjCBmDCB
# gKR+MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
# EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNV
# BAMTHU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB49+9m5ocaIMi
# AAEAAAHjMCIEIKj81bTZ61MujfN8fIJH4uMUU2fo17KuDsgOC/7JzYs3MA0GCSqG
# SIb3DQEBCwUABIICAGWx3FPi/b0ap2yBPuHeJyzbcRUpuEt6rrMhTuXgCxGkAkFE
# B+mSS1jzlXxxkonwHJ+fG6ELNMkD2ubeD3N+eY3zBILihDYEfDIPgyhXy6NEzNel
# +W7mgPAS2mSLlINwKOe+pe5A2weLOeaefiCAua6Nh/y3uyv/KFHTbJw+g7x9+oRr
# GJQhQ2kVoLao+UJcfK83YGEA10lB/T+iknn4GZEoR7mQRvkeEYn/lWp2eWnETVI9
# u3R515bpXm4Bx7TIR7zoyl0O4lCE7ejreNBM5Iizhg9fSvIbpvxic80dU4JsexRi
# gELAy6uUSjRCHCbudcJs6seuTZylxnwRB3YUjB/aROTla2hwPoGXdCLlOQw4WbOM
# NDB/gmx1ewGiuErcauSw65D7iWCZ/sa/FK2Mcwg1mwtILPllhjkvVSifrBFOXiEF
# joMxLtPzpSLNJNFldTB73yDlsbwbvYbotXfF+TNEPbFq5OwgPDfcUIStApoLeL2v
# fvyXqm5FZD2zzWxKlZ6a3J7qEHsbDwXqoLIpSbypVpVbI0Gw8VmiPFm4yyBFTm0d
# ErAmU6niPIa9xBgMzo26FVqbOcAXxZazL9QU5R6m4/fIh8xQUn7zn6o1zlKabUSI
# 0O4V03nMPH0jcivr2FIMvXMqCf44we2iJf/T8pNGga58s2AR6+7YHIHfsnpJ
# SIG # End signature block
