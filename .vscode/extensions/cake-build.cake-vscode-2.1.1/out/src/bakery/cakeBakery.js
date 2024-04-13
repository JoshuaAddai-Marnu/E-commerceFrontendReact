"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeBakery = void 0;
var request = require('request');
var AdmZip = require('adm-zip');
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
const os = require("os");
const vscode_1 = require("vscode");
const constants_1 = require("../constants");
const shared_1 = require("../shared");
class CakeBakery {
    constructor(extensionPath) {
        this.extensionPath = extensionPath;
    }
    getTargetPath() {
        return path.join(this.getInstallationPath(), 'tools/Cake.Bakery.dll');
    }
    getInstallationPath() {
        return path.join(this.extensionPath, 'Cake.Bakery');
    }
    downloadAndExtract() {
        const installationPath = this.getInstallationPath();
        const extensionPath = this.extensionPath;
        return new Promise((resolve, reject) => {
            // Download the NuGet Package
            try {
                if (!fs.existsSync(extensionPath)) {
                    fs.mkdirSync(extensionPath);
                }
            }
            catch (error) {
                vscode_1.window.showErrorMessage('Unable to create directory');
            }
            shared_1.logger.logInfo("Downloading Cake.Bakery to " + extensionPath);
            var data = [], dataLen = 0;
            request
                .get(constants_1.CAKE_BAKERY_PACKAGE_URL, {
                timeout: constants_1.DEFAULT_RESPONSE_TIMEOUT
            })
                .on('data', function (chunk) {
                data.push(chunk);
                dataLen += chunk.length;
            })
                .on('end', function () {
                var buf = new Buffer(dataLen);
                for (var i = 0, len = data.length, pos = 0; i < len; i++) {
                    data[i].copy(buf, pos);
                    pos += data[i].length;
                }
                var zip = new AdmZip(buf);
                zip.extractAllTo(installationPath);
                shared_1.logger.logInfo("Cake.Bakery successfully installed to: " + installationPath);
                resolve(true);
            })
                .on('error', function (e) {
                const err = `Failed to download Cake Bakery from NuGet: ${e}`;
                shared_1.logger.logError(err);
                reject(err);
            });
        });
    }
    updateOmnisharpSettings() {
        return new Promise((resolve, reject) => {
            shared_1.logger.logInfo("Updating Cake.Bakery path in omnisharp.");
            try {
                const omnisharpUserFolderPath = this.getOmnisharpUserFolderPath();
                if (!fs.existsSync(omnisharpUserFolderPath)) {
                    fs.mkdirSync(omnisharpUserFolderPath);
                }
                const targetPath = this.getTargetPath();
                const omnisharpCakeConfigFile = this.getOmnisharpCakeConfigFile();
                if (fs.existsSync(omnisharpCakeConfigFile)) {
                    // Read in file
                    //import omnisharpCakeConfig from omnisharpCakeConfigFile;
                    var omnisharpCakeConfig = JSON.parse(fs.readFileSync(omnisharpCakeConfigFile, 'utf-8'));
                    shared_1.logger.logInfo(`existing bakery-path: ${omnisharpCakeConfig.cake.bakeryPath}`);
                    omnisharpCakeConfig.cake.bakeryPath = targetPath;
                    shared_1.logger.logInfo(`new bakery-path: ${omnisharpCakeConfig.cake.bakeryPath}`);
                    fs.writeFileSync(omnisharpCakeConfigFile, JSON.stringify(omnisharpCakeConfig, null, 2));
                    // lets force a restart of the Omnisharp server to use new config
                    vscode.commands.executeCommand('o.restart');
                }
                else {
                    // create file
                    var newOmnisharpCakeConfig = { cake: { bakeryPath: targetPath } };
                    fs.writeFileSync(omnisharpCakeConfigFile, JSON.stringify(newOmnisharpCakeConfig));
                }
                shared_1.logger.logInfo("Omnisharp setting successfully updated.");
                resolve();
            }
            catch (e) {
                const err = `Failed to update Omnisharp settings: ${e}`;
                shared_1.logger.logError(err);
                reject(err);
            }
        });
    }
    getOmnisharpUserFolderPath() {
        return path.join(os.homedir(), ".omnisharp");
    }
    getOmnisharpCakeConfigFile() {
        return path.join(this.getOmnisharpUserFolderPath(), "omnisharp.json");
    }
}
exports.CakeBakery = CakeBakery;
//# sourceMappingURL=cakeBakery.js.map