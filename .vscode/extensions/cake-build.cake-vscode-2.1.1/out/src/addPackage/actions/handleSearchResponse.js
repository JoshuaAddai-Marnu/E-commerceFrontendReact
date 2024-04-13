"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../../shared/messages");
function handleSearchResponse(response) {
    if (!response.ok) {
        return Promise.reject(messages_1.NUGET_BAD_RESPONSE);
    }
    return response.json();
}
exports.default = handleSearchResponse;
//# sourceMappingURL=handleSearchResponse.js.map