"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCakeFilesPath = exports.checkFilesPath = void 0;
const _1 = require("./");
const constants_1 = require("./../../constants");
/**
 * Check files that match extension in regex on first level of given folder
 *
 * @param {string} folderPath
 * @param {string} fileExtension
 * @param {RegExp} fileExtensionMatcher
 */
function checkFilesPath(folderPath, fileExtensionMatcher, fileExtension, folderMessage) {
    return (0, _1.getFilesPath)(folderPath, fileExtensionMatcher).then((foundFiles) => {
        if (foundFiles.length < 1) {
            return (0, _1.handleError)(null, `Cannot find any ${fileExtension} file on the ${folderMessage} of your project! Please try again.`, Promise.reject.bind(Promise));
        }
        return foundFiles;
    });
}
exports.checkFilesPath = checkFilesPath;
/**
 * Check cake files on first level of given folder
 *
 * @param {string} folderPath
 */
function checkCakeFilesPath(folderPath) {
    return checkFilesPath(folderPath, constants_1.CAKE_FILE_EXTENSION_MATCHER, constants_1.CAKE_FILE_EXTENSION, 'root');
}
exports.checkCakeFilesPath = checkCakeFilesPath;
//# sourceMappingURL=checkFilesPath.js.map