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
exports.forceInstallBakery = exports.updateCakeBakeryCommand = void 0;
const vscode_1 = require("vscode");
const fs = require("fs");
const cakeBakery_1 = require("./cakeBakery");
const shared_1 = require("../shared");
function updateCakeBakeryCommand(extensionPath) {
    return __awaiter(this, void 0, void 0, function* () {
        // Install Cake Bakery
        var result = yield forceInstallBakery(extensionPath);
        if (result) {
            vscode_1.commands.executeCommand('o.restart');
            vscode_1.window.showInformationMessage('Intellisense support (Cake.Bakery) for Cake files was installed.');
        }
        else {
            vscode_1.window.showErrorMessage('Error downloading intellisense support (Cake.Bakery) for Cake files.');
        }
    });
}
exports.updateCakeBakeryCommand = updateCakeBakeryCommand;
function forceInstallBakery(extensionPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let bakery = new cakeBakery_1.CakeBakery(extensionPath);
        var targetPath = bakery.getInstallationPath();
        shared_1.logger.logInfo("Force-updating Cake.Bakery in " + targetPath);
        if (fs.existsSync(targetPath)) {
            fs.rmdirSync(targetPath, { recursive: true });
        }
        const success = yield bakery.downloadAndExtract();
        yield bakery.updateOmnisharpSettings();
        return success;
    });
}
exports.forceInstallBakery = forceInstallBakery;
//# sourceMappingURL=cakeBakeryCommand.js.map