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
exports.installCakeToolIfNeeded = exports.ensureNotDirty = void 0;
const vscode_1 = require("vscode");
const cakeTool_1 = require("../shared/cakeTool");
const log_1 = require("../shared/log");
function ensureNotDirty(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!vscode_1.workspace.workspaceFolders ||
            vscode_1.workspace.workspaceFolders.length < 1) {
            throw new Error('No open workspace');
        }
        const document = vscode_1.workspace.textDocuments.find(d => d.fileName.toLowerCase() === fileName.toLowerCase());
        if (!(document === null || document === void 0 ? void 0 : document.isDirty)) {
            return;
        }
        yield document.save();
        (0, log_1.logInfo)("Saved file before running task...", true);
    });
}
exports.ensureNotDirty = ensureNotDirty;
function installCakeToolIfNeeded(settings, context) {
    return __awaiter(this, void 0, void 0, function* () {
        if (settings.codeLens.installNetTool) {
            const cakeTool = new cakeTool_1.CakeTool(context);
            try {
                yield cakeTool.ensureInstalled();
            }
            catch (ex) {
                (0, log_1.logError)("Error installing Cake .NET Tool", true);
                if (ex instanceof Error) {
                    (0, log_1.logError)(ex.message);
                }
            }
        }
    });
}
exports.installCakeToolIfNeeded = installCakeToolIfNeeded;
//# sourceMappingURL=shared.js.map