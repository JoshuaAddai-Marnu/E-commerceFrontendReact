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
const vscode_1 = require("vscode");
const node_fetch_1 = require("node-fetch");
const shared_1 = require("../../shared");
const utils_1 = require("../../shared/utils");
const constants_1 = require("../../constants");
const messages_1 = require("../../shared/messages");
const nugetServiceUrl_1 = require("../../shared/nugetServiceUrl");
function fetchPackageVersions(selectedPackageName, versionsUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!selectedPackageName) {
            // User has canceled the process.
            return Promise.reject(constants_1.CANCEL);
        }
        try {
            vscode_1.window.setStatusBarMessage(messages_1.NUGET_LOADING_VERSIONS);
            if (!versionsUrl) {
                versionsUrl = yield (0, nugetServiceUrl_1.getNugetServiceUrl)(nugetServiceUrl_1.NuGetServiceType.FlatContainer3);
            }
            versionsUrl = versionsUrl.replace(/\/?$/, `/${selectedPackageName.toLowerCase()}/index.json`);
            shared_1.logger.logInfo(`Fetching package versions for package '${selectedPackageName}' using URL: ${versionsUrl}`);
            const response = yield (0, node_fetch_1.default)(versionsUrl, (0, utils_1.getFetchOptions)(vscode_1.workspace.getConfiguration('http')));
            vscode_1.window.setStatusBarMessage('');
            return { response, selectedPackageName };
        }
        catch (e) {
            shared_1.logger.logError("Error fetching package versions from NuGet for package: " + selectedPackageName);
            shared_1.logger.logToOutput(e);
            throw e;
        }
    });
}
exports.default = fetchPackageVersions;
//# sourceMappingURL=fetchPackageVersions.js.map