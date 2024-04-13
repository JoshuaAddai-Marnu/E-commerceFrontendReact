"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installBootstrappers = void 0;
const cakeBootstrapperCommand_1 = require("../../bootstrapper/cakeBootstrapperCommand");
const cakeBootstrapper_1 = require("../../bootstrapper/cakeBootstrapper");
function installBootstrappers(bootstrapperType) {
    var infos = cakeBootstrapper_1.CakeBootstrapper.getBootstrappersByType(bootstrapperType);
    return Promise.all(infos.map(i => (0, cakeBootstrapperCommand_1.installCakeBootstrapperFile)(i, false)));
}
exports.installBootstrappers = installBootstrappers;
//# sourceMappingURL=bootstrapper.js.map