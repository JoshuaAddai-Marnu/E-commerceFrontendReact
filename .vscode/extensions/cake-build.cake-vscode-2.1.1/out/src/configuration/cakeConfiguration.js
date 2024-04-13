"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeConfiguration = void 0;
var request = require('request');
const vscode = require("vscode");
const path = require("path");
class CakeConfiguration {
    getTargetPath() {
        if (vscode.workspace.rootPath) {
            return path.join(vscode.workspace.rootPath, 'cake.config');
        }
        return '';
    }
    download(stream) {
        return new Promise((resolve, reject) => {
            // Get the Cake configuration.
            var config = vscode.workspace.getConfiguration('cake');
            if (!config) {
                reject('Could not resolve configuration configuration.');
                return;
            }
            // Get the bootstrapper URI from the configuration.
            var uri = config['configuration']['config'];
            if (!uri) {
                reject('Could not resolve configuration URI from configuration.');
                return;
            }
            // Download the bootstrapper.
            request
                .get(uri, { timeout: 4000 })
                .on('response', function (response) {
                if (response.statusCode === 200) {
                    resolve(true);
                }
                else {
                    reject(`Failed to download configuration: ${response.statusMessage}`);
                }
            })
                .on('error', function (e) {
                reject(`Failed to download configuration: ${e}`);
            })
                .pipe(stream);
        });
    }
}
exports.CakeConfiguration = CakeConfiguration;
//# sourceMappingURL=cakeConfiguration.js.map