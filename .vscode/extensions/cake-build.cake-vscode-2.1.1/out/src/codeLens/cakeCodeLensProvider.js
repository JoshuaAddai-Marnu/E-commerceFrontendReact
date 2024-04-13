'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeCodeLensProvider = exports.CakeDebugTaskCodeLens = exports.CakeRunTaskCodeLens = void 0;
const vscode_1 = require("vscode");
class CakeRunTaskCodeLens extends vscode_1.CodeLens {
    constructor(range, taskName, fileName) {
        super(range);
        this.command = {
            title: 'run task',
            command: 'cake.runTask',
            arguments: [taskName, fileName]
        };
    }
}
exports.CakeRunTaskCodeLens = CakeRunTaskCodeLens;
class CakeDebugTaskCodeLens extends vscode_1.CodeLens {
    constructor(range, taskName, fileName) {
        super(range);
        this.command = {
            title: 'debug task',
            command: 'cake.debugTask',
            arguments: [taskName, fileName]
        };
    }
}
exports.CakeDebugTaskCodeLens = CakeDebugTaskCodeLens;
class CakeCodeLensProvider {
    constructor(taskRegExp) {
        this._onDidChangeCodeLensesEmitter = new vscode_1.EventEmitter();
        this.showCodeLens = false;
        this._taskNameRegExp = new RegExp(taskRegExp, 'g');
    }
    _getSymbols(document) {
        const symbols = [];
        for (let i = 0; i < document.lineCount; i++) {
            let line = document.lineAt(i);
            let matches = this._taskNameRegExp.exec(line.text);
            if (matches) {
                symbols.push(new vscode_1.SymbolInformation(matches[1], vscode_1.SymbolKind.Method, 'TasksContainer', new vscode_1.Location(document.uri, line.range)));
            }
        }
        return symbols;
    }
    provideCodeLenses(document, token) {
        const mapped = [];
        if (!this.showCodeLens) {
            return mapped;
        }
        return new Promise((resolve, reject) => {
            if (!document) {
                return reject('No open document in the workspace');
            }
            if (token.isCancellationRequested) {
                return resolve(mapped);
            }
            const symbols = this._getSymbols(document);
            symbols.forEach(symbol => {
                mapped.push(new CakeRunTaskCodeLens(symbol.location.range, symbol.name, document.fileName));
                mapped.push(new CakeDebugTaskCodeLens(symbol.location.range, symbol.name, document.fileName));
            });
            return resolve(mapped);
        });
    }
    get onDidChangeCodeLenses() {
        return this._onDidChangeCodeLensesEmitter.event;
    }
    resolveCodeLens(codeLens, token) {
        if (token.isCancellationRequested) {
            return codeLens;
        }
        return codeLens;
    }
    dispose() {
    }
}
exports.CakeCodeLensProvider = CakeCodeLensProvider;
//# sourceMappingURL=cakeCodeLensProvider.js.map