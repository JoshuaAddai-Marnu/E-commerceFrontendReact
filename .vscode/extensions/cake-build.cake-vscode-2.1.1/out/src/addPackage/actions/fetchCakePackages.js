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
const qs = require("querystring");
const node_fetch_1 = require("node-fetch");
const shared_1 = require("../../shared");
const utils_1 = require("../../shared/utils");
const vscode_1 = require("vscode");
const constants_1 = require("../../constants");
const messages_1 = require("../../shared/messages");
const nugetServiceUrl_1 = require("../../shared/nugetServiceUrl");
function fetchCakePackages(value, searchUrl, take = constants_1.CAKE_SEARCH_PAGE_SIZE) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!value) {
            // User has canceled the process.
            return Promise.reject(constants_1.CANCEL);
        }
        if (!searchUrl) {
            searchUrl = yield (0, nugetServiceUrl_1.getNugetServiceUrl)(nugetServiceUrl_1.NuGetServiceType.SearchAutocompleteService);
        }
        vscode_1.window.setStatusBarMessage(messages_1.NUGET_SEARCHING_PACKAGES);
        const queryParams = qs.stringify({
            q: value,
            prerelease: 'true',
            take: take
        });
        try {
            const fullUrl = `${searchUrl}?${queryParams}`;
            shared_1.logger.logInfo(`Fetching available packages for query '${value}' using URL: ${fullUrl}`);
            return yield (0, node_fetch_1.default)(fullUrl, (0, utils_1.getFetchOptions)(vscode_1.workspace.getConfiguration('http')));
        }
        catch (e) {
            shared_1.logger.logError("Error fetching available packages from NuGet for query: " + value);
            shared_1.logger.logToOutput(e);
            throw e;
        }
    });
}
exports.default = fetchCakePackages;
//# sourceMappingURL=fetchCakePackages.js.map