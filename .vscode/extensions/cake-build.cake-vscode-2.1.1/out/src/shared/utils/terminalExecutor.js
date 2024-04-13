"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./../../constants");
const child_process_1 = require("child_process");
const vscode = require("vscode");
class TerminalExecutor {
    static runInTerminal(command, addNewLine = true, terminal = constants_1.CAKE_DEFAULT_TERMINAL) {
        if (this.terminals[terminal] === undefined) {
            this.terminals[terminal] = vscode.window.createTerminal(terminal);
        }
        this.terminals[terminal].show();
        this.terminals[terminal].sendText(command, addNewLine);
    }
    static exec(command) {
        return (0, child_process_1.exec)(command);
    }
    static execSync(command) {
        return (0, child_process_1.execSync)(command, { encoding: 'utf8' });
    }
    static onDidCloseTerminal(closedTerminal) {
        delete this.terminals[closedTerminal.name];
    }
}
exports.default = TerminalExecutor;
TerminalExecutor.terminals = {};
//# sourceMappingURL=terminalExecutor.js.map