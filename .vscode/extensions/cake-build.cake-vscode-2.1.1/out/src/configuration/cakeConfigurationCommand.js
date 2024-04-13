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
exports.installCakeConfiguration = exports.installCakeConfigurationCommand = void 0;
const vscode_1 = require("vscode");
const fs = require("fs");
const cakeConfiguration_1 = require("./cakeConfiguration");
const shared_1 = require("../shared");
const constants_1 = require("../constants");
function installCakeConfigurationCommand() {
    return __awaiter(this, void 0, void 0, function* () {
        // Check if there is an open folder in workspace
        if (vscode_1.workspace.rootPath === undefined) {
            vscode_1.window.showErrorMessage('You have not yet opened a folder.');
            return;
        }
        var result = yield installCakeConfiguration();
        if (result) {
            vscode_1.window.showInformationMessage('Cake configuration downloaded successfully.');
        }
        else {
            vscode_1.window.showErrorMessage('Error downloading Cake configuration.');
        }
    });
}
exports.installCakeConfigurationCommand = installCakeConfigurationCommand;
function installCakeConfiguration() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create the configuration object
        let configuration = new cakeConfiguration_1.CakeConfiguration();
        // Does the configuration already exist?
        var targetPath = configuration.getTargetPath();
        var ready = shared_1.utils.checkForExisting(targetPath);
        if (!ready) {
            Promise.reject(constants_1.CANCEL);
        }
        // Download the configuration and save it to disk.
        var file = fs.createWriteStream(targetPath);
        var result = yield configuration.download(file);
        return result;
    });
}
exports.installCakeConfiguration = installCakeConfiguration;
//# sourceMappingURL=cakeConfigurationCommand.js.map