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
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const cakeAddAddinCommand_1 = require("./addPackage/cakeAddAddinCommand");
const cakeAddToolCommand_1 = require("./addPackage/cakeAddToolCommand");
const cakeAddModuleCommand_1 = require("./addPackage/cakeAddModuleCommand");
const cakeBootstrapperCommand_1 = require("./bootstrapper/cakeBootstrapperCommand");
const cakeConfigurationCommand_1 = require("./configuration/cakeConfigurationCommand");
const cakeDebugCommand_1 = require("./debug/cakeDebugCommand");
const cakeBuildFileCommand_1 = require("./buildFile/cakeBuildFileCommand");
const cakeInstallCommand_1 = require("./install/cakeInstallCommand");
const cakeBakeryCommand_1 = require("./bakery/cakeBakeryCommand");
const cakeRunTaskCommand_1 = require("./codeLens/cakeRunTaskCommand");
const cakeDebugTaskCommand_1 = require("./codeLens/cakeDebugTaskCommand");
const cakeCodeLensProvider_1 = require("./codeLens/cakeCodeLensProvider");
const cakeDocumentSymbolProvider_1 = require("./documentSymbols/cakeDocumentSymbolProvider");
const utils_1 = require("./shared/utils");
const extensionSettings_1 = require("./extensionSettings");
const fs = require("fs");
const path = require("path");
const os = require("os");
const cakeTool_1 = require("./shared/cakeTool");
const child_process_1 = require("child_process");
const cakeBakery_1 = require("./bakery/cakeBakery");
const shared_1 = require("./shared");
let taskProvider;
let codeLensProvider;
let documentSymbolProvider;
function activate(context) {
    const config = (0, extensionSettings_1.getExtensionSettings)();
    // Register the add addin command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.addAddin', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeAddAddinCommand_1.installAddAddinCommand)();
    })));
    // Register the add tool command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.addTool', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeAddToolCommand_1.installAddToolCommand)();
    })));
    // Register the add module command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.addModule', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeAddModuleCommand_1.installAddModuleCommand)();
    })));
    // Register the bootstrapper command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.bootstrapper', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeBootstrapperCommand_1.installCakeBootstrapperCommand)();
    })));
    // Register the configuration command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.configuration', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeConfigurationCommand_1.installCakeConfigurationCommand)();
    })));
    // Register the debug command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.debug', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeDebugCommand_1.installCakeDebugCommand)(context);
    })));
    // Register the build file command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.buildFile', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeBuildFileCommand_1.installBuildFileCommand)();
    })));
    // Register the interactive install command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.install', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeInstallCommand_1.installCakeToWorkspaceCommand)(context);
    })));
    // Register the interactive install command.
    context.subscriptions.push(vscode.commands.registerCommand('cake.intellisense', () => __awaiter(this, void 0, void 0, function* () {
        (0, cakeBakeryCommand_1.updateCakeBakeryCommand)(context.extensionPath);
    })));
    // Subscribe to terminal close event to remove reference from executor
    context.subscriptions.push(vscode.window.onDidCloseTerminal((closedTerminal) => {
        utils_1.TerminalExecutor.onDidCloseTerminal(closedTerminal);
    }));
    // Register code lens provider and tasks
    _registerCodeLens(config.codeLens, context);
    _registerSymbolProvider(config.codeSymbols, context);
    _registerCakeBakery(context);
    vscode.workspace.onDidChangeConfiguration(x => onConfigurationChanged(context, x));
    onConfigurationChanged(context, null);
}
exports.activate = activate;
function _registerCakeBakery(context) {
    return __awaiter(this, void 0, void 0, function* () {
        let bakery = new cakeBakery_1.CakeBakery(context.extensionPath);
        var targetPath = bakery.getTargetPath();
        if (!fs.existsSync(targetPath)) {
            yield bakery.downloadAndExtract();
            yield bakery.updateOmnisharpSettings();
        }
        else {
            shared_1.logger.logToOutput("Cake.Bakery has already been installed, skipping automated download and extraction.");
        }
    });
}
function onConfigurationChanged(context, event) {
    if (event && !event.affectsConfiguration("cake")) {
        // we're not affected
        return;
    }
    const config = (0, extensionSettings_1.getExtensionSettings)();
    _verifyTasksRunner(config.taskRunner, context);
    _verifyCodeLens(config.codeLens);
    _verifySymbolProvider(config.codeSymbols);
}
function _verifyTasksRunner(config, context) {
    if (taskProvider && !config.autoDetect) {
        taskProvider.dispose();
        taskProvider = undefined;
        return;
    }
    if (!taskProvider && config.autoDetect) {
        taskProvider = vscode.workspace.registerTaskProvider('cake', {
            provideTasks: () => __awaiter(this, void 0, void 0, function* () {
                return yield _getCakeScriptsAsTasks(context);
            }),
            resolveTask(_task) {
                return undefined;
            }
        });
    }
}
function _getCakeScriptsAsTasks(context) {
    return __awaiter(this, void 0, void 0, function* () {
        let workspaceRoot = vscode.workspace.rootPath;
        let emptyTasks = [];
        if (!workspaceRoot) {
            return emptyTasks;
        }
        try {
            const config = (0, extensionSettings_1.getExtensionSettings)().taskRunner;
            let files = yield vscode.workspace.findFiles(config.scriptsIncludePattern, config.scriptsExcludePattern);
            if (files.length === 0) {
                return emptyTasks;
            }
            const result = [];
            const addFileName = files.length > 1;
            files.forEach(file => {
                const contents = fs.readFileSync(file.fsPath).toString();
                let taskRegularExpression = new RegExp(config.taskRegularExpression, 'g');
                let matches;
                let taskNames = [];
                while ((matches = taskRegularExpression.exec(contents))) {
                    taskNames.push(matches[1]);
                }
                const buildCommandBase = (0, extensionSettings_1.getPlatformSettingsValue)(config.launchCommand);
                let taskNamePrefix = "";
                if (addFileName) {
                    taskNamePrefix = path.basename(file.fsPath) + ": ";
                }
                taskNames.forEach(taskName => {
                    const kind = {
                        type: 'cake',
                        script: taskName
                    };
                    const buildTask = new vscode.Task(kind, vscode.TaskScope.Workspace, `Run ${taskNamePrefix}${taskName}`, 'Cake', new vscode.CustomExecution(getCakeToolExecution({
                        command: buildCommandBase,
                        script: file.fsPath,
                        taskName,
                        verbosity: config.verbosity
                    }, config, context)), []);
                    buildTask.group = vscode.TaskGroup.Build;
                    result.push(buildTask);
                });
            });
            return result;
        }
        catch (e) {
            return [];
        }
    });
}
function _registerCodeLens(config, context) {
    context.subscriptions.push(vscode.commands.registerCommand('cake.runTask', (taskName, fileName) => __awaiter(this, void 0, void 0, function* () {
        (0, cakeRunTaskCommand_1.installCakeRunTaskCommand)(taskName, fileName, (0, extensionSettings_1.getExtensionSettings)(), context);
    })));
    context.subscriptions.push(vscode.commands.registerCommand('cake.debugTask', (taskName, fileName) => __awaiter(this, void 0, void 0, function* () {
        (0, cakeDebugTaskCommand_1.installCakeDebugTaskCommand)(taskName, fileName, (0, extensionSettings_1.getExtensionSettings)(), context);
    })));
    codeLensProvider = new cakeCodeLensProvider_1.CakeCodeLensProvider(config.taskRegularExpression);
    context.subscriptions.push(vscode.languages.registerCodeLensProvider({
        language: 'csharp',
        pattern: config.scriptsIncludePattern
    }, codeLensProvider));
}
function _registerSymbolProvider(config, context) {
    documentSymbolProvider = new cakeDocumentSymbolProvider_1.CakeDocumentSymbolProvider(config);
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider({
        language: 'csharp',
        scheme: 'file'
    }, documentSymbolProvider));
}
function _verifySymbolProvider(_config) {
    documentSymbolProvider.reconfigure(_config);
}
function _verifyCodeLens(config) {
    codeLensProvider.showCodeLens = config.showCodeLens;
}
function deactivate() {
    if (taskProvider) {
        taskProvider.dispose();
    }
}
exports.deactivate = deactivate;
function getCakeToolExecution(cfg, settings, context) {
    return (_) => {
        return new Promise((now) => now(new CakeTaskWrapper(cfg, settings, context)));
    };
}
class CakeTaskWrapper {
    constructor(cfg, settings, context) {
        this.cfg = cfg;
        this.settings = settings;
        this.context = context;
        this.writeEmitter = new vscode.EventEmitter();
        this.onDidWrite = this.writeEmitter.event;
        this.closeEmitter = new vscode.EventEmitter();
        this.onDidClose = this.closeEmitter.event;
        this.isCanceled = false;
    }
    close() {
        this.isCanceled = true;
    }
    open(_) {
        this.runTask();
    }
    runTask() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.settings.installNetTool) {
                const cakeTool = new cakeTool_1.CakeTool(this.context);
                yield cakeTool.ensureInstalled();
            }
            if (this.isCanceled) {
                return;
            }
            // run the task
            const proc = (0, child_process_1.spawn)(this.cfg.command, [`${this.cfg.script}`, `--target="${this.cfg.taskName}"`, `--verbosity=${this.cfg.verbosity}`], {
                shell: true, // not sure, why a shell is needed here.
            });
            this.writeEmitter.fire(`started command: ${proc.spawnargs.join(" ")}${os.EOL}`);
            let exit = 0;
            proc.on('error', (error) => {
                this.setColorRed();
                this.writeEmitter.fire(`ERROR: ${error.name}${os.EOL}${error.message}${os.EOL}`);
                if (error.stack) {
                    this.writeEmitter.fire(error.stack + os.EOL);
                }
                this.resetColor();
                exit = 1;
            });
            proc.stdout.on('data', (data) => {
                const txt = data.toString();
                this.writeEmitter.fire(txt);
            });
            proc.stderr.on('data', (data) => {
                const txt = data.toString();
                this.setColorRed();
                this.writeEmitter.fire(txt);
                this.resetColor();
            });
            proc.on('close', () => {
                this.closeEmitter.fire(exit);
                this.writeEmitter.dispose();
                this.closeEmitter.dispose();
            });
        });
    }
    setColorRed() {
        this.writeEmitter.fire('\x1b[31m');
    }
    resetColor() {
        this.writeEmitter.fire('\x1b[39m');
    }
}
//# sourceMappingURL=cakeMain.js.map