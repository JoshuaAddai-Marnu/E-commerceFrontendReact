"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileErrorMessage = exports.getDirErrorMessage = exports.handleError = void 0;
const shared_1 = require("../../shared");
/**
 * Writes an error to the logger but rejects with the given message
 *
 * @param {Error} err
 * @param {string} displayMessage
 * @param {Function} rejector - function to use for rejecting
 */
function handleError(err, displayMessage, rejector) {
    shared_1.logger.logError(displayMessage);
    if (err) {
        if (typeof (err) == "object") {
            err = JSON.stringify(err);
        }
        shared_1.logger.logToOutput(err);
    }
    return rejector(displayMessage);
}
exports.handleError = handleError;
function getDirErrorMessage(verb, directoryPath) {
    return `Could not ${verb} the directory at ${directoryPath}. Please try again.`;
}
exports.getDirErrorMessage = getDirErrorMessage;
function getFileErrorMessage(verb, fileFullPath) {
    return `Could not ${verb} the file at ${fileFullPath}. Please try again.`;
}
exports.getFileErrorMessage = getFileErrorMessage;
//# sourceMappingURL=handleError.js.map