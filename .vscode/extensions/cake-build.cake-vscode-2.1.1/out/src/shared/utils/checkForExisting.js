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
const fs = require("fs");
const vscode_1 = require("vscode");
function checkForExisting(path) {
    return __awaiter(this, void 0, void 0, function* () {
        if (fs.existsSync(path)) {
            var message = `Overwrite the existing \'${path}\' file in this folder?`;
            var option = yield vscode_1.window.showWarningMessage(message, 'Overwrite');
            return option === 'Overwrite';
        }
        return true;
    });
}
exports.default = checkForExisting;
//# sourceMappingURL=checkForExisting.js.map