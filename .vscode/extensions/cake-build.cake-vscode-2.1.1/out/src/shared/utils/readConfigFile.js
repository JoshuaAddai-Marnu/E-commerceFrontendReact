"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCakeConfigFile = exports.readConfigFile = void 0;
const path = require("path");
const fs = require("fs");
const ini = require("ini");
const constants_1 = require("../../constants");
function _getEmptyCakeCakeConfig() {
    return {
        Nuget: {
            Source: '',
            UseInProcessClient: false,
            LoadDependencies: false
        },
        Paths: {
            Tools: '',
            Addins: '',
            Modules: ''
        },
        Settings: { SkipVerification: false }
    };
}
function _getDefaultCakeConfig() {
    return {
        Nuget: {
            Source: '',
            UseInProcessClient: false,
            LoadDependencies: false
        },
        Paths: {
            Tools: constants_1.CAKE_DEFAULT_TOOLS_PATH,
            Addins: constants_1.CAKE_DEFAULT_ADDINS_PATH,
            Modules: constants_1.CAKE_DEFAULT_MODULES_PATH
        },
        Settings: { SkipVerification: false }
    };
}
function readConfigFile(folderPath, fileName) {
    if (!folderPath || !fs.existsSync(path.join(folderPath, fileName))) {
        return undefined;
    }
    return ini.parse(fs.readFileSync(path.join(folderPath, fileName), 'utf-8'));
}
exports.readConfigFile = readConfigFile;
function readCakeConfigFile(folderPath) {
    return !folderPath
        ? _getEmptyCakeCakeConfig()
        : readConfigFile(folderPath, constants_1.CAKE_CONFIG_NAME) ||
            _getDefaultCakeConfig();
}
exports.readCakeConfigFile = readCakeConfigFile;
//# sourceMappingURL=readConfigFile.js.map