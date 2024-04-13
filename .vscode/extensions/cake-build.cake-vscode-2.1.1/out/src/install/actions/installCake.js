"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installCake = void 0;
const vscode = require("vscode");
const shared_1 = require("../../shared");
const constants_1 = require("../../constants");
const bootstrapper_1 = require("./bootstrapper");
const cakeBuildFileCommand_1 = require("../../buildFile/cakeBuildFileCommand");
const cakeConfigurationCommand_1 = require("../../configuration/cakeConfigurationCommand");
const cakeDebugCommand_1 = require("../../debug/cakeDebugCommand");
function installCake(installOpts) {
    if (installOpts) {
        return new Promise((resolve, reject) => {
            if (!installOpts) {
                shared_1.logger.logError(constants_1.ERROR_INVALID_SETTINGS, true);
                reject(constants_1.ERROR_INVALID_SETTINGS);
            }
            // Check if there is an open folder in workspace
            if (vscode.workspace.rootPath === undefined) {
                vscode.window.showErrorMessage(constants_1.ERROR_NO_WORKSPACE);
                reject(constants_1.ERROR_NO_WORKSPACE);
            }
            logSettingsToOutput(installOpts);
            vscode.window.setStatusBarMessage('Installing Cake to workspace with requested options...');
            var results = new Array();
            results.push((0, cakeBuildFileCommand_1.installBuildFile)(installOpts.scriptName).then(v => {
                logResult(v, `Cake script successfully created at '${installOpts.scriptName}'.`, 'Error encountered while creating default build script.');
            }, err => {
                logResult(false, '', err);
            }));
            if (installOpts.installBootstrappers) {
                results.push((0, bootstrapper_1.installBootstrappers)(installOpts.bootstrapperType)
                    .then(_ => logResult(true, 'Bootstrappers successfully created.'))
                    .catch(err => logResult(false, '', `Error encountered while creating bootstrappers (${err}).`)));
            }
            if (installOpts.installConfig) {
                results.push((0, cakeConfigurationCommand_1.installCakeConfiguration)().then(v => {
                    logResult(v, "Configuration file successfully created at 'cake.config'.", 'Error encountered while creating configuration file.');
                }));
            }
            Promise.all(results)
                .then(_ => {
                if (installOpts.installDebug) {
                    if (installOpts.debuggerType === shared_1.enums.DebugType.NetTool) {
                        (0, cakeDebugCommand_1.installCakeTool)(installOpts.context).then(v => {
                            logResult(v.installed, 'Cake Debug Dependencies correctly installed globally.', 'Error installing Cake Debug Dependencies.');
                        });
                    }
                    vscode.window.showInformationMessage("Add a new 'Cake' debug configuration to get started debugging your script.");
                }
                // Clear the status bar, and display final notification
                vscode.window.setStatusBarMessage('');
                resolve({
                    message: 'Successfully installed Cake to current workspace.',
                    fileName: `./${installOpts.scriptName}`
                });
            }, err => {
                reject(err);
            })
                .catch(err => reject(err));
        });
    }
    else {
        // TODO: should probably do something more here
        throw "Install options are undefined";
    }
}
exports.installCake = installCake;
function logResult(result, success, failure) {
    failure = failure ? failure : 'An error has occurred.';
    if (result) {
        shared_1.logger.logToOutput(success);
    }
    else {
        shared_1.logger.logError(failure, true);
    }
}
function logSettingsToOutput(installOpts) {
    if (installOpts) {
        shared_1.logger.logToOutput('Installing Cake to current workspace:', `  - Script name: '${installOpts.scriptName}'`, `  - Installing: script${installOpts.installBootstrappers ? ', bootstrappers' : ''}${installOpts.installConfig ? ', cake.config' : ''}${installOpts.installDebug ? ', debugging dependencies' : ''}`);
    }
    else {
        // TODO: should probably do something here
    }
}
//# sourceMappingURL=installCake.js.map