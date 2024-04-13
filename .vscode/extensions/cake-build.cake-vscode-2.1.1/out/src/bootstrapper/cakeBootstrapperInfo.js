"use strict";
// This is an implementation of the QuickPickItem interface
// that is used to show the available bootstrappers.
// https://code.visualstudio.com/Docs/extensionAPI/vscode-api#QuickPickItem.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CakeBootstrapperInfo = void 0;
class CakeBootstrapperInfo {
    constructor(id, name, type, description, fileName, posix) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._description = description;
        this._fileName = fileName;
        this._posix = posix;
    }
    get id() {
        return this._id;
    }
    get fileName() {
        return this._fileName;
    }
    get type() {
        return this._type;
    }
    get posix() {
        return this._posix;
    }
    // QuickPickItem.description
    get description() {
        return this._fileName;
    }
    // QuickPickItem.detail
    get detail() {
        return this._description;
    }
    // QuickPickItem.label
    get label() {
        return this._name;
    }
}
exports.CakeBootstrapperInfo = CakeBootstrapperInfo;
//# sourceMappingURL=cakeBootstrapperInfo.js.map