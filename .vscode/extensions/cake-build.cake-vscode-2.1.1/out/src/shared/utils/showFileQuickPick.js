"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const _1 = require("./");
const constants_1 = require("../../constants");
function _getPlaceholder(action) {
    return `Which file do you wish to ${action.toLowerCase()} this dependency?`;
}
/**
 * Show quick pick to choose one file from given files
 *
 * @param {string[]} files
 * @param {string} action
 */
function showFileQuickPick(files, action) {
    // Truncate used file paths for readability, mapping the truncated string to the full path
    // for easy retrieval once a truncated path is picked by the user.
    const rootPath = vscode_1.workspace.rootPath == null ? '' : vscode_1.workspace.rootPath;
    const truncatedPathMap = files.reduce((newMap, filePath) => {
        newMap[(0, _1.truncateFilePath)(filePath, rootPath)] = filePath;
        return newMap;
    }, {});
    return vscode_1.window
        .showQuickPick(Object.keys(truncatedPathMap), {
        placeHolder: _getPlaceholder(action)
    })
        .then((choice) => {
        if (!choice) {
            // User canceled.
            return Promise.reject(constants_1.CANCEL);
        }
        return truncatedPathMap[choice];
    });
}
exports.default = showFileQuickPick;
//# sourceMappingURL=showFileQuickPick.js.map