'use strict';
const vscode = require('vscode');
const installPackage_1 = require('./installPackage');
const search_1 = require('./search');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.nugetReversePackageSearch', executeReversePackageSearch);
    context.subscriptions.push(disposable);
    return {
        installPackage: installPackage_1.default,
        search: search_1.default,
    };
}
exports.activate = activate;
function executeReversePackageSearch() {
    let window = vscode.window, editor = vscode.window.activeTextEditor, query = editor && editor.document.getText(editor.selection);
    let req = search_1.default(query)
        .then(onPackageSearchComplete.bind(this, query))
        .catch(onPackageSearchError);
    window.setStatusBarMessage(`Performing reverse NuGet package search for "${query}"...`, req);
}
function onPackageSearchComplete(query, packages) {
    if (!packages.length) {
        vscode.window.showInformationMessage(`No packages found for "${query}"`);
        return;
    }
    let quickPicks = packages.map(x => ({
        Name: x.Name,
        Version: x.Version,
        description: x.Version,
        label: x.Name,
    }));
    vscode.window.showQuickPick(quickPicks)
        .then(installPackage_1.default);
}
function onPackageSearchError(err) {
    console.error(err);
    vscode.window.showErrorMessage(err);
}
// this method is called when your extension is deactivated
function deactivate() {
    // Intentionally empty (for now)
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map