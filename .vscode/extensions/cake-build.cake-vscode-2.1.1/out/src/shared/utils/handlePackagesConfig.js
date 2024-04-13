"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndUpdatePackagesConfig = exports.buildXmlFromContent = exports.updatePackagesConfig = exports.createPackageSection = exports.createEmptyPackagesConfigAsXml = void 0;
const xml2js_1 = require("xml2js");
const utils_1 = require("../../shared/utils");
function createEmptyPackagesConfigAsXml() {
    return '<packages></packages>';
}
exports.createEmptyPackagesConfigAsXml = createEmptyPackagesConfigAsXml;
function createPackageSection(packageId, packageVersion) {
    return {
        package: {
            $: {
                id: packageId,
                version: packageVersion
            }
        }
    };
}
exports.createPackageSection = createPackageSection;
function updatePackagesConfig(xmlConfig, packageName, packageVersion) {
    const version = packageVersion.startsWith('Latest version')
        ? '*'
        : packageVersion;
    let fixedPackages = [];
    fixedPackages.push(createPackageSection(packageName, version));
    if (!xmlConfig.packages || !xmlConfig.packages.package) {
        return { packages: fixedPackages };
    }
    let refPackages = [...xmlConfig.packages.package];
    refPackages.forEach((ref) => {
        if (ref.$.id === packageName)
            return;
        fixedPackages.push(createPackageSection(ref.$.id, ref.$.version));
    });
    fixedPackages.sort((ref1, ref2) => {
        if (ref1.package.$.id > ref2.package.$.id) {
            return 1;
        }
        if (ref1.package.$.id < ref2.package.$.id) {
            return -1;
        }
        return 0;
    });
    return { packages: fixedPackages };
}
exports.updatePackagesConfig = updatePackagesConfig;
function buildXmlFromContent(content) {
    const xmlBuilder = new xml2js_1.Builder({
        xmldec: {
            version: '1.0',
            encoding: 'utf-8'
        }
    });
    const xml = xmlBuilder.buildObject(content);
    return xml;
}
exports.buildXmlFromContent = buildXmlFromContent;
function parseAndUpdatePackagesConfig({ content, packageFilePath, selectedPackageName, selectedVersion }) {
    return new Promise((resolve, reject) => {
        (0, xml2js_1.parseString)(content, (err, packageConfig = {}) => {
            if (err) {
                return (0, utils_1.handleError)(err, (0, utils_1.getFileErrorMessage)('parse', packageFilePath), reject);
            }
            let updatedPackages = packageConfig;
            let buildedContent = '';
            try {
                updatedPackages = updatePackagesConfig(updatedPackages, selectedPackageName, selectedVersion);
                buildedContent = buildXmlFromContent(updatedPackages);
            }
            catch (ex) {
                return (0, utils_1.handleError)(ex, (0, utils_1.getFileErrorMessage)('update', packageFilePath), reject);
            }
            return resolve({
                filePath: packageFilePath,
                content: buildedContent,
                message: selectedPackageName
            });
        });
    });
}
exports.parseAndUpdatePackagesConfig = parseAndUpdatePackagesConfig;
//# sourceMappingURL=handlePackagesConfig.js.map