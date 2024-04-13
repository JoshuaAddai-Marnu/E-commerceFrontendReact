"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeContentToFile = exports.writeLinesToFile = exports.getErrorMessage = void 0;
const fs = require("fs");
const utils_1 = require("../../shared/utils");
const vscode_1 = require("vscode");
function getErrorMessage(filePath) {
    return `Failed to write an updated ${filePath} file. Please try again.`;
}
exports.getErrorMessage = getErrorMessage;
function writeLinesToFile({ filePath, message, lines }) {
    return new Promise((resolve, reject) => {
        try {
            let stream = fs.createWriteStream(filePath, {
                flags: 'w'
            });
            lines.forEach(line => stream.write(line));
            stream.end();
            stream.on('finish', function () {
                vscode_1.workspace.openTextDocument(filePath).then(document => {
                    vscode_1.window.showTextDocument(document);
                });
                return resolve(`Success! Wrote ${message} to ${filePath}. Run the script to get the package.`);
            });
        }
        catch (error) {
            return (0, utils_1.handleError)(null, getErrorMessage(filePath), reject);
        }
    });
}
exports.writeLinesToFile = writeLinesToFile;
function writeContentToFile({ filePath, content, message }) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, err => {
            if (err) {
                return (0, utils_1.handleError)(err, getErrorMessage(filePath), reject);
            }
            return resolve(`Success! Wrote ${message} to ${filePath}. Run the script to get the package.`);
        });
    });
}
exports.writeContentToFile = writeContentToFile;
//# sourceMappingURL=handleWriteFile.js.map