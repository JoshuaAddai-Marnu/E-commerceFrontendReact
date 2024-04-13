"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages_1 = require("../messages");
/**
 * Truncate file path using the given workspace root path
 *
 * @param {string} filePath,
 * @param {string} rootPath
 */
function truncateFilePath(filePath, rootPath) {
    if (!rootPath) {
        // Can be undefined if no folder is open in VS Code.
        throw new Error(messages_1.WORKSPACE_ROOTPATH_ERROR);
    }
    return filePath.replace(rootPath, '');
}
exports.default = truncateFilePath;
//# sourceMappingURL=truncateFilePath.js.map