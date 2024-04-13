"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showDebugTypeOption = exports.showDebugOption = exports.showConfigOption = exports.showBootstrapperTypeOption = exports.showBootstrapperOption = exports.showScriptNameBox = exports.installCake = void 0;
const vscode = require("vscode");
const constants_1 = require("../../constants");
const shared_1 = require("../../shared");
const installOptions_1 = require("../installOptions");
const installCake_1 = require("./installCake");
Object.defineProperty(exports, "installCake", { enumerable: true, get: function () { return installCake_1.installCake; } });
function showScriptNameBox(context) {
    return vscode.window.showInputBox({
        placeHolder: shared_1.messages.PROMPT_SCRIPT_NAME,
        value: constants_1.DEFAULT_SCRIPT_NAME
    }).then((scriptName) => {
        if (!scriptName) {
            // user cancelled
            return Promise.reject(constants_1.CANCEL);
        }
        return Promise.resolve(new installOptions_1.default(scriptName, context));
    });
}
exports.showScriptNameBox = showScriptNameBox;
function showBootstrapperOption(installOpts) {
    if (installOpts) {
        if (!installOpts) {
            Promise.reject(constants_1.CANCEL);
        }
        return getOption(shared_1.messages.CONFIRM_INSTALL_BOOTSTRAPPERS, installOpts, (opts, value) => {
            if (opts) {
                opts.installBootstrappers = value;
                return opts;
            }
            else {
                throw "Installation options are not defined.";
            }
        });
    }
    else {
        throw "Installation options are not defined";
    }
}
exports.showBootstrapperOption = showBootstrapperOption;
function showBootstrapperTypeOption(installOpts) {
    if (installOpts) {
        if (installOpts.installBootstrappers) {
            installOpts.bootstrapperType = shared_1.enums.RunnerType.NetTool;
            return Promise.resolve(installOpts);
        }
        else {
            return Promise.resolve(installOpts);
        }
    }
    else {
        throw "Installation options are not defined";
    }
}
exports.showBootstrapperTypeOption = showBootstrapperTypeOption;
function showConfigOption(installOpts) {
    if (!installOpts) {
        Promise.reject(constants_1.CANCEL);
    }
    return getOption(shared_1.messages.CONFIRM_INSTALL_CONFIG, installOpts, (opts, value) => {
        if (opts) {
            opts.installConfig = value;
            return opts;
        }
        else {
            throw "Installation options are not defined.";
        }
    });
}
exports.showConfigOption = showConfigOption;
function showDebugOption(installOpts) {
    if (!installOpts) {
        Promise.reject(constants_1.CANCEL);
    }
    return getOption(shared_1.messages.CONFIRM_DEBUG_CONFIG, installOpts, (opts, value) => {
        if (opts) {
            opts.installDebug = value;
            return opts;
        }
        else {
            throw "Installation options are not defined.";
        }
    });
}
exports.showDebugOption = showDebugOption;
function showDebugTypeOption(installOpts) {
    if (!installOpts) {
        Promise.reject(constants_1.CANCEL);
    }
    if (installOpts === null || installOpts === void 0 ? void 0 : installOpts.installDebug) {
        installOpts.debuggerType = shared_1.enums.DebugType.NetTool;
        return Promise.resolve(installOpts);
    }
    else {
        return Promise.resolve(installOpts);
    }
}
exports.showDebugTypeOption = showDebugTypeOption;
function getOption(message, options, callback) {
    return new Promise((resolve, reject) => {
        vscode.window
            .showQuickPick(['Yes', 'No'], {
            placeHolder: message
        })
            .then((value) => {
            if (!value) {
                reject(constants_1.CANCEL);
            }
            callback(options, value == 'Yes');
            resolve(options);
        });
    });
}
//# sourceMappingURL=index.js.map