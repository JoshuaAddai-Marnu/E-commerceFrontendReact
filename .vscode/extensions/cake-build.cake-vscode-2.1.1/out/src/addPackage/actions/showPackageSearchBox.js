"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const messages_1 = require("../../shared/messages");
function showPackageSearchBox() {
    return vscode_1.window.showInputBox({
        placeHolder: messages_1.NUGET_PACKAGE_SEARCH_TERM,
        value: 'Cake.'
    });
}
exports.default = showPackageSearchBox;
//# sourceMappingURL=showPackageSearchBox.js.map