"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
/**
 * represents a version that can be compared to other versions.
 */
class Version {
    constructor(...parts) {
        this.parts = [];
        this.suffixTxt = null;
        this.suffix = null;
        this.parts = parts;
    }
    /**
     * parses a version string into a @see Version.
     * @param text the sting to parse.
     */
    static parse(text) {
        if (!text) {
            throw new Error("text can not be empty.");
        }
        let suffixText = null;
        let suffix = 0;
        const suffixMatch = this.suffixMatcher.exec(text);
        if (suffixMatch) {
            suffixText = suffixMatch[1];
            suffix = Number.parseInt(suffixMatch[2], 10);
        }
        const txtParts = text.split("-", 2)[0].split(".");
        const parts = txtParts.map((x) => {
            const num = Number.parseInt(x, 10);
            if (Number.isNaN(num)) {
                throw new Error(`could not parse ${x} as part of a version.`);
            }
            if (num.toString(10) !== x) {
                throw new Error(`error parsing: ${x} was parsed as ${num}.`);
            }
            return num;
        });
        const ver = new Version(...parts);
        if (suffixText !== null) {
            ver.suffixTxt = suffixText;
            ver.suffix = suffix;
        }
        return ver;
    }
    /**
     * @override
     */
    toString() {
        let s = this.parts.join(".");
        if (this.suffixTxt != null) {
            s += "-" + this.suffixTxt + this.suffix;
        }
        return s;
    }
    /**
     * tests the other version for equality with this version.
     * @param other the version to compare with.
     */
    equalTo(other) {
        if (!other) {
            return false;
        }
        const count = Math.max(this.partCount, other.partCount);
        for (let i = 0; i < count; i++) {
            const left = this.getPart(i);
            const right = other.getPart(i);
            if (left !== right) {
                return false;
            }
        }
        return true;
    }
    /**
     * tests if this version is greater/greaterEqual than the other version.
     * @param other
     */
    greaterThan(other, orEqual = false) {
        if (!other) {
            return false;
        }
        const count = Math.max(this.partCount, other.partCount);
        for (let i = 0; i < count; i++) {
            const left = this.getPart(i);
            const right = other.getPart(i);
            if (left > right) {
                return true;
            }
            if (left < right) {
                return false;
            }
        }
        return orEqual;
    }
    /**
     * tests if this version is less/lessEqual than the other version.
     * @param other
     */
    lessThan(other, orEqual = false) {
        if (!other) {
            return false;
        }
        const count = Math.max(this.partCount, other.partCount);
        for (let i = 0; i < count; i++) {
            const left = this.getPart(i);
            const right = other.getPart(i);
            if (left < right) {
                return true;
            }
            if (left > right) {
                return false;
            }
        }
        return orEqual;
    }
    /**
     * returns the n-th part of the version, counted from left, starting at 0.
     * (so "major" would be 0, "minor" would be 1).
     * @param i the part-number of the version, or 0 if the part does not exist.
     */
    getPart(i) {
        if (i < this.parts.length) {
            return this.parts[i];
        }
        if (i == this.parts.length && this.suffix != null) {
            return this.suffix;
        }
        return 0;
    }
    /**
     * gets the count of the parts of this version.
     */
    get partCount() {
        return this.parts.length + (this.suffix === null ? 0 : 1);
    }
    /**
     * returns the major version number. Equal to calling `getPart(0)`.
     */
    get major() {
        return this.getPart(0);
    }
    /**
     * returns the minor version number. Equal to calling `getPart(1)`.
     */
    get minor() {
        return this.getPart(1);
    }
    /**
     * returns the patch version number. Equal to calling `getPart(2)`.
     */
    get patch() {
        return this.getPart(2);
    }
}
exports.Version = Version;
Version.suffixMatcher = new RegExp(/-(\D+)(\d+)/); // https://regex101.com/r/nrjWum/1
//# sourceMappingURL=version.js.map