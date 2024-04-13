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
exports.installCakeTool = exports.installCakeDebugCommand = void 0;
const vscode_1 = require("vscode");
const cakeTool_1 = require("../shared/cakeTool");
function installCakeDebugCommand(context, hideWarning) {
    return __awaiter(this, void 0, void 0, function* () {
        // Check if there is an open folder in workspace
        if (vscode_1.workspace.rootPath === undefined) {
            vscode_1.window.showErrorMessage('You have not yet opened a folder.');
            return false;
        }
        const result = yield (installCakeTool(context));
        const messages = {
            advice: 'Cake Debug Dependencies correctly installed globally.',
            warning: 'Cake.Tool is already installed globally',
            error: 'Error installing Cake Debug Dependencies.'
        };
        if (result.installed) {
            if (result.advice) {
                vscode_1.window.showInformationMessage(messages.advice);
            }
            else if (!hideWarning) {
                vscode_1.window.showWarningMessage(messages.warning);
            }
        }
        else {
            vscode_1.window.showErrorMessage(messages.error);
            return false;
        }
        return true;
    });
}
exports.installCakeDebugCommand = installCakeDebugCommand;
function installCakeTool(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const tool = new cakeTool_1.CakeTool(context);
        const installationModified = yield tool.ensureInstalled();
        return { installed: true, advice: installationModified };
    });
}
exports.installCakeTool = installCakeTool;
//# sourceMappingURL=cakeDebugCommand.js.map