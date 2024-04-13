"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtensionSettings = exports.getPlatformSettingsValue = void 0;
const vscode = require("vscode");
const os = require("os");
function getPlatformSettingsValue(settings) {
    return settings[os.platform()] || settings.default;
}
exports.getPlatformSettingsValue = getPlatformSettingsValue;
function getExtensionSettings() {
    const settings = vscode.workspace.getConfiguration('cake');
    const taskRunner = settings.taskRunner;
    const codeLens = settings.codeLens;
    // extend "cake.taskRunner.launchCommand" here, because the default of `{"default":"...", "win32":"..."}`
    // can not (!) be part of the vs-internal settings defaults or else the platform-specific setting
    // can never be overridden. (i.e. win32 will always be set.)
    const launchCommand = _ensureDefaultsOnLaunchCommand(taskRunner.launchCommand);
    // also extend "cake.codeLens.debugTask.program" here, of the same reason as above.
    const debugTaskProgram = _ensureDefaultsOnDebugTaskProgram(codeLens.debugTask.program);
    return Object.assign(Object.assign({}, settings), { taskRunner: Object.assign(Object.assign({}, taskRunner), { launchCommand: launchCommand }), codeLens: Object.assign(Object.assign({}, codeLens), { debugTask: Object.assign(Object.assign({}, codeLens.debugTask), { program: debugTaskProgram }) }) });
}
exports.getExtensionSettings = getExtensionSettings;
function _ensureDefaultsOnLaunchCommand(launchCommand) {
    const defaultVal = {
        default: "~/.dotnet/tools/dotnet-cake",
        win32: "dotnet-cake.exe"
    };
    return _ensureDefaultsOnPlatformSetting(launchCommand, defaultVal);
}
function _ensureDefaultsOnDebugTaskProgram(program) {
    const defaultVal = {
        default: "~/.dotnet/tools/dotnet-cake",
        win32: "dotnet-cake.exe"
    };
    return _ensureDefaultsOnPlatformSetting(program, defaultVal);
}
function _ensureDefaultsOnPlatformSetting(inputVal, defaultVal) {
    if (!inputVal) {
        return defaultVal;
    }
    // ensure "default" is always set.
    if (!inputVal.default) {
        inputVal = Object.assign(Object.assign({}, inputVal), { default: defaultVal.default });
    }
    return inputVal;
}
//# sourceMappingURL=extensionSettings.js.map