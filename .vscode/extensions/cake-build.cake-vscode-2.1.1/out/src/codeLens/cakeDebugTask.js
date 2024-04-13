"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeDebugTask = void 0;
const vscode_1 = require("vscode");
const shared_1 = require("./shared");
const extensionSettings_1 = require("../extensionSettings");
class CakeDebugTask {
    constructor(context) {
        this.context = context;
    }
    _getDebuggerConfig(taskName, fileName, debugConfig) {
        return new Promise((resolve, reject) => {
            if (!taskName) {
                reject('Not a valid Cake task');
            }
            const program = (0, extensionSettings_1.getPlatformSettingsValue)(debugConfig.program);
            const debuggerConfig = {
                name: 'Cake: Task Debug Script',
                type: debugConfig.debugType,
                request: debugConfig.request,
                program: program,
                args: [
                    `${fileName}`,
                    `--target=${taskName}`,
                    '--debug',
                    `--verbosity=${debugConfig.verbosity}`
                ],
                cwd: debugConfig.cwd,
                stopAtEntry: debugConfig.stopAtEntry,
                console: debugConfig.console,
                logging: debugConfig.logging,
                // This is hard-coded to false, and not made a config value
                // since setting to anything else, results in debugging of
                // Cake scripts not working.
                justMyCode: false
            };
            resolve(debuggerConfig);
        });
    }
    debug(taskName, fileName, settings) {
        return __awaiter(this, void 0, void 0, function* () {
            const debugConfig = settings.codeLens.debugTask;
            try {
                if (!vscode_1.workspace.workspaceFolders ||
                    vscode_1.workspace.workspaceFolders.length < 1) {
                    throw new Error('No open workspace');
                }
                yield (0, shared_1.ensureNotDirty)(fileName);
                yield (0, shared_1.installCakeToolIfNeeded)(settings, this.context);
                const workspaceFolder = vscode_1.workspace.workspaceFolders[0];
                const debuggerConfig = yield this._getDebuggerConfig(taskName, fileName, debugConfig);
                return yield vscode_1.debug.startDebugging(workspaceFolder, debuggerConfig);
            }
            catch (reason) {
                vscode_1.window.showErrorMessage(`Failed to start Cake task debugger: ${reason}`);
                return false;
            }
        });
    }
}
exports.CakeDebugTask = CakeDebugTask;
//# sourceMappingURL=cakeDebugTask.js.map