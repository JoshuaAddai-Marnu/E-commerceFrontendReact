"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeBootstrapper = void 0;
var request = require('request');
const vscode = require("vscode");
const path = require("path");
const cakeBootstrapperInfo_1 = require("./cakeBootstrapperInfo");
const shared_1 = require("../shared");
class CakeBootstrapper {
    constructor(info) {
        this._info = info;
    }
    getTargetPath() {
        if (vscode.workspace.rootPath) {
            return path.join(vscode.workspace.rootPath, this._info.fileName);
        }
        return '';
    }
    static getBootstrappers() {
        return CakeBootstrapper.bootstrappers;
    }
    static getBootstrappersByType(bootstrapperType) {
        var filteredBootstrappers = CakeBootstrapper.bootstrappers.filter(bootstrapper => bootstrapper.type === bootstrapperType);
        return filteredBootstrappers;
    }
    download(stream) {
        return new Promise((resolve, reject) => {
            // Get the Cake configuration.
            var config = vscode.workspace.getConfiguration('cake');
            if (!config) {
                reject('Could not resolve bootstrapper configuration.');
                return;
            }
            // Get the bootstrapper URI from the configuration.
            var uri = config['bootstrappers'][this._info.id];
            if (!uri) {
                reject('Could not resolve bootstrapper URI from configuration.');
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
                    reject(`Failed to download bootstrapper: ${response.statusMessage}`);
                }
            })
                .on('error', function (e) {
                reject(`Failed to download bootstrapper: ${e}`);
            })
                .pipe(stream);
        });
    }
}
exports.CakeBootstrapper = CakeBootstrapper;
CakeBootstrapper.bootstrappers = [
    new cakeBootstrapperInfo_1.CakeBootstrapperInfo('dotnet-tool-powershell', '.NET Tool runner PowerShell', shared_1.enums.RunnerType.NetTool, 'Bootstrapper for .NET Tool on Windows', 'build.ps1', false),
    new cakeBootstrapperInfo_1.CakeBootstrapperInfo('dotnet-tool-bash', '.NET Tool runner Bash', shared_1.enums.RunnerType.NetTool, 'Bootstrapper for .NET Tool on Linux and macOS', 'build.sh', true)
];
//# sourceMappingURL=cakeBootstrapper.js.map