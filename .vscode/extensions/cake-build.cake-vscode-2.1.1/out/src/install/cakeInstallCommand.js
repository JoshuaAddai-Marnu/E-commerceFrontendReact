"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installCakeToWorkspaceCommand = void 0;
const vscode_1 = require("vscode");
const actions_1 = require("./actions");
const constants_1 = require("../constants");
const shared_1 = require("../shared");
function installCakeToWorkspaceCommand(context) {
    (0, actions_1.showScriptNameBox)(context)
        .then(actions_1.showBootstrapperOption)
        .then(actions_1.showBootstrapperTypeOption)
        .then(actions_1.showConfigOption)
        .then(actions_1.showDebugOption)
        .then(actions_1.showDebugTypeOption)
        .then(actions_1.installCake)
        .then(({ message, fileName }) => {
        vscode_1.window.showInformationMessage(message);
        shared_1.logger.logToOutput(fileName); // to suppress warnings
    })
        .then(undefined, (err) => {
        vscode_1.window.setStatusBarMessage('');
        if (err !== constants_1.CANCEL) {
            vscode_1.window.showErrorMessage(err.message || err || 'We encountered an unknown error! Please try again.');
        }
        else {
            vscode_1.window.setStatusBarMessage('Cake installation cancelled.');
        }
    });
}
exports.installCakeToWorkspaceCommand = installCakeToWorkspaceCommand;
//# sourceMappingURL=cakeInstallCommand.js.map