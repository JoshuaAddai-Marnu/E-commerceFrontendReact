"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const child_process_1 = require('child_process');
const vscode_1 = require('vscode');
const packageReferenceTagName = "PackageReference";
function installPackage(pkg) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!pkg) {
            console.log('Refusing to install empty package');
            return;
        }
        let docUri = vscode_1.window.activeTextEditor.document.uri, projectFile = yield findProjectFile(docUri);
        if (!projectFile) {
            return;
        }
        addReferenceToProjectFile(pkg, projectFile)
            .then(restorePackages)
            .then(x => vscode_1.window.setStatusBarMessage(`Installed package ${pkg.Name} <${pkg.Version}>`, 5000))
            .catch(err => vscode_1.window.showErrorMessage(err));
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = installPackage;
function addReferenceToProjectFile(pkg, projectFile) {
    return __awaiter(this, void 0, void 0, function* () {
        let projectDocument = yield vscode_1.workspace.openTextDocument(projectFile), projectText = projectDocument.getText(), alreadyHasReference = (projectText.indexOf(`"${pkg.Name}"`) !== -1), lastPackageTagIndex = projectText.lastIndexOf(`<${packageReferenceTagName}`);
        if (alreadyHasReference) {
            return;
        }
        if (!lastPackageTagIndex) {
            return;
        }
        let insertIndex = projectText.indexOf('\>', lastPackageTagIndex) + '\>'.length, insertPosition = projectDocument.positionAt(insertIndex), currentDocument = vscode_1.window.activeTextEditor.document, projectEditor = yield vscode_1.window.showTextDocument(projectDocument);
        yield projectEditor.edit(editor => editor.insert(insertPosition, `
    <PackageReference Include="${pkg.Name}" Version="${pkg.Version}" />`));
        yield projectDocument.save();
        vscode_1.window.showTextDocument(currentDocument);
        return projectFile;
    });
}
function restorePackages(projectFile) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            child_process_1.exec(`dotnet restore "${projectFile.fsPath}"`, (errorMesg, out, err) => {
                if (errorMesg) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    });
}
function findProjectFile(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        let paths = getRootPaths(uri), projectFiles = yield vscode_1.workspace.findFiles('**/*.csproj', ''), matches = projectFiles.filter(x => paths.filter(path => x.toString().startsWith(path)).length);
        console.log(`Found ${matches.length} project files: ${JSON.stringify(matches.map(x => x.toString()))}`);
        return matches.length ? matches[0] : null;
    });
}
function getRootPaths(uri) {
    let paths = [], currentPath = uri.toString();
    while (currentPath.lastIndexOf('/') > 0) {
        currentPath = currentPath.substr(0, currentPath.lastIndexOf('/'));
        paths.push(currentPath);
    }
    return paths;
}
//# sourceMappingURL=installPackage.js.map