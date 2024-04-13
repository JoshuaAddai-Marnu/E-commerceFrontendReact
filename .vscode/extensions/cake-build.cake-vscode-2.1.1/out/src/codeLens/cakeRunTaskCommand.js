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
exports.installCakeRunTaskCommand = void 0;
const extensionSettings_1 = require("../extensionSettings");
const utils_1 = require("../shared/utils");
const shared_1 = require("./shared");
function installCakeRunTaskCommand(taskName, fileName, settings, context) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, shared_1.ensureNotDirty)(fileName);
        yield (0, shared_1.installCakeToolIfNeeded)(settings, context);
        let buildCommand = (0, extensionSettings_1.getPlatformSettingsValue)(settings.taskRunner.launchCommand);
        buildCommand = `${buildCommand} \"${fileName}\" --target=\"${taskName}\" --verbosity=${settings.taskRunner.verbosity}`;
        utils_1.TerminalExecutor.runInTerminal(buildCommand);
    });
}
exports.installCakeRunTaskCommand = installCakeRunTaskCommand;
//# sourceMappingURL=cakeRunTaskCommand.js.map