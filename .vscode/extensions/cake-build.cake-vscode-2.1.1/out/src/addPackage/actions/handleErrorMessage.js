"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorMessage = void 0;
const vscode_1 = require("vscode");
const constants_1 = require("./../../constants");
const messages_1 = require("../../shared/messages");
function handleErrorMessage(err) {
    vscode_1.window.setStatusBarMessage('');
    if (err !== constants_1.CANCEL) {
        vscode_1.window.showErrorMessage(err.message ||
            err ||
            messages_1.INFORM_UNKNOWN_ERROR);
    }
}
exports.handleErrorMessage = handleErrorMessage;
//# sourceMappingURL=handleErrorMessage.js.map