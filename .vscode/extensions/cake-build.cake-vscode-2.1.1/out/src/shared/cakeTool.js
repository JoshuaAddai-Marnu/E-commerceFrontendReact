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
exports.CakeTool = void 0;
const child_process_1 = require("child_process");
const vscode_1 = require("vscode");
const node_fetch_1 = require("node-fetch");
const utils_1 = require("./utils");
const version_1 = require("./version");
const log_1 = require("./log");
const nugetServiceUrl_1 = require("./nugetServiceUrl");
class CakeTool {
    constructor(context) {
        this.memento = context.workspaceState;
    }
    getCakeVersionFromProc(proc) {
        return new Promise((resolve, reject) => {
            const regex = new RegExp(/^cake\.tool\s+([\d\.]+(-\S+)?)/im); // https://regex101.com/r/nC8uxu/2
            let ver = null;
            proc.on('error', (error) => {
                reject(error);
            });
            proc.stdout.on('data', (data) => {
                if (ver !== null) {
                    return;
                }
                const txt = data.toString();
                const match = regex.exec(txt);
                if (match) {
                    ver = version_1.Version.parse(match[1]);
                }
            });
            proc.on('close', () => {
                resolve(ver);
            });
        });
    }
    /**
     * returns the latest available version of Cake.Tool on nuget
     */
    getAvailableVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = (yield (0, nugetServiceUrl_1.getNugetServiceUrl)(nugetServiceUrl_1.NuGetServiceType.SearchQueryService)) + '?q=Cake.Tool&prerelease=false';
            try {
                const search = yield (0, node_fetch_1.default)(url, (0, utils_1.getFetchOptions)(vscode_1.workspace.getConfiguration('http')));
                const searchResult = yield search.json();
                const cakeTool = ((searchResult === null || searchResult === void 0 ? void 0 : searchResult.data) || []).find((x) => x.id === "Cake.Tool");
                const version = cakeTool === null || cakeTool === void 0 ? void 0 : cakeTool.version;
                if (!version) {
                    (0, log_1.logToOutput)("Could not find a latest version for Cake.Tool from: " + url);
                    return null;
                }
                return version_1.Version.parse(version);
            }
            catch (ex) {
                (0, log_1.logError)(ex, true);
            }
            return null;
        });
    }
    /**
     * returns the currently installed version, or null if no version is installed.
     */
    getInstalledVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            const proc = (0, child_process_1.spawn)('dotnet', ['tool', 'list', '--global']);
            const ver = yield this.getCakeVersionFromProc(proc);
            return ver;
        });
    }
    install() {
        return new Promise((resolve, reject) => {
            const proc = (0, child_process_1.spawn)('dotnet', ['tool', 'install', 'Cake.Tool', '--global']);
            proc.on('error', (error) => {
                reject(error);
            });
            proc.on('close', () => {
                resolve(true);
            });
        });
    }
    update() {
        return new Promise((resolve, reject) => {
            const proc = (0, child_process_1.spawn)('dotnet', ['tool', 'update', 'Cake.Tool', '--global']);
            proc.on('error', (error) => {
                reject(error);
            });
            proc.on('close', () => {
                resolve(true);
            });
        });
    }
    /**
     * ensures Cake.Tool is installed,
     * asking for an update, if a newer version is available.
     * @returns `true`, if Cake.Tool was actively installed or updated. `false` if Cake.Tool was already installed and up-to-date.
     */
    ensureInstalled() {
        return __awaiter(this, void 0, void 0, function* () {
            const installedVersion = yield this.getInstalledVersion();
            if (installedVersion === null) {
                yield this.install();
                return true;
            }
            const availableVersion = yield this.getAvailableVersion();
            if (availableVersion === null) {
                // cake.tool is installed, but we were unable to detect if it's the newest version
                // probably ok..
                return false;
            }
            if (installedVersion.greaterThan(availableVersion, true)) {
                return false;
            }
            // ask for updates or skip
            if (yield this.shouldSkipVersionUpdate(availableVersion)) {
                return false;
            }
            const answers = {
                yes: 'Yes',
                no: 'No',
                notThisVersion: 'No, and do not ask again for this version.'
            };
            const selection = yield vscode_1.window.showQuickPick([answers.yes, answers.no, answers.notThisVersion], {
                placeHolder: `Cake.Tool version ${availableVersion.toString()} is available. Update now?`
            });
            if (selection !== answers.yes) {
                if (selection === answers.notThisVersion) {
                    yield this.storeVersionToSkip(availableVersion);
                }
                return false;
            }
            yield this.update();
            return true;
        });
    }
    shouldSkipVersionUpdate(v) {
        return __awaiter(this, void 0, void 0, function* () {
            const verToSkip = yield this.memento.get(CakeTool.skipVersionKey);
            return v.toString() === verToSkip;
        });
    }
    storeVersionToSkip(v) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.memento.update(CakeTool.skipVersionKey, v.toString());
        });
    }
}
exports.CakeTool = CakeTool;
CakeTool.skipVersionKey = "cake.tool.skipversion";
//# sourceMappingURL=cakeTool.js.map