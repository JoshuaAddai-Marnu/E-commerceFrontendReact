"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../shared/utils");
const messages_1 = require("../../shared/messages");
function handleVersionsResponse({ response, selectedPackageName }) {
    if (!response.ok) {
        return (0, utils_1.handleError)(response, messages_1.NUGET_BAD_VERSIONING, Promise.reject.bind(Promise));
    }
    return response.json().then((json) => ({ json, selectedPackageName }));
}
exports.default = handleVersionsResponse;
//# sourceMappingURL=handleVersionsResponse.js.map