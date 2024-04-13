"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installCakeBootstrapperFile = exports.installCakeBootstrapperCommand = void 0;
const vscode_1 = require("vscode");
const fs = require("fs");
const cakeBootstrapper_1 = require("./cakeBootstrapper");
function installCakeBootstrapperCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        // Let the user select the bootstrapper.
        var info = yield vscode_1.window.showQuickPick(cakeBootstrapper_1.CakeBootstrapper.getBootstrappers(), {
            placeHolder: 'Select the bootstrapper that you want to install',
            matchOnDetail: true,
            matchOnDescription: true
        });
        if (!info) {
            return;
        }
        // Check if there is an open folder in workspace
        if (vscode_1.workspace.rootPath === undefined) {
            vscode_1.window.showErrorMessage('You have not yet opened a folder.');
            return;
        }
        installCakeBootstrapperFile(info);
    });
}
exports.installCakeBootstrapperCommand = installCakeBootstrapperCommand;
function installCakeBootstrapperFile(info, notifyOnCompletion = true) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create the bootstrapper from the platform.
        let bootstrapper = new cakeBootstrapper_1.CakeBootstrapper(info);
        // Does the bootstrapper already exist?
        var buildFilePath = bootstrapper.getTargetPath();
        if (fs.existsSync(buildFilePath)) {
            var message = `Overwrite the existing \'${info.fileName}\' file in this folder?`;
            var option = yield vscode_1.window.showWarningMessage(message, 'Overwrite');
            if (option !== 'Overwrite') {
                return;
            }
        }
        // Download the bootstrapper and save it to disk.
        var file = fs.createWriteStream(buildFilePath);
        var result = yield bootstrapper.download(file);
        if (result) {
            if (process.platform !== 'win32' && info.posix) {
                fs.chmod(buildFilePath, 0o755, () => {
                    vscode_1.window.showErrorMessage('Error changing permissions.');
                });
            }
            if (notifyOnCompletion) {
                vscode_1.window.showInformationMessage('Cake bootstrapper downloaded successfully.');
            }
        }
        else {
            vscode_1.window.showErrorMessage('Error downloading Cake bootstrapper.');
        }
    });
}
exports.installCakeBootstrapperFile = installCakeBootstrapperFile;
//# sourceMappingURL=cakeBootstrapperCommand.js.map