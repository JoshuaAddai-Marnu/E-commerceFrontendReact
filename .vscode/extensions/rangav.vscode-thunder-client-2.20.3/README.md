# Thunder Client

Thunder Client is a lightweight Rest API Client Extension for Visual Studio Code, hand-crafted by [Ranga Vadhineni](https://twitter.com/ranga_vadhineni) with a focus on **simplicity, clean design and local storage**.

- Featured on [Product Hunt](https://www.producthunt.com/posts/thunder-client)
- Website - [www.thunderclient.com](https://www.thunderclient.com)
- Follow Twitter for updates - [twitter.com/thunder_client](https://twitter.com/thunder_client)
- Documentation: [docs.thunderclient.com](https://docs.thunderclient.com)
- Support: [github.com/rangav/thunder-client-support](https://github.com/rangav/thunder-client-support)

### Story behind Thunder Client

- Read Launch Blog Post on [Medium](https://rangav.medium.com/thunder-client-alternative-to-postman-68ee0c9486d6)

### Milestones

- The extension was **launched** on March 31st, 2021
- **500K** downloads on Dec 20th, 2021
- **1 Million** downloads on July 13th, 2022
- [View All Milestones](https://www.thunderclient.com/about)

## Usage

- Install the Extension, Click Thunder Client icon on the Action Bar.
- From Sidebar click `New Request` button to test API

<img width="850" alt="Thunder Client" src="https://github.com/rangav/thunder-client-support/blob/master/images/thunder-client-v2.png?raw=true">

## Videos

- Thunder Client quick overview video by [James Quick](https://www.youtube.com/watch?v=AbCTlemwZ1k)
- Thunder Client introduction video on [Youtube](https://www.youtube.com/watch?v=NKZ0ahNbmak)

## Main Features

- **Lightweight** Rest API Client for VS Code.
- Supports **Collections and Environment variables** & GraphQL Queries.
- **Scriptless Testing:** Test API response easily with GUI based interface.
- **Local Storage**: All request data is saved locally on the user's device.
- **Git Sync**: Save request data in your Git repository for team collaboration.
- **Themes:** The extension also supports VS Code themes.

## Documentation

- For updated documentation please visit our [Website](https://docs.thunderclient.com) page

## CLI & CI/CD Integration

- Test APIs using the `CLI` and integrate with the `CI/CD build` pipeline, see [documentation](https://docs.thunderclient.com/cli).

## Git Sync

> Subscription Required to use this feature

- This feature allows you to store requests data in git project, for details visit [Website](https://docs.thunderclient.com/team) page.

## Import/Export

- You can import from Postman, Insomnia, OpenAPI and Curl, for more details visit [Website](https://docs.thunderclient.com/features/import) page.

## Run Collection

- You can test multiple requests using Collection, select `Run All` option from the collection menu.
- The collection runner will execute all requests and test cases and display the result.

## Proxy

- Proxy is supported using vscode proxy setting. for details visit [Website](https://docs.thunderclient.com/features/proxy) page.

## Scriptless Testing

<img width="850" alt="Thunder Client" src="https://github.com/rangav/thunder-client-support/blob/master/images/thunder-client-tests-v2.png?raw=true">

- We need to write lot of boilerplate code in Postman and other api clients to do basic testing using scripting like status code equal 200. So I implemented GUI based tests, where you select couple of dropdowns to do most standard tests very easily without any scripting knowledge.

## Privacy

- Basic anonymised telemetry data of extension usage is collected using [vscode-extension-telemetry](https://github.com/Microsoft/vscode-extension-telemetry), No Personal or request data is collected. You can opt out using VS Code Settings [details here](https://code.visualstudio.com/docs/getstarted/telemetry)
- There is no backend or cloud sync currently, all the data is stored locally on your computer.
