"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInfo = exports.logError = exports.logToOutput = void 0;
const vscode_1 = require("vscode");
const constants_1 = require("../constants");
let channel;
function logToOutput(...items) {
    var channel = getChannel(constants_1.OUTPUT_CHANNEL_NAME);
    items.forEach(item => {
        channel.appendLine(item);
    });
}
exports.logToOutput = logToOutput;
function logError(error, notify = true) {
    var channel = getChannel(constants_1.OUTPUT_CHANNEL_NAME);
    channel.appendLine('Error encountered during Cake operation.');
    channel.appendLine(`E: ${error}`);
    if (notify) {
        vscode_1.window.showErrorMessage(error);
    }
}
exports.logError = logError;
function logInfo(info, notify = false) {
    var channel = getChannel(constants_1.OUTPUT_CHANNEL_NAME);
    channel.appendLine(`I: ${info}`);
    if (notify) {
        vscode_1.window.showInformationMessage(info);
    }
}
exports.logInfo = logInfo;
function getChannel(name) {
    var _a, _b;
    if (!channel) {
        channel = vscode_1.window.createOutputChannel(name);
        const thisExtension = ((_b = (_a = vscode_1.extensions.getExtension("cake-build.cake-vscode")) === null || _a === void 0 ? void 0 : _a.packageJSON) !== null && _b !== void 0 ? _b : {});
        channel.appendLine(`This is ${thisExtension.name}, version ${thisExtension.version}`);
    }
    return channel;
}
//# sourceMappingURL=log.js.map