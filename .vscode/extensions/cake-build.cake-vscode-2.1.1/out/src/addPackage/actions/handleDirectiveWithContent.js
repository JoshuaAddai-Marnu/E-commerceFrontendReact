"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleModuleWithContent = exports.handleToolWithContent = exports.handleAddinWithContent = void 0;
const fs = require("fs");
const byline = require("byline");
const utils_1 = require("../../shared/utils");
const vscode_1 = require("vscode");
const utils_2 = require("../../shared/utils");
const constants_1 = require("../../constants");
function _containsDirectiveWithPackage(str, directive, packageName) {
    return str.startsWith(directive) && str.indexOf(packageName) !== -1;
}
function _getFileContentWithDirective(pickedFilePath, directive, packageName, directiveLine) {
    return new Promise((resolve, reject) => {
        const fileStream = fs.createReadStream(pickedFilePath, {
            encoding: 'utf8'
        });
        const stream = byline(fileStream, { keepEmptyLines: true });
        let content = [];
        let containDirective = false;
        stream.on('data', line => {
            if (!containDirective &&
                _containsDirectiveWithPackage(line.toString(), directive, packageName)) {
                content.push(directiveLine);
                containDirective = true;
            }
            else {
                content.push(line.toString() + '\n');
            }
        });
        stream.on('error', err => {
            return (0, utils_1.handleError)(err, (0, utils_2.getFileErrorMessage)('read', pickedFilePath), reject);
        });
        stream.on('end', () => {
            if (!containDirective) {
                content.unshift(directiveLine);
            }
            resolve({
                filePath: pickedFilePath,
                message: packageName,
                lines: content
            });
        });
    });
}
function _handleDirectiveWithFileContent(directive, selectedVersion, selectedPackageName) {
    const rootPath = vscode_1.workspace.rootPath == null ? '' : vscode_1.workspace.rootPath;
    return (0, utils_2.checkCakeFilesPath)(rootPath)
        .then((result) => {
        if (result.length === 1) {
            return result[0];
        }
        return (0, utils_2.showFileQuickPick)(result, constants_1.ADD);
    })
        .then((pickedCakeFile) => {
        // ensure to save the cake-file in workspace before taking any actions
        return new Promise((resolve, reject) => {
            if (!pickedCakeFile) {
                // we're all doomed, probably
                resolve(pickedCakeFile);
                return;
            }
            try {
                const cakeFileInEditor = vscode_1.workspace.textDocuments.find(x => x.fileName === pickedCakeFile);
                if (!cakeFileInEditor) {
                    // the file is not open, so no problem.
                    resolve(pickedCakeFile);
                    return;
                }
                cakeFileInEditor.save().then(() => {
                    resolve(pickedCakeFile);
                });
            }
            catch (ex) {
                return (0, utils_1.handleError)(ex, (0, utils_2.getFileErrorMessage)('save', pickedCakeFile), reject);
            }
        });
    })
        .then((pickedCakeFile) => {
        const isLatestVersion = selectedVersion.startsWith('Latest version');
        const withVersion = !isLatestVersion
            ? `&version=${selectedVersion}`
            : '';
        const directiveLine = `${directive} nuget:?package=${selectedPackageName}${withVersion}\n`;
        return _getFileContentWithDirective(pickedCakeFile, directive, selectedPackageName, directiveLine);
    });
}
function handleAddinWithContent({ selectedVersion, selectedPackageName }) {
    return _handleDirectiveWithFileContent(constants_1.CAKE_ADDIN_DIRECTIVE, selectedVersion, selectedPackageName);
}
exports.handleAddinWithContent = handleAddinWithContent;
function handleToolWithContent({ selectedVersion, selectedPackageName }) {
    return _handleDirectiveWithFileContent(constants_1.CAKE_TOOL_DIRECTIVE, selectedVersion, selectedPackageName);
}
exports.handleToolWithContent = handleToolWithContent;
function handleModuleWithContent({ selectedVersion, selectedPackageName }) {
    return _handleDirectiveWithFileContent(constants_1.CAKE_MODULE_DIRECTIVE, selectedVersion, selectedPackageName);
}
exports.handleModuleWithContent = handleModuleWithContent;
//# sourceMappingURL=handleDirectiveWithContent.js.map