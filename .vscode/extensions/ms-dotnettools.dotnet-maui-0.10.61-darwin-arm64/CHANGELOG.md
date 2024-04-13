# Change Log

## Current Stable version

### Added
- Adds progress bar indicator for Android Emulator launch process AzDo#2005160
- Telemetry improvements AzDo#2005576
- Telemetry improvements AzDo#1994389
- **.NET Core Debugger backend (vsdbg) support for MAUI apps** (Added support for debugging MAUI apps with the .NET Core Debugger backend (vsdbg) for .NET 8.0.202 or above. To enable/disable this feature, use the maui.configuration.experimental.useVSDbg setting. The setting will be enabled by default if the .NET requirements are met)

### Fixed
- [BUG] Use VSDbg displays 1 instead of true in the .NET MAUI output pane AzDo#1974722
- [[BUG] non-MAUI .NET Debug launch hangs with when the pre-release .NET MAUI extension is installed](https://github.com/microsoft/vscode-dotnettools/issues/1012)
- Improves Xcode detection AzDo#1993200
- [BUG] Support detection of Android Sdk component cmdline-tools when the version installed is 'latest'. Fixes [.NET Maui Command Line Tools Not Installed](https://github.com/microsoft/vscode-dotnettools/issues/842)
- [BUG] Android platform cannot find JDK if it is installed in ProgramFilesX86 AzDo#1987640
- [BUG] "Create new Emulator" debug target opens learn more page to guide user to creates an AVD AzDo#1843555
- [BUG] The target drop-down list does not highlight the currently selected Startup project AzDo#1948719
- [BUG] Remove Android SDK recommended required platforms-tools components: Information printed twice in .NET MAUI output AzDo#1991565
- [BUG] The Xcode location should also consider the Settings.plist file AzDo#1934962

## 0.10.59 - Prerelease

### Added
- Adds progress bar indicator for Android Emulator launch process AzDo#2005160
- Telemetry improvements AzDo#2005576

## 0.10.50 - Prerelease

### Added
- Telemetry improvements AzDo#1994389

### Fixed
- [BUG] Use VSDbg displays 1 instead of true in the .NET MAUI output pane AzDo#1974722
- [[BUG] non-MAUI .NET Debug launch hangs with when the pre-release .NET MAUI extension is installed](https://github.com/microsoft/vscode-dotnettools/issues/1012)

## 0.10.30 - Prerelease

### Added
- **.NET Core Debugger backend (vsdbg) support for MAUI apps** (Added support for debugging MAUI apps with the .NET Core Debugger backend (vsdbg) for .NET 8.0.202 or above. To enable/disable this feature, use the maui.configuration.experimental.useVSDbg setting. The setting will be enabled by default if the .NET requirements are met)

### Fixed
- Improves Xcode detection AzDo#1993200

## 0.10.16 - Prerelease

### Fixed
- Fixes and improvements

## 0.10.14 - Prerelease

### Fixed
- Fixes and improvements

## 0.10.10 - Prerelease

### Fixed
- [BUG] Support detection of Android Sdk component cmdline-tools when the version installed is 'latest'. Fixes [.NET Maui Command Line Tools Not Installed](https://github.com/microsoft/vscode-dotnettools/issues/842)
- [BUG] Android platform cannot find JDK if it is installed in ProgramFilesX86 AzDo#1987640
- [BUG] "Create new Emulator" debug target opens learn more page to guide user to creates an AVD AzDo#1843555
- [BUG] The target drop-down list does not highlight the currently selected Startup project AzDo#1948719
- [BUG] Remove Android SDK recommended required platforms-tools components: Information printed twice in .NET MAUI output AzDo#1991565
- [BUG] The Xcode location should also consider the Settings.plist file AzDo#1934962

## 0.9.7 - Release

### Fixed
- Fixes and improvements

## 0.9.5 - Release

### Fixed
- [BUG] Xcode not found if using different path from `Xcode.app`

## 0.9.3 - Prerelease

### Fixed
- [BUG] Xcode not found if using different path from `Xcode.app`

## 0.8.44 - Release

### Fixed
- Custom configuration does not hit breakpoints on Android. Fixes [Breakpoints do not work when debugging configuration other than Debug](https://github.com/dotnet/maui/issues/20132)
- [BUG] The debug target list and the debug target display are inconsistent AzDo#1948725
- [BUG] Telemetry improvements AzDo#1909215
- Only iOS simulators that were running on extension load display as "running". Fixes [MAUI ios device picker lists all simulators as 'running'](https://github.com/microsoft/vscode-dotnettools/issues/677)
- [BUG] iOS physical devices are not dynamically discovered AzDo#1923989 
- Added support for overriding `RuntimeIdentifier` from project file. Fixes [[BUG] clang++ exited with code 1 #744](https://github.com/microsoft/vscode-dotnettools/issues/744).

## 0.8.42 - Prerelease

### Fixed
- Custom configuration does not hit breakpoints on Android. Fixes [Breakpoints do not work when debugging configuration other than Debug](https://github.com/dotnet/maui/issues/20132)
- [BUG] The debug target list and the debug target display are inconsistent AzDo#1948725
- [BUG] Telemetry improvements AzDo#1909215

## v0.8.30 - Prerelease

### Fixed
- Only iOS simulators that were running on extension load display as "running". Fixes [MAUI ios device picker lists all simulators as 'running'](https://github.com/microsoft/vscode-dotnettools/issues/677)
- [BUG] iOS physical devices are not dynamically discovered AzDo#1923989 

## v0.8.3 - Prerelease

### Fixed 
- Added support for overriding `RuntimeIdentifier` from project file. Fixes [[BUG] clang++ exited with code 1 #744](https://github.com/microsoft/vscode-dotnettools/issues/744).

## v0.7.10 - Release

### Fixed
- Fixes and improvements

## v0.7.8 - Prerelease

### Fixed 
- Version bump to 0.7.*

## v0.6.54 - Release

### Fixed
- Duplicate "Debugging canceled" messages are printed when starting debugging with a machine that is not configured with the Android SDK AzDo#1910140
- default debug target is not set when startup project changed AzDo#1908556
- [[BUG] ".NET MAUI SDK not found" error with VS Code if folder contains more than one file with an extension ending with 'proj' #654](https://github.com/microsoft/vscode-dotnettools/issues/654)
- [[BUG] Debugging canceled: MAUI SDK not found](https://github.com/microsoft/vscode-dotnettools/issues/523)

## v0.6.52 - Prerelease

### Fixed
- Unavailable iOS devices will no longer be listed when extension loads AzDo#1923376
- Using XCode without accepting licenses displays an error and shows guidance on how to resolve it AzDo#1912961 

## v0.6.19 - Prerelease

### Fixed
- Bug fixes

## v0.6.6 - Prerelease

### Fixed
- Duplicate "Debugging canceled" messages are printed when starting debugging with a machine that is not configured with the Android SDK AzDo#1910140
- default debug target is not set when startup project changed AzDo#1908556
- [[BUG] ".NET MAUI SDK not found" error with VS Code if folder contains more than one file with an extension ending with 'proj' #654](https://github.com/microsoft/vscode-dotnettools/issues/654)
- [[BUG] Debugging canceled: MAUI SDK not found](https://github.com/microsoft/vscode-dotnettools/issues/523)

## v0.5.50 - Release

### Fixed
- [Android updates message could be more helpful #272](https://github.com/microsoft/vscode-dotnettools/issues/272)
- Unconfigured Android SDK/JDK causes confusion over not accepted licenses AzDo#1848378
- Building MAUI apps "out of the box" for Android fails due to AP lv 34 missing AzDo#1896303
- No MAUI app project warning if pressing F5 while loading project AzDo#1843657
- The .NET MAUI output window message only prompts the Android component list when optional components are removed AzDo#1907802
- Adds .NET MAUI output verbosity settings AzDo#1823394
- Avoids project load failure when project target not supported platforms 
- [The Preferred Android SDK/Java SDK directory was not used. But WHY? [Found the problem]](https://github.com/microsoft/vscode-dotnettools/issues/561)
- Improves Android Licenses help

## v0.5.48 - Prerelease

### Fixed
- [Android updates message could be more helpful #272](https://github.com/microsoft/vscode-dotnettools/issues/272)
- Unconfigured Android SDK/JDK causes confusion over not accepted licenses AzDo#1848378
- Building MAUI apps "out of the box" for Android fails due to AP lv 34 missing AzDo#1896303
- No MAUI app project warning if pressing F5 while loading project AzDo#1843657
- The .NET MAUI output window message only prompts the Android component list when optional components are removed AzDo#1907802

## v0.5.32 - Prerelease

### Fixed
- Adds .NET MAUI output verbosity settings AzDo#1823394
- Avoids project load failure when project target not supported platforms 
- [The Preferred Android SDK/Java SDK directory was not used. But WHY? [Found the problem]](https://github.com/microsoft/vscode-dotnettools/issues/561)
- Improves Android Licenses help

## v0.5.3 - Prerelease

### Fixed
- Bug fixes

## v0.4.9 - Release

### Fixed
- .NET Maui: Pick Android Device does not show usb devices. AzDo#1864430
- No devices found before restarting VS Code on Linux AzDo#1872355
- [[BUG] Solution Explorer -> Build shows unnecessary "Type to Filter Project" box #515](https://github.com/microsoft/vscode-dotnettools/issues/515)
- The .NET 8.0 ios/maccatalyst app cannot debug on a machine without .NET 7.0 installed AzDo#1879753
- .NET 8.0 MAUI project cannot be debugged AzDo#1852343
- [Android Licensing dialog box - slashes are going in the wrong direction #468](https://github.com/microsoft/vscode-dotnettools/issues/468)
- [.NET MAUI Extension: The preferred Android SDK/Java SDK directory was not used. #510](https://github.com/microsoft/vscode-dotnettools/issues/510)
- [Debugging canceled: MAUI SDK not found. #523](https://github.com/microsoft/vscode-dotnettools/issues/523)
- Microsoft OpenJDK 17

## v0.4.5 - Prerelease

### Fixed
- .NET Maui: Pick Android Device does not show usb devices. AzDo#1864430
- No devices found before restarting VS Code on Linux. AzDo#1872355

## v0.4.4 - Prerelease

### Fixed
- [[BUG] Solution Explorer -> Build shows unnecessary "Type to Filter Project" box #515](https://github.com/microsoft/vscode-dotnettools/issues/515)
- The .NET 8.0 ios/maccatalyst app cannot debug on a machine without .NET 7.0 installed AzDo#1879753
- .NET 8.0 MAUI project cannot be debugged AzDo#1852343
- [Android Licensing dialog box - slashes are going in the wrong direction #468](https://github.com/microsoft/vscode-dotnettools/issues/468)
- [.NET MAUI Extension: The preferred Android SDK/Java SDK directory was not used.](https://github.com/microsoft/vscode-dotnettools/issues/510)
- [Debugging canceled: MAUI SDK not found.](https://github.com/microsoft/vscode-dotnettools/issues/523)
- Microsoft OpenJDK 17

## v0.3.22 - Release

### Fixed
- .NET MAUI SDK not found on .NET 8.0.100-preview.7.23376.3 AzDo#1870972
- NRE happens when JAVA SDK is not installed AzDo#1867881
- [[BUG] NET MAUI SDK: not found #269](https://github.com/microsoft/vscode-dotnettools/issues/269)

## v0.3.1 - Prerelease

### Fixed
- [[BUG] NET MAUI SDK: not found #269](https://github.com/microsoft/vscode-dotnettools/issues/269)

## v0.2.12 - Release

### Fixed
- The restart button does not work correctly AzDo#1835871
- Android: error displayed when Debugger breaks on unhandled exceptions AzDo#1836830
- [[BUG] Breakpoints not hit on MAUI Blazor on Mac #292](https://github.com/microsoft/vscode-dotnettools/issues/292)
- [[SUGGESTION] Some improvements for debugging MAUI #273](https://github.com/microsoft/vscode-dotnettools/issues/273)
- [[BUG] MAUI: Android license has to be accepted on every restart #249](https://github.com/microsoft/vscode-dotnettools/issues/249)

## v0.1.34 - Release

- Initial Release
