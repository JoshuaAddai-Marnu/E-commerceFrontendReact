"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installAddToolCommand = void 0;
const utils_1 = require("../shared/utils");
const actions_1 = require("./actions");
function installAddToolCommand() {
    (0, actions_1.showPackageSearchBox)()
        .then(actions_1.fetchCakePackages)
        .then(actions_1.handleSearchResponse)
        .then(actions_1.showPackageQuickPick)
        .then(actions_1.fetchPackageVersions)
        .then(actions_1.handleVersionsResponse)
        .then(actions_1.showVersionsWithLatestQuickPick)
        .then(actions_1.handleToolWithContent)
        .then(utils_1.writeLinesToFile)
        .then(utils_1.showInformationMessage)
        .then(undefined, actions_1.handleErrorMessage);
}
exports.installAddToolCommand = installAddToolCommand;
//# sourceMappingURL=cakeAddToolCommand.js.map