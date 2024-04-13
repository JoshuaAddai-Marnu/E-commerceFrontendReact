"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const _1 = require("./");
/**
 * Get files that match extension in regex on first level of given folder
 *
 * @param {string} folderPath
 * @param {RegExp} fileExtensionMatcher
 */
function getFilesPath(folderPath, fileExtensionMatcher) {
    return new Promise((resolve, reject) => {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                return (0, _1.handleError)(err, err.message, reject);
            }
            const promises = files.map((fileName) => new Promise((resolve, reject) => {
                const filePath = path.resolve(folderPath, fileName);
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        return (0, _1.handleError)(err, err.message, reject);
                    }
                    if (stats) {
                        if (stats.isFile() &&
                            fileExtensionMatcher.test(filePath)) {
                            return resolve([filePath]);
                        }
                    }
                    resolve([]);
                });
            }));
            Promise.all(promises).then(collection => {
                resolve((0, _1.flattenNestedArray)(collection));
            });
        });
    });
}
exports.default = getFilesPath;
//# sourceMappingURL=getFilesPath.js.map