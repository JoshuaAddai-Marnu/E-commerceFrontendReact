# .NET MAUI extension for VS Code

The .NET Multi-platform App UI (MAUI) extension gives you the tools you need to build beautiful, performant, cross-platform apps anywhere you write code. It's built on top of the [C#][CSharpExtension] and [C# Dev Kit][CSDevKitExtension] extensions, which supercharge your .NET development with powerful IntelliSense, an intuitive Solution Explorer, package management, and more. This extension adds more features for .NET developers building multi-platform apps, including:

* Hit `F5` to debug your app on emulators, simulators, and devices
* Switch between different startup projects and target frameworks
* Write your cross-platform C# and XAML anywhere VS Code runs

## Quick Start

1. Install the .NET MAUI extension (The [C#][CSharpExtension] and [C# Dev Kit][CSDevKitExtension] extensions will automatically be installed as dependencies)
1.  
    (a) Open a folder/workspace that contains a .NET MAUI project or solution (.csproj or .sln),  
    OR  
    (b) Use the Solution Explorer's "Create .NET Project" button or Command Palette's ".NET: New Project.." and choose a .NET MAUI project type
1. Select your debug target by hovering over the curly braces `{}` next to `C#` or `XAML` in the status bar, then hit `F5`!

## Feature List

* Debug your .NET MAUI app on any supported* emulator, simulator, or device
* Easily change debug/deploy targets and build for all .NET MAUI platforms
* Leverage all of the features in [C# Dev Kit][CSDevKitExtension] including Solution Explorer, Test Explorer, code navigation and refactoring, and Roslyn-powered language features
* Edit your XAML UIs with lightweight syntax highlighting and code completion

### *Supported Debug Targets

| Your Operating System | Supported Target Platforms |
|---|---|
| Windows | Windows, Android |
| macOS | Android, iOS, macOS |
| Linux | Android |

You can build without running (to check for compilation errors) for all target platforms on any OS.

<!--- To see some of what you can do with .NET MAUI, watch our walkthrough video:

[PLACEHOLDER] --->

## Requirements

* .NET 7 or greater with .NET MAUI workload
* Activated [C# Dev Kit][CSDevKitExtension] extension with a valid [Visual Studio or IntelliCode subscription][VSLicenseLink]
* Building for Android requires an Android SDK ([Learn how to get set up][DocsLink])
* Building for iOS and macOS requires the latest Xcode ([Learn how to get set up][DocsLink])

## Known Limitations

This extension is still in early preview, so there are a number of known limitations. Please give us [your feedback][FeedbackLink] on other features you'd like to see as we continue building this new experience!

* XAML editing capabilities are very lightweight - you get basic syntax highlighting and autocomplete. We're exploring how to improve the XAML experience in a future release
* Currently, you can't switch the target framework for IntelliSense (it will show syntax highlighting for only the first target framework listed in your .csproj file). This capability is in progress
* XAML and .NET Hot Reload aren't supported yet
* This extension has not been fully tested  with iOS and Xcode betas yet

## Found a bug?

To file a new issue, go to VS Code **Help > Report Issue**. In the Issue Reporter dialog, select "An extension" and “.NET MAUI” in the relevant dropdowns. Submitting this form will automatically generate a new issue in the C# Dev Kit GitHub repo.

Alternatively, you can file an issue directly in the [C# Dev Kit GitHub Repo][FeedbackLink].

## Feedback

❓[FAQs][FAQLink] Please read the FAQs before filing a question

💭 [Provide feedback][FeedbackLink] File questions, issues, or feature requests for the extension

🪲 [Known issues][FeedbackLink] If someone has already filed an issue that encompasses your feedback, please leave a 👍 reaction to upvote it and help us prioritize the issue

📣 [Quick survey][SurveyLink]  Let us know what you think of the extension by taking our quick survey

[CSharpExtension]: https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp
[CSDevKitExtension]: https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit
[FAQLink]: https://code.visualstudio.com/docs/csharp/cs-dev-kit-faq
[FeedbackLink]: https://github.com/microsoft/vscode-dotnettools/issues
[SurveyLink]: https://aka.ms/mauidevkit-survey
[DocsLink]: https://aka.ms/mauidevkit-docs
[VSLicenseLink]: https://visualstudio.microsoft.com/subscriptions/
