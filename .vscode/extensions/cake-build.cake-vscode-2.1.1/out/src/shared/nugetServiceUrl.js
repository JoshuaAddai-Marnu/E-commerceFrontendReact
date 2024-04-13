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
exports.getNugetServiceUrl = exports.NuGetServiceType = void 0;
const node_fetch_1 = require("node-fetch");
const logger = require("./log");
const vscode_1 = require("vscode");
const constants_1 = require("../constants");
const utils_1 = require("./utils");
var NuGetServiceType;
(function (NuGetServiceType) {
    NuGetServiceType["SearchAutocompleteService"] = "SearchAutocompleteService";
    NuGetServiceType["FlatContainer3"] = "PackageBaseAddress/3.0.0";
    NuGetServiceType["SearchQueryService"] = "SearchQueryService";
})(NuGetServiceType = exports.NuGetServiceType || (exports.NuGetServiceType = {}));
function getNugetServiceUrl(type) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // TODO: the url's won't change every 5 min. - should we cache the call to the services?
            const response = yield (0, node_fetch_1.default)(constants_1.NUGET_SERVICE_INDEX_URL, (0, utils_1.getFetchOptions)(vscode_1.workspace.getConfiguration('http')));
            const json = yield response.json();
            const resources = (json.resources || []).filter((x) => x['@type'] === type);
            let resource = resources.find((x) => x.comment.toLowerCase().indexOf('primary') >= 0);
            if (!resource && resources.length > 0) {
                resource = resources[0];
            }
            if (!resource) {
                throw new Error("Service endpoint not Found: " + type);
            }
            return resource['@id'];
        }
        catch (e) {
            logger.logError("Error reading NuGet Service Url for type: " + type);
            logger.logToOutput(e);
            throw e;
        }
    });
}
exports.getNugetServiceUrl = getNugetServiceUrl;
//# sourceMappingURL=nugetServiceUrl.js.map