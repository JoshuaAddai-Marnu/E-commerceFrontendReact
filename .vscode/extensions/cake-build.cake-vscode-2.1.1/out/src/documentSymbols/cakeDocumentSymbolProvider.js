'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeDocumentSymbolProvider = void 0;
const vscode_1 = require("vscode");
class CakeDocumentSymbolProvider {
    constructor(config) {
        this.reconfigure(config);
    }
    reconfigure(config) {
        this.ctxRegEx = new RegExp(config.contextRegularExpression, 'gm');
        this.taskRegEx = new RegExp(config.taskRegularExpression, 'gm');
    }
    provideDocumentSymbols(document, token) {
        return new Promise((resolve, reject) => {
            let context = new vscode_1.DocumentSymbol("Context", "Context functions", vscode_1.SymbolKind.Namespace, new vscode_1.Range(0, 0, 0, 0), new vscode_1.Range(0, 0, 0, 0));
            let tasks = new vscode_1.DocumentSymbol("Tasks", "Task functions", vscode_1.SymbolKind.Namespace, new vscode_1.Range(0, 0, 0, 0), new vscode_1.Range(0, 0, 0, 0));
            const symbols = [];
            symbols.push(context, tasks);
            if (!document) {
                return reject('No open document in the workspace');
            }
            for (var i = 0; i < document.lineCount; i++) {
                if (token.isCancellationRequested) {
                    return resolve(symbols);
                }
                const line = document.lineAt(i);
                let match = this.matchTask(line.text);
                if (match !== null) {
                    tasks.children.push(new vscode_1.DocumentSymbol(match[1], "", vscode_1.SymbolKind.Function, line.range, line.range));
                }
                else {
                    match = this.matchContext(line.text);
                    if (match !== null) {
                        context.children.push(new vscode_1.DocumentSymbol(match[0], "", vscode_1.SymbolKind.Function, line.range, line.range));
                    }
                }
            }
            resolve(symbols);
        });
    }
    matchTask(line) {
        return this.taskRegEx.exec(line);
    }
    matchContext(line) {
        return this.ctxRegEx.exec(line);
    }
}
exports.CakeDocumentSymbolProvider = CakeDocumentSymbolProvider;
//# sourceMappingURL=cakeDocumentSymbolProvider.js.map