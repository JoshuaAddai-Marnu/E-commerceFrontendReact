"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showVersionsWithLatestQuickPick = exports.showVersionsQuickPick = void 0;
const vscode_1 = require("vscode");
const constants_1 = require("../../constants");
function _showVersionsQuickPick(selectedPackageName, versions) {
    return new Promise((resolve, reject) => {
        vscode_1.window
            .showQuickPick(versions, {
            placeHolder: 'Select the version to add.'
        })
            .then((selectedVersion) => {
            if (!selectedVersion) {
                // User canceled.
                return reject(constants_1.CANCEL);
            }
            resolve({ selectedVersion, selectedPackageName });
        });
    });
}
function showVersionsQuickPick({ json, selectedPackageName }) {
    const versions = json.versions.slice().reverse();
    return _showVersionsQuickPick(selectedPackageName, versions);
}
exports.showVersionsQuickPick = showVersionsQuickPick;
function showVersionsWithLatestQuickPick({ json, selectedPackageName }) {
    const versions = json.versions
        .slice()
        .reverse()
        .concat('Latest version (Wildcard *)');
    return _showVersionsQuickPick(selectedPackageName, versions);
}
exports.showVersionsWithLatestQuickPick = showVersionsWithLatestQuickPick;
//# sourceMappingURL=showVersionsQuickPick.js.map