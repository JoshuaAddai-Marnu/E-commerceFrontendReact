"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const utils_1 = require("../../shared/utils");
const messages_1 = require("../../shared/messages");
function showPackageQuickPick(json) {
    const errorMessage = messages_1.NOT_MATCHING_RESULTS_FOUND;
    if (!json) {
        return (0, utils_1.handleError)(null, errorMessage, Promise.reject.bind(Promise));
    }
    const { data } = json;
    if (!data || data.length < 1) {
        return (0, utils_1.handleError)(null, errorMessage, Promise.reject.bind(Promise));
    }
    return vscode_1.window.showQuickPick(data);
}
exports.default = showPackageQuickPick;
//# sourceMappingURL=showPackageQuickPick.js.map