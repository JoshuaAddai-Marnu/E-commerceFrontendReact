# Localized PlasterResources.psd1

ConvertFrom-StringData @'
###PSLOC
DestPath_F1=Destination path: {0}
ErrorFailedToLoadStoreFile_F1=Failed to load the default value store file: '{0}'.
ErrorProcessingDynamicParams_F1=Failed to create dynamic parameters from the template's manifest file.  Template-based dynamic parameters will not be available until the error is corrected.  The error was: {0}
ErrorTemplatePathIsInvalid_F1=The TemplatePath parameter value must refer to an existing directory. The specified path '{0}' does not.
ErrorUnencryptingSecureString_F1=Failed to unencrypt value for parameter '{0}'.
ErrorPathDoesNotExist_F1=Cannot find path '{0}' because it does not exist.
ErrorPathMustBeRelativePath_F2=The path '{0}' specified in the {1} directive in the template manifest cannot be an absolute path.  Change the path to a relative path.
ErrorPathMustBeUnderDestPath_F2=The path '{0}' must be under the specified DestinationPath '{1}'.
ExpressionInvalid_F2=The expression '{0}' is invalid or threw an exception. Error: {1}
ExpressionNonTermErrors_F2=The expression '{0}' generated error output - {1}
ExpressionExecError_F2=PowerShell expression failed execution. Location: {0}. Error: {1}
ExpressionErrorLocationFile_F2=<{0}> attribute '{1}'
ExpressionErrorLocationModify_F1=<modify> attribute '{0}'
ExpressionErrorLocationNewModManifest_F1=<newModuleManifest> attribute '{0}'
ExpressionErrorLocationParameter_F2=<parameter> name='{0}', attribute '{1}'
ExpressionErrorLocationRequireModule_F2=<requireModule> name='{0}', attribute '{1}'
ExpressionInvalidCondition_F3=The Plaster manifest condition '{0}' failed. Location: {1}. Error: {2}
InterpolationError_F3=The Plaster manifest attribute value '{0}' failed string interpolation. Location: {1}. Error: {2}
FileConflict=Plaster file conflict
ManifestFileMissing_F1=The Plaster manifest file '{0}' was not found.
ManifestMissingDocElement_F2=The Plaster manifest file '{0}' is missing the document element. It should be specified as <plasterManifest xmlns="{1}"></plasterManifest>.
ManifestMissingDocTargetNamespace_F2=The Plaster manifest file '{0}' is missing or has an invalid target namespace on the document element. It should be specified as <plasterManifest xmlns="{1}"></plasterManifest>.
ManifestPlasterVersionNotSupported_F2=The template file '{0}' specifies a plasterVersion of {1} which is greater than the installed version of Plaster. Update the Plaster module and try again.
ManifestSchemaInvalidAttrValue_F5=Invalid '{0}' attribute value '{1}' on '{2}' element in file '{3}'. Error: {4}
ManifestSchemaInvalidCondition_F3=Invalid condition '{0}' in file '{1}'. Error: {2}
ManifestSchemaInvalidChoiceDefault_F3=Invalid default attribute value '{0}' for parameter '{1}' in file '{2}'. The default value must specify a zero-based integer index that corresponds to the default choice.
ManifestSchemaInvalidMultichoiceDefault_F3=Invalid default attribute value '{0}' for parameter '{1}' in file '{2}'. The default value must specify one or more zero-based integer indexes in a comma separated list that correspond to the default choices.
ManifestSchemaInvalidRequireModuleAttrs_F2=The requireModule attribute 'requiredVersion' for module '{0}' in file '{1}' cannot be used together with either the 'minimumVersion' or 'maximumVersion' attribute.
ManifestSchemaValidationError_F2=Plaster manifest schema error in file '{0}'. Error: {1}
ManifestSchemaVersionNotSupported_F2=The template's manifest schema version ({0}) in file '{1}' requires a newer version of Plaster. Update the Plaster module and try again.
ManifestErrorReading_F1=Error reading Plaster manifest: {0}
ManifestNotValid_F1=The Plaster manifest '{0}' is not valid.
ManifestNotValidVerbose_F1=The Plaster manifest '{0}' is not valid. Specify -Verbose to see the specific schema errors.
ManifestNotWellFormedXml_F2=The Plaster manifest '{0}' is not a well-formed XML file. {1}
ManifestWrongFilename_F1=The Plaster manifest filename '{0}' is not valid. The value of the Path argument must refer to a file named 'plasterManifest.xml' or 'plasterManifest_<culture>.xml'. Change the Plaster manifest filename and then try again.
MissingParameterPrompt_F1=<Missing prompt value for parameter '{0}'>
NewModManifest_CreatingDir_F1=Creating destination directory for module manifest: {0}
OpConflict=Conflict
OpCreate=Create
OpForce=Force
OpIdentical=Identical
OpMissing=Missing
OpModify=Modify
OpUpdate=Update
OpVerify=Verify
OverwriteFile_F1=Overwrite {0}
ParameterTypeChoiceMultipleDefault_F1=Parameter name {0} is of type='choice' and can only have one default value.
RequireModuleVerified_F2=The required module {0}{1} is already installed.
RequireModuleMissing_F2=The required module {0}{1} was not found.
RequireModuleMinVersion_F1=minimum version: {0}
RequireModuleMaxVersion_F1=maximum version: {0}
RequireModuleRequiredVersion_F1=required version: {0}
ShouldCreateNewPlasterManifest=Create Plaster manifest
ShouldProcessCreateDir=Create directory
ShouldProcessExpandTemplate=Expand template file
ShouldProcessNewModuleManifest=Create new module manifest
TempFileOperation_F1={0} into temp file before copying to destination
TempFileTarget_F1=temp file for '{0}'
TestPlasterNoXmlSchemaValidationWarning=The version of .NET Core that PowerShell is running on does not support XML schema-based validation. Test-PlasterManifest will operate in "limited validation" mode primarily verifying the specified manifest file is well-formed XML. For full, XML schema-based validation, run this command on Windows PowerShell.
UnrecognizedParametersElement_F1=Unrecognized manifest parameters child element: {0}.
UnrecognizedParameterType_F2=Unrecognized parameter type '{0}' on parameter name '{1}'.
UnrecognizedContentElement_F1=Unrecognized manifest content child element: {0}.
###PSLOC
'@

# SIG # Begin signature block
# MIIr5AYJKoZIhvcNAQcCoIIr1TCCK9ECAQExDzANBglghkgBZQMEAgEFADB5Bgor
# BgEEAYI3AgEEoGswaTA0BgorBgEEAYI3AgEeMCYCAwEAAAQQH8w7YFlLCE63JNLG
# KX7zUQIBAAIBAAIBAAIBAAIBADAxMA0GCWCGSAFlAwQCAQUABCBztQmdoKGTvdyv
# wtUQVqO4mor3UUoF0uu6xvq1MrHxGKCCEW4wggh+MIIHZqADAgECAhM2AAAB33OB
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
# AQQBgjcCARUwLwYJKoZIhvcNAQkEMSIEIKhUDRb4DdClaAqOokmd98Ucu32l/SqA
# lm+TFmpt1oTDMEIGCisGAQQBgjcCAQwxNDAyoBSAEgBNAGkAYwByAG8AcwBvAGYA
# dKEagBhodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20wDQYJKoZIhvcNAQEBBQAEggEA
# jvh58LdkJQHvPfnp+eKORi+GuKJvU2qEWwsDJdIpc9UCaGrZn78wWFYxUnsvtU7p
# Xhk8hrIZ6+9DEqu1wE7IctjRmdBJCuNPgFMTW2rU+thqJJkWkzdvAx31KLa0oogi
# 37bQex00qiAwF+w28GIwkzTbXnp/gwYfsR6XYRaQa+BnNl0XcZv/zhduHyoEj/HH
# CZdVKm3XCb3TkI3CU7JZ1iGdptrTHFvF3kDVO6h8WLXhUJwDi1z+9dmy9L5+36vr
# fbY1MOYBgCciq70L87MKz3fCkIJpf8TUPn3r29c8vTigldx+srPPeNR92RePrvXI
# r0oqKxSbBEr0elQkOF4l2KGCF5QwgheQBgorBgEEAYI3AwMBMYIXgDCCF3wGCSqG
# SIb3DQEHAqCCF20wghdpAgEDMQ8wDQYJYIZIAWUDBAIBBQAwggFSBgsqhkiG9w0B
# CRABBKCCAUEEggE9MIIBOQIBAQYKKwYBBAGEWQoDATAxMA0GCWCGSAFlAwQCAQUA
# BCDwoNzJXaTY/i04VAo0xh8efclbA17ycuxmS6xmzkb3rgIGZfLh3Qr3GBMyMDI0
# MDQwMzIxMzQwNC44NzlaMASAAgH0oIHRpIHOMIHLMQswCQYDVQQGEwJVUzETMBEG
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
# DQEJBDEiBCBOFUqnLW6mNFInj2TvUhW3otNoJMHvGcLWECrZVcqK1jCB+gYLKoZI
# hvcNAQkQAi8xgeowgecwgeQwgb0EICcJ5vVqfTfIhx21QBBbKyo/xciQIXaoMWUL
# ejAE1QqDMIGYMIGApH4wfDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
# b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
# dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIwMTACEzMA
# AAHs4CukgtCRUoAAAQAAAewwIgQgKz3kSreOLui1ENgzHV9zHDupRYY2KLepgApY
# ryRPCEkwDQYJKoZIhvcNAQELBQAEggIAZPmddtZiDDhYRtHK9KcgV2K5YwlYrt1L
# 4uOF2ViSpt3PwaM0GBpzhkWXGrMR5EGnkU9sK/QH6sFreKT7oyZTr/UWiFEQtJ7f
# AexaTacyq3ygYQLpdqGWLSQn6YXnPAuu6jlb5Os/u/3KLhZPQxeboR7ZmCC0sDPY
# 1/0nj9YdV6mr6BQhfiWNC4da9REHa0L8Bhkdbl231GhHSKaBkFk6GzFeVov0q8zN
# hdqXYy4o4P7Biyvazsfc1vwRkk8siu1vKJ7oNUsNun1FJPJKlsJ5KuIIXHsM1slP
# PY5AcycXZA3kEnJEviLMme0riLNi5Sz2nhQtffRoV8aWKJxd+cBoxaLspQAGW8Mm
# sT+iUn7vtoEtU0RShrDb52y5xtCF6uy6Kv0P//DlnpLpcqwFL1srrIWe+UOBCuqA
# VX6YqN84VGnb9UP6ppSXsqBMPDRib1R0TQrsJ3qfFj1xd+LKv26vAPPxd7+fvmIF
# 0R7bd2L1tMSfzm+bReXiOo5N1CdlTrEg10XCnGCvbRBTefqhUQK1GuMDjO1Ptq4j
# B9KF6Y1xmECcPdKxSX6rYeUSlEtPNhj3+dGrNt1Ah/YMAaruyqJwl+mhxsER9TnP
# i38ctBR6lhtkImOYHCjIiGQmbZjksnc+VPYTd5qyti2EaBSHtxdO0fWApRx2UxMl
# Hldyz3awg/4=
# SIG # End signature block
