/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var LIB;(()=>{var t={470:t=>{function e(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,e){for(var r,n="",o=0,i=-1,a=0,h=0;h<=t.length;++h){if(h<t.length)r=t.charCodeAt(h);else {if(47===r)break;r=47;}if(47===r){if(i===h-1||1===a);else if(i!==h-1&&2===a){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",o=0):o=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),i=h,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=h,a=0;continue}e&&(n.length>0?n+="/..":n="..",o=2);}else n.length>0?n+="/"+t.slice(i+1,h):n=t.slice(i+1,h),o=h-i-1;i=h,a=0;}else 46===r&&-1!==a?++a:a=-1;}return n}var n={resolve:function(){for(var t,n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a;i>=0?a=arguments[i]:(void 0===t&&(t=process.cwd()),a=t),e(a),0!==a.length&&(n=a+"/"+n,o=47===a.charCodeAt(0));}return n=r(n,!o),o?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(t){if(e(t),0===t.length)return ".";var n=47===t.charCodeAt(0),o=47===t.charCodeAt(t.length-1);return 0!==(t=r(t,!n)).length||n||(t="."),t.length>0&&o&&(t+="/"),n?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return ".";for(var t,r=0;r<arguments.length;++r){var o=arguments[r];e(o),o.length>0&&(void 0===t?t=o:t+="/"+o);}return void 0===t?".":n.normalize(t)},relative:function(t,r){if(e(t),e(r),t===r)return "";if((t=n.resolve(t))===(r=n.resolve(r)))return "";for(var o=1;o<t.length&&47===t.charCodeAt(o);++o);for(var i=t.length,a=i-o,h=1;h<r.length&&47===r.charCodeAt(h);++h);for(var s=r.length-h,c=a<s?a:s,f=-1,u=0;u<=c;++u){if(u===c){if(s>c){if(47===r.charCodeAt(h+u))return r.slice(h+u+1);if(0===u)return r.slice(h+u)}else a>c&&(47===t.charCodeAt(o+u)?f=u:0===u&&(f=0));break}var l=t.charCodeAt(o+u);if(l!==r.charCodeAt(h+u))break;47===l&&(f=u);}var p="";for(u=o+f+1;u<=i;++u)u!==i&&47!==t.charCodeAt(u)||(0===p.length?p+="..":p+="/..");return p.length>0?p+r.slice(h+f):(h+=f,47===r.charCodeAt(h)&&++h,r.slice(h))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return ".";for(var r=t.charCodeAt(0),n=47===r,o=-1,i=!0,a=t.length-1;a>=1;--a)if(47===(r=t.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return -1===o?n?"/":".":n&&1===o?"//":t.slice(0,o)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');e(t);var n,o=0,i=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return "";var h=r.length-1,s=-1;for(n=t.length-1;n>=0;--n){var c=t.charCodeAt(n);if(47===c){if(!a){o=n+1;break}}else -1===s&&(a=!1,s=n+1),h>=0&&(c===r.charCodeAt(h)?-1==--h&&(i=n):(h=-1,i=s));}return o===i?i=s:-1===i&&(i=t.length),t.slice(o,i)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!a){o=n+1;break}}else -1===i&&(a=!1,i=n+1);return -1===i?"":t.slice(o,i)},extname:function(t){e(t);for(var r=-1,n=0,o=-1,i=!0,a=0,h=t.length-1;h>=0;--h){var s=t.charCodeAt(h);if(47!==s)-1===o&&(i=!1,o=h+1),46===s?-1===r?r=h:1!==a&&(a=1):-1!==r&&(a=-1);else if(!i){n=h+1;break}}return -1===r||-1===o||0===a||1===a&&r===o-1&&r===n+1?"":t.slice(r,o)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+"/"+n:n}(0,t)},parse:function(t){e(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var n,o=t.charCodeAt(0),i=47===o;i?(r.root="/",n=1):n=0;for(var a=-1,h=0,s=-1,c=!0,f=t.length-1,u=0;f>=n;--f)if(47!==(o=t.charCodeAt(f)))-1===s&&(c=!1,s=f+1),46===o?-1===a?a=f:1!==u&&(u=1):-1!==a&&(u=-1);else if(!c){h=f+1;break}return -1===a||-1===s||0===u||1===u&&a===s-1&&a===h+1?-1!==s&&(r.base=r.name=0===h&&i?t.slice(1,s):t.slice(h,s)):(0===h&&i?(r.name=t.slice(1,a),r.base=t.slice(1,s)):(r.name=t.slice(h,a),r.base=t.slice(h,s)),r.ext=t.slice(a,s)),h>0?r.dir=t.slice(0,h-1):i&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,t.exports=n;}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]});},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});};var n={};(()=>{var t;if(r.r(n),r.d(n,{URI:()=>p,Utils:()=>_}),"object"==typeof process)t="win32"===process.platform;else if("object"==typeof navigator){var e=navigator.userAgent;t=e.indexOf("Windows")>=0;}var o,i,a=(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);}),h=/^\w[\w\d+.-]*$/,s=/^\//,c=/^\/\//,f="",u="/",l=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,p=function(){function e(t,e,r,n,o,i){void 0===i&&(i=!1),"object"==typeof t?(this.scheme=t.scheme||f,this.authority=t.authority||f,this.path=t.path||f,this.query=t.query||f,this.fragment=t.fragment||f):(this.scheme=function(t,e){return t||e?t:"file"}(t,i),this.authority=e||f,this.path=function(t,e){switch(t){case"https":case"http":case"file":e?e[0]!==u&&(e=u+e):e=u;}return e}(this.scheme,r||f),this.query=n||f,this.fragment=o||f,function(t,e){if(!t.scheme&&e)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(t.authority,'", path: "').concat(t.path,'", query: "').concat(t.query,'", fragment: "').concat(t.fragment,'"}'));if(t.scheme&&!h.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!s.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(c.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,i));}return e.isUri=function(t){return t instanceof e||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"string"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString},Object.defineProperty(e.prototype,"fsPath",{get:function(){return b(this,!1)},enumerable:!1,configurable:!0}),e.prototype.with=function(t){if(!t)return this;var e=t.scheme,r=t.authority,n=t.path,o=t.query,i=t.fragment;return void 0===e?e=this.scheme:null===e&&(e=f),void 0===r?r=this.authority:null===r&&(r=f),void 0===n?n=this.path:null===n&&(n=f),void 0===o?o=this.query:null===o&&(o=f),void 0===i?i=this.fragment:null===i&&(i=f),e===this.scheme&&r===this.authority&&n===this.path&&o===this.query&&i===this.fragment?this:new d(e,r,n,o,i)},e.parse=function(t,e){void 0===e&&(e=!1);var r=l.exec(t);return r?new d(r[2]||f,x(r[4]||f),x(r[5]||f),x(r[7]||f),x(r[9]||f),e):new d(f,f,f,f,f)},e.file=function(e){var r=f;if(t&&(e=e.replace(/\\/g,u)),e[0]===u&&e[1]===u){var n=e.indexOf(u,2);-1===n?(r=e.substring(2),e=u):(r=e.substring(2,n),e=e.substring(n)||u);}return new d("file",r,e,f,f)},e.from=function(t){return new d(t.scheme,t.authority,t.path,t.query,t.fragment)},e.prototype.toString=function(t){return void 0===t&&(t=!1),C(this,t)},e.prototype.toJSON=function(){return this},e.revive=function(t){if(t){if(t instanceof e)return t;var r=new d(t);return r._formatted=t.external,r._fsPath=t._sep===g?t.fsPath:null,r}return t},e}(),g=t?1:void 0,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._formatted=null,e._fsPath=null,e}return a(e,t),Object.defineProperty(e.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=b(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(t){return void 0===t&&(t=!1),t?C(this,!0):(this._formatted||(this._formatted=C(this,!1)),this._formatted)},e.prototype.toJSON=function(){var t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=g),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t},e}(p),v=((i={})[58]="%3A",i[47]="%2F",i[63]="%3F",i[35]="%23",i[91]="%5B",i[93]="%5D",i[64]="%40",i[33]="%21",i[36]="%24",i[38]="%26",i[39]="%27",i[40]="%28",i[41]="%29",i[42]="%2A",i[43]="%2B",i[44]="%2C",i[59]="%3B",i[61]="%3D",i[32]="%20",i);function y(t,e){for(var r=void 0,n=-1,o=0;o<t.length;o++){var i=t.charCodeAt(o);if(i>=97&&i<=122||i>=65&&i<=90||i>=48&&i<=57||45===i||46===i||95===i||126===i||e&&47===i)-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),void 0!==r&&(r+=t.charAt(o));else {void 0===r&&(r=t.substr(0,o));var a=v[i];void 0!==a?(-1!==n&&(r+=encodeURIComponent(t.substring(n,o)),n=-1),r+=a):-1===n&&(n=o);}}return -1!==n&&(r+=encodeURIComponent(t.substring(n))),void 0!==r?r:t}function m(t){for(var e=void 0,r=0;r<t.length;r++){var n=t.charCodeAt(r);35===n||63===n?(void 0===e&&(e=t.substr(0,r)),e+=v[n]):void 0!==e&&(e+=t[r]);}return void 0!==e?e:t}function b(e,r){var n;return n=e.authority&&e.path.length>1&&"file"===e.scheme?"//".concat(e.authority).concat(e.path):47===e.path.charCodeAt(0)&&(e.path.charCodeAt(1)>=65&&e.path.charCodeAt(1)<=90||e.path.charCodeAt(1)>=97&&e.path.charCodeAt(1)<=122)&&58===e.path.charCodeAt(2)?r?e.path.substr(1):e.path[1].toLowerCase()+e.path.substr(2):e.path,t&&(n=n.replace(/\//g,"\\")),n}function C(t,e){var r=e?m:y,n="",o=t.scheme,i=t.authority,a=t.path,h=t.query,s=t.fragment;if(o&&(n+=o,n+=":"),(i||"file"===o)&&(n+=u,n+=u),i){var c=i.indexOf("@");if(-1!==c){var f=i.substr(0,c);i=i.substr(c+1),-1===(c=f.indexOf(":"))?n+=r(f,!1):(n+=r(f.substr(0,c),!1),n+=":",n+=r(f.substr(c+1),!1)),n+="@";}-1===(c=(i=i.toLowerCase()).indexOf(":"))?n+=r(i,!1):(n+=r(i.substr(0,c),!1),n+=i.substr(c));}if(a){if(a.length>=3&&47===a.charCodeAt(0)&&58===a.charCodeAt(2))(l=a.charCodeAt(1))>=65&&l<=90&&(a="/".concat(String.fromCharCode(l+32),":").concat(a.substr(3)));else if(a.length>=2&&58===a.charCodeAt(1)){var l;(l=a.charCodeAt(0))>=65&&l<=90&&(a="".concat(String.fromCharCode(l+32),":").concat(a.substr(2)));}n+=r(a,!0);}return h&&(n+="?",n+=r(h,!1)),s&&(n+="#",n+=e?s:y(s,!1)),n}function A(t){try{return decodeURIComponent(t)}catch(e){return t.length>3?t.substr(0,3)+A(t.substr(3)):t}}var w=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function x(t){return t.match(w)?t.replace(w,(function(t){return A(t)})):t}var _,O=r(470),P=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},j=O.posix||O,U="/";!function(t){t.joinPath=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return t.with({path:j.join.apply(j,P([t.path],e,!1))})},t.resolvePath=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=t.path,o=!1;n[0]!==U&&(n=U+n,o=!0);var i=j.resolve.apply(j,P([n],e,!1));return o&&i[0]===U&&!t.authority&&(i=i.substring(1)),t.with({path:i})},t.dirname=function(t){if(0===t.path.length||t.path===U)return t;var e=j.dirname(t.path);return 1===e.length&&46===e.charCodeAt(0)&&(e=""),t.with({path:e})},t.basename=function(t){return j.basename(t.path)},t.extname=function(t){return j.extname(t.path)};}(_||(_={}));})(),LIB=n;})();const{URI,Utils}=LIB;

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function createKernelUri(kernelUri) {
    const uri = URI.parse(kernelUri);
    uri.authority; //?
    uri.path; //?
    let absoluteUri = `${uri.scheme}://${uri.authority}${uri.path || "/"}`;
    return absoluteUri; //?
}
function createKernelUriWithQuery(kernelUri) {
    const uri = URI.parse(kernelUri);
    uri.authority; //?
    uri.path; //?
    let absoluteUri = `${uri.scheme}://${uri.authority}${uri.path || "/"}`;
    if (uri.query) {
        absoluteUri += `?${uri.query}`;
    }
    return absoluteUri; //?
}
function getTag(kernelUri) {
    const uri = URI.parse(kernelUri);
    if (uri.query) { //?
        const parts = uri.query.split("tag=");
        if (parts.length > 1) {
            return parts[1];
        }
    }
    return undefined;
}
function createRoutingSlip(kernelUris) {
    return Array.from(new Set(kernelUris.map(e => createKernelUriWithQuery(e))));
}
function routingSlipStartsWith(thisKernelUris, otherKernelUris) {
    let startsWith = true;
    if (otherKernelUris.length > 0 && thisKernelUris.length >= otherKernelUris.length) {
        for (let i = 0; i < otherKernelUris.length; i++) {
            if (createKernelUri(otherKernelUris[i]) !== createKernelUri(thisKernelUris[i])) {
                startsWith = false;
                break;
            }
        }
    }
    else {
        startsWith = false;
    }
    return startsWith;
}
function routingSlipContains(routingSlip, kernelUri, ignoreQuery = false) {
    const normalizedUri = ignoreQuery ? createKernelUri(kernelUri) : createKernelUriWithQuery(kernelUri);
    return routingSlip.find(e => normalizedUri === (!ignoreQuery ? createKernelUriWithQuery(e) : createKernelUri(e))) !== undefined;
}
class RoutingSlip {
    constructor() {
        this._uris = [];
    }
    get uris() {
        return this._uris;
    }
    set uris(value) {
        this._uris = value;
    }
    contains(kernelUri, ignoreQuery = false) {
        return routingSlipContains(this._uris, kernelUri, ignoreQuery);
    }
    startsWith(other) {
        if (other instanceof Array) {
            return routingSlipStartsWith(this._uris, other);
        }
        else {
            return routingSlipStartsWith(this._uris, other._uris);
        }
    }
    continueWith(other) {
        let otherUris = (other instanceof Array ? other : other._uris) || [];
        if (otherUris.length > 0) {
            if (routingSlipStartsWith(otherUris, this._uris)) {
                otherUris = otherUris.slice(this._uris.length);
            }
        }
        for (let i = 0; i < otherUris.length; i++) {
            if (!this.contains(otherUris[i])) {
                this._uris.push(otherUris[i]);
            }
            else {
                throw new Error(`The uri ${otherUris[i]} is already in the routing slip [${this._uris}], cannot continue with routing slip [${otherUris}]`);
            }
        }
    }
    toArray() {
        return [...this._uris];
    }
}
class CommandRoutingSlip extends RoutingSlip {
    constructor() {
        super();
    }
    static fromUris(uris) {
        const routingSlip = new CommandRoutingSlip();
        routingSlip.uris = uris;
        return routingSlip;
    }
    stampAsArrived(kernelUri) {
        this.stampAs(kernelUri, "arrived");
    }
    stamp(kernelUri) {
        this.stampAs(kernelUri);
    }
    stampAs(kernelUri, tag) {
        if (tag) {
            const absoluteUriWithQuery = `${createKernelUri(kernelUri)}?tag=${tag}`;
            const absoluteUriWithoutQuery = createKernelUri(kernelUri);
            if (this.uris.find(e => e.startsWith(absoluteUriWithoutQuery))) {
                throw new Error(`The uri ${absoluteUriWithQuery} is already in the routing slip [${this.uris}]`);
            }
            else {
                this.uris.push(absoluteUriWithQuery);
            }
        }
        else {
            const absoluteUriWithQuery = `${createKernelUri(kernelUri)}?tag=arrived`;
            const absoluteUriWithoutQuery = createKernelUri(kernelUri);
            if (!this.uris.find(e => e.startsWith(absoluteUriWithQuery))) {
                throw new Error(`The uri ${absoluteUriWithQuery} is not in the routing slip [${this.uris}]`);
            }
            else if (this.uris.find(e => e === absoluteUriWithoutQuery)) {
                throw new Error(`The uri ${absoluteUriWithoutQuery} is already in the routing slip [${this.uris}]`);
            }
            else {
                this.uris.push(absoluteUriWithoutQuery);
            }
        }
    }
}
class EventRoutingSlip extends RoutingSlip {
    constructor() {
        super();
    }
    static fromUris(uris) {
        const routingSlip = new EventRoutingSlip();
        routingSlip.uris = uris;
        return routingSlip;
    }
    stamp(kernelUri) {
        const normalizedUri = createKernelUriWithQuery(kernelUri);
        const canAdd = !this.uris.find(e => createKernelUriWithQuery(e) === normalizedUri);
        if (canAdd) {
            this.uris.push(normalizedUri);
            this.uris; //?
        }
        else {
            throw new Error(`The uri ${normalizedUri} is already in the routing slip [${this.uris}]`);
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
// Generated TypeScript interfaces and types.
// --------------------------------------------- Kernel Commands
const CancelType = "Cancel";
const CompileProjectType = "CompileProject";
const DisplayErrorType = "DisplayError";
const DisplayValueType = "DisplayValue";
const OpenDocumentType = "OpenDocument";
const OpenProjectType = "OpenProject";
const QuitType = "Quit";
const RequestCompletionsType = "RequestCompletions";
const RequestDiagnosticsType = "RequestDiagnostics";
const RequestHoverTextType = "RequestHoverText";
const RequestInputType = "RequestInput";
const RequestKernelInfoType = "RequestKernelInfo";
const RequestSignatureHelpType = "RequestSignatureHelp";
const RequestValueType = "RequestValue";
const RequestValueInfosType = "RequestValueInfos";
const SendEditableCodeType = "SendEditableCode";
const SendValueType = "SendValue";
const SubmitCodeType = "SubmitCode";
const UpdateDisplayedValueType = "UpdateDisplayedValue";
// --------------------------------------------- Kernel events
const AssemblyProducedType = "AssemblyProduced";
const CodeSubmissionReceivedType = "CodeSubmissionReceived";
const CommandFailedType = "CommandFailed";
const CommandSucceededType = "CommandSucceeded";
const CompleteCodeSubmissionReceivedType = "CompleteCodeSubmissionReceived";
const CompletionsProducedType = "CompletionsProduced";
const DiagnosticsProducedType = "DiagnosticsProduced";
const DisplayedValueProducedType = "DisplayedValueProduced";
const DisplayedValueUpdatedType = "DisplayedValueUpdated";
const DocumentOpenedType = "DocumentOpened";
const ErrorProducedType = "ErrorProduced";
const HoverTextProducedType = "HoverTextProduced";
const IncompleteCodeSubmissionReceivedType = "IncompleteCodeSubmissionReceived";
const InputProducedType = "InputProduced";
const KernelExtensionLoadedType = "KernelExtensionLoaded";
const KernelInfoProducedType = "KernelInfoProduced";
const KernelReadyType = "KernelReady";
const PackageAddedType = "PackageAdded";
const ProjectOpenedType = "ProjectOpened";
const ReturnValueProducedType = "ReturnValueProduced";
const SignatureHelpProducedType = "SignatureHelpProduced";
const StandardErrorValueProducedType = "StandardErrorValueProduced";
const StandardOutputValueProducedType = "StandardOutputValueProduced";
const ValueInfosProducedType = "ValueInfosProduced";
const ValueProducedType = "ValueProduced";
var InsertTextFormat;
(function (InsertTextFormat) {
    InsertTextFormat["PlainText"] = "plaintext";
    InsertTextFormat["Snippet"] = "snippet";
})(InsertTextFormat || (InsertTextFormat = {}));
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    DiagnosticSeverity["Hidden"] = "hidden";
    DiagnosticSeverity["Info"] = "info";
    DiagnosticSeverity["Warning"] = "warning";
    DiagnosticSeverity["Error"] = "error";
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var DocumentSerializationType;
(function (DocumentSerializationType) {
    DocumentSerializationType["Dib"] = "dib";
    DocumentSerializationType["Ipynb"] = "ipynb";
})(DocumentSerializationType || (DocumentSerializationType = {}));
var RequestType;
(function (RequestType) {
    RequestType["Parse"] = "parse";
    RequestType["Serialize"] = "serialize";
})(RequestType || (RequestType = {}));

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function parse(uuid) {
  if (!validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function toBase64String(value) {
    const wnd = (globalThis.window);
    if (wnd) {
        return wnd.btoa(String.fromCharCode(...value));
    }
    else {
        return Buffer.from(value).toString('base64');
    }
}
class KernelCommandEnvelope {
    constructor(commandType, command) {
        this.commandType = commandType;
        this.command = command;
        this._childCommandCounter = 1;
        this._routingSlip = new CommandRoutingSlip();
    }
    get routingSlip() {
        return this._routingSlip;
    }
    get parentCommand() {
        return this._parentCommand;
    }
    static isKernelCommandEnvelopeModel(arg) {
        return !arg.getOrCreateToken;
    }
    setParent(parentCommand) {
        if (this._parentCommand && this._parentCommand !== parentCommand) {
            throw new Error("Parent cannot be changed.");
        }
        if (this._parentCommand === null || this._parentCommand === undefined) {
            {
                // todo: do we need to override the token? Should this throw if parenting happens after token is set?
                if (this._token) {
                    this._token = undefined;
                }
                this._parentCommand = parentCommand;
                this.getOrCreateToken();
            }
        }
    }
    static areCommandsTheSame(envelope1, envelope2) {
        // reference equality
        if (envelope1 === envelope2) {
            return true;
        }
        // commandType equality
        const sameCommandType = (envelope1 === null || envelope1 === void 0 ? void 0 : envelope1.commandType) === (envelope2 === null || envelope2 === void 0 ? void 0 : envelope2.commandType); //?
        if (!sameCommandType) {
            return false;
        }
        // both must have tokens
        if ((!(envelope1 === null || envelope1 === void 0 ? void 0 : envelope1._token)) || (!(envelope2 === null || envelope2 === void 0 ? void 0 : envelope2._token))) {
            return false;
        }
        // token equality
        const sameToken = (envelope1 === null || envelope1 === void 0 ? void 0 : envelope1._token) === (envelope2 === null || envelope2 === void 0 ? void 0 : envelope2._token); //?
        if (!sameToken) {
            return false;
        }
        return true;
    }
    getOrCreateToken() {
        if (this._token) {
            return this._token;
        }
        if (this._parentCommand) {
            this._token = `${this._parentCommand.getOrCreateToken()}.${this._parentCommand.getNextChildToken()}`;
            return this._token;
        }
        const guidBytes = parse(v4());
        const data = new Uint8Array(guidBytes);
        this._token = toBase64String(data);
        // this._token = `${KernelCommandEnvelope._counter++}`;
        return this._token;
    }
    getToken() {
        if (this._token) {
            return this._token;
        }
        throw new Error('token not set');
    }
    isSelforDescendantOf(otherCommand) {
        const otherToken = otherCommand._token;
        const thisToken = this._token;
        if (thisToken && otherToken) {
            return thisToken.startsWith(otherToken);
        }
        throw new Error('both commands must have tokens');
    }
    hasSameRootCommandAs(otherCommand) {
        const otherToken = otherCommand._token;
        const thisToken = this._token;
        if (thisToken && otherToken) {
            const otherRootToken = KernelCommandEnvelope.getRootToken(otherToken);
            const thisRootToken = KernelCommandEnvelope.getRootToken(thisToken);
            return thisRootToken === otherRootToken;
        }
        throw new Error('both commands must have tokens');
    }
    static getRootToken(token) {
        const parts = token.split('.');
        return parts[0];
    }
    toJson() {
        const model = {
            commandType: this.commandType,
            command: this.command,
            routingSlip: this._routingSlip.toArray(),
            token: this.getOrCreateToken()
        };
        return model;
    }
    static fromJson(model) {
        const command = new KernelCommandEnvelope(model.commandType, model.command);
        command._routingSlip = CommandRoutingSlip.fromUris(model.routingSlip || []);
        command._token = model.token;
        return command;
    }
    clone() {
        return KernelCommandEnvelope.fromJson(this.toJson());
    }
    getNextChildToken() {
        return this._childCommandCounter++;
    }
}
KernelCommandEnvelope._counter = 1;
class KernelEventEnvelope {
    constructor(eventType, event, command) {
        this.eventType = eventType;
        this.event = event;
        this.command = command;
        this._routingSlip = new EventRoutingSlip();
    }
    get routingSlip() {
        return this._routingSlip;
    }
    toJson() {
        var _a;
        const model = {
            eventType: this.eventType,
            event: this.event,
            command: (_a = this.command) === null || _a === void 0 ? void 0 : _a.toJson(),
            routingSlip: this._routingSlip.toArray()
        };
        return model;
    }
    static fromJson(model) {
        const event = new KernelEventEnvelope(model.eventType, model.event, model.command ? KernelCommandEnvelope.fromJson(model.command) : undefined);
        event._routingSlip = EventRoutingSlip.fromUris(model.routingSlip || []);
        return event;
    }
    clone() {
        return KernelEventEnvelope.fromJson(this.toJson());
    }
}

function isFunction(value) {
    return typeof value === 'function';
}

function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}

var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());
var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}

var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};

function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        {
            throw err;
        }
    });
}

function noop() { }

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}

var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) ;
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) ;
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));
var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));
function handleUnhandledError(error) {
    {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};

var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

function identity(x) {
    return x;
}

function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}

function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

function map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
function isPromiseCompletionSource(obj) {
    return obj.promise
        && obj.resolve
        && obj.reject;
}
class PromiseCompletionSource {
    constructor() {
        this._resolve = () => { };
        this._reject = () => { };
        this.promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    resolve(value) {
        this._resolve(value);
    }
    reject(reason) {
        this._reject(reason);
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelInvocationContext {
    constructor(kernelCommandInvocation) {
        this._childCommands = [];
        this._eventSubject = new Subject();
        this._isComplete = false;
        this._handlingKernel = null;
        this.completionSource = new PromiseCompletionSource();
        this._commandEnvelope = kernelCommandInvocation;
    }
    get promise() {
        return this.completionSource.promise;
    }
    get handlingKernel() {
        return this._handlingKernel;
    }
    ;
    get kernelEvents() {
        return this._eventSubject.asObservable();
    }
    ;
    set handlingKernel(value) {
        this._handlingKernel = value;
    }
    static getOrCreateAmbientContext(kernelCommandInvocation) {
        let current = KernelInvocationContext._current;
        if (!current || current._isComplete) {
            kernelCommandInvocation.getOrCreateToken();
            KernelInvocationContext._current = new KernelInvocationContext(kernelCommandInvocation);
        }
        else {
            if (!KernelCommandEnvelope.areCommandsTheSame(kernelCommandInvocation, current._commandEnvelope)) {
                const found = current._childCommands.includes(kernelCommandInvocation);
                if (!found) {
                    kernelCommandInvocation.setParent(current._commandEnvelope);
                    current._childCommands.push(kernelCommandInvocation);
                }
            }
        }
        return KernelInvocationContext._current;
    }
    static get current() { return this._current; }
    get command() { return this._commandEnvelope.command; }
    get commandEnvelope() { return this._commandEnvelope; }
    complete(command) {
        if (KernelCommandEnvelope.areCommandsTheSame(command, this._commandEnvelope)) {
            this._isComplete = true;
            let succeeded = {};
            let eventEnvelope = new KernelEventEnvelope(CommandSucceededType, succeeded, this._commandEnvelope);
            this.internalPublish(eventEnvelope);
            this.completionSource.resolve();
            // TODO: C# version has completion callbacks - do we need these?
            // if (!_events.IsDisposed)
            // {
            //     _events.OnCompleted();
            // }
        }
        else {
            let pos = this._childCommands.indexOf(command);
            delete this._childCommands[pos];
        }
    }
    fail(message) {
        // TODO:
        // The C# code accepts a message and/or an exception. Do we need to add support
        // for exceptions? (The TS CommandFailed interface doesn't have a place for it right now.)
        this._isComplete = true;
        let failed = { message: message !== null && message !== void 0 ? message : "Command Failed" };
        let eventEnvelope = new KernelEventEnvelope(CommandFailedType, failed, this._commandEnvelope);
        this.internalPublish(eventEnvelope);
        this.completionSource.resolve();
    }
    publish(kernelEvent) {
        if (!this._isComplete) {
            this.internalPublish(kernelEvent);
        }
    }
    internalPublish(kernelEvent) {
        if (!kernelEvent.command) {
            kernelEvent.command = this._commandEnvelope;
        }
        let command = kernelEvent.command;
        if (this.handlingKernel) {
            const kernelUri = getKernelUri(this.handlingKernel);
            if (!kernelEvent.routingSlip.contains(kernelUri)) {
                kernelEvent.routingSlip.stamp(kernelUri);
                kernelEvent.routingSlip; //?
            }
        }
        this._commandEnvelope; //?
        if (command === null ||
            command === undefined ||
            KernelCommandEnvelope.areCommandsTheSame(command, this._commandEnvelope) ||
            this._childCommands.includes(command)) {
            this._eventSubject.next(kernelEvent);
        }
        else if (command.isSelforDescendantOf(this._commandEnvelope)) {
            this._eventSubject.next(kernelEvent);
        }
        else if (command.hasSameRootCommandAs(this._commandEnvelope)) {
            this._eventSubject.next(kernelEvent);
        }
    }
    isParentOfCommand(commandEnvelope) {
        const childFound = this._childCommands.includes(commandEnvelope);
        return childFound;
    }
    dispose() {
        if (!this._isComplete) {
            this.complete(this._commandEnvelope);
        }
        KernelInvocationContext._current = null;
    }
}
KernelInvocationContext._current = null;

// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 0] = "Info";
    LogLevel[LogLevel["Warn"] = 1] = "Warn";
    LogLevel[LogLevel["Error"] = 2] = "Error";
    LogLevel[LogLevel["None"] = 3] = "None";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(source, write) {
        this.source = source;
        this.write = write;
    }
    info(message) {
        this.write({ logLevel: LogLevel.Info, source: this.source, message });
    }
    warn(message) {
        this.write({ logLevel: LogLevel.Warn, source: this.source, message });
    }
    error(message) {
        this.write({ logLevel: LogLevel.Error, source: this.source, message });
    }
    static configure(source, writer) {
        const logger = new Logger(source, writer);
        Logger._default = logger;
    }
    static get default() {
        if (Logger._default) {
            return Logger._default;
        }
        throw new Error('No logger has been configured for this context');
    }
}
Logger._default = new Logger('default', (_entry) => { });

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelScheduler {
    constructor() {
        this._operationQueue = [];
        this._mustTrampoline = (_c) => false;
    }
    setMustTrampoline(predicate) {
        this._mustTrampoline = predicate !== null && predicate !== void 0 ? predicate : ((_c) => false);
    }
    cancelCurrentOperation() {
        var _a;
        (_a = this._inFlightOperation) === null || _a === void 0 ? void 0 : _a.promiseCompletionSource.reject(new Error("Operation cancelled"));
    }
    runAsync(value, executor) {
        const operation = {
            value,
            executor,
            promiseCompletionSource: new PromiseCompletionSource(),
        };
        const mustTrampoline = this._mustTrampoline(value);
        if (this._inFlightOperation && !mustTrampoline) {
            Logger.default.info(`kernelScheduler: starting immediate execution of ${JSON.stringify(operation.value)}`);
            // invoke immediately
            return operation.executor(operation.value)
                .then(() => {
                Logger.default.info(`kernelScheduler: immediate execution completed: ${JSON.stringify(operation.value)}`);
                operation.promiseCompletionSource.resolve();
            })
                .catch(e => {
                Logger.default.info(`kernelScheduler: immediate execution failed: ${JSON.stringify(e)} - ${JSON.stringify(operation.value)}`);
                operation.promiseCompletionSource.reject(e);
            });
        }
        Logger.default.info(`kernelScheduler: scheduling execution of ${JSON.stringify(operation.value)}`);
        this._operationQueue.push(operation);
        if (this._operationQueue.length === 1) {
            setTimeout(() => {
                this.executeNextCommand();
            }, 0);
        }
        return operation.promiseCompletionSource.promise;
    }
    executeNextCommand() {
        const nextOperation = this._operationQueue.length > 0 ? this._operationQueue[0] : undefined;
        if (nextOperation) {
            this._inFlightOperation = nextOperation;
            Logger.default.info(`kernelScheduler: starting scheduled execution of ${JSON.stringify(nextOperation.value)}`);
            nextOperation.executor(nextOperation.value)
                .then(() => {
                this._inFlightOperation = undefined;
                Logger.default.info(`kernelScheduler: completing inflight operation: success ${JSON.stringify(nextOperation.value)}`);
                nextOperation.promiseCompletionSource.resolve();
            })
                .catch(e => {
                this._inFlightOperation = undefined;
                Logger.default.info(`kernelScheduler: completing inflight operation: failure ${JSON.stringify(e)} - ${JSON.stringify(nextOperation.value)}`);
                nextOperation.promiseCompletionSource.reject(e);
            })
                .finally(() => {
                this._inFlightOperation = undefined;
                setTimeout(() => {
                    this._operationQueue.shift();
                    this.executeNextCommand();
                }, 0);
            });
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class Kernel {
    constructor(name, languageName, languageVersion, displayName) {
        this.name = name;
        this._commandHandlers = new Map();
        this._eventSubject = new Subject();
        this.rootKernel = this;
        this.parentKernel = null;
        this._scheduler = null;
        this._kernelInfo = {
            isProxy: false,
            isComposite: false,
            localName: name,
            languageName: languageName,
            aliases: [],
            uri: createKernelUri(`kernel://local/${name}`),
            languageVersion: languageVersion,
            displayName: displayName !== null && displayName !== void 0 ? displayName : name,
            supportedDirectives: [],
            supportedKernelCommands: []
        };
        this._internalRegisterCommandHandler({
            commandType: RequestKernelInfoType, handle: (invocation) => __awaiter(this, void 0, void 0, function* () {
                yield this.handleRequestKernelInfo(invocation);
            })
        });
    }
    get kernelInfo() {
        return this._kernelInfo;
    }
    get kernelEvents() {
        return this._eventSubject.asObservable();
    }
    handleRequestKernelInfo(invocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventEnvelope = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: this._kernelInfo }, invocation.commandEnvelope); //?
            invocation.context.publish(eventEnvelope);
            return Promise.resolve();
        });
    }
    getScheduler() {
        var _a, _b;
        if (!this._scheduler) {
            this._scheduler = (_b = (_a = this.parentKernel) === null || _a === void 0 ? void 0 : _a.getScheduler()) !== null && _b !== void 0 ? _b : new KernelScheduler();
        }
        return this._scheduler;
    }
    static get current() {
        if (KernelInvocationContext.current) {
            return KernelInvocationContext.current.handlingKernel;
        }
        return null;
    }
    static get root() {
        if (Kernel.current) {
            return Kernel.current.rootKernel;
        }
        return null;
    }
    // Is it worth us going to efforts to ensure that the Promise returned here accurately reflects
    // the command's progress? The only thing that actually calls this is the kernel channel, through
    // the callback set up by attachKernelToChannel, and the callback is expected to return void, so
    // nothing is ever going to look at the promise we return here.
    send(commandEnvelopeOrModel) {
        return __awaiter(this, void 0, void 0, function* () {
            let commandEnvelope = commandEnvelopeOrModel;
            if (KernelCommandEnvelope.isKernelCommandEnvelopeModel(commandEnvelopeOrModel)) {
                Logger.default.warn(`Converting command envelope model to command envelope for backawards compatibility.`);
                commandEnvelope = KernelCommandEnvelope.fromJson(commandEnvelopeOrModel);
            }
            const context = KernelInvocationContext.getOrCreateAmbientContext(commandEnvelope);
            if (context.commandEnvelope) {
                if (!KernelCommandEnvelope.areCommandsTheSame(context.commandEnvelope, commandEnvelope)) {
                    commandEnvelope.setParent(context.commandEnvelope);
                }
            }
            const kernelUri = getKernelUri(this);
            if (!commandEnvelope.routingSlip.contains(kernelUri)) {
                commandEnvelope.routingSlip.stampAsArrived(kernelUri);
            }
            else {
                Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as arrived but uri ${kernelUri} is already present.`);
            }
            commandEnvelope.routingSlip; //?
            return this.getScheduler().runAsync(commandEnvelope, (value) => this.executeCommand(value).finally(() => {
                if (!commandEnvelope.routingSlip.contains(kernelUri)) {
                    commandEnvelope.routingSlip.stamp(kernelUri);
                }
                else {
                    Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as completed but uri ${kernelUri} is already present.`);
                }
            }));
        });
    }
    executeCommand(commandEnvelope) {
        return __awaiter(this, void 0, void 0, function* () {
            let context = KernelInvocationContext.getOrCreateAmbientContext(commandEnvelope);
            let previousHandlingKernel = context.handlingKernel;
            try {
                yield this.handleCommand(commandEnvelope);
            }
            catch (e) {
                context.fail((e === null || e === void 0 ? void 0 : e.message) || JSON.stringify(e));
            }
            finally {
                context.handlingKernel = previousHandlingKernel;
            }
        });
    }
    getCommandHandler(commandType) {
        return this._commandHandlers.get(commandType);
    }
    handleCommand(commandEnvelope) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let context = KernelInvocationContext.getOrCreateAmbientContext(commandEnvelope);
            const previoudHendlingKernel = context.handlingKernel;
            context.handlingKernel = this;
            let isRootCommand = KernelCommandEnvelope.areCommandsTheSame(context.commandEnvelope, commandEnvelope);
            let eventSubscription = undefined; //?
            if (isRootCommand) {
                const kernelType = (this.kernelInfo.isProxy ? "proxy" : "") + (this.kernelInfo.isComposite ? "composite" : "");
                Logger.default.info(`kernel ${this.name} of type ${kernelType} subscribing to context events`);
                eventSubscription = context.kernelEvents.pipe(map(e => {
                    var _a;
                    const message = `kernel ${this.name} of type ${kernelType} saw event ${e.eventType} with token ${(_a = e.command) === null || _a === void 0 ? void 0 : _a.getToken()}`;
                    Logger.default.info(message);
                    const kernelUri = getKernelUri(this);
                    if (!e.routingSlip.contains(kernelUri)) {
                        e.routingSlip.stamp(kernelUri);
                    }
                    return e;
                }))
                    .subscribe(this.publishEvent.bind(this));
            }
            let handler = this.getCommandHandler(commandEnvelope.commandType);
            if (handler) {
                try {
                    Logger.default.info(`kernel ${this.name} about to handle command: ${JSON.stringify(commandEnvelope)}`);
                    yield handler.handle({ commandEnvelope: commandEnvelope, context });
                    context.complete(commandEnvelope);
                    context.handlingKernel = previoudHendlingKernel;
                    if (isRootCommand) {
                        eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                        context.dispose();
                    }
                    Logger.default.info(`kernel ${this.name} done handling command: ${JSON.stringify(commandEnvelope)}`);
                    resolve();
                }
                catch (e) {
                    context.fail((e === null || e === void 0 ? void 0 : e.message) || JSON.stringify(e));
                    context.handlingKernel = previoudHendlingKernel;
                    if (isRootCommand) {
                        eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                        context.dispose();
                    }
                    reject(e);
                }
            }
            else {
                // hack like there is no tomorrow
                const shouldNoop = this.shouldNoopCommand(commandEnvelope, context);
                if (shouldNoop) {
                    context.complete(commandEnvelope);
                }
                context.handlingKernel = previoudHendlingKernel;
                if (isRootCommand) {
                    eventSubscription === null || eventSubscription === void 0 ? void 0 : eventSubscription.unsubscribe();
                    context.dispose();
                }
                if (!shouldNoop) {
                    reject(new Error(`No handler found for command type ${commandEnvelope.commandType}`));
                }
                else {
                    Logger.default.warn(`kernel ${this.name} done noop handling command: ${JSON.stringify(commandEnvelope)}`);
                    resolve();
                }
            }
        }));
    }
    shouldNoopCommand(commandEnvelope, context) {
        let shouldNoop = false;
        switch (commandEnvelope.commandType) {
            case RequestCompletionsType:
            case RequestSignatureHelpType:
            case RequestDiagnosticsType:
            case RequestHoverTextType:
                shouldNoop = true;
                break;
            default:
                shouldNoop = false;
                break;
        }
        return shouldNoop;
    }
    subscribeToKernelEvents(observer) {
        const sub = this._eventSubject.subscribe(observer);
        return {
            dispose: () => { sub.unsubscribe(); }
        };
    }
    canHandle(commandEnvelope) {
        if (commandEnvelope.command.targetKernelName && commandEnvelope.command.targetKernelName !== this.name) {
            return false;
        }
        if (commandEnvelope.command.destinationUri) {
            const normalizedUri = createKernelUri(commandEnvelope.command.destinationUri);
            if (this.kernelInfo.uri !== normalizedUri) {
                return false;
            }
        }
        return this.supportsCommand(commandEnvelope.commandType);
    }
    supportsCommand(commandType) {
        return this._commandHandlers.has(commandType);
    }
    registerCommandHandler(handler) {
        // When a registration already existed, we want to overwrite it because we want users to
        // be able to develop handlers iteratively, and it would be unhelpful for handler registration
        // for any particular command to be cumulative.
        var _a;
        const shouldNotify = !this._commandHandlers.has(handler.commandType);
        this._internalRegisterCommandHandler(handler);
        if (shouldNotify) {
            const event = {
                kernelInfo: this._kernelInfo,
            };
            const envelope = new KernelEventEnvelope(KernelInfoProducedType, event, (_a = KernelInvocationContext.current) === null || _a === void 0 ? void 0 : _a.commandEnvelope);
            envelope.routingSlip.stamp(getKernelUri(this));
            const context = KernelInvocationContext.current;
            if (context) {
                envelope.command = context.commandEnvelope;
                context.publish(envelope);
            }
            else {
                this.publishEvent(envelope);
            }
        }
    }
    _internalRegisterCommandHandler(handler) {
        this._commandHandlers.set(handler.commandType, handler);
        this._kernelInfo.supportedKernelCommands = Array.from(this._commandHandlers.keys()).map(commandName => ({ name: commandName }));
    }
    getHandlingKernel(commandEnvelope, context) {
        if (this.canHandle(commandEnvelope)) {
            return this;
        }
        else {
            context === null || context === void 0 ? void 0 : context.fail(`Command ${commandEnvelope.commandType} is not supported by Kernel ${this.name}`);
            return null;
        }
    }
    publishEvent(kernelEvent) {
        this._eventSubject.next(kernelEvent);
    }
}
function submitCommandAndGetResult(kernel, commandEnvelope, expectedEventType) {
    return __awaiter(this, void 0, void 0, function* () {
        let completionSource = new PromiseCompletionSource();
        let handled = false;
        let disposable = kernel.subscribeToKernelEvents(eventEnvelope => {
            var _a;
            if (((_a = eventEnvelope.command) === null || _a === void 0 ? void 0 : _a.getToken()) === commandEnvelope.getToken()) {
                switch (eventEnvelope.eventType) {
                    case CommandFailedType:
                        if (!handled) {
                            handled = true;
                            let err = eventEnvelope.event; //?
                            completionSource.reject(err);
                        }
                        break;
                    case CommandSucceededType:
                        if (KernelCommandEnvelope.areCommandsTheSame(eventEnvelope.command, commandEnvelope)) {
                            if (!handled) { //? ($ ? eventEnvelope : {})
                                handled = true;
                                completionSource.reject('Command was handled before reporting expected result.');
                            }
                            break;
                        }
                    default:
                        if (eventEnvelope.eventType === expectedEventType) {
                            handled = true;
                            let event = eventEnvelope.event; //? ($ ? eventEnvelope : {})
                            completionSource.resolve(event);
                        }
                        break;
                }
            }
        });
        try {
            yield kernel.send(commandEnvelope);
        }
        finally {
            disposable.dispose();
        }
        return completionSource.promise;
    });
}
function getKernelUri(kernel) {
    var _a;
    return (_a = kernel.kernelInfo.uri) !== null && _a !== void 0 ? _a : `kernel://local/${kernel.kernelInfo.localName}`;
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class CompositeKernel extends Kernel {
    constructor(name) {
        super(name);
        this._host = null;
        this._defaultKernelNamesByCommandType = new Map();
        this.kernelInfo.isComposite = true;
        this._childKernels = new KernelCollection(this);
    }
    get childKernels() {
        return Array.from(this._childKernels);
    }
    get host() {
        return this._host;
    }
    set host(host) {
        this._host = host;
        if (this._host) {
            this.kernelInfo.uri = this._host.uri;
            this._childKernels.notifyThatHostWasSet();
        }
    }
    handleRequestKernelInfo(invocation) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventEnvelope = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: this.kernelInfo }, invocation.commandEnvelope); //?
            invocation.context.publish(eventEnvelope);
            for (let kernel of this._childKernels) {
                if (kernel.supportsCommand(invocation.commandEnvelope.commandType)) {
                    const childCommand = new KernelCommandEnvelope(RequestKernelInfoType, {
                        targetKernelName: kernel.kernelInfo.localName
                    });
                    childCommand.setParent(invocation.commandEnvelope);
                    childCommand.routingSlip.continueWith(invocation.commandEnvelope.routingSlip);
                    yield kernel.handleCommand(childCommand);
                }
            }
        });
    }
    add(kernel, aliases) {
        if (!kernel) {
            throw new Error("kernel cannot be null or undefined");
        }
        if (!this.defaultKernelName) {
            // default to first kernel
            this.defaultKernelName = kernel.name;
        }
        kernel.parentKernel = this;
        kernel.rootKernel = this.rootKernel;
        kernel.kernelEvents.subscribe({
            next: (event) => {
                const kernelUri = getKernelUri(this);
                if (!event.routingSlip.contains(kernelUri)) {
                    event.routingSlip.stamp(kernelUri);
                }
                this.publishEvent(event);
            }
        });
        if (aliases) {
            let set = new Set(aliases);
            if (kernel.kernelInfo.aliases) {
                for (let alias in kernel.kernelInfo.aliases) {
                    set.add(alias);
                }
            }
            kernel.kernelInfo.aliases = Array.from(set);
        }
        this._childKernels.add(kernel, aliases);
        const invocationContext = KernelInvocationContext.current;
        if (invocationContext) {
            invocationContext.commandEnvelope; //?
            const event = new KernelEventEnvelope(KernelInfoProducedType, {
                kernelInfo: kernel.kernelInfo
            }, invocationContext.commandEnvelope); //?
            invocationContext.publish(event);
        }
        else {
            const event = new KernelEventEnvelope(KernelInfoProducedType, {
                kernelInfo: kernel.kernelInfo
            }); //?
            this.publishEvent(event);
        }
    }
    findKernelByUri(uri) {
        const normalized = createKernelUri(uri);
        if (this.kernelInfo.uri === normalized) {
            return this;
        }
        return this._childKernels.tryGetByUri(normalized);
    }
    findKernelByName(name) {
        if (this.kernelInfo.localName === name || this.kernelInfo.aliases.find(a => a === name)) {
            return this;
        }
        return this._childKernels.tryGetByAlias(name);
    }
    findKernels(predicate) {
        var results = [];
        if (predicate(this)) {
            results.push(this);
        }
        for (let kernel of this.childKernels) {
            if (predicate(kernel)) {
                results.push(kernel);
            }
        }
        return results;
    }
    findKernel(predicate) {
        if (predicate(this)) {
            return this;
        }
        return this.childKernels.find(predicate);
    }
    setDefaultTargetKernelNameForCommand(commandType, kernelName) {
        this._defaultKernelNamesByCommandType.set(commandType, kernelName);
    }
    handleCommand(commandEnvelope) {
        var _a;
        const invocationContext = KernelInvocationContext.current;
        let kernel = commandEnvelope.command.targetKernelName === this.name
            ? this
            : this.getHandlingKernel(commandEnvelope, invocationContext);
        const previusoHandlingKernel = (_a = invocationContext === null || invocationContext === void 0 ? void 0 : invocationContext.handlingKernel) !== null && _a !== void 0 ? _a : null;
        if (kernel === this) {
            if (invocationContext !== null) {
                invocationContext.handlingKernel = kernel;
            }
            return super.handleCommand(commandEnvelope).finally(() => {
                if (invocationContext !== null) {
                    invocationContext.handlingKernel = previusoHandlingKernel;
                }
            });
        }
        else if (kernel) {
            if (invocationContext !== null) {
                invocationContext.handlingKernel = kernel;
            }
            const kernelUri = getKernelUri(kernel);
            if (!commandEnvelope.routingSlip.contains(kernelUri)) {
                commandEnvelope.routingSlip.stampAsArrived(kernelUri);
            }
            else {
                Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as arrived but uri ${kernelUri} is already present.`);
            }
            return kernel.handleCommand(commandEnvelope).finally(() => {
                if (invocationContext !== null) {
                    invocationContext.handlingKernel = previusoHandlingKernel;
                }
                if (!commandEnvelope.routingSlip.contains(kernelUri)) {
                    commandEnvelope.routingSlip.stamp(kernelUri);
                }
                else {
                    Logger.default.warn(`Trying to stamp ${commandEnvelope.commandType} as completed but uri ${kernelUri} is already present.`);
                }
            });
        }
        if (invocationContext !== null) {
            invocationContext.handlingKernel = previusoHandlingKernel;
        }
        return Promise.reject(new Error("Kernel not found: " + commandEnvelope.command.targetKernelName));
    }
    getHandlingKernel(commandEnvelope, context) {
        var _a, _b, _c, _d, _e;
        let kernel = null;
        if (commandEnvelope.command.destinationUri) {
            const normalized = createKernelUri(commandEnvelope.command.destinationUri);
            kernel = (_a = this._childKernels.tryGetByUri(normalized)) !== null && _a !== void 0 ? _a : null;
            if (kernel) {
                return kernel;
            }
        }
        let targetKernelName = commandEnvelope.command.targetKernelName;
        if (targetKernelName === undefined || targetKernelName === null) {
            if (this.canHandle(commandEnvelope)) {
                return this;
            }
            targetKernelName = (_b = this._defaultKernelNamesByCommandType.get(commandEnvelope.commandType)) !== null && _b !== void 0 ? _b : this.defaultKernelName;
        }
        if (targetKernelName !== undefined && targetKernelName !== null) {
            kernel = (_c = this._childKernels.tryGetByAlias(targetKernelName)) !== null && _c !== void 0 ? _c : null;
        }
        if (targetKernelName && !kernel) {
            const errorMessage = `Kernel not found: ${targetKernelName}`;
            Logger.default.error(errorMessage);
            throw new Error(errorMessage);
        }
        if (!kernel) {
            if (this._childKernels.count === 1) {
                kernel = (_d = this._childKernels.single()) !== null && _d !== void 0 ? _d : null;
            }
        }
        if (!kernel) {
            kernel = (_e = context === null || context === void 0 ? void 0 : context.handlingKernel) !== null && _e !== void 0 ? _e : null;
        }
        return kernel !== null && kernel !== void 0 ? kernel : this;
    }
}
class KernelCollection {
    constructor(compositeKernel) {
        this._kernels = [];
        this._nameAndAliasesByKernel = new Map();
        this._kernelsByNameOrAlias = new Map();
        this._kernelsByLocalUri = new Map();
        this._kernelsByRemoteUri = new Map();
        this._compositeKernel = compositeKernel;
    }
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next: () => {
                return {
                    value: this._kernels[counter++],
                    done: counter > this._kernels.length //?
                };
            }
        };
    }
    single() {
        return this._kernels.length === 1 ? this._kernels[0] : undefined;
    }
    add(kernel, aliases) {
        if (this._kernelsByNameOrAlias.has(kernel.name)) {
            throw new Error(`kernel with name ${kernel.name} already exists`);
        }
        this.updateKernelInfoAndIndex(kernel, aliases);
        this._kernels.push(kernel);
    }
    get count() {
        return this._kernels.length;
    }
    updateKernelInfoAndIndex(kernel, aliases) {
        var _a, _b;
        if (aliases) {
            for (let alias of aliases) {
                if (this._kernelsByNameOrAlias.has(alias)) {
                    throw new Error(`kernel with alias ${alias} already exists`);
                }
            }
        }
        if (!this._nameAndAliasesByKernel.has(kernel)) {
            let set = new Set();
            for (let alias of kernel.kernelInfo.aliases) {
                set.add(alias);
            }
            kernel.kernelInfo.aliases = Array.from(set);
            set.add(kernel.kernelInfo.localName);
            this._nameAndAliasesByKernel.set(kernel, set);
        }
        if (aliases) {
            for (let alias of aliases) {
                this._nameAndAliasesByKernel.get(kernel).add(alias);
            }
        }
        (_a = this._nameAndAliasesByKernel.get(kernel)) === null || _a === void 0 ? void 0 : _a.forEach(alias => {
            this._kernelsByNameOrAlias.set(alias, kernel);
        });
        let baseUri = ((_b = this._compositeKernel.host) === null || _b === void 0 ? void 0 : _b.uri) || this._compositeKernel.kernelInfo.uri;
        if (!baseUri.endsWith("/")) {
            baseUri += "/";
        }
        kernel.kernelInfo.uri = createKernelUri(`${baseUri}${kernel.kernelInfo.localName}`); //?
        this._kernelsByLocalUri.set(kernel.kernelInfo.uri, kernel);
        if (kernel.kernelInfo.isProxy) {
            this._kernelsByRemoteUri.set(kernel.kernelInfo.remoteUri, kernel);
        }
    }
    tryGetByAlias(alias) {
        return this._kernelsByNameOrAlias.get(alias);
    }
    tryGetByUri(uri) {
        let kernel = this._kernelsByLocalUri.get(uri) || this._kernelsByRemoteUri.get(uri);
        return kernel;
    }
    notifyThatHostWasSet() {
        for (let kernel of this._kernels) {
            this.updateKernelInfoAndIndex(kernel);
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function isKernelCommandEnvelope(commandOrEvent) {
    return commandOrEvent.commandType !== undefined;
}
function isKernelCommandEnvelopeModel(commandOrEvent) {
    return commandOrEvent.commandType !== undefined;
}
function isKernelEventEnvelope(commandOrEvent) {
    return commandOrEvent.eventType !== undefined;
}
function isKernelEventEnvelopeModel(commandOrEvent) {
    return commandOrEvent.eventType !== undefined;
}
class KernelCommandAndEventReceiver {
    constructor(observer) {
        this._disposables = [];
        this._observable = observer;
    }
    subscribe(observer) {
        return this._observable.subscribe(observer);
    }
    dispose() {
        for (let disposable of this._disposables) {
            disposable.dispose();
        }
    }
    static FromObservable(observable) {
        return new KernelCommandAndEventReceiver(observable);
    }
    static FromEventListener(args) {
        let subject = new Subject();
        const listener = (e) => {
            let mapped = args.map(e);
            subject.next(mapped);
        };
        args.eventTarget.addEventListener(args.event, listener);
        const ret = new KernelCommandAndEventReceiver(subject);
        ret._disposables.push({
            dispose: () => {
                args.eventTarget.removeEventListener(args.event, listener);
            }
        });
        args.eventTarget.removeEventListener(args.event, listener);
        return ret;
    }
}
function isObservable(source) {
    return source.next !== undefined;
}
class KernelCommandAndEventSender {
    constructor() {
    }
    send(kernelCommandOrEventEnvelope) {
        if (this._sender) {
            try {
                const clone = kernelCommandOrEventEnvelope.clone();
                if (typeof this._sender === "function") {
                    this._sender(clone);
                }
                else if (isObservable(this._sender)) {
                    if (isKernelCommandEnvelope(kernelCommandOrEventEnvelope)) {
                        this._sender.next(clone);
                    }
                    else {
                        this._sender.next(clone);
                    }
                }
                else {
                    return Promise.reject(new Error("Sender is not set"));
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            return Promise.resolve();
        }
        return Promise.reject(new Error("Sender is not set"));
    }
    static FromObserver(observer) {
        const sender = new KernelCommandAndEventSender();
        sender._sender = observer;
        return sender;
    }
    static FromFunction(send) {
        const sender = new KernelCommandAndEventSender();
        sender._sender = send;
        return sender;
    }
}
function isSetOfString(collection) {
    return typeof (collection) !== typeof (new Set());
}
function isArrayOfString(collection) {
    return Array.isArray(collection) && collection.length > 0 && typeof (collection[0]) === typeof ("");
}
const onKernelInfoUpdates = [];
function registerForKernelInfoUpdates(callback) {
    onKernelInfoUpdates.push(callback);
}
function notifyOfKernelInfoUpdates(compositeKernel) {
    for (const updater of onKernelInfoUpdates) {
        updater(compositeKernel);
    }
}
function ensureOrUpdateProxyForKernelInfo(kernelInfo, compositeKernel) {
    if (kernelInfo.isProxy) {
        const host = extractHostAndNomalize(kernelInfo.remoteUri);
        if (host === extractHostAndNomalize(compositeKernel.kernelInfo.uri)) {
            Logger.default.warn(`skippin creation of proxy for a proxy kernel : [${JSON.stringify(kernelInfo)}]`);
            return;
        }
    }
    const uriToLookup = kernelInfo.isProxy ? kernelInfo.remoteUri : kernelInfo.uri;
    if (uriToLookup) {
        let kernel = compositeKernel.findKernelByUri(uriToLookup);
        if (!kernel) {
            // add
            if (compositeKernel.host) {
                Logger.default.info(`creating proxy for uri[${uriToLookup}]with info ${JSON.stringify(kernelInfo)}`);
                // check for clash with `kernelInfo.localName`
                kernel = compositeKernel.host.connectProxyKernel(kernelInfo.localName, uriToLookup, kernelInfo.aliases);
                updateKernelInfo(kernel.kernelInfo, kernelInfo);
            }
            else {
                throw new Error('no kernel host found');
            }
        }
        else {
            Logger.default.info(`patching proxy for uri[${uriToLookup}]with info ${JSON.stringify(kernelInfo)} `);
        }
        if (kernel.kernelInfo.isProxy) {
            // patch
            updateKernelInfo(kernel.kernelInfo, kernelInfo);
        }
        notifyOfKernelInfoUpdates(compositeKernel);
    }
}
function isKernelInfoForProxy(kernelInfo) {
    return kernelInfo.isProxy;
}
function updateKernelInfo(destination, source) {
    var _a, _b;
    destination.languageName = (_a = source.languageName) !== null && _a !== void 0 ? _a : destination.languageName;
    destination.languageVersion = (_b = source.languageVersion) !== null && _b !== void 0 ? _b : destination.languageVersion;
    destination.displayName = source.displayName;
    destination.isComposite = source.isComposite;
    if (source.displayName) {
        destination.displayName = source.displayName;
    }
    const supportedDirectives = new Set();
    const supportedCommands = new Set();
    if (!destination.supportedDirectives) {
        destination.supportedDirectives = [];
    }
    if (!destination.supportedKernelCommands) {
        destination.supportedKernelCommands = [];
    }
    for (const supportedDirective of destination.supportedDirectives) {
        supportedDirectives.add(supportedDirective.name);
    }
    for (const supportedCommand of destination.supportedKernelCommands) {
        supportedCommands.add(supportedCommand.name);
    }
    for (const supportedDirective of source.supportedDirectives) {
        if (!supportedDirectives.has(supportedDirective.name)) {
            supportedDirectives.add(supportedDirective.name);
            destination.supportedDirectives.push(supportedDirective);
        }
    }
    for (const supportedCommand of source.supportedKernelCommands) {
        if (!supportedCommands.has(supportedCommand.name)) {
            supportedCommands.add(supportedCommand.name);
            destination.supportedKernelCommands.push(supportedCommand);
        }
    }
}
class Connector {
    constructor(configuration) {
        this._remoteUris = new Set();
        this._receiver = configuration.receiver;
        this._sender = configuration.sender;
        if (configuration.remoteUris) {
            for (const remoteUri of configuration.remoteUris) {
                const uri = extractHostAndNomalize(remoteUri);
                if (uri) {
                    this._remoteUris.add(uri);
                }
            }
        }
        this._listener = this._receiver.subscribe({
            next: (kernelCommandOrEventEnvelope) => {
                var _a;
                if (isKernelEventEnvelope(kernelCommandOrEventEnvelope)) {
                    if (kernelCommandOrEventEnvelope.eventType === KernelInfoProducedType) {
                        const event = kernelCommandOrEventEnvelope.event;
                        if (!event.kernelInfo.remoteUri) {
                            const uri = extractHostAndNomalize(event.kernelInfo.uri);
                            if (uri) {
                                this._remoteUris.add(uri);
                            }
                        }
                    }
                    const eventRoutingSlip = kernelCommandOrEventEnvelope.routingSlip.toArray();
                    if (((_a = eventRoutingSlip.length) !== null && _a !== void 0 ? _a : 0) > 0) {
                        const eventOrigin = eventRoutingSlip[0];
                        const uri = extractHostAndNomalize(eventOrigin);
                        if (uri) {
                            this._remoteUris.add(uri);
                        }
                    }
                }
            }
        });
    }
    get remoteHostUris() {
        return Array.from(this._remoteUris.values());
    }
    get sender() {
        return this._sender;
    }
    get receiver() {
        return this._receiver;
    }
    addRemoteHostUri(remoteUri) {
        const uri = extractHostAndNomalize(remoteUri);
        if (uri) {
            this._remoteUris.add(uri);
        }
    }
    canReach(remoteUri) {
        const host = extractHostAndNomalize(remoteUri); //?
        if (host) {
            return this._remoteUris.has(host);
        }
        return false;
    }
    dispose() {
        this._listener.unsubscribe();
    }
}
function extractHostAndNomalize(kernelUri) {
    var _a;
    const filter = /(?<host>.+:\/\/[^\/]+)(\/[^\/])*/gi;
    const match = filter.exec(kernelUri); //?
    if ((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.host) {
        const host = match.groups.host;
        return host; //?
    }
    return "";
}
function Serialize(source) {
    return JSON.stringify(source, function (key, value) {
        //handling NaN, Infinity and -Infinity
        const processed = SerializeNumberLiterals(value);
        return processed;
    });
}
function SerializeNumberLiterals(value) {
    if (value !== value) {
        return "NaN";
    }
    else if (value === Infinity) {
        return "Infinity";
    }
    else if (value === -Infinity) {
        return "-Infinity";
    }
    return value;
}
function Deserialize(json) {
    return JSON.parse(json, function (key, value) {
        //handling NaN, Infinity and -Infinity
        const deserialized = DeserializeNumberLiterals(value);
        return deserialized;
    });
}
function DeserializeNumberLiterals(value) {
    if (value === "NaN") {
        return NaN;
    }
    else if (value === "Infinity") {
        return Infinity;
    }
    else if (value === "-Infinity") {
        return -Infinity;
    }
    return value;
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class ConsoleCapture {
    constructor() {
        this.originalConsole = console;
        console = this;
    }
    set kernelInvocationContext(value) {
        this._kernelInvocationContext = value;
    }
    assert(value, message, ...optionalParams) {
        this.originalConsole.assert(value, message, optionalParams);
    }
    clear() {
        this.originalConsole.clear();
    }
    count(label) {
        this.originalConsole.count(label);
    }
    countReset(label) {
        this.originalConsole.countReset(label);
    }
    debug(message, ...optionalParams) {
        this.originalConsole.debug(message, optionalParams);
    }
    dir(obj, options) {
        this.originalConsole.dir(obj, options);
    }
    dirxml(...data) {
        this.originalConsole.dirxml(data);
    }
    error(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.error, ...[message, ...optionalParams]);
    }
    group(...label) {
        this.originalConsole.group(label);
    }
    groupCollapsed(...label) {
        this.originalConsole.groupCollapsed(label);
    }
    groupEnd() {
        this.originalConsole.groupEnd();
    }
    info(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.info, ...[message, ...optionalParams]);
    }
    log(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.log, ...[message, ...optionalParams]);
    }
    table(tabularData, properties) {
        this.originalConsole.table(tabularData, properties);
    }
    time(label) {
        this.originalConsole.time(label);
    }
    timeEnd(label) {
        this.originalConsole.timeEnd(label);
    }
    timeLog(label, ...data) {
        this.originalConsole.timeLog(label, data);
    }
    timeStamp(label) {
        this.originalConsole.timeStamp(label);
    }
    trace(message, ...optionalParams) {
        this.redirectAndPublish(this.originalConsole.trace, ...[message, ...optionalParams]);
    }
    warn(message, ...optionalParams) {
        this.originalConsole.warn(message, optionalParams);
    }
    profile(label) {
        this.originalConsole.profile(label);
    }
    profileEnd(label) {
        this.originalConsole.profileEnd(label);
    }
    dispose() {
        console = this.originalConsole;
    }
    redirectAndPublish(target, ...args) {
        if (this._kernelInvocationContext) {
            for (const arg of args) {
                let mimeType;
                let value;
                if (typeof arg !== 'object' && !Array.isArray(arg)) {
                    mimeType = 'text/plain';
                    value = arg === null || arg === void 0 ? void 0 : arg.toString();
                }
                else {
                    mimeType = 'application/json';
                    value = Serialize(arg);
                }
                const displayedValue = {
                    formattedValues: [
                        {
                            mimeType,
                            value,
                            suppressDisplay: false
                        }
                    ]
                };
                const eventEnvelope = new KernelEventEnvelope(DisplayedValueProducedType, displayedValue, this._kernelInvocationContext.commandEnvelope);
                this._kernelInvocationContext.publish(eventEnvelope);
            }
        }
        if (target) {
            target(...args);
        }
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class ProxyKernel extends Kernel {
    constructor(name, _sender, _receiver, languageName, languageVersion) {
        super(name, languageName, languageVersion);
        this.name = name;
        this._sender = _sender;
        this._receiver = _receiver;
        this.kernelInfo.isProxy = true;
    }
    getCommandHandler(commandType) {
        return {
            commandType,
            handle: (invocation) => {
                return this._commandHandler(invocation);
            }
        };
    }
    delegatePublication(envelope, invocationContext) {
        let alreadyBeenSeen = false;
        const kernelUri = getKernelUri(this);
        if (kernelUri && !envelope.routingSlip.contains(kernelUri)) {
            envelope.routingSlip.stamp(kernelUri);
        }
        else {
            alreadyBeenSeen = true;
        }
        if (this.hasSameOrigin(envelope)) {
            if (!alreadyBeenSeen) {
                invocationContext.publish(envelope);
            }
        }
    }
    hasSameOrigin(envelope) {
        var _a, _b, _c;
        let commandOriginUri = (_c = (_b = (_a = envelope.command) === null || _a === void 0 ? void 0 : _a.command) === null || _b === void 0 ? void 0 : _b.originUri) !== null && _c !== void 0 ? _c : this.kernelInfo.uri;
        if (commandOriginUri === this.kernelInfo.uri) {
            return true;
        }
        return commandOriginUri === null;
    }
    updateKernelInfoFromEvent(kernelInfoProduced) {
        updateKernelInfo(this.kernelInfo, kernelInfoProduced.kernelInfo);
    }
    _commandHandler(commandInvocation) {
        var _a, _b;
        var _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const commandToken = commandInvocation.commandEnvelope.getOrCreateToken();
            const completionSource = new PromiseCompletionSource();
            // fix : is this the right way? We are trying to avoid forwarding events we just did forward
            let eventSubscription = this._receiver.subscribe({
                next: (envelope) => {
                    var _a, _b, _c;
                    if (isKernelEventEnvelope(envelope)) {
                        if (envelope.eventType === KernelInfoProducedType &&
                            (envelope.command === null || envelope.command === undefined)) {
                            const kernelInfoProduced = envelope.event;
                            kernelInfoProduced.kernelInfo; //?
                            this.kernelInfo; //?
                            if (kernelInfoProduced.kernelInfo.uri === this.kernelInfo.remoteUri) {
                                this.updateKernelInfoFromEvent(kernelInfoProduced);
                                const event = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: this.kernelInfo });
                                this.publishEvent(event);
                            }
                        }
                        else if (envelope.command.getToken() === commandToken) {
                            Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] processing event, envelopeToken=${envelope.command.getToken()}, commandToken=${commandToken}`);
                            Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] processing event, ${JSON.stringify(envelope)}`);
                            try {
                                const original = [...(_b = (_a = commandInvocation.commandEnvelope) === null || _a === void 0 ? void 0 : _a.routingSlip.toArray()) !== null && _b !== void 0 ? _b : []];
                                commandInvocation.commandEnvelope.routingSlip.continueWith(envelope.command.routingSlip);
                                //envelope.command!.routingSlip = [...commandInvocation.commandEnvelope.routingSlip ?? []];//?
                                Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, command routingSlip :${original}] has changed to: ${JSON.stringify((_c = commandInvocation.commandEnvelope.routingSlip) !== null && _c !== void 0 ? _c : [])}`);
                            }
                            catch (e) {
                                Logger.default.error(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, error ${e === null || e === void 0 ? void 0 : e.message}`);
                            }
                            switch (envelope.eventType) {
                                case KernelInfoProducedType:
                                    {
                                        const kernelInfoProduced = envelope.event;
                                        if (kernelInfoProduced.kernelInfo.uri === this.kernelInfo.remoteUri) {
                                            this.updateKernelInfoFromEvent(kernelInfoProduced);
                                            const event = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: this.kernelInfo }, commandInvocation.commandEnvelope);
                                            event.routingSlip.continueWith(envelope.routingSlip);
                                            this.delegatePublication(event, commandInvocation.context);
                                            this.delegatePublication(envelope, commandInvocation.context);
                                        }
                                        else {
                                            this.delegatePublication(envelope, commandInvocation.context);
                                        }
                                    }
                                    break;
                                case CommandFailedType:
                                case CommandSucceededType:
                                    Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] finished, token=${envelope.command.getToken()}, commandToken=${commandToken}`);
                                    if (envelope.command.getToken() === commandToken) {
                                        Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] resolving promise, envelopeToken=${envelope.command.getToken()}, commandToken=${commandToken}`);
                                        completionSource.resolve(envelope);
                                    }
                                    else {
                                        Logger.default.info(`proxy name=${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] not resolving promise, envelopeToken=${envelope.command.getToken()}, commandToken=${commandToken}`);
                                        this.delegatePublication(envelope, commandInvocation.context);
                                    }
                                    break;
                                default:
                                    this.delegatePublication(envelope, commandInvocation.context);
                                    break;
                            }
                        }
                    }
                }
            });
            try {
                if (!commandInvocation.commandEnvelope.command.destinationUri || !commandInvocation.commandEnvelope.command.originUri) {
                    (_a = (_c = commandInvocation.commandEnvelope.command).originUri) !== null && _a !== void 0 ? _a : (_c.originUri = this.kernelInfo.uri);
                    (_b = (_d = commandInvocation.commandEnvelope.command).destinationUri) !== null && _b !== void 0 ? _b : (_d.destinationUri = this.kernelInfo.remoteUri);
                }
                commandInvocation.commandEnvelope.routingSlip; //?
                if (commandInvocation.commandEnvelope.commandType === RequestKernelInfoType) {
                    const destinationUri = this.kernelInfo.remoteUri;
                    if (commandInvocation.commandEnvelope.routingSlip.contains(destinationUri, true)) {
                        return Promise.resolve();
                    }
                }
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] forwarding command ${commandInvocation.commandEnvelope.commandType} to ${commandInvocation.commandEnvelope.command.destinationUri}`);
                this._sender.send(commandInvocation.commandEnvelope);
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] about to await with token ${commandToken}`);
                const enventEnvelope = yield completionSource.promise;
                if (enventEnvelope.eventType === CommandFailedType) {
                    commandInvocation.context.fail(enventEnvelope.event.message);
                }
                Logger.default.info(`proxy ${this.name}[local uri:${this.kernelInfo.uri}, remote uri:${this.kernelInfo.remoteUri}] done awaiting with token ${commandToken}}`);
            }
            catch (e) {
                commandInvocation.context.fail(e.message);
            }
            finally {
                eventSubscription.unsubscribe();
            }
        });
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class KernelHost {
    constructor(kernel, sender, receiver, hostUri) {
        this._remoteUriToKernel = new Map();
        this._uriToKernel = new Map();
        this._kernelToKernelInfo = new Map();
        this._connectors = [];
        this._kernel = kernel;
        this._uri = createKernelUri(hostUri || "kernel://vscode");
        this._kernel.host = this;
        this._scheduler = new KernelScheduler();
        this._scheduler.setMustTrampoline((c => {
            return (c.commandType === RequestInputType) || (c.commandType === SendEditableCodeType);
        }));
        this._defaultConnector = new Connector({ sender, receiver });
        this._connectors.push(this._defaultConnector);
    }
    get defaultConnector() {
        return this._defaultConnector;
    }
    get uri() {
        return this._uri;
    }
    get kernel() {
        return this._kernel;
    }
    tryGetKernelByRemoteUri(remoteUri) {
        return this._remoteUriToKernel.get(remoteUri);
    }
    trygetKernelByOriginUri(originUri) {
        return this._uriToKernel.get(originUri);
    }
    tryGetKernelInfo(kernel) {
        return this._kernelToKernelInfo.get(kernel);
    }
    addKernelInfo(kernel, kernelInfo) {
        kernelInfo.uri = createKernelUri(`${this._uri}${kernel.name}`);
        this._kernelToKernelInfo.set(kernel, kernelInfo);
        this._uriToKernel.set(kernelInfo.uri, kernel);
    }
    getKernel(kernelCommandEnvelope) {
        var _a;
        const uriToLookup = (_a = kernelCommandEnvelope.command.destinationUri) !== null && _a !== void 0 ? _a : kernelCommandEnvelope.command.originUri;
        let kernel = undefined;
        if (uriToLookup) {
            kernel = this._kernel.findKernelByUri(uriToLookup);
        }
        if (!kernel) {
            if (kernelCommandEnvelope.command.targetKernelName) {
                kernel = this._kernel.findKernelByName(kernelCommandEnvelope.command.targetKernelName);
            }
        }
        kernel !== null && kernel !== void 0 ? kernel : (kernel = this._kernel);
        Logger.default.info(`Using Kernel ${kernel.name}`);
        return kernel;
    }
    connectProxyKernelOnDefaultConnector(localName, remoteKernelUri, aliases) {
        return this.connectProxyKernelOnConnector(localName, this._defaultConnector.sender, this._defaultConnector.receiver, remoteKernelUri, aliases);
    }
    tryAddConnector(connector) {
        if (!connector.remoteUris) {
            this._connectors.push(new Connector(connector));
            return true;
        }
        else {
            const found = connector.remoteUris.find(uri => this._connectors.find(c => c.canReach(uri)));
            if (!found) {
                this._connectors.push(new Connector(connector));
                return true;
            }
            return false;
        }
    }
    tryRemoveConnector(connector) {
        if (!connector.remoteUris) {
            for (let uri of connector.remoteUris) {
                const index = this._connectors.findIndex(c => c.canReach(uri));
                if (index >= 0) {
                    this._connectors.splice(index, 1);
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    connectProxyKernel(localName, remoteKernelUri, aliases) {
        this._connectors; //?
        const connector = this._connectors.find(c => c.canReach(remoteKernelUri));
        if (!connector) {
            throw new Error(`Cannot find connector to reach ${remoteKernelUri}`);
        }
        let kernel = new ProxyKernel(localName, connector.sender, connector.receiver);
        kernel.kernelInfo.remoteUri = remoteKernelUri;
        this._kernel.add(kernel, aliases);
        return kernel;
    }
    connectProxyKernelOnConnector(localName, sender, receiver, remoteKernelUri, aliases) {
        let kernel = new ProxyKernel(localName, sender, receiver);
        kernel.kernelInfo.remoteUri = remoteKernelUri;
        this._kernel.add(kernel, aliases);
        return kernel;
    }
    tryGetConnector(remoteUri) {
        return this._connectors.find(c => c.canReach(remoteUri));
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            this._kernel.subscribeToKernelEvents(e => {
                Logger.default.info(`KernelHost forwarding event: ${JSON.stringify(e)}`);
                this._defaultConnector.sender.send(e);
            });
            this._defaultConnector.receiver.subscribe({
                next: (kernelCommandOrEventEnvelope) => {
                    if (isKernelCommandEnvelope(kernelCommandOrEventEnvelope)) {
                        Logger.default.info(`KernelHost dispacthing command: ${JSON.stringify(kernelCommandOrEventEnvelope)}`);
                        this._scheduler.runAsync(kernelCommandOrEventEnvelope, commandEnvelope => {
                            const kernel = this._kernel;
                            return kernel.send(commandEnvelope);
                        });
                    }
                }
            });
            const kernelInfos = [this._kernel.kernelInfo, ...Array.from(this._kernel.childKernels.map(k => k.kernelInfo).filter(ki => ki.isProxy === false))];
            const kernekReady = {
                kernelInfos: kernelInfos
            };
            const event = new KernelEventEnvelope(KernelReadyType, kernekReady);
            event.routingSlip.stamp(this._kernel.kernelInfo.uri);
            yield this._defaultConnector.sender.send(event);
            return kernekReady;
        });
    }
    getKernelInfos() {
        let kernelInfos = [this._kernel.kernelInfo];
        for (let kernel of this._kernel.childKernels) {
            kernelInfos.push(kernel.kernelInfo);
        }
        return kernelInfos;
    }
    getKernelInfoProduced() {
        let events = Array.from(this.getKernelInfos().map(kernelInfo => {
            const event = new KernelEventEnvelope(KernelInfoProducedType, { kernelInfo: kernelInfo });
            event.routingSlip.stamp(kernelInfo.uri);
            return event;
        }));
        return events;
    }
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.

var polyglotNotebooksApi = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CompositeKernel: CompositeKernel,
    isKernelCommandEnvelope: isKernelCommandEnvelope,
    isKernelCommandEnvelopeModel: isKernelCommandEnvelopeModel,
    isKernelEventEnvelope: isKernelEventEnvelope,
    isKernelEventEnvelopeModel: isKernelEventEnvelopeModel,
    KernelCommandAndEventReceiver: KernelCommandAndEventReceiver,
    KernelCommandAndEventSender: KernelCommandAndEventSender,
    isSetOfString: isSetOfString,
    isArrayOfString: isArrayOfString,
    registerForKernelInfoUpdates: registerForKernelInfoUpdates,
    ensureOrUpdateProxyForKernelInfo: ensureOrUpdateProxyForKernelInfo,
    isKernelInfoForProxy: isKernelInfoForProxy,
    updateKernelInfo: updateKernelInfo,
    Connector: Connector,
    extractHostAndNomalize: extractHostAndNomalize,
    Serialize: Serialize,
    SerializeNumberLiterals: SerializeNumberLiterals,
    Deserialize: Deserialize,
    DeserializeNumberLiterals: DeserializeNumberLiterals,
    ConsoleCapture: ConsoleCapture,
    CancelType: CancelType,
    CompileProjectType: CompileProjectType,
    DisplayErrorType: DisplayErrorType,
    DisplayValueType: DisplayValueType,
    OpenDocumentType: OpenDocumentType,
    OpenProjectType: OpenProjectType,
    QuitType: QuitType,
    RequestCompletionsType: RequestCompletionsType,
    RequestDiagnosticsType: RequestDiagnosticsType,
    RequestHoverTextType: RequestHoverTextType,
    RequestInputType: RequestInputType,
    RequestKernelInfoType: RequestKernelInfoType,
    RequestSignatureHelpType: RequestSignatureHelpType,
    RequestValueType: RequestValueType,
    RequestValueInfosType: RequestValueInfosType,
    SendEditableCodeType: SendEditableCodeType,
    SendValueType: SendValueType,
    SubmitCodeType: SubmitCodeType,
    UpdateDisplayedValueType: UpdateDisplayedValueType,
    AssemblyProducedType: AssemblyProducedType,
    CodeSubmissionReceivedType: CodeSubmissionReceivedType,
    CommandFailedType: CommandFailedType,
    CommandSucceededType: CommandSucceededType,
    CompleteCodeSubmissionReceivedType: CompleteCodeSubmissionReceivedType,
    CompletionsProducedType: CompletionsProducedType,
    DiagnosticsProducedType: DiagnosticsProducedType,
    DisplayedValueProducedType: DisplayedValueProducedType,
    DisplayedValueUpdatedType: DisplayedValueUpdatedType,
    DocumentOpenedType: DocumentOpenedType,
    ErrorProducedType: ErrorProducedType,
    HoverTextProducedType: HoverTextProducedType,
    IncompleteCodeSubmissionReceivedType: IncompleteCodeSubmissionReceivedType,
    InputProducedType: InputProducedType,
    KernelExtensionLoadedType: KernelExtensionLoadedType,
    KernelInfoProducedType: KernelInfoProducedType,
    KernelReadyType: KernelReadyType,
    PackageAddedType: PackageAddedType,
    ProjectOpenedType: ProjectOpenedType,
    ReturnValueProducedType: ReturnValueProducedType,
    SignatureHelpProducedType: SignatureHelpProducedType,
    StandardErrorValueProducedType: StandardErrorValueProducedType,
    StandardOutputValueProducedType: StandardOutputValueProducedType,
    ValueInfosProducedType: ValueInfosProducedType,
    ValueProducedType: ValueProducedType,
    get InsertTextFormat () { return InsertTextFormat; },
    get DiagnosticSeverity () { return DiagnosticSeverity; },
    get DocumentSerializationType () { return DocumentSerializationType; },
    get RequestType () { return RequestType; },
    KernelCommandEnvelope: KernelCommandEnvelope,
    KernelEventEnvelope: KernelEventEnvelope,
    Kernel: Kernel,
    submitCommandAndGetResult: submitCommandAndGetResult,
    getKernelUri: getKernelUri,
    KernelHost: KernelHost,
    KernelInvocationContext: KernelInvocationContext,
    KernelScheduler: KernelScheduler,
    get LogLevel () { return LogLevel; },
    Logger: Logger,
    isPromiseCompletionSource: isPromiseCompletionSource,
    PromiseCompletionSource: PromiseCompletionSource,
    ProxyKernel: ProxyKernel,
    createKernelUri: createKernelUri,
    createKernelUriWithQuery: createKernelUriWithQuery,
    getTag: getTag,
    createRoutingSlip: createRoutingSlip,
    RoutingSlip: RoutingSlip,
    CommandRoutingSlip: CommandRoutingSlip,
    EventRoutingSlip: EventRoutingSlip
});

// Copyright (c) .NET Foundation and contributors. All rights reserved.
class JavascriptKernel extends Kernel {
    constructor(name) {
        super(name !== null && name !== void 0 ? name : "javascript", "JavaScript");
        this.kernelInfo.displayName = `${this.kernelInfo.localName} - ${this.kernelInfo.languageName}`;
        this.suppressedLocals = new Set(this.allLocalVariableNames());
        this.registerCommandHandler({ commandType: SubmitCodeType, handle: invocation => this.handleSubmitCode(invocation) });
        this.registerCommandHandler({ commandType: RequestValueInfosType, handle: invocation => this.handleRequestValueInfos(invocation) });
        this.registerCommandHandler({ commandType: RequestValueType, handle: invocation => this.handleRequestValue(invocation) });
        this.registerCommandHandler({ commandType: SendValueType, handle: invocation => this.handleSendValue(invocation) });
        this.capture = new ConsoleCapture();
    }
    handleSendValue(invocation) {
        const sendValue = invocation.commandEnvelope.command;
        if (sendValue.formattedValue) {
            switch (sendValue.formattedValue.mimeType) {
                case 'application/json':
                    globalThis[sendValue.name] = Deserialize(sendValue.formattedValue.value);
                    break;
                default:
                    globalThis[sendValue.name] = sendValue.formattedValue.value;
                    break;
            }
            return Promise.resolve();
        }
        throw new Error("formattedValue is required");
    }
    handleSubmitCode(invocation) {
        const _super = Object.create(null, {
            kernelInfo: { get: () => super.kernelInfo }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const submitCode = invocation.commandEnvelope.command;
            const code = submitCode.code;
            _super.kernelInfo.localName; //?
            _super.kernelInfo.uri; //?
            _super.kernelInfo.remoteUri; //?
            const codeSubmissionReceivedEvent = new KernelEventEnvelope(CodeSubmissionReceivedType, { code }, invocation.commandEnvelope);
            invocation.context.publish(codeSubmissionReceivedEvent);
            invocation.context.commandEnvelope.routingSlip; //?
            this.capture.kernelInvocationContext = invocation.context;
            let result = undefined;
            try {
                const AsyncFunction = eval(`Object.getPrototypeOf(async function(){}).constructor`);
                const evaluator = AsyncFunction("console", "polyglotNotebooks", code);
                result = yield evaluator(this.capture, polyglotNotebooksApi);
                if (result !== undefined) {
                    const formattedValue = formatValue(result, 'application/json');
                    const event = {
                        formattedValues: [formattedValue]
                    };
                    const returnValueProducedEvent = new KernelEventEnvelope(ReturnValueProducedType, event, invocation.commandEnvelope);
                    invocation.context.publish(returnValueProducedEvent);
                }
            }
            catch (e) {
                throw e; //?
            }
            finally {
                this.capture.kernelInvocationContext = undefined;
            }
        });
    }
    handleRequestValueInfos(invocation) {
        const valueInfos = this.allLocalVariableNames().filter(v => !this.suppressedLocals.has(v)).map(v => ({
            name: v,
            typeName: getType(this.getLocalVariable(v)),
            formattedValue: formatValue(this.getLocalVariable(v), "text/plain"),
            preferredMimeTypes: []
        }));
        const event = {
            valueInfos
        };
        const valueInfosProducedEvent = new KernelEventEnvelope(ValueInfosProducedType, event, invocation.commandEnvelope);
        invocation.context.publish(valueInfosProducedEvent);
        return Promise.resolve();
    }
    handleRequestValue(invocation) {
        const requestValue = invocation.commandEnvelope.command;
        const rawValue = this.getLocalVariable(requestValue.name);
        const formattedValue = formatValue(rawValue, requestValue.mimeType || 'application/json');
        Logger.default.info(`returning ${JSON.stringify(formattedValue)} for ${requestValue.name}`);
        const event = {
            name: requestValue.name,
            formattedValue
        };
        const valueProducedEvent = new KernelEventEnvelope(ValueProducedType, event, invocation.commandEnvelope);
        invocation.context.publish(valueProducedEvent);
        return Promise.resolve();
    }
    allLocalVariableNames() {
        const result = [];
        try {
            for (const key in globalThis) {
                try {
                    if (typeof globalThis[key] !== 'function') {
                        result.push(key);
                    }
                }
                catch (e) {
                    Logger.default.error(`error getting value for ${key} : ${e}`);
                }
            }
        }
        catch (e) {
            Logger.default.error(`error scanning globla variables : ${e}`);
        }
        return result;
    }
    getLocalVariable(name) {
        return globalThis[name];
    }
}
function formatValue(arg, mimeType) {
    let value;
    switch (mimeType) {
        case 'text/plain':
            value = (arg === null || arg === void 0 ? void 0 : arg.toString()) || 'undefined';
            if (Array.isArray(arg)) {
                value = `[${value}]`;
            }
            break;
        case 'application/json':
            value = Serialize(arg);
            break;
        default:
            throw new Error(`unsupported mime type: ${mimeType}`);
    }
    return {
        mimeType,
        value,
        suppressDisplay: false
    };
}
function getType(arg) {
    let type = arg ? typeof (arg) : ""; //?
    if (Array.isArray(arg)) {
        type = `${typeof (arg[0])}[]`; //?
    }
    if (arg === Infinity || arg === -Infinity || (arg !== arg)) {
        type = "number";
    }
    return type; //?
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function createHost(global, compositeKernelName, configureRequire, logMessage, localToRemote, remoteToLocal, onReady) {
    Logger.configure(compositeKernelName, logMessage);
    global.interactive = {};
    configureRequire(global.interactive);
    const compositeKernel = new CompositeKernel(compositeKernelName);
    const kernelHost = new KernelHost(compositeKernel, KernelCommandAndEventSender.FromObserver(localToRemote), KernelCommandAndEventReceiver.FromObservable(remoteToLocal), `kernel://${compositeKernelName}`);
    kernelHost.defaultConnector.receiver.subscribe({
        next: (envelope) => {
            if (isKernelEventEnvelope(envelope) && envelope.eventType === KernelInfoProducedType) {
                const kernelInfoProduced = envelope.event;
                ensureOrUpdateProxyForKernelInfo(kernelInfoProduced.kernelInfo, compositeKernel);
            }
        }
    });
    // use composite kernel as root
    global.kernel = {
        get root() {
            return compositeKernel;
        }
    };
    global[compositeKernelName] = {
        compositeKernel,
        kernelHost,
    };
    const jsKernel = new JavascriptKernel();
    compositeKernel.add(jsKernel, ["js"]);
    kernelHost.connect();
    onReady();
}

// Copyright (c) .NET Foundation and contributors. All rights reserved.
function activate(context) {
    configure(window, context);
    Logger.default.info(`set up 'webview' host module complete`);
}
function configure(global, context) {
    if (!global) {
        global = window;
    }
    const remoteToLocal = new Subject();
    const localToRemote = new Subject();
    localToRemote.subscribe({
        next: envelope => {
            const envelopeJson = envelope.toJson();
            context.postKernelMessage({ envelope: envelopeJson });
        }
    });
    const webViewId = v4();
    context.onDidReceiveKernelMessage((arg) => {
        var _a;
        if (arg.envelope && arg.webViewId === webViewId) {
            const envelope = (arg.envelope);
            if (isKernelEventEnvelopeModel(envelope)) {
                Logger.default.info(`channel got ${envelope.eventType} with token ${(_a = envelope.command) === null || _a === void 0 ? void 0 : _a.token}`);
                const event = KernelEventEnvelope.fromJson(envelope);
                remoteToLocal.next(event);
            }
            else {
                const command = KernelCommandEnvelope.fromJson(envelope);
                remoteToLocal.next(command);
            }
        }
        else if (arg.webViewId === webViewId) {
            const kernelHost = (global['webview'].kernelHost);
            if (kernelHost) {
                switch (arg.preloadCommand) {
                    case '#!connect': {
                        Logger.default.info(`connecting to kernels from extension host`);
                        const kernelInfos = (arg.kernelInfos);
                        for (const kernelInfo of kernelInfos) {
                            const remoteUri = kernelInfo.isProxy ? kernelInfo.remoteUri : kernelInfo.uri;
                            if (!kernelHost.tryGetConnector(remoteUri)) {
                                kernelHost.defaultConnector.addRemoteHostUri(remoteUri);
                            }
                            ensureOrUpdateProxyForKernelInfo(kernelInfo, kernelHost.kernel);
                        }
                    }
                }
            }
        }
    });
    createHost(global, 'webview', configureRequire, entry => {
        context.postKernelMessage({ logEntry: entry });
    }, localToRemote, remoteToLocal, () => {
        const kernelInfos = (global['webview'].kernelHost).getKernelInfos();
        const hostUri = (global['webview'].kernelHost).uri;
        context.postKernelMessage({ preloadCommand: '#!connect', kernelInfos, hostUri, webViewId });
    });
}
function configureRequire(interactive) {
    if ((typeof (require) !== typeof (Function)) || (typeof (require.config) !== typeof (Function))) {
        let require_script = document.createElement('script');
        require_script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js');
        require_script.setAttribute('type', 'text/javascript');
        require_script.onload = function () {
            interactive.configureRequire = (confing) => {
                return require.config(confing) || require;
            };
        };
        document.getElementsByTagName('head')[0].appendChild(require_script);
    }
    else {
        interactive.configureRequire = (confing) => {
            return require.config(confing) || require;
        };
    }
}

export { activate };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGlvbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3ZzY29kZS11cmkvbGliL2VzbS9pbmRleC5qcyIsIi4uL3NyYy9yb3V0aW5nc2xpcC50cyIsIi4uL3NyYy9jb250cmFjdHMudHMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIi4uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCIuLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3BhcnNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIi4uL3NyYy9jb21tYW5kc0FuZEV2ZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9jcmVhdGVFcnJvckNsYXNzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2FyclJlbW92ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9TdWJzY3JpcHRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvY29uZmlnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9yZXBvcnRVbmhhbmRsZWRFcnJvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL25vb3AuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9lcnJvckNvbnRleHQuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvU3Vic2NyaWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lkZW50aXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvcGlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9PYnNlcnZhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvbGlmdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvT3BlcmF0b3JTdWJzY3JpYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvU3ViamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLmpzIiwiLi4vc3JjL3Byb21pc2VDb21wbGV0aW9uU291cmNlLnRzIiwiLi4vc3JjL2tlcm5lbEludm9jYXRpb25Db250ZXh0LnRzIiwiLi4vc3JjL2xvZ2dlci50cyIsIi4uL3NyYy9rZXJuZWxTY2hlZHVsZXIudHMiLCIuLi9zcmMva2VybmVsLnRzIiwiLi4vc3JjL2NvbXBvc2l0ZUtlcm5lbC50cyIsIi4uL3NyYy9jb25uZWN0aW9uLnRzIiwiLi4vc3JjL2NvbnNvbGVDYXB0dXJlLnRzIiwiLi4vc3JjL3Byb3h5S2VybmVsLnRzIiwiLi4vc3JjL2tlcm5lbEhvc3QudHMiLCIuLi9zcmMvYXBpLnRzIiwiLi4vc3JjL2phdmFzY3JpcHRLZXJuZWwudHMiLCIuLi9zcmMvd2Vidmlldy9mcm9udEVuZEhvc3QudHMiLCIuLi9zcmMvd2Vidmlldy9hY3RpdmF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBMSUI7KCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9ezQ3MDp0PT57ZnVuY3Rpb24gZSh0KXtpZihcInN0cmluZ1wiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0aCBtdXN0IGJlIGEgc3RyaW5nLiBSZWNlaXZlZCBcIitKU09OLnN0cmluZ2lmeSh0KSl9ZnVuY3Rpb24gcih0LGUpe2Zvcih2YXIgcixuPVwiXCIsbz0wLGk9LTEsYT0wLGg9MDtoPD10Lmxlbmd0aDsrK2gpe2lmKGg8dC5sZW5ndGgpcj10LmNoYXJDb2RlQXQoaCk7ZWxzZXtpZig0Nz09PXIpYnJlYWs7cj00N31pZig0Nz09PXIpe2lmKGk9PT1oLTF8fDE9PT1hKTtlbHNlIGlmKGkhPT1oLTEmJjI9PT1hKXtpZihuLmxlbmd0aDwyfHwyIT09b3x8NDYhPT1uLmNoYXJDb2RlQXQobi5sZW5ndGgtMSl8fDQ2IT09bi5jaGFyQ29kZUF0KG4ubGVuZ3RoLTIpKWlmKG4ubGVuZ3RoPjIpe3ZhciBzPW4ubGFzdEluZGV4T2YoXCIvXCIpO2lmKHMhPT1uLmxlbmd0aC0xKXstMT09PXM/KG49XCJcIixvPTApOm89KG49bi5zbGljZSgwLHMpKS5sZW5ndGgtMS1uLmxhc3RJbmRleE9mKFwiL1wiKSxpPWgsYT0wO2NvbnRpbnVlfX1lbHNlIGlmKDI9PT1uLmxlbmd0aHx8MT09PW4ubGVuZ3RoKXtuPVwiXCIsbz0wLGk9aCxhPTA7Y29udGludWV9ZSYmKG4ubGVuZ3RoPjA/bis9XCIvLi5cIjpuPVwiLi5cIixvPTIpfWVsc2Ugbi5sZW5ndGg+MD9uKz1cIi9cIit0LnNsaWNlKGkrMSxoKTpuPXQuc2xpY2UoaSsxLGgpLG89aC1pLTE7aT1oLGE9MH1lbHNlIDQ2PT09ciYmLTEhPT1hPysrYTphPS0xfXJldHVybiBufXZhciBuPXtyZXNvbHZlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0LG49XCJcIixvPSExLGk9YXJndW1lbnRzLmxlbmd0aC0xO2k+PS0xJiYhbztpLS0pe3ZhciBhO2k+PTA/YT1hcmd1bWVudHNbaV06KHZvaWQgMD09PXQmJih0PXByb2Nlc3MuY3dkKCkpLGE9dCksZShhKSwwIT09YS5sZW5ndGgmJihuPWErXCIvXCIrbixvPTQ3PT09YS5jaGFyQ29kZUF0KDApKX1yZXR1cm4gbj1yKG4sIW8pLG8/bi5sZW5ndGg+MD9cIi9cIituOlwiL1wiOm4ubGVuZ3RoPjA/bjpcIi5cIn0sbm9ybWFsaXplOmZ1bmN0aW9uKHQpe2lmKGUodCksMD09PXQubGVuZ3RoKXJldHVyblwiLlwiO3ZhciBuPTQ3PT09dC5jaGFyQ29kZUF0KDApLG89NDc9PT10LmNoYXJDb2RlQXQodC5sZW5ndGgtMSk7cmV0dXJuIDAhPT0odD1yKHQsIW4pKS5sZW5ndGh8fG58fCh0PVwiLlwiKSx0Lmxlbmd0aD4wJiZvJiYodCs9XCIvXCIpLG4/XCIvXCIrdDp0fSxpc0Fic29sdXRlOmZ1bmN0aW9uKHQpe3JldHVybiBlKHQpLHQubGVuZ3RoPjAmJjQ3PT09dC5jaGFyQ29kZUF0KDApfSxqb2luOmZ1bmN0aW9uKCl7aWYoMD09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuXCIuXCI7Zm9yKHZhciB0LHI9MDtyPGFyZ3VtZW50cy5sZW5ndGg7KytyKXt2YXIgbz1hcmd1bWVudHNbcl07ZShvKSxvLmxlbmd0aD4wJiYodm9pZCAwPT09dD90PW86dCs9XCIvXCIrbyl9cmV0dXJuIHZvaWQgMD09PXQ/XCIuXCI6bi5ub3JtYWxpemUodCl9LHJlbGF0aXZlOmZ1bmN0aW9uKHQscil7aWYoZSh0KSxlKHIpLHQ9PT1yKXJldHVyblwiXCI7aWYoKHQ9bi5yZXNvbHZlKHQpKT09PShyPW4ucmVzb2x2ZShyKSkpcmV0dXJuXCJcIjtmb3IodmFyIG89MTtvPHQubGVuZ3RoJiY0Nz09PXQuY2hhckNvZGVBdChvKTsrK28pO2Zvcih2YXIgaT10Lmxlbmd0aCxhPWktbyxoPTE7aDxyLmxlbmd0aCYmNDc9PT1yLmNoYXJDb2RlQXQoaCk7KytoKTtmb3IodmFyIHM9ci5sZW5ndGgtaCxjPWE8cz9hOnMsZj0tMSx1PTA7dTw9YzsrK3Upe2lmKHU9PT1jKXtpZihzPmMpe2lmKDQ3PT09ci5jaGFyQ29kZUF0KGgrdSkpcmV0dXJuIHIuc2xpY2UoaCt1KzEpO2lmKDA9PT11KXJldHVybiByLnNsaWNlKGgrdSl9ZWxzZSBhPmMmJig0Nz09PXQuY2hhckNvZGVBdChvK3UpP2Y9dTowPT09dSYmKGY9MCkpO2JyZWFrfXZhciBsPXQuY2hhckNvZGVBdChvK3UpO2lmKGwhPT1yLmNoYXJDb2RlQXQoaCt1KSlicmVhazs0Nz09PWwmJihmPXUpfXZhciBwPVwiXCI7Zm9yKHU9bytmKzE7dTw9aTsrK3UpdSE9PWkmJjQ3IT09dC5jaGFyQ29kZUF0KHUpfHwoMD09PXAubGVuZ3RoP3ArPVwiLi5cIjpwKz1cIi8uLlwiKTtyZXR1cm4gcC5sZW5ndGg+MD9wK3Iuc2xpY2UoaCtmKTooaCs9Ziw0Nz09PXIuY2hhckNvZGVBdChoKSYmKytoLHIuc2xpY2UoaCkpfSxfbWFrZUxvbmc6ZnVuY3Rpb24odCl7cmV0dXJuIHR9LGRpcm5hbWU6ZnVuY3Rpb24odCl7aWYoZSh0KSwwPT09dC5sZW5ndGgpcmV0dXJuXCIuXCI7Zm9yKHZhciByPXQuY2hhckNvZGVBdCgwKSxuPTQ3PT09cixvPS0xLGk9ITAsYT10Lmxlbmd0aC0xO2E+PTE7LS1hKWlmKDQ3PT09KHI9dC5jaGFyQ29kZUF0KGEpKSl7aWYoIWkpe289YTticmVha319ZWxzZSBpPSExO3JldHVybi0xPT09bz9uP1wiL1wiOlwiLlwiOm4mJjE9PT1vP1wiLy9cIjp0LnNsaWNlKDAsbyl9LGJhc2VuYW1lOmZ1bmN0aW9uKHQscil7aWYodm9pZCAwIT09ciYmXCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcignXCJleHRcIiBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJyk7ZSh0KTt2YXIgbixvPTAsaT0tMSxhPSEwO2lmKHZvaWQgMCE9PXImJnIubGVuZ3RoPjAmJnIubGVuZ3RoPD10Lmxlbmd0aCl7aWYoci5sZW5ndGg9PT10Lmxlbmd0aCYmcj09PXQpcmV0dXJuXCJcIjt2YXIgaD1yLmxlbmd0aC0xLHM9LTE7Zm9yKG49dC5sZW5ndGgtMTtuPj0wOy0tbil7dmFyIGM9dC5jaGFyQ29kZUF0KG4pO2lmKDQ3PT09Yyl7aWYoIWEpe289bisxO2JyZWFrfX1lbHNlLTE9PT1zJiYoYT0hMSxzPW4rMSksaD49MCYmKGM9PT1yLmNoYXJDb2RlQXQoaCk/LTE9PS0taCYmKGk9bik6KGg9LTEsaT1zKSl9cmV0dXJuIG89PT1pP2k9czotMT09PWkmJihpPXQubGVuZ3RoKSx0LnNsaWNlKG8saSl9Zm9yKG49dC5sZW5ndGgtMTtuPj0wOy0tbilpZig0Nz09PXQuY2hhckNvZGVBdChuKSl7aWYoIWEpe289bisxO2JyZWFrfX1lbHNlLTE9PT1pJiYoYT0hMSxpPW4rMSk7cmV0dXJuLTE9PT1pP1wiXCI6dC5zbGljZShvLGkpfSxleHRuYW1lOmZ1bmN0aW9uKHQpe2UodCk7Zm9yKHZhciByPS0xLG49MCxvPS0xLGk9ITAsYT0wLGg9dC5sZW5ndGgtMTtoPj0wOy0taCl7dmFyIHM9dC5jaGFyQ29kZUF0KGgpO2lmKDQ3IT09cyktMT09PW8mJihpPSExLG89aCsxKSw0Nj09PXM/LTE9PT1yP3I9aDoxIT09YSYmKGE9MSk6LTEhPT1yJiYoYT0tMSk7ZWxzZSBpZighaSl7bj1oKzE7YnJlYWt9fXJldHVybi0xPT09cnx8LTE9PT1vfHwwPT09YXx8MT09PWEmJnI9PT1vLTEmJnI9PT1uKzE/XCJcIjp0LnNsaWNlKHIsbyl9LGZvcm1hdDpmdW5jdGlvbih0KXtpZihudWxsPT09dHx8XCJvYmplY3RcIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwicGF0aE9iamVjdFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgdCk7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZS5kaXJ8fGUucm9vdCxuPWUuYmFzZXx8KGUubmFtZXx8XCJcIikrKGUuZXh0fHxcIlwiKTtyZXR1cm4gcj9yPT09ZS5yb290P3IrbjpyK1wiL1wiK246bn0oMCx0KX0scGFyc2U6ZnVuY3Rpb24odCl7ZSh0KTt2YXIgcj17cm9vdDpcIlwiLGRpcjpcIlwiLGJhc2U6XCJcIixleHQ6XCJcIixuYW1lOlwiXCJ9O2lmKDA9PT10Lmxlbmd0aClyZXR1cm4gcjt2YXIgbixvPXQuY2hhckNvZGVBdCgwKSxpPTQ3PT09bztpPyhyLnJvb3Q9XCIvXCIsbj0xKTpuPTA7Zm9yKHZhciBhPS0xLGg9MCxzPS0xLGM9ITAsZj10Lmxlbmd0aC0xLHU9MDtmPj1uOy0tZilpZig0NyE9PShvPXQuY2hhckNvZGVBdChmKSkpLTE9PT1zJiYoYz0hMSxzPWYrMSksNDY9PT1vPy0xPT09YT9hPWY6MSE9PXUmJih1PTEpOi0xIT09YSYmKHU9LTEpO2Vsc2UgaWYoIWMpe2g9ZisxO2JyZWFrfXJldHVybi0xPT09YXx8LTE9PT1zfHwwPT09dXx8MT09PXUmJmE9PT1zLTEmJmE9PT1oKzE/LTEhPT1zJiYoci5iYXNlPXIubmFtZT0wPT09aCYmaT90LnNsaWNlKDEscyk6dC5zbGljZShoLHMpKTooMD09PWgmJmk/KHIubmFtZT10LnNsaWNlKDEsYSksci5iYXNlPXQuc2xpY2UoMSxzKSk6KHIubmFtZT10LnNsaWNlKGgsYSksci5iYXNlPXQuc2xpY2UoaCxzKSksci5leHQ9dC5zbGljZShhLHMpKSxoPjA/ci5kaXI9dC5zbGljZSgwLGgtMSk6aSYmKHIuZGlyPVwiL1wiKSxyfSxzZXA6XCIvXCIsZGVsaW1pdGVyOlwiOlwiLHdpbjMyOm51bGwscG9zaXg6bnVsbH07bi5wb3NpeD1uLHQuZXhwb3J0cz1ufX0sZT17fTtmdW5jdGlvbiByKG4pe3ZhciBvPWVbbl07aWYodm9pZCAwIT09bylyZXR1cm4gby5leHBvcnRzO3ZhciBpPWVbbl09e2V4cG9ydHM6e319O3JldHVybiB0W25dKGksaS5leHBvcnRzLHIpLGkuZXhwb3J0c31yLmQ9KHQsZSk9Pntmb3IodmFyIG4gaW4gZSlyLm8oZSxuKSYmIXIubyh0LG4pJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDplW25dfSl9LHIubz0odCxlKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSksci5yPXQ9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgbj17fTsoKCk9Pnt2YXIgdDtpZihyLnIobiksci5kKG4se1VSSTooKT0+cCxVdGlsczooKT0+X30pLFwib2JqZWN0XCI9PXR5cGVvZiBwcm9jZXNzKXQ9XCJ3aW4zMlwiPT09cHJvY2Vzcy5wbGF0Zm9ybTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBuYXZpZ2F0b3Ipe3ZhciBlPW5hdmlnYXRvci51c2VyQWdlbnQ7dD1lLmluZGV4T2YoXCJXaW5kb3dzXCIpPj0wfXZhciBvLGksYT0obz1mdW5jdGlvbih0LGUpe3JldHVybiBvPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgciBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpJiYodFtyXT1lW3JdKX0sbyh0LGUpfSxmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJm51bGwhPT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiK1N0cmluZyhlKStcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPXR9byh0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KHIucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyByKX0pLGg9L15cXHdbXFx3XFxkKy4tXSokLyxzPS9eXFwvLyxjPS9eXFwvXFwvLyxmPVwiXCIsdT1cIi9cIixsPS9eKChbXjovPyNdKz8pOik/KFxcL1xcLyhbXi8/I10qKSk/KFtePyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8vLHA9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsZSxyLG4sbyxpKXt2b2lkIDA9PT1pJiYoaT0hMSksXCJvYmplY3RcIj09dHlwZW9mIHQ/KHRoaXMuc2NoZW1lPXQuc2NoZW1lfHxmLHRoaXMuYXV0aG9yaXR5PXQuYXV0aG9yaXR5fHxmLHRoaXMucGF0aD10LnBhdGh8fGYsdGhpcy5xdWVyeT10LnF1ZXJ5fHxmLHRoaXMuZnJhZ21lbnQ9dC5mcmFnbWVudHx8Zik6KHRoaXMuc2NoZW1lPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHR8fGU/dDpcImZpbGVcIn0odCxpKSx0aGlzLmF1dGhvcml0eT1lfHxmLHRoaXMucGF0aD1mdW5jdGlvbih0LGUpe3N3aXRjaCh0KXtjYXNlXCJodHRwc1wiOmNhc2VcImh0dHBcIjpjYXNlXCJmaWxlXCI6ZT9lWzBdIT09dSYmKGU9dStlKTplPXV9cmV0dXJuIGV9KHRoaXMuc2NoZW1lLHJ8fGYpLHRoaXMucXVlcnk9bnx8Zix0aGlzLmZyYWdtZW50PW98fGYsZnVuY3Rpb24odCxlKXtpZighdC5zY2hlbWUmJmUpdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBTY2hlbWUgaXMgbWlzc2luZzoge3NjaGVtZTogXCJcIiwgYXV0aG9yaXR5OiBcIicuY29uY2F0KHQuYXV0aG9yaXR5LCdcIiwgcGF0aDogXCInKS5jb25jYXQodC5wYXRoLCdcIiwgcXVlcnk6IFwiJykuY29uY2F0KHQucXVlcnksJ1wiLCBmcmFnbWVudDogXCInKS5jb25jYXQodC5mcmFnbWVudCwnXCJ9JykpO2lmKHQuc2NoZW1lJiYhaC50ZXN0KHQuc2NoZW1lKSl0aHJvdyBuZXcgRXJyb3IoXCJbVXJpRXJyb3JdOiBTY2hlbWUgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzLlwiKTtpZih0LnBhdGgpaWYodC5hdXRob3JpdHkpe2lmKCFzLnRlc3QodC5wYXRoKSl0aHJvdyBuZXcgRXJyb3IoJ1tVcmlFcnJvcl06IElmIGEgVVJJIGNvbnRhaW5zIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY29tcG9uZW50IG11c3QgZWl0aGVyIGJlIGVtcHR5IG9yIGJlZ2luIHdpdGggYSBzbGFzaCAoXCIvXCIpIGNoYXJhY3RlcicpfWVsc2UgaWYoYy50ZXN0KHQucGF0aCkpdGhyb3cgbmV3IEVycm9yKCdbVXJpRXJyb3JdOiBJZiBhIFVSSSBkb2VzIG5vdCBjb250YWluIGFuIGF1dGhvcml0eSBjb21wb25lbnQsIHRoZW4gdGhlIHBhdGggY2Fubm90IGJlZ2luIHdpdGggdHdvIHNsYXNoIGNoYXJhY3RlcnMgKFwiLy9cIiknKX0odGhpcyxpKSl9cmV0dXJuIGUuaXNVcmk9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBlfHwhIXQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmF1dGhvcml0eSYmXCJzdHJpbmdcIj09dHlwZW9mIHQuZnJhZ21lbnQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LnBhdGgmJlwic3RyaW5nXCI9PXR5cGVvZiB0LnF1ZXJ5JiZcInN0cmluZ1wiPT10eXBlb2YgdC5zY2hlbWUmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmZzUGF0aCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC53aXRoJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRvU3RyaW5nfSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZS5wcm90b3R5cGUsXCJmc1BhdGhcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGIodGhpcywhMSl9LGVudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwfSksZS5wcm90b3R5cGUud2l0aD1mdW5jdGlvbih0KXtpZighdClyZXR1cm4gdGhpczt2YXIgZT10LnNjaGVtZSxyPXQuYXV0aG9yaXR5LG49dC5wYXRoLG89dC5xdWVyeSxpPXQuZnJhZ21lbnQ7cmV0dXJuIHZvaWQgMD09PWU/ZT10aGlzLnNjaGVtZTpudWxsPT09ZSYmKGU9Ziksdm9pZCAwPT09cj9yPXRoaXMuYXV0aG9yaXR5Om51bGw9PT1yJiYocj1mKSx2b2lkIDA9PT1uP249dGhpcy5wYXRoOm51bGw9PT1uJiYobj1mKSx2b2lkIDA9PT1vP289dGhpcy5xdWVyeTpudWxsPT09byYmKG89Ziksdm9pZCAwPT09aT9pPXRoaXMuZnJhZ21lbnQ6bnVsbD09PWkmJihpPWYpLGU9PT10aGlzLnNjaGVtZSYmcj09PXRoaXMuYXV0aG9yaXR5JiZuPT09dGhpcy5wYXRoJiZvPT09dGhpcy5xdWVyeSYmaT09PXRoaXMuZnJhZ21lbnQ/dGhpczpuZXcgZChlLHIsbixvLGkpfSxlLnBhcnNlPWZ1bmN0aW9uKHQsZSl7dm9pZCAwPT09ZSYmKGU9ITEpO3ZhciByPWwuZXhlYyh0KTtyZXR1cm4gcj9uZXcgZChyWzJdfHxmLHgocls0XXx8ZikseChyWzVdfHxmKSx4KHJbN118fGYpLHgocls5XXx8ZiksZSk6bmV3IGQoZixmLGYsZixmKX0sZS5maWxlPWZ1bmN0aW9uKGUpe3ZhciByPWY7aWYodCYmKGU9ZS5yZXBsYWNlKC9cXFxcL2csdSkpLGVbMF09PT11JiZlWzFdPT09dSl7dmFyIG49ZS5pbmRleE9mKHUsMik7LTE9PT1uPyhyPWUuc3Vic3RyaW5nKDIpLGU9dSk6KHI9ZS5zdWJzdHJpbmcoMixuKSxlPWUuc3Vic3RyaW5nKG4pfHx1KX1yZXR1cm4gbmV3IGQoXCJmaWxlXCIscixlLGYsZil9LGUuZnJvbT1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGQodC5zY2hlbWUsdC5hdXRob3JpdHksdC5wYXRoLHQucXVlcnksdC5mcmFnbWVudCl9LGUucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMSksQyh0aGlzLHQpfSxlLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30sZS5yZXZpdmU9ZnVuY3Rpb24odCl7aWYodCl7aWYodCBpbnN0YW5jZW9mIGUpcmV0dXJuIHQ7dmFyIHI9bmV3IGQodCk7cmV0dXJuIHIuX2Zvcm1hdHRlZD10LmV4dGVybmFsLHIuX2ZzUGF0aD10Ll9zZXA9PT1nP3QuZnNQYXRoOm51bGwscn1yZXR1cm4gdH0sZX0oKSxnPXQ/MTp2b2lkIDAsZD1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKCl7dmFyIGU9bnVsbCE9PXQmJnQuYXBwbHkodGhpcyxhcmd1bWVudHMpfHx0aGlzO3JldHVybiBlLl9mb3JtYXR0ZWQ9bnVsbCxlLl9mc1BhdGg9bnVsbCxlfXJldHVybiBhKGUsdCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUucHJvdG90eXBlLFwiZnNQYXRoXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mc1BhdGh8fCh0aGlzLl9mc1BhdGg9Yih0aGlzLCExKSksdGhpcy5fZnNQYXRofSxlbnVtZXJhYmxlOiExLGNvbmZpZ3VyYWJsZTohMH0pLGUucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMSksdD9DKHRoaXMsITApOih0aGlzLl9mb3JtYXR0ZWR8fCh0aGlzLl9mb3JtYXR0ZWQ9Qyh0aGlzLCExKSksdGhpcy5fZm9ybWF0dGVkKX0sZS5wcm90b3R5cGUudG9KU09OPWZ1bmN0aW9uKCl7dmFyIHQ9eyRtaWQ6MX07cmV0dXJuIHRoaXMuX2ZzUGF0aCYmKHQuZnNQYXRoPXRoaXMuX2ZzUGF0aCx0Ll9zZXA9ZyksdGhpcy5fZm9ybWF0dGVkJiYodC5leHRlcm5hbD10aGlzLl9mb3JtYXR0ZWQpLHRoaXMucGF0aCYmKHQucGF0aD10aGlzLnBhdGgpLHRoaXMuc2NoZW1lJiYodC5zY2hlbWU9dGhpcy5zY2hlbWUpLHRoaXMuYXV0aG9yaXR5JiYodC5hdXRob3JpdHk9dGhpcy5hdXRob3JpdHkpLHRoaXMucXVlcnkmJih0LnF1ZXJ5PXRoaXMucXVlcnkpLHRoaXMuZnJhZ21lbnQmJih0LmZyYWdtZW50PXRoaXMuZnJhZ21lbnQpLHR9LGV9KHApLHY9KChpPXt9KVs1OF09XCIlM0FcIixpWzQ3XT1cIiUyRlwiLGlbNjNdPVwiJTNGXCIsaVszNV09XCIlMjNcIixpWzkxXT1cIiU1QlwiLGlbOTNdPVwiJTVEXCIsaVs2NF09XCIlNDBcIixpWzMzXT1cIiUyMVwiLGlbMzZdPVwiJTI0XCIsaVszOF09XCIlMjZcIixpWzM5XT1cIiUyN1wiLGlbNDBdPVwiJTI4XCIsaVs0MV09XCIlMjlcIixpWzQyXT1cIiUyQVwiLGlbNDNdPVwiJTJCXCIsaVs0NF09XCIlMkNcIixpWzU5XT1cIiUzQlwiLGlbNjFdPVwiJTNEXCIsaVszMl09XCIlMjBcIixpKTtmdW5jdGlvbiB5KHQsZSl7Zm9yKHZhciByPXZvaWQgMCxuPS0xLG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIGk9dC5jaGFyQ29kZUF0KG8pO2lmKGk+PTk3JiZpPD0xMjJ8fGk+PTY1JiZpPD05MHx8aT49NDgmJmk8PTU3fHw0NT09PWl8fDQ2PT09aXx8OTU9PT1pfHwxMjY9PT1pfHxlJiY0Nz09PWkpLTEhPT1uJiYocis9ZW5jb2RlVVJJQ29tcG9uZW50KHQuc3Vic3RyaW5nKG4sbykpLG49LTEpLHZvaWQgMCE9PXImJihyKz10LmNoYXJBdChvKSk7ZWxzZXt2b2lkIDA9PT1yJiYocj10LnN1YnN0cigwLG8pKTt2YXIgYT12W2ldO3ZvaWQgMCE9PWE/KC0xIT09biYmKHIrPWVuY29kZVVSSUNvbXBvbmVudCh0LnN1YnN0cmluZyhuLG8pKSxuPS0xKSxyKz1hKTotMT09PW4mJihuPW8pfX1yZXR1cm4tMSE9PW4mJihyKz1lbmNvZGVVUklDb21wb25lbnQodC5zdWJzdHJpbmcobikpKSx2b2lkIDAhPT1yP3I6dH1mdW5jdGlvbiBtKHQpe2Zvcih2YXIgZT12b2lkIDAscj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10LmNoYXJDb2RlQXQocik7MzU9PT1ufHw2Mz09PW4/KHZvaWQgMD09PWUmJihlPXQuc3Vic3RyKDAscikpLGUrPXZbbl0pOnZvaWQgMCE9PWUmJihlKz10W3JdKX1yZXR1cm4gdm9pZCAwIT09ZT9lOnR9ZnVuY3Rpb24gYihlLHIpe3ZhciBuO3JldHVybiBuPWUuYXV0aG9yaXR5JiZlLnBhdGgubGVuZ3RoPjEmJlwiZmlsZVwiPT09ZS5zY2hlbWU/XCIvL1wiLmNvbmNhdChlLmF1dGhvcml0eSkuY29uY2F0KGUucGF0aCk6NDc9PT1lLnBhdGguY2hhckNvZGVBdCgwKSYmKGUucGF0aC5jaGFyQ29kZUF0KDEpPj02NSYmZS5wYXRoLmNoYXJDb2RlQXQoMSk8PTkwfHxlLnBhdGguY2hhckNvZGVBdCgxKT49OTcmJmUucGF0aC5jaGFyQ29kZUF0KDEpPD0xMjIpJiY1OD09PWUucGF0aC5jaGFyQ29kZUF0KDIpP3I/ZS5wYXRoLnN1YnN0cigxKTplLnBhdGhbMV0udG9Mb3dlckNhc2UoKStlLnBhdGguc3Vic3RyKDIpOmUucGF0aCx0JiYobj1uLnJlcGxhY2UoL1xcLy9nLFwiXFxcXFwiKSksbn1mdW5jdGlvbiBDKHQsZSl7dmFyIHI9ZT9tOnksbj1cIlwiLG89dC5zY2hlbWUsaT10LmF1dGhvcml0eSxhPXQucGF0aCxoPXQucXVlcnkscz10LmZyYWdtZW50O2lmKG8mJihuKz1vLG4rPVwiOlwiKSwoaXx8XCJmaWxlXCI9PT1vKSYmKG4rPXUsbis9dSksaSl7dmFyIGM9aS5pbmRleE9mKFwiQFwiKTtpZigtMSE9PWMpe3ZhciBmPWkuc3Vic3RyKDAsYyk7aT1pLnN1YnN0cihjKzEpLC0xPT09KGM9Zi5pbmRleE9mKFwiOlwiKSk/bis9cihmLCExKToobis9cihmLnN1YnN0cigwLGMpLCExKSxuKz1cIjpcIixuKz1yKGYuc3Vic3RyKGMrMSksITEpKSxuKz1cIkBcIn0tMT09PShjPShpPWkudG9Mb3dlckNhc2UoKSkuaW5kZXhPZihcIjpcIikpP24rPXIoaSwhMSk6KG4rPXIoaS5zdWJzdHIoMCxjKSwhMSksbis9aS5zdWJzdHIoYykpfWlmKGEpe2lmKGEubGVuZ3RoPj0zJiY0Nz09PWEuY2hhckNvZGVBdCgwKSYmNTg9PT1hLmNoYXJDb2RlQXQoMikpKGw9YS5jaGFyQ29kZUF0KDEpKT49NjUmJmw8PTkwJiYoYT1cIi9cIi5jb25jYXQoU3RyaW5nLmZyb21DaGFyQ29kZShsKzMyKSxcIjpcIikuY29uY2F0KGEuc3Vic3RyKDMpKSk7ZWxzZSBpZihhLmxlbmd0aD49MiYmNTg9PT1hLmNoYXJDb2RlQXQoMSkpe3ZhciBsOyhsPWEuY2hhckNvZGVBdCgwKSk+PTY1JiZsPD05MCYmKGE9XCJcIi5jb25jYXQoU3RyaW5nLmZyb21DaGFyQ29kZShsKzMyKSxcIjpcIikuY29uY2F0KGEuc3Vic3RyKDIpKSl9bis9cihhLCEwKX1yZXR1cm4gaCYmKG4rPVwiP1wiLG4rPXIoaCwhMSkpLHMmJihuKz1cIiNcIixuKz1lP3M6eShzLCExKSksbn1mdW5jdGlvbiBBKHQpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHQpfWNhdGNoKGUpe3JldHVybiB0Lmxlbmd0aD4zP3Quc3Vic3RyKDAsMykrQSh0LnN1YnN0cigzKSk6dH19dmFyIHc9LyglWzAtOUEtWmEtel1bMC05QS1aYS16XSkrL2c7ZnVuY3Rpb24geCh0KXtyZXR1cm4gdC5tYXRjaCh3KT90LnJlcGxhY2UodywoZnVuY3Rpb24odCl7cmV0dXJuIEEodCl9KSk6dH12YXIgXyxPPXIoNDcwKSxQPWZ1bmN0aW9uKHQsZSxyKXtpZihyfHwyPT09YXJndW1lbnRzLmxlbmd0aClmb3IodmFyIG4sbz0wLGk9ZS5sZW5ndGg7bzxpO28rKykhbiYmbyBpbiBlfHwobnx8KG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSwwLG8pKSxuW29dPWVbb10pO3JldHVybiB0LmNvbmNhdChufHxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKSl9LGo9Ty5wb3NpeHx8TyxVPVwiL1wiOyFmdW5jdGlvbih0KXt0LmpvaW5QYXRoPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1bXSxyPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyllW3ItMV09YXJndW1lbnRzW3JdO3JldHVybiB0LndpdGgoe3BhdGg6ai5qb2luLmFwcGx5KGosUChbdC5wYXRoXSxlLCExKSl9KX0sdC5yZXNvbHZlUGF0aD1mdW5jdGlvbih0KXtmb3IodmFyIGU9W10scj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspZVtyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbj10LnBhdGgsbz0hMTtuWzBdIT09VSYmKG49VStuLG89ITApO3ZhciBpPWoucmVzb2x2ZS5hcHBseShqLFAoW25dLGUsITEpKTtyZXR1cm4gbyYmaVswXT09PVUmJiF0LmF1dGhvcml0eSYmKGk9aS5zdWJzdHJpbmcoMSkpLHQud2l0aCh7cGF0aDppfSl9LHQuZGlybmFtZT1mdW5jdGlvbih0KXtpZigwPT09dC5wYXRoLmxlbmd0aHx8dC5wYXRoPT09VSlyZXR1cm4gdDt2YXIgZT1qLmRpcm5hbWUodC5wYXRoKTtyZXR1cm4gMT09PWUubGVuZ3RoJiY0Nj09PWUuY2hhckNvZGVBdCgwKSYmKGU9XCJcIiksdC53aXRoKHtwYXRoOmV9KX0sdC5iYXNlbmFtZT1mdW5jdGlvbih0KXtyZXR1cm4gai5iYXNlbmFtZSh0LnBhdGgpfSx0LmV4dG5hbWU9ZnVuY3Rpb24odCl7cmV0dXJuIGouZXh0bmFtZSh0LnBhdGgpfX0oX3x8KF89e30pKX0pKCksTElCPW59KSgpO2V4cG9ydCBjb25zdHtVUkksVXRpbHN9PUxJQjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tICcuL2NvbW1hbmRzQW5kRXZlbnRzJztcclxuaW1wb3J0IHsgVVJJIH0gZnJvbSAndnNjb2RlLXVyaSc7XHJcbmltcG9ydCB7IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUsIGlzS2VybmVsQ29tbWFuZEVudmVsb3BlIH0gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2VybmVsVXJpKGtlcm5lbFVyaTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGtlcm5lbFVyaTsvLz9cclxuICAgIGNvbnN0IHVyaSA9IFVSSS5wYXJzZShrZXJuZWxVcmkpO1xyXG4gICAgdXJpLmF1dGhvcml0eTsvLz9cclxuICAgIHVyaS5wYXRoOy8vP1xyXG4gICAgbGV0IGFic29sdXRlVXJpID0gYCR7dXJpLnNjaGVtZX06Ly8ke3VyaS5hdXRob3JpdHl9JHt1cmkucGF0aCB8fCBcIi9cIn1gO1xyXG4gICAgcmV0dXJuIGFic29sdXRlVXJpOy8vP1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2VybmVsVXJpV2l0aFF1ZXJ5KGtlcm5lbFVyaTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGtlcm5lbFVyaTsvLz9cclxuICAgIGNvbnN0IHVyaSA9IFVSSS5wYXJzZShrZXJuZWxVcmkpO1xyXG4gICAgdXJpLmF1dGhvcml0eTsvLz9cclxuICAgIHVyaS5wYXRoOy8vP1xyXG4gICAgbGV0IGFic29sdXRlVXJpID0gYCR7dXJpLnNjaGVtZX06Ly8ke3VyaS5hdXRob3JpdHl9JHt1cmkucGF0aCB8fCBcIi9cIn1gO1xyXG4gICAgaWYgKHVyaS5xdWVyeSkge1xyXG4gICAgICAgIGFic29sdXRlVXJpICs9IGA/JHt1cmkucXVlcnl9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBhYnNvbHV0ZVVyaTsvLz9cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnKGtlcm5lbFVyaTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGNvbnN0IHVyaSA9IFVSSS5wYXJzZShrZXJuZWxVcmkpO1xyXG4gICAgaWYgKHVyaS5xdWVyeSkgey8vP1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gdXJpLnF1ZXJ5LnNwbGl0KFwidGFnPVwiKTtcclxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydHNbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJvdXRpbmdTbGlwKGtlcm5lbFVyaXM6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChrZXJuZWxVcmlzLm1hcChlID0+IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShlKSkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm91dGluZ1NsaXBTdGFydHNXaXRoKHRoaXNLZXJuZWxVcmlzOiBzdHJpbmdbXSwgb3RoZXJLZXJuZWxVcmlzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHN0YXJ0c1dpdGggPSB0cnVlO1xyXG5cclxuICAgIGlmIChvdGhlcktlcm5lbFVyaXMubGVuZ3RoID4gMCAmJiB0aGlzS2VybmVsVXJpcy5sZW5ndGggPj0gb3RoZXJLZXJuZWxVcmlzLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJLZXJuZWxVcmlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjcmVhdGVLZXJuZWxVcmkob3RoZXJLZXJuZWxVcmlzW2ldKSAhPT0gY3JlYXRlS2VybmVsVXJpKHRoaXNLZXJuZWxVcmlzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRzV2l0aCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGFydHNXaXRoID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXJ0c1dpdGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdXRpbmdTbGlwQ29udGFpbnMocm91dGluZ1NsaXA6IHN0cmluZ1tdLCBrZXJuZWxVcmk6IHN0cmluZywgaWdub3JlUXVlcnk6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFVyaSA9IGlnbm9yZVF1ZXJ5ID8gY3JlYXRlS2VybmVsVXJpKGtlcm5lbFVyaSkgOiBjcmVhdGVLZXJuZWxVcmlXaXRoUXVlcnkoa2VybmVsVXJpKTtcclxuICAgIHJldHVybiByb3V0aW5nU2xpcC5maW5kKGUgPT4gbm9ybWFsaXplZFVyaSA9PT0gKCFpZ25vcmVRdWVyeSA/IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShlKSA6IGNyZWF0ZUtlcm5lbFVyaShlKSkpICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb3V0aW5nU2xpcCB7XHJcbiAgICBwcml2YXRlIF91cmlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgdXJpcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VyaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldCB1cmlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMuX3VyaXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMoa2VybmVsVXJpOiBzdHJpbmcsIGlnbm9yZVF1ZXJ5OiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcm91dGluZ1NsaXBDb250YWlucyh0aGlzLl91cmlzLCBrZXJuZWxVcmksIGlnbm9yZVF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRzV2l0aChvdGhlcjogc3RyaW5nW10gfCBSb3V0aW5nU2xpcCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChvdGhlciBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0aW5nU2xpcFN0YXJ0c1dpdGgodGhpcy5fdXJpcywgb3RoZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0aW5nU2xpcFN0YXJ0c1dpdGgodGhpcy5fdXJpcywgb3RoZXIuX3VyaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGludWVXaXRoKG90aGVyOiBzdHJpbmdbXSB8IFJvdXRpbmdTbGlwKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG90aGVyVXJpcyA9IChvdGhlciBpbnN0YW5jZW9mIEFycmF5ID8gb3RoZXIgOiBvdGhlci5fdXJpcykgfHwgW107XHJcbiAgICAgICAgaWYgKG90aGVyVXJpcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChyb3V0aW5nU2xpcFN0YXJ0c1dpdGgob3RoZXJVcmlzLCB0aGlzLl91cmlzKSkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJVcmlzID0gb3RoZXJVcmlzLnNsaWNlKHRoaXMuX3VyaXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclVyaXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5zKG90aGVyVXJpc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VyaXMucHVzaChvdGhlclVyaXNbaV0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdXJpICR7b3RoZXJVcmlzW2ldfSBpcyBhbHJlYWR5IGluIHRoZSByb3V0aW5nIHNsaXAgWyR7dGhpcy5fdXJpc31dLCBjYW5ub3QgY29udGludWUgd2l0aCByb3V0aW5nIHNsaXAgWyR7b3RoZXJVcmlzfV1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9BcnJheSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLl91cmlzXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3RhbXAoa2VybmVsVXJpOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWFuZFJvdXRpbmdTbGlwIGV4dGVuZHMgUm91dGluZ1NsaXAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21VcmlzKHVyaXM6IHN0cmluZ1tdKTogQ29tbWFuZFJvdXRpbmdTbGlwIHtcclxuICAgICAgICBjb25zdCByb3V0aW5nU2xpcCA9IG5ldyBDb21tYW5kUm91dGluZ1NsaXAoKTtcclxuICAgICAgICByb3V0aW5nU2xpcC51cmlzID0gdXJpcztcclxuICAgICAgICByZXR1cm4gcm91dGluZ1NsaXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YW1wQXNBcnJpdmVkKGtlcm5lbFVyaTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFtcEFzKGtlcm5lbFVyaSwgXCJhcnJpdmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzdGFtcChrZXJuZWxVcmk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhbXBBcyhrZXJuZWxVcmkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhbXBBcyhrZXJuZWxVcmk6IHN0cmluZywgdGFnPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRhZykge1xyXG4gICAgICAgICAgICBjb25zdCBhYnNvbHV0ZVVyaVdpdGhRdWVyeSA9IGAke2NyZWF0ZUtlcm5lbFVyaShrZXJuZWxVcmkpfT90YWc9JHt0YWd9YDtcclxuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVVcmlXaXRob3V0UXVlcnkgPSBjcmVhdGVLZXJuZWxVcmkoa2VybmVsVXJpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXJpcy5maW5kKGUgPT4gZS5zdGFydHNXaXRoKGFic29sdXRlVXJpV2l0aG91dFF1ZXJ5KSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHVyaSAke2Fic29sdXRlVXJpV2l0aFF1ZXJ5fSBpcyBhbHJlYWR5IGluIHRoZSByb3V0aW5nIHNsaXAgWyR7dGhpcy51cmlzfV1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXJpcy5wdXNoKGFic29sdXRlVXJpV2l0aFF1ZXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlVXJpV2l0aFF1ZXJ5ID0gYCR7Y3JlYXRlS2VybmVsVXJpKGtlcm5lbFVyaSl9P3RhZz1hcnJpdmVkYDtcclxuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVVcmlXaXRob3V0UXVlcnkgPSBjcmVhdGVLZXJuZWxVcmkoa2VybmVsVXJpKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnVyaXMuZmluZChlID0+IGUuc3RhcnRzV2l0aChhYnNvbHV0ZVVyaVdpdGhRdWVyeSkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB1cmkgJHthYnNvbHV0ZVVyaVdpdGhRdWVyeX0gaXMgbm90IGluIHRoZSByb3V0aW5nIHNsaXAgWyR7dGhpcy51cmlzfV1gKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVyaXMuZmluZChlID0+IGUgPT09IGFic29sdXRlVXJpV2l0aG91dFF1ZXJ5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgdXJpICR7YWJzb2x1dGVVcmlXaXRob3V0UXVlcnl9IGlzIGFscmVhZHkgaW4gdGhlIHJvdXRpbmcgc2xpcCBbJHt0aGlzLnVyaXN9XWApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cmlzLnB1c2goYWJzb2x1dGVVcmlXaXRob3V0UXVlcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRSb3V0aW5nU2xpcCBleHRlbmRzIFJvdXRpbmdTbGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tVXJpcyh1cmlzOiBzdHJpbmdbXSk6IEV2ZW50Um91dGluZ1NsaXAge1xyXG4gICAgICAgIGNvbnN0IHJvdXRpbmdTbGlwID0gbmV3IEV2ZW50Um91dGluZ1NsaXAoKTtcclxuICAgICAgICByb3V0aW5nU2xpcC51cmlzID0gdXJpcztcclxuICAgICAgICByZXR1cm4gcm91dGluZ1NsaXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG92ZXJyaWRlIHN0YW1wKGtlcm5lbFVyaTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVyaSA9IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShrZXJuZWxVcmkpO1xyXG4gICAgICAgIGNvbnN0IGNhbkFkZCA9ICF0aGlzLnVyaXMuZmluZChlID0+IGNyZWF0ZUtlcm5lbFVyaVdpdGhRdWVyeShlKSA9PT0gbm9ybWFsaXplZFVyaSk7XHJcbiAgICAgICAgaWYgKGNhbkFkZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVyaXMucHVzaChub3JtYWxpemVkVXJpKTtcclxuICAgICAgICAgICAgdGhpcy51cmlzOy8vP1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHVyaSAke25vcm1hbGl6ZWRVcml9IGlzIGFscmVhZHkgaW4gdGhlIHJvdXRpbmcgc2xpcCBbJHt0aGlzLnVyaXN9XWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG4vLyBHZW5lcmF0ZWQgVHlwZVNjcmlwdCBpbnRlcmZhY2VzIGFuZCB0eXBlcy5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBLZXJuZWwgQ29tbWFuZHNcclxuXHJcbmV4cG9ydCBjb25zdCBDYW5jZWxUeXBlID0gXCJDYW5jZWxcIjtcclxuZXhwb3J0IGNvbnN0IENvbXBpbGVQcm9qZWN0VHlwZSA9IFwiQ29tcGlsZVByb2plY3RcIjtcclxuZXhwb3J0IGNvbnN0IERpc3BsYXlFcnJvclR5cGUgPSBcIkRpc3BsYXlFcnJvclwiO1xyXG5leHBvcnQgY29uc3QgRGlzcGxheVZhbHVlVHlwZSA9IFwiRGlzcGxheVZhbHVlXCI7XHJcbmV4cG9ydCBjb25zdCBPcGVuRG9jdW1lbnRUeXBlID0gXCJPcGVuRG9jdW1lbnRcIjtcclxuZXhwb3J0IGNvbnN0IE9wZW5Qcm9qZWN0VHlwZSA9IFwiT3BlblByb2plY3RcIjtcclxuZXhwb3J0IGNvbnN0IFF1aXRUeXBlID0gXCJRdWl0XCI7XHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0Q29tcGxldGlvbnNUeXBlID0gXCJSZXF1ZXN0Q29tcGxldGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IFJlcXVlc3REaWFnbm9zdGljc1R5cGUgPSBcIlJlcXVlc3REaWFnbm9zdGljc1wiO1xyXG5leHBvcnQgY29uc3QgUmVxdWVzdEhvdmVyVGV4dFR5cGUgPSBcIlJlcXVlc3RIb3ZlclRleHRcIjtcclxuZXhwb3J0IGNvbnN0IFJlcXVlc3RJbnB1dFR5cGUgPSBcIlJlcXVlc3RJbnB1dFwiO1xyXG5leHBvcnQgY29uc3QgUmVxdWVzdEtlcm5lbEluZm9UeXBlID0gXCJSZXF1ZXN0S2VybmVsSW5mb1wiO1xyXG5leHBvcnQgY29uc3QgUmVxdWVzdFNpZ25hdHVyZUhlbHBUeXBlID0gXCJSZXF1ZXN0U2lnbmF0dXJlSGVscFwiO1xyXG5leHBvcnQgY29uc3QgUmVxdWVzdFZhbHVlVHlwZSA9IFwiUmVxdWVzdFZhbHVlXCI7XHJcbmV4cG9ydCBjb25zdCBSZXF1ZXN0VmFsdWVJbmZvc1R5cGUgPSBcIlJlcXVlc3RWYWx1ZUluZm9zXCI7XHJcbmV4cG9ydCBjb25zdCBTZW5kRWRpdGFibGVDb2RlVHlwZSA9IFwiU2VuZEVkaXRhYmxlQ29kZVwiO1xyXG5leHBvcnQgY29uc3QgU2VuZFZhbHVlVHlwZSA9IFwiU2VuZFZhbHVlXCI7XHJcbmV4cG9ydCBjb25zdCBTdWJtaXRDb2RlVHlwZSA9IFwiU3VibWl0Q29kZVwiO1xyXG5leHBvcnQgY29uc3QgVXBkYXRlRGlzcGxheWVkVmFsdWVUeXBlID0gXCJVcGRhdGVEaXNwbGF5ZWRWYWx1ZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgS2VybmVsQ29tbWFuZFR5cGUgPVxyXG4gICAgICB0eXBlb2YgQ2FuY2VsVHlwZVxyXG4gICAgfCB0eXBlb2YgQ29tcGlsZVByb2plY3RUeXBlXHJcbiAgICB8IHR5cGVvZiBEaXNwbGF5RXJyb3JUeXBlXHJcbiAgICB8IHR5cGVvZiBEaXNwbGF5VmFsdWVUeXBlXHJcbiAgICB8IHR5cGVvZiBPcGVuRG9jdW1lbnRUeXBlXHJcbiAgICB8IHR5cGVvZiBPcGVuUHJvamVjdFR5cGVcclxuICAgIHwgdHlwZW9mIFF1aXRUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0Q29tcGxldGlvbnNUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0RGlhZ25vc3RpY3NUeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0SG92ZXJUZXh0VHlwZVxyXG4gICAgfCB0eXBlb2YgUmVxdWVzdElucHV0VHlwZVxyXG4gICAgfCB0eXBlb2YgUmVxdWVzdEtlcm5lbEluZm9UeXBlXHJcbiAgICB8IHR5cGVvZiBSZXF1ZXN0U2lnbmF0dXJlSGVscFR5cGVcclxuICAgIHwgdHlwZW9mIFJlcXVlc3RWYWx1ZVR5cGVcclxuICAgIHwgdHlwZW9mIFJlcXVlc3RWYWx1ZUluZm9zVHlwZVxyXG4gICAgfCB0eXBlb2YgU2VuZEVkaXRhYmxlQ29kZVR5cGVcclxuICAgIHwgdHlwZW9mIFNlbmRWYWx1ZVR5cGVcclxuICAgIHwgdHlwZW9mIFN1Ym1pdENvZGVUeXBlXHJcbiAgICB8IHR5cGVvZiBVcGRhdGVEaXNwbGF5ZWRWYWx1ZVR5cGU7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbmNlbCBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbENvbW1hbmQge1xyXG4gICAgdGFyZ2V0S2VybmVsTmFtZT86IHN0cmluZztcclxuICAgIG9yaWdpblVyaT86IHN0cmluZztcclxuICAgIGRlc3RpbmF0aW9uVXJpPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVQcm9qZWN0IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheUVycm9yIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheVZhbHVlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBmb3JtYXR0ZWRWYWx1ZTogRm9ybWF0dGVkVmFsdWU7XHJcbiAgICB2YWx1ZUlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3BlbkRvY3VtZW50IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICByZWxhdGl2ZUZpbGVQYXRoOiBzdHJpbmc7XHJcbiAgICByZWdpb25OYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5Qcm9qZWN0IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBwcm9qZWN0OiBQcm9qZWN0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1aXQgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q29tcGxldGlvbnMgZXh0ZW5kcyBMYW5ndWFnZVNlcnZpY2VDb21tYW5kIHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZVNlcnZpY2VDb21tYW5kIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBsaW5lUG9zaXRpb246IExpbmVQb3NpdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0RGlhZ25vc3RpY3MgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxuICAgIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0SG92ZXJUZXh0IGV4dGVuZHMgTGFuZ3VhZ2VTZXJ2aWNlQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdElucHV0IGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBwcm9tcHQ6IHN0cmluZztcclxuICAgIGlzUGFzc3dvcmQ6IGJvb2xlYW47XHJcbiAgICBpbnB1dFR5cGVIaW50OiBzdHJpbmc7XHJcbiAgICB2YWx1ZU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0S2VybmVsSW5mbyBleHRlbmRzIEtlcm5lbENvbW1hbmQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RTaWduYXR1cmVIZWxwIGV4dGVuZHMgTGFuZ3VhZ2VTZXJ2aWNlQ29tbWFuZCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFZhbHVlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtaW1lVHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RWYWx1ZUluZm9zIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBtaW1lVHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbmRFZGl0YWJsZUNvZGUgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxuICAgIGtlcm5lbE5hbWU6IHN0cmluZztcclxuICAgIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZW5kVmFsdWUgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxuICAgIGZvcm1hdHRlZFZhbHVlOiBGb3JtYXR0ZWRWYWx1ZTtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWJtaXRDb2RlIGV4dGVuZHMgS2VybmVsQ29tbWFuZCB7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlRGlzcGxheWVkVmFsdWUgZXh0ZW5kcyBLZXJuZWxDb21tYW5kIHtcclxuICAgIGZvcm1hdHRlZFZhbHVlOiBGb3JtYXR0ZWRWYWx1ZTtcclxuICAgIHZhbHVlSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBJbnRlcmFjdGl2ZURvY3VtZW50T3V0cHV0RWxlbWVudCB7XHJcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueTsgfTtcclxuICAgIG1ldGFkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueTsgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGl2ZURvY3VtZW50T3V0cHV0RWxlbWVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV0dXJuVmFsdWVFbGVtZW50IGV4dGVuZHMgSW50ZXJhY3RpdmVEb2N1bWVudE91dHB1dEVsZW1lbnQge1xyXG4gICAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnk7IH07XHJcbiAgICBleGVjdXRpb25PcmRlcjogbnVtYmVyO1xyXG4gICAgbWV0YWRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRFbGVtZW50IGV4dGVuZHMgSW50ZXJhY3RpdmVEb2N1bWVudE91dHB1dEVsZW1lbnQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yRWxlbWVudCBleHRlbmRzIEludGVyYWN0aXZlRG9jdW1lbnRPdXRwdXRFbGVtZW50IHtcclxuICAgIGVycm9yTmFtZTogc3RyaW5nO1xyXG4gICAgZXJyb3JWYWx1ZTogc3RyaW5nO1xyXG4gICAgc3RhY2tUcmFjZTogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEtlcm5lbEluZm8ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbGFuZ3VhZ2VOYW1lPzogc3RyaW5nO1xyXG4gICAgYWxpYXNlczogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RlYm9va1BhcnNlUmVxdWVzdCBleHRlbmRzIE5vdGVib29rUGFyc2VPclNlcmlhbGl6ZVJlcXVlc3Qge1xyXG4gICAgdHlwZTogUmVxdWVzdFR5cGU7XHJcbiAgICByYXdEYXRhOiBVaW50OEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGVib29rUGFyc2VPclNlcmlhbGl6ZVJlcXVlc3Qge1xyXG4gICAgdHlwZTogUmVxdWVzdFR5cGU7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgc2VyaWFsaXphdGlvblR5cGU6IERvY3VtZW50U2VyaWFsaXphdGlvblR5cGU7XHJcbiAgICBkZWZhdWx0TGFuZ3VhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RlYm9va1NlcmlhbGl6ZVJlcXVlc3QgZXh0ZW5kcyBOb3RlYm9va1BhcnNlT3JTZXJpYWxpemVSZXF1ZXN0IHtcclxuICAgIHR5cGU6IFJlcXVlc3RUeXBlO1xyXG4gICAgbmV3TGluZTogc3RyaW5nO1xyXG4gICAgZG9jdW1lbnQ6IEludGVyYWN0aXZlRG9jdW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90ZWJvb2tQYXJzZVJlc3BvbnNlIGV4dGVuZHMgTm90ZWJvb2tQYXJzZXJTZXJ2ZXJSZXNwb25zZSB7XHJcbiAgICBkb2N1bWVudDogSW50ZXJhY3RpdmVEb2N1bWVudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RlYm9va1BhcnNlclNlcnZlclJlc3BvbnNlIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90ZWJvb2tTZXJpYWxpemVSZXNwb25zZSBleHRlbmRzIE5vdGVib29rUGFyc2VyU2VydmVyUmVzcG9uc2Uge1xyXG4gICAgcmF3RGF0YTogVWludDhBcnJheTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEtlcm5lbCBldmVudHNcclxuXHJcbmV4cG9ydCBjb25zdCBBc3NlbWJseVByb2R1Y2VkVHlwZSA9IFwiQXNzZW1ibHlQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFR5cGUgPSBcIkNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRcIjtcclxuZXhwb3J0IGNvbnN0IENvbW1hbmRGYWlsZWRUeXBlID0gXCJDb21tYW5kRmFpbGVkXCI7XHJcbmV4cG9ydCBjb25zdCBDb21tYW5kU3VjY2VlZGVkVHlwZSA9IFwiQ29tbWFuZFN1Y2NlZWRlZFwiO1xyXG5leHBvcnQgY29uc3QgQ29tcGxldGVDb2RlU3VibWlzc2lvblJlY2VpdmVkVHlwZSA9IFwiQ29tcGxldGVDb2RlU3VibWlzc2lvblJlY2VpdmVkXCI7XHJcbmV4cG9ydCBjb25zdCBDb21wbGV0aW9uc1Byb2R1Y2VkVHlwZSA9IFwiQ29tcGxldGlvbnNQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgRGlhZ25vc3RpY3NQcm9kdWNlZFR5cGUgPSBcIkRpYWdub3N0aWNzUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IERpc3BsYXllZFZhbHVlUHJvZHVjZWRUeXBlID0gXCJEaXNwbGF5ZWRWYWx1ZVByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBEaXNwbGF5ZWRWYWx1ZVVwZGF0ZWRUeXBlID0gXCJEaXNwbGF5ZWRWYWx1ZVVwZGF0ZWRcIjtcclxuZXhwb3J0IGNvbnN0IERvY3VtZW50T3BlbmVkVHlwZSA9IFwiRG9jdW1lbnRPcGVuZWRcIjtcclxuZXhwb3J0IGNvbnN0IEVycm9yUHJvZHVjZWRUeXBlID0gXCJFcnJvclByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBIb3ZlclRleHRQcm9kdWNlZFR5cGUgPSBcIkhvdmVyVGV4dFByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBJbmNvbXBsZXRlQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFR5cGUgPSBcIkluY29tcGxldGVDb2RlU3VibWlzc2lvblJlY2VpdmVkXCI7XHJcbmV4cG9ydCBjb25zdCBJbnB1dFByb2R1Y2VkVHlwZSA9IFwiSW5wdXRQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgS2VybmVsRXh0ZW5zaW9uTG9hZGVkVHlwZSA9IFwiS2VybmVsRXh0ZW5zaW9uTG9hZGVkXCI7XHJcbmV4cG9ydCBjb25zdCBLZXJuZWxJbmZvUHJvZHVjZWRUeXBlID0gXCJLZXJuZWxJbmZvUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IEtlcm5lbFJlYWR5VHlwZSA9IFwiS2VybmVsUmVhZHlcIjtcclxuZXhwb3J0IGNvbnN0IFBhY2thZ2VBZGRlZFR5cGUgPSBcIlBhY2thZ2VBZGRlZFwiO1xyXG5leHBvcnQgY29uc3QgUHJvamVjdE9wZW5lZFR5cGUgPSBcIlByb2plY3RPcGVuZWRcIjtcclxuZXhwb3J0IGNvbnN0IFJldHVyblZhbHVlUHJvZHVjZWRUeXBlID0gXCJSZXR1cm5WYWx1ZVByb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBTaWduYXR1cmVIZWxwUHJvZHVjZWRUeXBlID0gXCJTaWduYXR1cmVIZWxwUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IFN0YW5kYXJkRXJyb3JWYWx1ZVByb2R1Y2VkVHlwZSA9IFwiU3RhbmRhcmRFcnJvclZhbHVlUHJvZHVjZWRcIjtcclxuZXhwb3J0IGNvbnN0IFN0YW5kYXJkT3V0cHV0VmFsdWVQcm9kdWNlZFR5cGUgPSBcIlN0YW5kYXJkT3V0cHV0VmFsdWVQcm9kdWNlZFwiO1xyXG5leHBvcnQgY29uc3QgVmFsdWVJbmZvc1Byb2R1Y2VkVHlwZSA9IFwiVmFsdWVJbmZvc1Byb2R1Y2VkXCI7XHJcbmV4cG9ydCBjb25zdCBWYWx1ZVByb2R1Y2VkVHlwZSA9IFwiVmFsdWVQcm9kdWNlZFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgS2VybmVsRXZlbnRUeXBlID1cclxuICAgICAgdHlwZW9mIEFzc2VtYmx5UHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBDb2RlU3VibWlzc2lvblJlY2VpdmVkVHlwZVxyXG4gICAgfCB0eXBlb2YgQ29tbWFuZEZhaWxlZFR5cGVcclxuICAgIHwgdHlwZW9mIENvbW1hbmRTdWNjZWVkZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBDb21wbGV0ZUNvZGVTdWJtaXNzaW9uUmVjZWl2ZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBDb21wbGV0aW9uc1Byb2R1Y2VkVHlwZVxyXG4gICAgfCB0eXBlb2YgRGlhZ25vc3RpY3NQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIERpc3BsYXllZFZhbHVlUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBEaXNwbGF5ZWRWYWx1ZVVwZGF0ZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBEb2N1bWVudE9wZW5lZFR5cGVcclxuICAgIHwgdHlwZW9mIEVycm9yUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBIb3ZlclRleHRQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIEluY29tcGxldGVDb2RlU3VibWlzc2lvblJlY2VpdmVkVHlwZVxyXG4gICAgfCB0eXBlb2YgSW5wdXRQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIEtlcm5lbEV4dGVuc2lvbkxvYWRlZFR5cGVcclxuICAgIHwgdHlwZW9mIEtlcm5lbEluZm9Qcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIEtlcm5lbFJlYWR5VHlwZVxyXG4gICAgfCB0eXBlb2YgUGFja2FnZUFkZGVkVHlwZVxyXG4gICAgfCB0eXBlb2YgUHJvamVjdE9wZW5lZFR5cGVcclxuICAgIHwgdHlwZW9mIFJldHVyblZhbHVlUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBTaWduYXR1cmVIZWxwUHJvZHVjZWRUeXBlXHJcbiAgICB8IHR5cGVvZiBTdGFuZGFyZEVycm9yVmFsdWVQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIFN0YW5kYXJkT3V0cHV0VmFsdWVQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIFZhbHVlSW5mb3NQcm9kdWNlZFR5cGVcclxuICAgIHwgdHlwZW9mIFZhbHVlUHJvZHVjZWRUeXBlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBc3NlbWJseVByb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgYXNzZW1ibHk6IEJhc2U2NEVuY29kZWRBc3NlbWJseTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2RlU3VibWlzc2lvblJlY2VpdmVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRGYWlsZWQgZXh0ZW5kcyBLZXJuZWxDb21tYW5kQ29tcGxldGlvbkV2ZW50IHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxDb21tYW5kQ29tcGxldGlvbkV2ZW50IGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgZXhlY3V0aW9uT3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFN1Y2NlZWRlZCBleHRlbmRzIEtlcm5lbENvbW1hbmRDb21wbGV0aW9uRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBsZXRlQ29kZVN1Ym1pc3Npb25SZWNlaXZlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0aW9uc1Byb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgbGluZVBvc2l0aW9uU3Bhbj86IExpbmVQb3NpdGlvblNwYW47XHJcbiAgICBjb21wbGV0aW9uczogQXJyYXk8Q29tcGxldGlvbkl0ZW0+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWNzUHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICBkaWFnbm9zdGljczogQXJyYXk8RGlhZ25vc3RpYz47XHJcbiAgICBmb3JtYXR0ZWREaWFnbm9zdGljczogQXJyYXk8Rm9ybWF0dGVkVmFsdWU+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXllZFZhbHVlUHJvZHVjZWQgZXh0ZW5kcyBEaXNwbGF5RXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlFdmVudCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGZvcm1hdHRlZFZhbHVlczogQXJyYXk8Rm9ybWF0dGVkVmFsdWU+O1xyXG4gICAgdmFsdWVJZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRWYWx1ZVVwZGF0ZWQgZXh0ZW5kcyBEaXNwbGF5RXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50T3BlbmVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgcmVsYXRpdmVGaWxlUGF0aDogc3RyaW5nO1xyXG4gICAgcmVnaW9uTmFtZT86IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFcnJvclByb2R1Y2VkIGV4dGVuZHMgRGlzcGxheUV2ZW50IHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb3ZlclRleHRQcm9kdWNlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIGNvbnRlbnQ6IEFycmF5PEZvcm1hdHRlZFZhbHVlPjtcclxuICAgIGxpbmVQb3NpdGlvblNwYW4/OiBMaW5lUG9zaXRpb25TcGFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluY29tcGxldGVDb2RlU3VibWlzc2lvblJlY2VpdmVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbEV4dGVuc2lvbkxvYWRlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxJbmZvUHJvZHVjZWQgZXh0ZW5kcyBLZXJuZWxFdmVudCB7XHJcbiAgICBrZXJuZWxJbmZvOiBLZXJuZWxJbmZvO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbFJlYWR5IGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAga2VybmVsSW5mb3M6IEFycmF5PEtlcm5lbEluZm8+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhY2thZ2VBZGRlZCBleHRlbmRzIEtlcm5lbEV2ZW50IHtcclxuICAgIHBhY2thZ2VSZWZlcmVuY2U6IFJlc29sdmVkUGFja2FnZVJlZmVyZW5jZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0T3BlbmVkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgcHJvamVjdEl0ZW1zOiBBcnJheTxQcm9qZWN0SXRlbT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV0dXJuVmFsdWVQcm9kdWNlZCBleHRlbmRzIERpc3BsYXlFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmF0dXJlSGVscFByb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgc2lnbmF0dXJlczogQXJyYXk8U2lnbmF0dXJlSW5mb3JtYXRpb24+O1xyXG4gICAgYWN0aXZlU2lnbmF0dXJlSW5kZXg6IG51bWJlcjtcclxuICAgIGFjdGl2ZVBhcmFtZXRlckluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhbmRhcmRFcnJvclZhbHVlUHJvZHVjZWQgZXh0ZW5kcyBEaXNwbGF5RXZlbnQge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkT3V0cHV0VmFsdWVQcm9kdWNlZCBleHRlbmRzIERpc3BsYXlFdmVudCB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsdWVJbmZvc1Byb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgdmFsdWVJbmZvczogQXJyYXk8S2VybmVsVmFsdWVJbmZvPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWx1ZVByb2R1Y2VkIGV4dGVuZHMgS2VybmVsRXZlbnQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZm9ybWF0dGVkVmFsdWU6IEZvcm1hdHRlZFZhbHVlO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUmVxdWlyZWQgVHlwZXNcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZTY0RW5jb2RlZEFzc2VtYmx5IHtcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGxldGlvbkl0ZW0ge1xyXG4gICAgZGlzcGxheVRleHQ6IHN0cmluZztcclxuICAgIGtpbmQ6IHN0cmluZztcclxuICAgIGZpbHRlclRleHQ6IHN0cmluZztcclxuICAgIHNvcnRUZXh0OiBzdHJpbmc7XHJcbiAgICBpbnNlcnRUZXh0OiBzdHJpbmc7XHJcbiAgICBpbnNlcnRUZXh0Rm9ybWF0PzogSW5zZXJ0VGV4dEZvcm1hdDtcclxuICAgIGRvY3VtZW50YXRpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW5zZXJ0VGV4dEZvcm1hdCB7XHJcbiAgICBQbGFpblRleHQgPSBcInBsYWludGV4dFwiLFxyXG4gICAgU25pcHBldCA9IFwic25pcHBldFwiLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWdub3N0aWMge1xyXG4gICAgbGluZVBvc2l0aW9uU3BhbjogTGluZVBvc2l0aW9uU3BhbjtcclxuICAgIHNldmVyaXR5OiBEaWFnbm9zdGljU2V2ZXJpdHk7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpYWdub3N0aWNTZXZlcml0eSB7XHJcbiAgICBIaWRkZW4gPSBcImhpZGRlblwiLFxyXG4gICAgSW5mbyA9IFwiaW5mb1wiLFxyXG4gICAgV2FybmluZyA9IFwid2FybmluZ1wiLFxyXG4gICAgRXJyb3IgPSBcImVycm9yXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZVBvc2l0aW9uU3BhbiB7XHJcbiAgICBzdGFydDogTGluZVBvc2l0aW9uO1xyXG4gICAgZW5kOiBMaW5lUG9zaXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZVBvc2l0aW9uIHtcclxuICAgIGxpbmU6IG51bWJlcjtcclxuICAgIGNoYXJhY3RlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEb2N1bWVudFNlcmlhbGl6YXRpb25UeXBlIHtcclxuICAgIERpYiA9IFwiZGliXCIsXHJcbiAgICBJcHluYiA9IFwiaXB5bmJcIixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtYXR0ZWRWYWx1ZSB7XHJcbiAgICBtaW1lVHlwZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIHN1cHByZXNzRGlzcGxheTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGl2ZURvY3VtZW50IHtcclxuICAgIGVsZW1lbnRzOiBBcnJheTxJbnRlcmFjdGl2ZURvY3VtZW50RWxlbWVudD47XHJcbiAgICBtZXRhZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnk7IH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3RpdmVEb2N1bWVudEVsZW1lbnQge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBrZXJuZWxOYW1lPzogc3RyaW5nO1xyXG4gICAgY29udGVudHM6IHN0cmluZztcclxuICAgIG91dHB1dHM6IEFycmF5PEludGVyYWN0aXZlRG9jdW1lbnRPdXRwdXRFbGVtZW50PjtcclxuICAgIGV4ZWN1dGlvbk9yZGVyOiBudW1iZXI7XHJcbiAgICBtZXRhZGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbEluZm8ge1xyXG4gICAgYWxpYXNlczogQXJyYXk8c3RyaW5nPjtcclxuICAgIGxhbmd1YWdlTmFtZT86IHN0cmluZztcclxuICAgIGxhbmd1YWdlVmVyc2lvbj86IHN0cmluZztcclxuICAgIGlzUHJveHk6IGJvb2xlYW47XHJcbiAgICBpc0NvbXBvc2l0ZTogYm9vbGVhbjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgICBsb2NhbE5hbWU6IHN0cmluZztcclxuICAgIHVyaTogc3RyaW5nO1xyXG4gICAgcmVtb3RlVXJpPzogc3RyaW5nO1xyXG4gICAgc3VwcG9ydGVkS2VybmVsQ29tbWFuZHM6IEFycmF5PEtlcm5lbENvbW1hbmRJbmZvPjtcclxuICAgIHN1cHBvcnRlZERpcmVjdGl2ZXM6IEFycmF5PEtlcm5lbERpcmVjdGl2ZUluZm8+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbENvbW1hbmRJbmZvIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxEaXJlY3RpdmVJbmZvIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxWYWx1ZUluZm8ge1xyXG4gICAgdHlwZU5hbWU6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGZvcm1hdHRlZFZhbHVlOiBGb3JtYXR0ZWRWYWx1ZTtcclxuICAgIHByZWZlcnJlZE1pbWVUeXBlczogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcclxuICAgIGZpbGVzOiBBcnJheTxQcm9qZWN0RmlsZT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdEZpbGUge1xyXG4gICAgcmVsYXRpdmVGaWxlUGF0aDogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RJdGVtIHtcclxuICAgIHJlbGF0aXZlRmlsZVBhdGg6IHN0cmluZztcclxuICAgIHJlZ2lvbk5hbWVzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcmVnaW9uc0NvbnRlbnQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9O1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBSZXF1ZXN0VHlwZSB7XHJcbiAgICBQYXJzZSA9IFwicGFyc2VcIixcclxuICAgIFNlcmlhbGl6ZSA9IFwic2VyaWFsaXplXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzb2x2ZWRQYWNrYWdlUmVmZXJlbmNlIGV4dGVuZHMgUGFja2FnZVJlZmVyZW5jZSB7XHJcbiAgICBhc3NlbWJseVBhdGhzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJvYmluZ1BhdGhzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcGFja2FnZVJvb3Q6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWNrYWdlUmVmZXJlbmNlIHtcclxuICAgIHBhY2thZ2VOYW1lOiBzdHJpbmc7XHJcbiAgICBwYWNrYWdlVmVyc2lvbjogc3RyaW5nO1xyXG4gICAgaXNQYWNrYWdlVmVyc2lvblNwZWNpZmllZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduYXR1cmVJbmZvcm1hdGlvbiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgZG9jdW1lbnRhdGlvbjogRm9ybWF0dGVkVmFsdWU7XHJcbiAgICBwYXJhbWV0ZXJzOiBBcnJheTxQYXJhbWV0ZXJJbmZvcm1hdGlvbj47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1ldGVySW5mb3JtYXRpb24ge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGRvY3VtZW50YXRpb246IEZvcm1hdHRlZFZhbHVlO1xyXG59XHJcblxyXG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi4gQWxzbyxcbiAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykgfHwgdHlwZW9mIG1zQ3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHZhciB2O1xuICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlOyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyBjb250cmFjdHMgZnJvbSBcIi4vY29udHJhY3RzXCI7XHJcbmltcG9ydCB7IENvbW1hbmRSb3V0aW5nU2xpcCwgRXZlbnRSb3V0aW5nU2xpcCB9IGZyb20gXCIuL3JvdXRpbmdzbGlwXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbnRyYWN0c1wiO1xyXG5pbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50S2VybmVsSW5mb0NvbGxlY3Rpb24ge1xyXG4gICAgZGVmYXVsdEtlcm5lbE5hbWU6IHN0cmluZztcclxuICAgIGl0ZW1zOiBjb250cmFjdHMuRG9jdW1lbnRLZXJuZWxJbmZvW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2VybmVsRXZlbnRFbnZlbG9wZU1vZGVsIHtcclxuICAgIGV2ZW50VHlwZTogY29udHJhY3RzLktlcm5lbEV2ZW50VHlwZTtcclxuICAgIGV2ZW50OiBjb250cmFjdHMuS2VybmVsRXZlbnQ7XHJcbiAgICBjb21tYW5kPzogS2VybmVsQ29tbWFuZEVudmVsb3BlTW9kZWw7XHJcbiAgICByb3V0aW5nU2xpcD86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbENvbW1hbmRFbnZlbG9wZU1vZGVsIHtcclxuICAgIHRva2VuPzogc3RyaW5nO1xyXG4gICAgY29tbWFuZFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kVHlwZTtcclxuICAgIGNvbW1hbmQ6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kO1xyXG4gICAgcm91dGluZ1NsaXA/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLZXJuZWxFdmVudEVudmVsb3BlT2JzZXJ2ZXIge1xyXG4gICAgKGV2ZW50RW52ZWxvcGU6IEtlcm5lbEV2ZW50RW52ZWxvcGUpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtlcm5lbENvbW1hbmRFbnZlbG9wZUhhbmRsZXIge1xyXG4gICAgKGV2ZW50RW52ZWxvcGU6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSk6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQmFzZTY0U3RyaW5nKHZhbHVlOiBVaW50OEFycmF5KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHduZCA9IDxhbnk+KGdsb2JhbFRoaXMud2luZG93KTtcclxuICAgIGlmICh3bmQpIHtcclxuICAgICAgICByZXR1cm4gd25kLmJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZSguLi52YWx1ZSkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20odmFsdWUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgS2VybmVsQ29tbWFuZEVudmVsb3BlIHtcclxuXHJcbiAgICBwcml2YXRlIF9jaGlsZENvbW1hbmRDb3VudGVyOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBfcm91dGluZ1NsaXA6IENvbW1hbmRSb3V0aW5nU2xpcCA9IG5ldyBDb21tYW5kUm91dGluZ1NsaXAoKTtcclxuICAgIHByaXZhdGUgX3Rva2VuPzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50Q29tbWFuZD86IEtlcm5lbENvbW1hbmRFbnZlbG9wZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgY29tbWFuZFR5cGU6IGNvbnRyYWN0cy5LZXJuZWxDb21tYW5kVHlwZSxcclxuICAgICAgICBwdWJsaWMgY29tbWFuZDogY29udHJhY3RzLktlcm5lbENvbW1hbmQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJvdXRpbmdTbGlwKCk6IENvbW1hbmRSb3V0aW5nU2xpcCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdXRpbmdTbGlwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcGFyZW50Q29tbWFuZCgpOiBLZXJuZWxDb21tYW5kRW52ZWxvcGUgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnRDb21tYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXNLZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbChhcmc6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSB8IEtlcm5lbENvbW1hbmRFbnZlbG9wZU1vZGVsKTogYXJnIGlzIEtlcm5lbENvbW1hbmRFbnZlbG9wZU1vZGVsIHtcclxuICAgICAgICByZXR1cm4gISg8YW55PmFyZykuZ2V0T3JDcmVhdGVUb2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGFyZW50KHBhcmVudENvbW1hbmQ6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnRDb21tYW5kICYmIHRoaXMuX3BhcmVudENvbW1hbmQgIT09IHBhcmVudENvbW1hbmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGNhbm5vdCBiZSBjaGFuZ2VkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudENvbW1hbmQgPT09IG51bGwgfHwgdGhpcy5fcGFyZW50Q29tbWFuZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHRvZG86IGRvIHdlIG5lZWQgdG8gb3ZlcnJpZGUgdGhlIHRva2VuPyBTaG91bGQgdGhpcyB0aHJvdyBpZiBwYXJlbnRpbmcgaGFwcGVucyBhZnRlciB0b2tlbiBpcyBzZXQ/XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90b2tlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudENvbW1hbmQgPSBwYXJlbnRDb21tYW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPckNyZWF0ZVRva2VuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXJlQ29tbWFuZHNUaGVTYW1lKGVudmVsb3BlMTogS2VybmVsQ29tbWFuZEVudmVsb3BlLCBlbnZlbG9wZTI6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGVudmVsb3BlMTsvLz9cclxuICAgICAgICBlbnZlbG9wZTI7Ly8/XHJcbiAgICAgICAgZW52ZWxvcGUxID09PSBlbnZlbG9wZTI7Ly8/XHJcblxyXG4gICAgICAgIC8vIHJlZmVyZW5jZSBlcXVhbGl0eVxyXG4gICAgICAgIGlmIChlbnZlbG9wZTEgPT09IGVudmVsb3BlMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbW1hbmRUeXBlIGVxdWFsaXR5XHJcbiAgICAgICAgY29uc3Qgc2FtZUNvbW1hbmRUeXBlID0gZW52ZWxvcGUxPy5jb21tYW5kVHlwZSA9PT0gZW52ZWxvcGUyPy5jb21tYW5kVHlwZTsgLy8/XHJcbiAgICAgICAgaWYgKCFzYW1lQ29tbWFuZFR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYm90aCBtdXN0IGhhdmUgdG9rZW5zXHJcbiAgICAgICAgaWYgKCghZW52ZWxvcGUxPy5fdG9rZW4pIHx8ICghZW52ZWxvcGUyPy5fdG9rZW4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRva2VuIGVxdWFsaXR5XHJcbiAgICAgICAgY29uc3Qgc2FtZVRva2VuID0gZW52ZWxvcGUxPy5fdG9rZW4gPT09IGVudmVsb3BlMj8uX3Rva2VuOyAvLz9cclxuICAgICAgICBpZiAoIXNhbWVUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfY291bnRlciA9IDE7XHJcbiAgICBwdWJsaWMgZ2V0T3JDcmVhdGVUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLl90b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50Q29tbWFuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl90b2tlbiA9IGAke3RoaXMuX3BhcmVudENvbW1hbmQuZ2V0T3JDcmVhdGVUb2tlbigpfS4ke3RoaXMuX3BhcmVudENvbW1hbmQuZ2V0TmV4dENoaWxkVG9rZW4oKX1gO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBndWlkQnl0ZXMgPSB1dWlkLnBhcnNlKHV1aWQudjQoKSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGd1aWRCeXRlcyk7XHJcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB0b0Jhc2U2NFN0cmluZyhkYXRhKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5fdG9rZW4gPSBgJHtLZXJuZWxDb21tYW5kRW52ZWxvcGUuX2NvdW50ZXIrK31gO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRva2VuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b2tlbiBub3Qgc2V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzU2VsZm9yRGVzY2VuZGFudE9mKG90aGVyQ29tbWFuZDogS2VybmVsQ29tbWFuZEVudmVsb3BlKSB7XHJcbiAgICAgICAgY29uc3Qgb3RoZXJUb2tlbiA9IG90aGVyQ29tbWFuZC5fdG9rZW47XHJcbiAgICAgICAgY29uc3QgdGhpc1Rva2VuID0gdGhpcy5fdG9rZW47XHJcbiAgICAgICAgaWYgKHRoaXNUb2tlbiAmJiBvdGhlclRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzVG9rZW4uc3RhcnRzV2l0aChvdGhlclRva2VuISk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvdGggY29tbWFuZHMgbXVzdCBoYXZlIHRva2VucycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNTYW1lUm9vdENvbW1hbmRBcyhvdGhlckNvbW1hbmQ6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgICAgIGNvbnN0IG90aGVyVG9rZW4gPSBvdGhlckNvbW1hbmQuX3Rva2VuO1xyXG4gICAgICAgIGNvbnN0IHRoaXNUb2tlbiA9IHRoaXMuX3Rva2VuO1xyXG4gICAgICAgIGlmICh0aGlzVG9rZW4gJiYgb3RoZXJUb2tlbikge1xyXG4gICAgICAgICAgICBjb25zdCBvdGhlclJvb3RUb2tlbiA9IEtlcm5lbENvbW1hbmRFbnZlbG9wZS5nZXRSb290VG9rZW4ob3RoZXJUb2tlbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXNSb290VG9rZW4gPSBLZXJuZWxDb21tYW5kRW52ZWxvcGUuZ2V0Um9vdFRva2VuKHRoaXNUb2tlbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzUm9vdFRva2VuID09PSBvdGhlclJvb3RUb2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdib3RoIGNvbW1hbmRzIG11c3QgaGF2ZSB0b2tlbnMnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFJvb3RUb2tlbih0b2tlbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0pzb24oKTogS2VybmVsQ29tbWFuZEVudmVsb3BlTW9kZWwge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsOiBLZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbCA9IHtcclxuICAgICAgICAgICAgY29tbWFuZFR5cGU6IHRoaXMuY29tbWFuZFR5cGUsXHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IHRoaXMuY29tbWFuZCxcclxuICAgICAgICAgICAgcm91dGluZ1NsaXA6IHRoaXMuX3JvdXRpbmdTbGlwLnRvQXJyYXkoKSxcclxuICAgICAgICAgICAgdG9rZW46IHRoaXMuZ2V0T3JDcmVhdGVUb2tlbigpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24obW9kZWw6IEtlcm5lbENvbW1hbmRFbnZlbG9wZU1vZGVsKTogS2VybmVsQ29tbWFuZEVudmVsb3BlIHtcclxuICAgICAgICBjb25zdCBjb21tYW5kID0gbmV3IEtlcm5lbENvbW1hbmRFbnZlbG9wZShtb2RlbC5jb21tYW5kVHlwZSwgbW9kZWwuY29tbWFuZCk7XHJcbiAgICAgICAgY29tbWFuZC5fcm91dGluZ1NsaXAgPSBDb21tYW5kUm91dGluZ1NsaXAuZnJvbVVyaXMobW9kZWwucm91dGluZ1NsaXAgfHwgW10pO1xyXG4gICAgICAgIGNvbW1hbmQuX3Rva2VuID0gbW9kZWwudG9rZW47XHJcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IEtlcm5lbENvbW1hbmRFbnZlbG9wZSB7XHJcbiAgICAgICAgcmV0dXJuIEtlcm5lbENvbW1hbmRFbnZlbG9wZS5mcm9tSnNvbih0aGlzLnRvSnNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5leHRDaGlsZFRva2VuKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ29tbWFuZENvdW50ZXIrKztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcm5lbEV2ZW50RW52ZWxvcGUge1xyXG4gICAgcHJpdmF0ZSBfcm91dGluZ1NsaXA6IEV2ZW50Um91dGluZ1NsaXAgPSBuZXcgRXZlbnRSb3V0aW5nU2xpcCgpO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGV2ZW50VHlwZTogY29udHJhY3RzLktlcm5lbEV2ZW50VHlwZSxcclxuICAgICAgICBwdWJsaWMgZXZlbnQ6IGNvbnRyYWN0cy5LZXJuZWxFdmVudCxcclxuICAgICAgICBwdWJsaWMgY29tbWFuZD86IEtlcm5lbENvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcm91dGluZ1NsaXAoKTogRXZlbnRSb3V0aW5nU2xpcCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdXRpbmdTbGlwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b0pzb24oKTogS2VybmVsRXZlbnRFbnZlbG9wZU1vZGVsIHtcclxuICAgICAgICBjb25zdCBtb2RlbDogS2VybmVsRXZlbnRFbnZlbG9wZU1vZGVsID0ge1xyXG4gICAgICAgICAgICBldmVudFR5cGU6IHRoaXMuZXZlbnRUeXBlLFxyXG4gICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcclxuICAgICAgICAgICAgY29tbWFuZDogdGhpcy5jb21tYW5kPy50b0pzb24oKSxcclxuICAgICAgICAgICAgcm91dGluZ1NsaXA6IHRoaXMuX3JvdXRpbmdTbGlwLnRvQXJyYXkoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGZyb21Kc29uKG1vZGVsOiBLZXJuZWxFdmVudEVudmVsb3BlTW9kZWwpOiBLZXJuZWxFdmVudEVudmVsb3BlIHtcclxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBLZXJuZWxFdmVudEVudmVsb3BlKFxyXG4gICAgICAgICAgICBtb2RlbC5ldmVudFR5cGUsXHJcbiAgICAgICAgICAgIG1vZGVsLmV2ZW50LFxyXG4gICAgICAgICAgICBtb2RlbC5jb21tYW5kID8gS2VybmVsQ29tbWFuZEVudmVsb3BlLmZyb21Kc29uKG1vZGVsLmNvbW1hbmQpIDogdW5kZWZpbmVkKTtcclxuICAgICAgICBldmVudC5fcm91dGluZ1NsaXAgPSBFdmVudFJvdXRpbmdTbGlwLmZyb21VcmlzKG1vZGVsLnJvdXRpbmdTbGlwIHx8IFtdXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lKCk6IEtlcm5lbEV2ZW50RW52ZWxvcGUge1xyXG4gICAgICAgIHJldHVybiBLZXJuZWxFdmVudEVudmVsb3BlLmZyb21Kc29uKHRoaXMudG9Kc29uKCkpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRnVuY3Rpb24uanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVycm9yQ2xhc3MoY3JlYXRlSW1wbCkge1xuICAgIHZhciBfc3VwZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgfTtcbiAgICB2YXIgY3RvckZ1bmMgPSBjcmVhdGVJbXBsKF9zdXBlcik7XG4gICAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGN0b3JGdW5jLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JGdW5jO1xuICAgIHJldHVybiBjdG9yRnVuYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUVycm9yQ2xhc3MuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRXJyb3JDbGFzcyB9IGZyb20gJy4vY3JlYXRlRXJyb3JDbGFzcyc7XG5leHBvcnQgdmFyIFVuc3Vic2NyaXB0aW9uRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgICAgIF9zdXBlcih0aGlzKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZXJyb3JzXG4gICAgICAgICAgICA/IGVycm9ycy5sZW5ndGggKyBcIiBlcnJvcnMgb2NjdXJyZWQgZHVyaW5nIHVuc3Vic2NyaXB0aW9uOlxcblwiICsgZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyLCBpKSB7IHJldHVybiBpICsgMSArIFwiKSBcIiArIGVyci50b1N0cmluZygpOyB9KS5qb2luKCdcXG4gICcpXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICB0aGlzLm5hbWUgPSAnVW5zdWJzY3JpcHRpb25FcnJvcic7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH07XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVuc3Vic2NyaXB0aW9uRXJyb3IuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGFyclJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAwIDw9IGluZGV4ICYmIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyclJlbW92ZS5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXksIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbmltcG9ydCB7IGFyclJlbW92ZSB9IGZyb20gJy4vdXRpbC9hcnJSZW1vdmUnO1xudmFyIFN1YnNjcmlwdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKGluaXRpYWxUZWFyZG93bikge1xuICAgICAgICB0aGlzLmluaXRpYWxUZWFyZG93biA9IGluaXRpYWxUZWFyZG93bjtcbiAgICAgICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgICAgIGlmIChfcGFyZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX3BhcmVudGFnZV8xID0gX192YWx1ZXMoX3BhcmVudGFnZSksIF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKTsgIV9wYXJlbnRhZ2VfMV8xLmRvbmU7IF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRhZ2VfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9wYXJlbnRhZ2VfMV8xICYmICFfcGFyZW50YWdlXzFfMS5kb25lICYmIChfYSA9IF9wYXJlbnRhZ2VfMS5yZXR1cm4pKSBfYS5jYWxsKF9wYXJlbnRhZ2VfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbml0aWFsRmluYWxpemVyID0gdGhpcy5pbml0aWFsVGVhcmRvd247XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihpbml0aWFsRmluYWxpemVyKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxGaW5hbGl6ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IgPyBlLmVycm9ycyA6IFtlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2ZpbmFsaXplcnMgPSB0aGlzLl9maW5hbGl6ZXJzO1xuICAgICAgICAgICAgaWYgKF9maW5hbGl6ZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluYWxpemVycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2ZpbmFsaXplcnNfMSA9IF9fdmFsdWVzKF9maW5hbGl6ZXJzKSwgX2ZpbmFsaXplcnNfMV8xID0gX2ZpbmFsaXplcnNfMS5uZXh0KCk7ICFfZmluYWxpemVyc18xXzEuZG9uZTsgX2ZpbmFsaXplcnNfMV8xID0gX2ZpbmFsaXplcnNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaW5hbGl6ZXIgPSBfZmluYWxpemVyc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWNGaW5hbGl6ZXIoZmluYWxpemVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgIT09IG51bGwgJiYgZXJyb3JzICE9PSB2b2lkIDAgPyBlcnJvcnMgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChlcnJvcnMpKSwgX19yZWFkKGVyci5lcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2ZpbmFsaXplcnNfMV8xICYmICFfZmluYWxpemVyc18xXzEuZG9uZSAmJiAoX2IgPSBfZmluYWxpemVyc18xLnJldHVybikpIF9iLmNhbGwoX2ZpbmFsaXplcnNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgZXhlY0ZpbmFsaXplcih0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGVhcmRvd24gaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlYXJkb3duLmNsb3NlZCB8fCB0ZWFyZG93bi5faGFzUGFyZW50KHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVhcmRvd24uX2FkZFBhcmVudCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKHRoaXMuX2ZpbmFsaXplcnMgPSAoX2EgPSB0aGlzLl9maW5hbGl6ZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2hhc1BhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHJldHVybiBfcGFyZW50YWdlID09PSBwYXJlbnQgfHwgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgJiYgX3BhcmVudGFnZS5pbmNsdWRlcyhwYXJlbnQpKTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2FkZFBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgPyAoX3BhcmVudGFnZS5wdXNoKHBhcmVudCksIF9wYXJlbnRhZ2UpIDogX3BhcmVudGFnZSA/IFtfcGFyZW50YWdlLCBwYXJlbnRdIDogcGFyZW50O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fcmVtb3ZlUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgaWYgKF9wYXJlbnRhZ2UgPT09IHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIF9maW5hbGl6ZXJzID0gdGhpcy5fZmluYWxpemVycztcbiAgICAgICAgX2ZpbmFsaXplcnMgJiYgYXJyUmVtb3ZlKF9maW5hbGl6ZXJzLCB0ZWFyZG93bik7XG4gICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGVhcmRvd24uX3JlbW92ZVBhcmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLkVNUFRZID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVtcHR5ID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICBlbXB0eS5jbG9zZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZW1wdHk7XG4gICAgfSkoKTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uO1xufSgpKTtcbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiB9O1xuZXhwb3J0IHZhciBFTVBUWV9TVUJTQ1JJUFRJT04gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5leHBvcnQgZnVuY3Rpb24gaXNTdWJzY3JpcHRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uIHx8XG4gICAgICAgICh2YWx1ZSAmJiAnY2xvc2VkJyBpbiB2YWx1ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnJlbW92ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS5hZGQpICYmIGlzRnVuY3Rpb24odmFsdWUudW5zdWJzY3JpYmUpKSk7XG59XG5mdW5jdGlvbiBleGVjRmluYWxpemVyKGZpbmFsaXplcikge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZpbmFsaXplcikpIHtcbiAgICAgICAgZmluYWxpemVyKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmaW5hbGl6ZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiZXhwb3J0IHZhciBjb25maWcgPSB7XG4gICAgb25VbmhhbmRsZWRFcnJvcjogbnVsbCxcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb246IG51bGwsXG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGZhbHNlLFxuICAgIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogZmFsc2UsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWRBcnJheSB9IGZyb20gXCJ0c2xpYlwiO1xuZXhwb3J0IHZhciB0aW1lb3V0UHJvdmlkZXIgPSB7XG4gICAgc2V0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUgPT09IG51bGwgfHwgZGVsZWdhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlbGVnYXRlLnNldFRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5zZXRUaW1lb3V0LmFwcGx5KGRlbGVnYXRlLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtoYW5kbGVyLCB0aW1lb3V0XSwgX19yZWFkKGFyZ3MpKSk7XG4gICAgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICByZXR1cm4gKChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuY2xlYXJUaW1lb3V0KSB8fCBjbGVhclRpbWVvdXQpKGhhbmRsZSk7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZTogdW5kZWZpbmVkLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRpbWVvdXRQcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi4vc2NoZWR1bGVyL3RpbWVvdXRQcm92aWRlcic7XG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyKSB7XG4gICAgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb25VbmhhbmRsZWRFcnJvciA9IGNvbmZpZy5vblVuaGFuZGxlZEVycm9yO1xuICAgICAgICBpZiAob25VbmhhbmRsZWRFcnJvcikge1xuICAgICAgICAgICAgb25VbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXBvcnRVbmhhbmRsZWRFcnJvci5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9vcC5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xudmFyIGNvbnRleHQgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yQ29udGV4dChjYikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICB2YXIgaXNSb290ID0gIWNvbnRleHQ7XG4gICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSB7IGVycm9yVGhyb3duOiBmYWxzZSwgZXJyb3I6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBjYigpO1xuICAgICAgICBpZiAoaXNSb290KSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBjb250ZXh0LCBlcnJvclRocm93biA9IF9hLmVycm9yVGhyb3duLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICAgICAgY29udGV4dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2IoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2FwdHVyZUVycm9yKGVycikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiBjb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQuZXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICBjb250ZXh0LmVycm9yID0gZXJyO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yQ29udGV4dC5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBpc1N1YnNjcmlwdGlvbiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgcmVwb3J0VW5oYW5kbGVkRXJyb3IgfSBmcm9tICcuL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4vdXRpbC9ub29wJztcbmltcG9ydCB7IG5leHROb3RpZmljYXRpb24sIGVycm9yTm90aWZpY2F0aW9uLCBDT01QTEVURV9OT1RJRklDQVRJT04gfSBmcm9tICcuL05vdGlmaWNhdGlvbkZhY3Rvcmllcyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuL3NjaGVkdWxlci90aW1lb3V0UHJvdmlkZXInO1xuaW1wb3J0IHsgY2FwdHVyZUVycm9yIH0gZnJvbSAnLi91dGlsL2Vycm9yQ29udGV4dCc7XG52YXIgU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3Vic2NyaWJlcihkZXN0aW5hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgaWYgKGlzU3Vic2NyaXB0aW9uKGRlc3RpbmF0aW9uKSkge1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IEVNUFRZX09CU0VSVkVSO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgU3Vic2NyaWJlci5jcmVhdGUgPSBmdW5jdGlvbiAobmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2FmZVN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5leHROb3RpZmljYXRpb24odmFsdWUpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKGVycm9yTm90aWZpY2F0aW9uKGVyciksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihDT01QTEVURV9OT1RJRklDQVRJT04sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTdWJzY3JpYmVyO1xufShTdWJzY3JpcHRpb24pKTtcbmV4cG9ydCB7IFN1YnNjcmliZXIgfTtcbnZhciBfYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICAgIHJldHVybiBfYmluZC5jYWxsKGZuLCB0aGlzQXJnKTtcbn1cbnZhciBDb25zdW1lck9ic2VydmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25zdW1lck9ic2VydmVyKHBhcnRpYWxPYnNlcnZlcikge1xuICAgICAgICB0aGlzLnBhcnRpYWxPYnNlcnZlciA9IHBhcnRpYWxPYnNlcnZlcjtcbiAgICB9XG4gICAgQ29uc3VtZXJPYnNlcnZlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbnN1bWVyT2JzZXJ2ZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgcGFydGlhbE9ic2VydmVyID0gdGhpcy5wYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChwYXJ0aWFsT2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFydGlhbE9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25zdW1lck9ic2VydmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhcnRpYWxPYnNlcnZlciA9IHRoaXMucGFydGlhbE9ic2VydmVyO1xuICAgICAgICBpZiAocGFydGlhbE9ic2VydmVyLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29uc3VtZXJPYnNlcnZlcjtcbn0oKSk7XG52YXIgU2FmZVN1YnNjcmliZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTYWZlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTYWZlU3Vic2NyaWJlcihvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHZhciBwYXJ0aWFsT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSB8fCAhb2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiAob2JzZXJ2ZXJPck5leHQgIT09IG51bGwgJiYgb2JzZXJ2ZXJPck5leHQgIT09IHZvaWQgMCA/IG9ic2VydmVyT3JOZXh0IDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IgIT09IG51bGwgJiYgZXJyb3IgIT09IHZvaWQgMCA/IGVycm9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSAhPT0gbnVsbCAmJiBjb21wbGV0ZSAhPT0gdm9pZCAwID8gY29tcGxldGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNvbnRleHRfMTtcbiAgICAgICAgICAgIGlmIChfdGhpcyAmJiBjb25maWcudXNlRGVwcmVjYXRlZE5leHRDb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xID0gT2JqZWN0LmNyZWF0ZShvYnNlcnZlck9yTmV4dCk7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudW5zdWJzY3JpYmUoKTsgfTtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsT2JzZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyT3JOZXh0Lm5leHQgJiYgYmluZChvYnNlcnZlck9yTmV4dC5uZXh0LCBjb250ZXh0XzEpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogb2JzZXJ2ZXJPck5leHQuZXJyb3IgJiYgYmluZChvYnNlcnZlck9yTmV4dC5lcnJvciwgY29udGV4dF8xKSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlICYmIGJpbmQob2JzZXJ2ZXJPck5leHQuY29tcGxldGUsIGNvbnRleHRfMSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnRpYWxPYnNlcnZlciA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gbmV3IENvbnN1bWVyT2JzZXJ2ZXIocGFydGlhbE9ic2VydmVyKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU2FmZVN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IFNhZmVTdWJzY3JpYmVyIH07XG5mdW5jdGlvbiBoYW5kbGVVbmhhbmRsZWRFcnJvcihlcnJvcikge1xuICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICBjYXB0dXJlRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVwb3J0VW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlZmF1bHRFcnJvckhhbmRsZXIoZXJyKSB7XG4gICAgdGhyb3cgZXJyO1xufVxuZnVuY3Rpb24gaGFuZGxlU3RvcHBlZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24sIHN1YnNjcmliZXIpIHtcbiAgICB2YXIgb25TdG9wcGVkTm90aWZpY2F0aW9uID0gY29uZmlnLm9uU3RvcHBlZE5vdGlmaWNhdGlvbjtcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb24gJiYgdGltZW91dFByb3ZpZGVyLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gb25TdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgc3Vic2NyaWJlcik7IH0pO1xufVxuZXhwb3J0IHZhciBFTVBUWV9PQlNFUlZFUiA9IHtcbiAgICBjbG9zZWQ6IHRydWUsXG4gICAgbmV4dDogbm9vcCxcbiAgICBlcnJvcjogZGVmYXVsdEVycm9ySGFuZGxlcixcbiAgICBjb21wbGV0ZTogbm9vcCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpYmVyLmpzLm1hcCIsImV4cG9ydCB2YXIgb2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSkgfHwgJ0BAb2JzZXJ2YWJsZSc7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eSh4KSB7XG4gICAgcmV0dXJuIHg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZGVudGl0eS5qcy5tYXAiLCJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcCIsImltcG9ydCB7IFNhZmVTdWJzY3JpYmVyLCBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGlzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgcGlwZUZyb21BcnJheSB9IGZyb20gJy4vdXRpbC9waXBlJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdWJzY3JpYmVyID0gaXNTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0KSA/IG9ic2VydmVyT3JOZXh0IDogbmV3IFNhZmVTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMsIG9wZXJhdG9yID0gX2Eub3BlcmF0b3IsIHNvdXJjZSA9IF9hLnNvdXJjZTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKG9wZXJhdG9yXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvci5jYWxsKHN1YnNjcmliZXIsIHNvdXJjZSlcbiAgICAgICAgICAgICAgICA6IHNvdXJjZVxuICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fc3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl90cnlTdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpYmVyID0gbmV3IFNhZmVTdWJzY3JpYmVyKHtcbiAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbU3ltYm9sX29ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkob3BlcmF0aW9ucykodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiAodmFsdWUgPSB4KTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnQgeyBPYnNlcnZhYmxlIH07XG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gcHJvbWlzZUN0b3IgIT09IG51bGwgJiYgcHJvbWlzZUN0b3IgIT09IHZvaWQgMCA/IHByb21pc2VDdG9yIDogY29uZmlnLlByb21pc2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFByb21pc2U7XG59XG5mdW5jdGlvbiBpc09ic2VydmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubmV4dCkgJiYgaXNGdW5jdGlvbih2YWx1ZS5lcnJvcikgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb21wbGV0ZSk7XG59XG5mdW5jdGlvbiBpc1N1YnNjcmliZXIodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaWJlcikgfHwgKGlzT2JzZXJ2ZXIodmFsdWUpICYmIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oc291cmNlID09PSBudWxsIHx8IHNvdXJjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc291cmNlLmxpZnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGUoaW5pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAobGlmdGVkU291cmNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlmdC5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSkge1xuICAgIHJldHVybiBuZXcgT3BlcmF0b3JTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBvbk5leHQsIG9uQ29tcGxldGUsIG9uRXJyb3IsIG9uRmluYWxpemUpO1xufVxudmFyIE9wZXJhdG9yU3Vic2NyaWJlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9wZXJhdG9yU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPcGVyYXRvclN1YnNjcmliZXIoZGVzdGluYXRpb24sIG9uTmV4dCwgb25Db21wbGV0ZSwgb25FcnJvciwgb25GaW5hbGl6ZSwgc2hvdWxkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9uRmluYWxpemUgPSBvbkZpbmFsaXplO1xuICAgICAgICBfdGhpcy5zaG91bGRVbnN1YnNjcmliZSA9IHNob3VsZFVuc3Vic2NyaWJlO1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG9uTmV4dFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbk5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9uZXh0O1xuICAgICAgICBfdGhpcy5fZXJyb3IgPSBvbkVycm9yXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX2Vycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBvbkNvbXBsZXRlXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9wZXJhdG9yU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFVuc3Vic2NyaWJlIHx8IHRoaXMuc2hvdWxkVW5zdWJzY3JpYmUoKSkge1xuICAgICAgICAgICAgdmFyIGNsb3NlZF8xID0gdGhpcy5jbG9zZWQ7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAhY2xvc2VkXzEgJiYgKChfYSA9IHRoaXMub25GaW5hbGl6ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gT3BlcmF0b3JTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBPcGVyYXRvclN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9wZXJhdG9yU3Vic2NyaWJlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFcnJvckNsYXNzIH0gZnJvbSAnLi9jcmVhdGVFcnJvckNsYXNzJztcbmV4cG9ydCB2YXIgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgPSBjcmVhdGVFcnJvckNsYXNzKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsKCkge1xuICAgICAgICBfc3VwZXIodGhpcyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdPYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYmplY3RVbnN1YnNjcmliZWRFcnJvci5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRU1QVFlfU1VCU0NSSVBUSU9OIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuaW1wb3J0IHsgYXJyUmVtb3ZlIH0gZnJvbSAnLi91dGlsL2FyclJlbW92ZSc7XG5pbXBvcnQgeyBlcnJvckNvbnRleHQgfSBmcm9tICcuL3V0aWwvZXJyb3JDb250ZXh0JztcbnZhciBTdWJqZWN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5pc1N0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMudGhyb3duRXJyb3IgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3QucHJvdG90eXBlLmxpZnQgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSBuZXcgQW5vbnltb3VzU3ViamVjdCh0aGlzLCB0aGlzKTtcbiAgICAgICAgc3ViamVjdC5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gc3ViamVjdDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90aHJvd0lmQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGVycm9yQ29udGV4dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY3VycmVudE9ic2VydmVycykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50T2JzZXJ2ZXJzID0gQXJyYXkuZnJvbShfdGhpcy5vYnNlcnZlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLmN1cnJlbnRPYnNlcnZlcnMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZXJyb3JDb250ZXh0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl90aHJvd0lmQ2xvc2VkKCk7XG4gICAgICAgICAgICBpZiAoIV90aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhc0Vycm9yID0gX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlcnJvckNvbnRleHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3Rocm93SWZDbG9zZWQoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gX3RoaXMub2JzZXJ2ZXJzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChvYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVycy5zaGlmdCgpLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN1YmplY3QucHJvdG90eXBlLCBcIm9ic2VydmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gKChfYSA9IHRoaXMub2JzZXJ2ZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlLmNhbGwodGhpcywgc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkNsb3NlZCgpO1xuICAgICAgICB0aGlzLl9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5faW5uZXJTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5faW5uZXJTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBoYXNFcnJvciA9IF9hLmhhc0Vycm9yLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQsIG9ic2VydmVycyA9IF9hLm9ic2VydmVycztcbiAgICAgICAgaWYgKGhhc0Vycm9yIHx8IGlzU3RvcHBlZCkge1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZX1NVQlNDUklQVElPTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRPYnNlcnZlcnMgPSBudWxsO1xuICAgICAgICBvYnNlcnZlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdWJzY3JpcHRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE9ic2VydmVycyA9IG51bGw7XG4gICAgICAgICAgICBhcnJSZW1vdmUob2JzZXJ2ZXJzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGhhc0Vycm9yID0gX2EuaGFzRXJyb3IsIHRocm93bkVycm9yID0gX2EudGhyb3duRXJyb3IsIGlzU3RvcHBlZCA9IF9hLmlzU3RvcHBlZDtcbiAgICAgICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRocm93bkVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUuYXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgfTtcbiAgICBTdWJqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgICB9O1xuICAgIHJldHVybiBTdWJqZWN0O1xufShPYnNlcnZhYmxlKSk7XG5leHBvcnQgeyBTdWJqZWN0IH07XG52YXIgQW5vbnltb3VzU3ViamVjdCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFub255bW91c1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5vbnltb3VzU3ViamVjdChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgIF90aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uZXh0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgdmFsdWUpO1xuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuZGVzdGluYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGVycik7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKF9iID0gKF9hID0gdGhpcy5kZXN0aW5hdGlvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBFTVBUWV9TVUJTQ1JJUFRJT047XG4gICAgfTtcbiAgICByZXR1cm4gQW5vbnltb3VzU3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0IHsgQW5vbnltb3VzU3ViamVjdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdC5qcy5tYXAiLCJpbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IGNyZWF0ZU9wZXJhdG9yU3Vic2NyaWJlciB9IGZyb20gJy4vT3BlcmF0b3JTdWJzY3JpYmVyJztcbmV4cG9ydCBmdW5jdGlvbiBtYXAocHJvamVjdCwgdGhpc0FyZykge1xuICAgIHJldHVybiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShjcmVhdGVPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ob2JqOiBhbnkpOiBvYmogaXMgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ge1xyXG4gICAgcmV0dXJuIG9iai5wcm9taXNlXHJcbiAgICAgICAgJiYgb2JqLnJlc29sdmVcclxuICAgICAgICAmJiBvYmoucmVqZWN0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VD4ge1xyXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZTogKHZhbHVlOiBUKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgcHJpdmF0ZSBfcmVqZWN0OiAocmVhc29uOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgICByZWFkb25seSBwcm9taXNlOiBQcm9taXNlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlKHZhbHVlOiBUKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVqZWN0KHJlYXNvbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0ICogYXMgY29tbWFuZHNBbmRFdmVudHMgZnJvbSBcIi4vY29tbWFuZHNBbmRFdmVudHNcIjtcclxuaW1wb3J0IHsgRGlzcG9zYWJsZSB9IGZyb20gXCIuL2Rpc3Bvc2FibGVzXCI7XHJcbmltcG9ydCB7IGdldEtlcm5lbFVyaSwgS2VybmVsIH0gZnJvbSBcIi4va2VybmVsXCI7XHJcbmltcG9ydCB7IFByb21pc2VDb21wbGV0aW9uU291cmNlIH0gZnJvbSBcIi4vcHJvbWlzZUNvbXBsZXRpb25Tb3VyY2VcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgS2VybmVsSW52b2NhdGlvbkNvbnRleHQgaW1wbGVtZW50cyBEaXNwb3NhYmxlIHtcclxuICAgIHB1YmxpYyBnZXQgcHJvbWlzZSgpOiB2b2lkIHwgUHJvbWlzZUxpa2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRpb25Tb3VyY2UucHJvbWlzZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJyZW50OiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29tbWFuZEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGU7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jaGlsZENvbW1hbmRzOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGVbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZXZlbnRTdWJqZWN0OiByeGpzLlN1YmplY3Q8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZT4gPSBuZXcgcnhqcy5TdWJqZWN0PGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGU+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaGFuZGxpbmdLZXJuZWw6IEtlcm5lbCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaGFuZGxpbmdLZXJuZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsaW5nS2VybmVsO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGtlcm5lbEV2ZW50cygpOiByeGpzLk9ic2VydmFibGU8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBzZXQgaGFuZGxpbmdLZXJuZWwodmFsdWU6IEtlcm5lbCB8IG51bGwpIHtcclxuICAgICAgICB0aGlzLl9oYW5kbGluZ0tlcm5lbCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcGxldGlvblNvdXJjZSA9IG5ldyBQcm9taXNlQ29tcGxldGlvblNvdXJjZTx2b2lkPigpO1xyXG4gICAgc3RhdGljIGdldE9yQ3JlYXRlQW1iaWVudENvbnRleHQoa2VybmVsQ29tbWFuZEludm9jYXRpb246IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IEtlcm5lbEludm9jYXRpb25Db250ZXh0IHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IEtlcm5lbEludm9jYXRpb25Db250ZXh0Ll9jdXJyZW50O1xyXG4gICAgICAgIGlmICghY3VycmVudCB8fCBjdXJyZW50Ll9pc0NvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIGtlcm5lbENvbW1hbmRJbnZvY2F0aW9uLmdldE9yQ3JlYXRlVG9rZW4oKTtcclxuICAgICAgICAgICAgS2VybmVsSW52b2NhdGlvbkNvbnRleHQuX2N1cnJlbnQgPSBuZXcgS2VybmVsSW52b2NhdGlvbkNvbnRleHQoa2VybmVsQ29tbWFuZEludm9jYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlLmFyZUNvbW1hbmRzVGhlU2FtZShrZXJuZWxDb21tYW5kSW52b2NhdGlvbiwgY3VycmVudC5fY29tbWFuZEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmQgPSBjdXJyZW50Ll9jaGlsZENvbW1hbmRzLmluY2x1ZGVzKGtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXJuZWxDb21tYW5kSW52b2NhdGlvbi5zZXRQYXJlbnQoY3VycmVudC5fY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Ll9jaGlsZENvbW1hbmRzLnB1c2goa2VybmVsQ29tbWFuZEludm9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuX2N1cnJlbnQhO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgY3VycmVudCgpOiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB8IG51bGwgeyByZXR1cm4gdGhpcy5fY3VycmVudDsgfVxyXG4gICAgZ2V0IGNvbW1hbmQoKTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZCB7IHJldHVybiB0aGlzLl9jb21tYW5kRW52ZWxvcGUuY29tbWFuZDsgfVxyXG4gICAgZ2V0IGNvbW1hbmRFbnZlbG9wZSgpOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUgeyByZXR1cm4gdGhpcy5fY29tbWFuZEVudmVsb3BlOyB9XHJcbiAgICBjb25zdHJ1Y3RvcihrZXJuZWxDb21tYW5kSW52b2NhdGlvbjogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKSB7XHJcbiAgICAgICAgdGhpcy5fY29tbWFuZEVudmVsb3BlID0ga2VybmVsQ29tbWFuZEludm9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGxldGUoY29tbWFuZDogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKSB7XHJcbiAgICAgICAgaWYgKGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZS5hcmVDb21tYW5kc1RoZVNhbWUoY29tbWFuZCwgdGhpcy5fY29tbWFuZEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0NvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHN1Y2NlZWRlZDogY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZFN1Y2NlZWRlZCA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKFxyXG4gICAgICAgICAgICAgICAgY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZFN1Y2NlZWRlZFR5cGUsXHJcbiAgICAgICAgICAgICAgICBzdWNjZWVkZWQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21tYW5kRW52ZWxvcGVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxQdWJsaXNoKGV2ZW50RW52ZWxvcGUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRpb25Tb3VyY2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBDIyB2ZXJzaW9uIGhhcyBjb21wbGV0aW9uIGNhbGxiYWNrcyAtIGRvIHdlIG5lZWQgdGhlc2U/XHJcbiAgICAgICAgICAgIC8vIGlmICghX2V2ZW50cy5Jc0Rpc3Bvc2VkKVxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICBfZXZlbnRzLk9uQ29tcGxldGVkKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5fY2hpbGRDb21tYW5kcy5pbmRleE9mKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fY2hpbGRDb21tYW5kc1twb3NdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmYWlsKG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBUT0RPOlxyXG4gICAgICAgIC8vIFRoZSBDIyBjb2RlIGFjY2VwdHMgYSBtZXNzYWdlIGFuZC9vciBhbiBleGNlcHRpb24uIERvIHdlIG5lZWQgdG8gYWRkIHN1cHBvcnRcclxuICAgICAgICAvLyBmb3IgZXhjZXB0aW9ucz8gKFRoZSBUUyBDb21tYW5kRmFpbGVkIGludGVyZmFjZSBkb2Vzbid0IGhhdmUgYSBwbGFjZSBmb3IgaXQgcmlnaHQgbm93LilcclxuICAgICAgICB0aGlzLl9pc0NvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZmFpbGVkOiBjb21tYW5kc0FuZEV2ZW50cy5Db21tYW5kRmFpbGVkID0geyBtZXNzYWdlOiBtZXNzYWdlID8/IFwiQ29tbWFuZCBGYWlsZWRcIiB9O1xyXG4gICAgICAgIGxldCBldmVudEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoXHJcbiAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRGYWlsZWRUeXBlLFxyXG4gICAgICAgICAgICBmYWlsZWQsXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuaW50ZXJuYWxQdWJsaXNoKGV2ZW50RW52ZWxvcGUpO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGlvblNvdXJjZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGlzaChrZXJuZWxFdmVudDogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsUHVibGlzaChrZXJuZWxFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW50ZXJuYWxQdWJsaXNoKGtlcm5lbEV2ZW50OiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKSB7XHJcbiAgICAgICAgaWYgKCFrZXJuZWxFdmVudC5jb21tYW5kKSB7XHJcbiAgICAgICAgICAgIGtlcm5lbEV2ZW50LmNvbW1hbmQgPSB0aGlzLl9jb21tYW5kRW52ZWxvcGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29tbWFuZCA9IGtlcm5lbEV2ZW50LmNvbW1hbmQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsaW5nS2VybmVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtlcm5lbFVyaSA9IGdldEtlcm5lbFVyaSh0aGlzLmhhbmRsaW5nS2VybmVsKTtcclxuICAgICAgICAgICAgaWYgKCFrZXJuZWxFdmVudC5yb3V0aW5nU2xpcC5jb250YWlucyhrZXJuZWxVcmkpKSB7XHJcbiAgICAgICAgICAgICAgICBrZXJuZWxFdmVudC5yb3V0aW5nU2xpcC5zdGFtcChrZXJuZWxVcmkpO1xyXG4gICAgICAgICAgICAgICAga2VybmVsRXZlbnQucm91dGluZ1NsaXA7Ly8/XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBcInNob3VsZCBub3QgYmUgaGVyZVwiOy8vP1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGtlcm5lbEV2ZW50Oy8vP1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb21tYW5kRW52ZWxvcGU7Ly8/XHJcbiAgICAgICAgaWYgKGNvbW1hbmQgPT09IG51bGwgfHxcclxuICAgICAgICAgICAgY29tbWFuZCA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZS5hcmVDb21tYW5kc1RoZVNhbWUoY29tbWFuZCEsIHRoaXMuX2NvbW1hbmRFbnZlbG9wZSkgfHxcclxuICAgICAgICAgICAgdGhpcy5fY2hpbGRDb21tYW5kcy5pbmNsdWRlcyhjb21tYW5kISkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXZlbnRTdWJqZWN0Lm5leHQoa2VybmVsRXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pc1NlbGZvckRlc2NlbmRhbnRPZih0aGlzLl9jb21tYW5kRW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50U3ViamVjdC5uZXh0KGtlcm5lbEV2ZW50KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaGFzU2FtZVJvb3RDb21tYW5kQXModGhpcy5fY29tbWFuZEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ldmVudFN1YmplY3QubmV4dChrZXJuZWxFdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzUGFyZW50T2ZDb21tYW5kKGNvbW1hbmRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgY2hpbGRGb3VuZCA9IHRoaXMuX2NoaWxkQ29tbWFuZHMuaW5jbHVkZXMoY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICByZXR1cm4gY2hpbGRGb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKHRoaXMuX2NvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEtlcm5lbEludm9jYXRpb25Db250ZXh0Ll9jdXJyZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gICAgSW5mbyA9IDAsXHJcbiAgICBXYXJuID0gMSxcclxuICAgIEVycm9yID0gMixcclxuICAgIE5vbmUgPSAzLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBMb2dFbnRyeSA9IHtcclxuICAgIGxvZ0xldmVsOiBMb2dMZXZlbDtcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG4gICAgbWVzc2FnZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RlZmF1bHQ6IExvZ2dlciA9IG5ldyBMb2dnZXIoJ2RlZmF1bHQnLCAoX2VudHJ5OiBMb2dFbnRyeSkgPT4geyB9KTtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBzdHJpbmcsIHJlYWRvbmx5IHdyaXRlOiAoZW50cnk6IExvZ0VudHJ5KSA9PiB2b2lkKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53cml0ZSh7IGxvZ0xldmVsOiBMb2dMZXZlbC5JbmZvLCBzb3VyY2U6IHRoaXMuc291cmNlLCBtZXNzYWdlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB3YXJuKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMud3JpdGUoeyBsb2dMZXZlbDogTG9nTGV2ZWwuV2Fybiwgc291cmNlOiB0aGlzLnNvdXJjZSwgbWVzc2FnZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53cml0ZSh7IGxvZ0xldmVsOiBMb2dMZXZlbC5FcnJvciwgc291cmNlOiB0aGlzLnNvdXJjZSwgbWVzc2FnZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ3VyZShzb3VyY2U6IHN0cmluZywgd3JpdGVyOiAoZW50cnk6IExvZ0VudHJ5KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihzb3VyY2UsIHdyaXRlcik7XHJcbiAgICAgICAgTG9nZ2VyLl9kZWZhdWx0ID0gbG9nZ2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGRlZmF1bHQoKTogTG9nZ2VyIHtcclxuICAgICAgICBpZiAoTG9nZ2VyLl9kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBMb2dnZXIuX2RlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxvZ2dlciBoYXMgYmVlbiBjb25maWd1cmVkIGZvciB0aGlzIGNvbnRleHQnKTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XHJcbmltcG9ydCB7IFByb21pc2VDb21wbGV0aW9uU291cmNlIH0gZnJvbSBcIi4vcHJvbWlzZUNvbXBsZXRpb25Tb3VyY2VcIjtcclxuXHJcbmludGVyZmFjZSBTY2hlZHVsZXJPcGVyYXRpb248VD4ge1xyXG4gICAgdmFsdWU6IFQ7XHJcbiAgICBleGVjdXRvcjogKHZhbHVlOiBUKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U6IFByb21pc2VDb21wbGV0aW9uU291cmNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2VybmVsU2NoZWR1bGVyPFQ+IHtcclxuICAgIHNldE11c3RUcmFtcG9saW5lKHByZWRpY2F0ZTogKGM6IFQpID0+IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9tdXN0VHJhbXBvbGluZSA9IHByZWRpY2F0ZSA/PyAoKF9jKSA9PiBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9vcGVyYXRpb25RdWV1ZTogQXJyYXk8U2NoZWR1bGVyT3BlcmF0aW9uPFQ+PiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfaW5GbGlnaHRPcGVyYXRpb24/OiBTY2hlZHVsZXJPcGVyYXRpb248VD47XHJcbiAgICBwcml2YXRlIF9tdXN0VHJhbXBvbGluZTogKGM6IFQpID0+IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9tdXN0VHJhbXBvbGluZSA9IChfYykgPT4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbEN1cnJlbnRPcGVyYXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faW5GbGlnaHRPcGVyYXRpb24/LnByb21pc2VDb21wbGV0aW9uU291cmNlLnJlamVjdChuZXcgRXJyb3IoXCJPcGVyYXRpb24gY2FuY2VsbGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBydW5Bc3luYyh2YWx1ZTogVCwgZXhlY3V0b3I6ICh2YWx1ZTogVCkgPT4gUHJvbWlzZTx2b2lkPik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IG9wZXJhdGlvbiA9IHtcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgIGV4ZWN1dG9yLFxyXG4gICAgICAgICAgICBwcm9taXNlQ29tcGxldGlvblNvdXJjZTogbmV3IFByb21pc2VDb21wbGV0aW9uU291cmNlPHZvaWQ+KCksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbXVzdFRyYW1wb2xpbmUgPSB0aGlzLl9tdXN0VHJhbXBvbGluZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodE9wZXJhdGlvbiAmJiAhbXVzdFRyYW1wb2xpbmUpIHtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhga2VybmVsU2NoZWR1bGVyOiBzdGFydGluZyBpbW1lZGlhdGUgZXhlY3V0aW9uIG9mICR7SlNPTi5zdHJpbmdpZnkob3BlcmF0aW9uLnZhbHVlKX1gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGludm9rZSBpbW1lZGlhdGVseVxyXG4gICAgICAgICAgICByZXR1cm4gb3BlcmF0aW9uLmV4ZWN1dG9yKG9wZXJhdGlvbi52YWx1ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWxTY2hlZHVsZXI6IGltbWVkaWF0ZSBleGVjdXRpb24gY29tcGxldGVkOiAke0pTT04uc3RyaW5naWZ5KG9wZXJhdGlvbi52YWx1ZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnByb21pc2VDb21wbGV0aW9uU291cmNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhga2VybmVsU2NoZWR1bGVyOiBpbW1lZGlhdGUgZXhlY3V0aW9uIGZhaWxlZDogJHtKU09OLnN0cmluZ2lmeShlKX0gLSAke0pTT04uc3RyaW5naWZ5KG9wZXJhdGlvbi52YWx1ZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uLnByb21pc2VDb21wbGV0aW9uU291cmNlLnJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhga2VybmVsU2NoZWR1bGVyOiBzY2hlZHVsaW5nIGV4ZWN1dGlvbiBvZiAke0pTT04uc3RyaW5naWZ5KG9wZXJhdGlvbi52YWx1ZSl9YCk7XHJcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uUXVldWUucHVzaChvcGVyYXRpb24pO1xyXG4gICAgICAgIGlmICh0aGlzLl9vcGVyYXRpb25RdWV1ZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVOZXh0Q29tbWFuZCgpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvcGVyYXRpb24ucHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4ZWN1dGVOZXh0Q29tbWFuZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuZXh0T3BlcmF0aW9uID0gdGhpcy5fb3BlcmF0aW9uUXVldWUubGVuZ3RoID4gMCA/IHRoaXMuX29wZXJhdGlvblF1ZXVlWzBdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChuZXh0T3BlcmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luRmxpZ2h0T3BlcmF0aW9uID0gbmV4dE9wZXJhdGlvbjtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhga2VybmVsU2NoZWR1bGVyOiBzdGFydGluZyBzY2hlZHVsZWQgZXhlY3V0aW9uIG9mICR7SlNPTi5zdHJpbmdpZnkobmV4dE9wZXJhdGlvbi52YWx1ZSl9YCk7XHJcbiAgICAgICAgICAgIG5leHRPcGVyYXRpb24uZXhlY3V0b3IobmV4dE9wZXJhdGlvbi52YWx1ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbkZsaWdodE9wZXJhdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWxTY2hlZHVsZXI6IGNvbXBsZXRpbmcgaW5mbGlnaHQgb3BlcmF0aW9uOiBzdWNjZXNzICR7SlNPTi5zdHJpbmdpZnkobmV4dE9wZXJhdGlvbi52YWx1ZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dE9wZXJhdGlvbi5wcm9taXNlQ29tcGxldGlvblNvdXJjZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luRmxpZ2h0T3BlcmF0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbFNjaGVkdWxlcjogY29tcGxldGluZyBpbmZsaWdodCBvcGVyYXRpb246IGZhaWx1cmUgJHtKU09OLnN0cmluZ2lmeShlKX0gLSAke0pTT04uc3RyaW5naWZ5KG5leHRPcGVyYXRpb24udmFsdWUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRPcGVyYXRpb24ucHJvbWlzZUNvbXBsZXRpb25Tb3VyY2UucmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbkZsaWdodE9wZXJhdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3BlcmF0aW9uUXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlTmV4dENvbW1hbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0IHsgS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dFwiO1xyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tIFwiLi9jb21tYW5kc0FuZEV2ZW50c1wiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29tcG9zaXRlS2VybmVsIH0gZnJvbSBcIi4vY29tcG9zaXRlS2VybmVsXCI7XHJcbmltcG9ydCB7IEtlcm5lbFNjaGVkdWxlciB9IGZyb20gXCIuL2tlcm5lbFNjaGVkdWxlclwiO1xyXG5pbXBvcnQgeyBQcm9taXNlQ29tcGxldGlvblNvdXJjZSB9IGZyb20gXCIuL3Byb21pc2VDb21wbGV0aW9uU291cmNlXCI7XHJcbmltcG9ydCAqIGFzIGRpc3Bvc2FibGVzIGZyb20gXCIuL2Rpc3Bvc2FibGVzXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRpbmdzbGlwIGZyb20gXCIuL3JvdXRpbmdzbGlwXCI7XHJcbmltcG9ydCAqIGFzIHJ4anMgZnJvbSBcInJ4anNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uIHtcclxuICAgIGNvbW1hbmRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlO1xyXG4gICAgY29udGV4dDogS2VybmVsSW52b2NhdGlvbkNvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUtlcm5lbENvbW1hbmRIYW5kbGVyIHtcclxuICAgIGNvbW1hbmRUeXBlOiBzdHJpbmc7XHJcbiAgICBoYW5kbGU6IChjb21tYW5kSW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElLZXJuZWxFdmVudE9ic2VydmVyIHtcclxuICAgIChrZXJuZWxFdmVudDogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgS2VybmVsIHtcclxuICAgIHByaXZhdGUgX2tlcm5lbEluZm86IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm87XHJcbiAgICBwcml2YXRlIF9jb21tYW5kSGFuZGxlcnMgPSBuZXcgTWFwPHN0cmluZywgSUtlcm5lbENvbW1hbmRIYW5kbGVyPigpO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRTdWJqZWN0ID0gbmV3IHJ4anMuU3ViamVjdDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlPigpO1xyXG4gICAgcHVibGljIHJvb3RLZXJuZWw6IEtlcm5lbCA9IHRoaXM7XHJcbiAgICBwdWJsaWMgcGFyZW50S2VybmVsOiBDb21wb3NpdGVLZXJuZWwgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NjaGVkdWxlcj86IEtlcm5lbFNjaGVkdWxlcjxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGU+IHwgbnVsbCA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQga2VybmVsSW5mbygpOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tlcm5lbEluZm87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBrZXJuZWxFdmVudHMoKTogcnhqcy5PYnNlcnZhYmxlPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IG5hbWU6IHN0cmluZywgbGFuZ3VhZ2VOYW1lPzogc3RyaW5nLCBsYW5ndWFnZVZlcnNpb24/OiBzdHJpbmcsIGRpc3BsYXlOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsSW5mbyA9IHtcclxuICAgICAgICAgICAgaXNQcm94eTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzQ29tcG9zaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9jYWxOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBsYW5ndWFnZU5hbWU6IGxhbmd1YWdlTmFtZSxcclxuICAgICAgICAgICAgYWxpYXNlczogW10sXHJcbiAgICAgICAgICAgIHVyaTogcm91dGluZ3NsaXAuY3JlYXRlS2VybmVsVXJpKGBrZXJuZWw6Ly9sb2NhbC8ke25hbWV9YCksXHJcbiAgICAgICAgICAgIGxhbmd1YWdlVmVyc2lvbjogbGFuZ3VhZ2VWZXJzaW9uLFxyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUgPz8gbmFtZSxcclxuICAgICAgICAgICAgc3VwcG9ydGVkRGlyZWN0aXZlczogW10sXHJcbiAgICAgICAgICAgIHN1cHBvcnRlZEtlcm5lbENvbW1hbmRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxSZWdpc3RlckNvbW1hbmRIYW5kbGVyKHtcclxuICAgICAgICAgICAgY29tbWFuZFR5cGU6IGNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RLZXJuZWxJbmZvVHlwZSwgaGFuZGxlOiBhc3luYyBpbnZvY2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlUmVxdWVzdEtlcm5lbEluZm8oaW52b2NhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgaGFuZGxlUmVxdWVzdEtlcm5lbEluZm8oaW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKFxyXG4gICAgICAgICAgICBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlLFxyXG4gICAgICAgICAgICA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkPnsga2VybmVsSW5mbzogdGhpcy5fa2VybmVsSW5mbyB9LFxyXG4gICAgICAgICAgICBpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICk7Ly8/XHJcblxyXG4gICAgICAgIGludm9jYXRpb24uY29udGV4dC5wdWJsaXNoKGV2ZW50RW52ZWxvcGUpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNjaGVkdWxlcigpOiBLZXJuZWxTY2hlZHVsZXI8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY2hlZHVsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVyID0gdGhpcy5wYXJlbnRLZXJuZWw/LmdldFNjaGVkdWxlcigpID8/IG5ldyBLZXJuZWxTY2hlZHVsZXI8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVkdWxlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnQoKTogS2VybmVsIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQuaGFuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgcm9vdCgpOiBLZXJuZWwgfCBudWxsIHtcclxuICAgICAgICBpZiAoS2VybmVsLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEtlcm5lbC5jdXJyZW50LnJvb3RLZXJuZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElzIGl0IHdvcnRoIHVzIGdvaW5nIHRvIGVmZm9ydHMgdG8gZW5zdXJlIHRoYXQgdGhlIFByb21pc2UgcmV0dXJuZWQgaGVyZSBhY2N1cmF0ZWx5IHJlZmxlY3RzXHJcbiAgICAvLyB0aGUgY29tbWFuZCdzIHByb2dyZXNzPyBUaGUgb25seSB0aGluZyB0aGF0IGFjdHVhbGx5IGNhbGxzIHRoaXMgaXMgdGhlIGtlcm5lbCBjaGFubmVsLCB0aHJvdWdoXHJcbiAgICAvLyB0aGUgY2FsbGJhY2sgc2V0IHVwIGJ5IGF0dGFjaEtlcm5lbFRvQ2hhbm5lbCwgYW5kIHRoZSBjYWxsYmFjayBpcyBleHBlY3RlZCB0byByZXR1cm4gdm9pZCwgc29cclxuICAgIC8vIG5vdGhpbmcgaXMgZXZlciBnb2luZyB0byBsb29rIGF0IHRoZSBwcm9taXNlIHdlIHJldHVybiBoZXJlLlxyXG4gICAgYXN5bmMgc2VuZChjb21tYW5kRW52ZWxvcGVPck1vZGVsOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUgfCBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGxldCBjb21tYW5kRW52ZWxvcGUgPSA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlPmNvbW1hbmRFbnZlbG9wZU9yTW9kZWw7XHJcblxyXG4gICAgICAgIGlmIChjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUuaXNLZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbChjb21tYW5kRW52ZWxvcGVPck1vZGVsKSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC53YXJuKGBDb252ZXJ0aW5nIGNvbW1hbmQgZW52ZWxvcGUgbW9kZWwgdG8gY29tbWFuZCBlbnZlbG9wZSBmb3IgYmFja2F3YXJkcyBjb21wYXRpYmlsaXR5LmApO1xyXG4gICAgICAgICAgICBjb21tYW5kRW52ZWxvcGUgPSBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUuZnJvbUpzb24oY29tbWFuZEVudmVsb3BlT3JNb2RlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuZ2V0T3JDcmVhdGVBbWJpZW50Q29udGV4dChjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgIGlmIChjb250ZXh0LmNvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZS5hcmVDb21tYW5kc1RoZVNhbWUoY29udGV4dC5jb21tYW5kRW52ZWxvcGUsIGNvbW1hbmRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRFbnZlbG9wZS5zZXRQYXJlbnQoY29udGV4dC5jb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGtlcm5lbFVyaSA9IGdldEtlcm5lbFVyaSh0aGlzKTtcclxuICAgICAgICBpZiAoIWNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcC5jb250YWlucyhrZXJuZWxVcmkpKSB7XHJcbiAgICAgICAgICAgIGNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcC5zdGFtcEFzQXJyaXZlZChrZXJuZWxVcmkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0Lndhcm4oYFRyeWluZyB0byBzdGFtcCAke2NvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZX0gYXMgYXJyaXZlZCBidXQgdXJpICR7a2VybmVsVXJpfSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcDsvLz9cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2NoZWR1bGVyKCkucnVuQXN5bmMoY29tbWFuZEVudmVsb3BlLCAodmFsdWUpID0+IHRoaXMuZXhlY3V0ZUNvbW1hbmQodmFsdWUpLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcC5jb250YWlucyhrZXJuZWxVcmkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuc3RhbXAoa2VybmVsVXJpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0Lndhcm4oYFRyeWluZyB0byBzdGFtcCAke2NvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZX0gYXMgY29tcGxldGVkIGJ1dCB1cmkgJHtrZXJuZWxVcml9IGlzIGFscmVhZHkgcHJlc2VudC5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5nZXRPckNyZWF0ZUFtYmllbnRDb250ZXh0KGNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzSGFuZGxpbmdLZXJuZWwgPSBjb250ZXh0LmhhbmRsaW5nS2VybmVsO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUNvbW1hbmQoY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29udGV4dC5mYWlsKCg8YW55PmUpPy5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuaGFuZGxpbmdLZXJuZWwgPSBwcmV2aW91c0hhbmRsaW5nS2VybmVsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21tYW5kSGFuZGxlcihjb21tYW5kVHlwZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZFR5cGUpOiBJS2VybmVsQ29tbWFuZEhhbmRsZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21tYW5kSGFuZGxlcnMuZ2V0KGNvbW1hbmRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDb21tYW5kKGNvbW1hbmRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5nZXRPckNyZWF0ZUFtYmllbnRDb250ZXh0KGNvbW1hbmRFbnZlbG9wZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91ZEhlbmRsaW5nS2VybmVsID0gY29udGV4dC5oYW5kbGluZ0tlcm5lbDtcclxuICAgICAgICAgICAgY29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCBpc1Jvb3RDb21tYW5kID0gY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlLmFyZUNvbW1hbmRzVGhlU2FtZShjb250ZXh0LmNvbW1hbmRFbnZlbG9wZSwgY29tbWFuZEVudmVsb3BlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudFN1YnNjcmlwdGlvbjogcnhqcy5TdWJzY3JpcHRpb24gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7Ly8/XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNSb290Q29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2VybmVsVHlwZSA9ICh0aGlzLmtlcm5lbEluZm8uaXNQcm94eSA/IFwicHJveHlcIiA6IFwiXCIpICsgKHRoaXMua2VybmVsSW5mby5pc0NvbXBvc2l0ZSA/IFwiY29tcG9zaXRlXCIgOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGtlcm5lbCAke3RoaXMubmFtZX0gb2YgdHlwZSAke2tlcm5lbFR5cGV9IHN1YnNjcmliaW5nIHRvIGNvbnRleHQgZXZlbnRzYCk7XHJcbiAgICAgICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbiA9IGNvbnRleHQua2VybmVsRXZlbnRzLnBpcGUocnhqcy5tYXAoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBrZXJuZWwgJHt0aGlzLm5hbWV9IG9mIHR5cGUgJHtrZXJuZWxUeXBlfSBzYXcgZXZlbnQgJHtlLmV2ZW50VHlwZX0gd2l0aCB0b2tlbiAke2UuY29tbWFuZD8uZ2V0VG9rZW4oKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U7Ly8/XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXJuZWxVcmkgPSBnZXRLZXJuZWxVcmkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnJvdXRpbmdTbGlwLmNvbnRhaW5zKGtlcm5lbFVyaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5yb3V0aW5nU2xpcC5zdGFtcChrZXJuZWxVcmkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvdWxkIG5vdCBnZXQgaGVyZVwiOy8vP1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5wdWJsaXNoRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5nZXRDb21tYW5kSGFuZGxlcihjb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWwgJHt0aGlzLm5hbWV9IGFib3V0IHRvIGhhbmRsZSBjb21tYW5kOiAke0pTT04uc3RyaW5naWZ5KGNvbW1hbmRFbnZlbG9wZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5oYW5kbGUoeyBjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRFbnZlbG9wZSwgY29udGV4dCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbXBsZXRlKGNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHByZXZpb3VkSGVuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUm9vdENvbW1hbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBrZXJuZWwgJHt0aGlzLm5hbWV9IGRvbmUgaGFuZGxpbmcgY29tbWFuZDogJHtKU09OLnN0cmluZ2lmeShjb21tYW5kRW52ZWxvcGUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5mYWlsKCg8YW55PmUpPy5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldmlvdWRIZW5kbGluZ0tlcm5lbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSb290Q29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGhhY2sgbGlrZSB0aGVyZSBpcyBubyB0b21vcnJvd1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkTm9vcCA9IHRoaXMuc2hvdWxkTm9vcENvbW1hbmQoY29tbWFuZEVudmVsb3BlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGROb29wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jb21wbGV0ZShjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IHByZXZpb3VkSGVuZGxpbmdLZXJuZWw7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSb290Q29tbWFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFzaG91bGROb29wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgTm8gaGFuZGxlciBmb3VuZCBmb3IgY29tbWFuZCB0eXBlICR7Y29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlfWApKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQud2Fybihga2VybmVsICR7dGhpcy5uYW1lfSBkb25lIG5vb3AgaGFuZGxpbmcgY29tbWFuZDogJHtKU09OLnN0cmluZ2lmeShjb21tYW5kRW52ZWxvcGUpfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzaG91bGROb29wQ29tbWFuZChjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSwgY29udGV4dDogS2VybmVsSW52b2NhdGlvbkNvbnRleHQpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgbGV0IHNob3VsZE5vb3AgPSBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RDb21wbGV0aW9uc1R5cGU6XHJcbiAgICAgICAgICAgIGNhc2UgY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdFNpZ25hdHVyZUhlbHBUeXBlOlxyXG4gICAgICAgICAgICBjYXNlIGNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3REaWFnbm9zdGljc1R5cGU6XHJcbiAgICAgICAgICAgIGNhc2UgY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdEhvdmVyVGV4dFR5cGU6XHJcbiAgICAgICAgICAgICAgICBzaG91bGROb29wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc2hvdWxkTm9vcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaG91bGROb29wO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVRvS2VybmVsRXZlbnRzKG9ic2VydmVyOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlT2JzZXJ2ZXIpOiBkaXNwb3NhYmxlcy5EaXNwb3NhYmxlU3Vic2NyaXB0aW9uIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9ldmVudFN1YmplY3Quc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzcG9zZTogKCkgPT4geyBzdWIudW5zdWJzY3JpYmUoKTsgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNhbkhhbmRsZShjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSkge1xyXG4gICAgICAgIGlmIChjb21tYW5kRW52ZWxvcGUuY29tbWFuZC50YXJnZXRLZXJuZWxOYW1lICYmIGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUgIT09IHRoaXMubmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRVcmkgPSByb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkoY29tbWFuZEVudmVsb3BlLmNvbW1hbmQuZGVzdGluYXRpb25VcmkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5rZXJuZWxJbmZvLnVyaSAhPT0gbm9ybWFsaXplZFVyaSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zdXBwb3J0c0NvbW1hbmQoY29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdXBwb3J0c0NvbW1hbmQoY29tbWFuZFR5cGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRUeXBlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbW1hbmRIYW5kbGVycy5oYXMoY29tbWFuZFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoaGFuZGxlcjogSUtlcm5lbENvbW1hbmRIYW5kbGVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gV2hlbiBhIHJlZ2lzdHJhdGlvbiBhbHJlYWR5IGV4aXN0ZWQsIHdlIHdhbnQgdG8gb3ZlcndyaXRlIGl0IGJlY2F1c2Ugd2Ugd2FudCB1c2VycyB0b1xyXG4gICAgICAgIC8vIGJlIGFibGUgdG8gZGV2ZWxvcCBoYW5kbGVycyBpdGVyYXRpdmVseSwgYW5kIGl0IHdvdWxkIGJlIHVuaGVscGZ1bCBmb3IgaGFuZGxlciByZWdpc3RyYXRpb25cclxuICAgICAgICAvLyBmb3IgYW55IHBhcnRpY3VsYXIgY29tbWFuZCB0byBiZSBjdW11bGF0aXZlLlxyXG5cclxuICAgICAgICBjb25zdCBzaG91bGROb3RpZnkgPSAhdGhpcy5fY29tbWFuZEhhbmRsZXJzLmhhcyhoYW5kbGVyLmNvbW1hbmRUeXBlKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbFJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoaGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHNob3VsZE5vdGlmeSkge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudDogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkID0ge1xyXG4gICAgICAgICAgICAgICAga2VybmVsSW5mbzogdGhpcy5fa2VybmVsSW5mbyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZW52ZWxvcGUgPSBuZXcgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZShcclxuICAgICAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUsXHJcbiAgICAgICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgICAgIEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQ/LmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgZW52ZWxvcGUucm91dGluZ1NsaXAuc3RhbXAoZ2V0S2VybmVsVXJpKHRoaXMpKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IEtlcm5lbEludm9jYXRpb25Db250ZXh0LmN1cnJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZW52ZWxvcGUuY29tbWFuZCA9IGNvbnRleHQuY29tbWFuZEVudmVsb3BlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHQucHVibGlzaChlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hFdmVudChlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxSZWdpc3RlckNvbW1hbmRIYW5kbGVyKGhhbmRsZXI6IElLZXJuZWxDb21tYW5kSGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbW1hbmRIYW5kbGVycy5zZXQoaGFuZGxlci5jb21tYW5kVHlwZSwgaGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsSW5mby5zdXBwb3J0ZWRLZXJuZWxDb21tYW5kcyA9IEFycmF5LmZyb20odGhpcy5fY29tbWFuZEhhbmRsZXJzLmtleXMoKSkubWFwKGNvbW1hbmROYW1lID0+ICh7IG5hbWU6IGNvbW1hbmROYW1lIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0SGFuZGxpbmdLZXJuZWwoY29tbWFuZEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGNvbnRleHQ/OiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB8IG51bGwpOiBLZXJuZWwgfCBudWxsIHtcclxuICAgICAgICBpZiAodGhpcy5jYW5IYW5kbGUoY29tbWFuZEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250ZXh0Py5mYWlsKGBDb21tYW5kICR7Y29tbWFuZEVudmVsb3BlLmNvbW1hbmRUeXBlfSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEtlcm5lbCAke3RoaXMubmFtZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwdWJsaXNoRXZlbnQoa2VybmVsRXZlbnQ6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUpIHtcclxuICAgICAgICB0aGlzLl9ldmVudFN1YmplY3QubmV4dChrZXJuZWxFdmVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRDb21tYW5kQW5kR2V0UmVzdWx0PFRFdmVudCBleHRlbmRzIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50PihrZXJuZWw6IEtlcm5lbCwgY29tbWFuZEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUsIGV4cGVjdGVkRXZlbnRUeXBlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudFR5cGUpOiBQcm9taXNlPFRFdmVudD4ge1xyXG4gICAgbGV0IGNvbXBsZXRpb25Tb3VyY2UgPSBuZXcgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8VEV2ZW50PigpO1xyXG4gICAgbGV0IGhhbmRsZWQgPSBmYWxzZTtcclxuICAgIGxldCBkaXNwb3NhYmxlID0ga2VybmVsLnN1YnNjcmliZVRvS2VybmVsRXZlbnRzKGV2ZW50RW52ZWxvcGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudEVudmVsb3BlLmNvbW1hbmQ/LmdldFRva2VuKCkgPT09IGNvbW1hbmRFbnZlbG9wZS5nZXRUb2tlbigpKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnRFbnZlbG9wZS5ldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZEZhaWxlZFR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXJyID0gPGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRGYWlsZWQ+ZXZlbnRFbnZlbG9wZS5ldmVudDsvLz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvblNvdXJjZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRTdWNjZWVkZWRUeXBlOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUuYXJlQ29tbWFuZHNUaGVTYW1lKGV2ZW50RW52ZWxvcGUuY29tbWFuZCEsIGNvbW1hbmRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVkKSB7Ly8/ICgkID8gZXZlbnRFbnZlbG9wZSA6IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uU291cmNlLnJlamVjdCgnQ29tbWFuZCB3YXMgaGFuZGxlZCBiZWZvcmUgcmVwb3J0aW5nIGV4cGVjdGVkIHJlc3VsdC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudEVudmVsb3BlLmV2ZW50VHlwZSA9PT0gZXhwZWN0ZWRFdmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IDxURXZlbnQ+ZXZlbnRFbnZlbG9wZS5ldmVudDsvLz8gKCQgPyBldmVudEVudmVsb3BlIDoge30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25Tb3VyY2UucmVzb2x2ZShldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBrZXJuZWwuc2VuZChjb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgZGlzcG9zYWJsZS5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbXBsZXRpb25Tb3VyY2UucHJvbWlzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEtlcm5lbFVyaShrZXJuZWw6IEtlcm5lbCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4ga2VybmVsLmtlcm5lbEluZm8udXJpID8/IGBrZXJuZWw6Ly9sb2NhbC8ke2tlcm5lbC5rZXJuZWxJbmZvLmxvY2FsTmFtZX1gO1xyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIHJvdXRpbmdzbGlwIGZyb20gXCIuL3JvdXRpbmdzbGlwXCI7XHJcbmltcG9ydCAqIGFzIGNvbW1hbmRzQW5kRXZlbnRzIGZyb20gXCIuL2NvbW1hbmRzQW5kRXZlbnRzXCI7XHJcbmltcG9ydCB7IGdldEtlcm5lbFVyaSwgSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uLCBLZXJuZWwgfSBmcm9tIFwiLi9rZXJuZWxcIjtcclxuaW1wb3J0IHsgS2VybmVsSG9zdCB9IGZyb20gXCIuL2tlcm5lbEhvc3RcIjtcclxuaW1wb3J0IHsgS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVLZXJuZWwgZXh0ZW5kcyBLZXJuZWwge1xyXG4gICAgcHJpdmF0ZSBfaG9zdDogS2VybmVsSG9zdCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZGVmYXVsdEtlcm5lbE5hbWVzQnlDb21tYW5kVHlwZTogTWFwPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRUeXBlLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIGRlZmF1bHRLZXJuZWxOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIF9jaGlsZEtlcm5lbHM6IEtlcm5lbENvbGxlY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy5rZXJuZWxJbmZvLmlzQ29tcG9zaXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jaGlsZEtlcm5lbHMgPSBuZXcgS2VybmVsQ29sbGVjdGlvbih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2hpbGRLZXJuZWxzKCkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2NoaWxkS2VybmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhvc3QoKTogS2VybmVsSG9zdCB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBob3N0KGhvc3Q6IEtlcm5lbEhvc3QgfCBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5faG9zdCA9IGhvc3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hvc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXJuZWxJbmZvLnVyaSA9IHRoaXMuX2hvc3QudXJpO1xyXG4gICAgICAgICAgICB0aGlzLl9jaGlsZEtlcm5lbHMubm90aWZ5VGhhdEhvc3RXYXNTZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGFzeW5jIGhhbmRsZVJlcXVlc3RLZXJuZWxJbmZvKGludm9jYXRpb246IElLZXJuZWxDb21tYW5kSW52b2NhdGlvbik6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICBjb25zdCBldmVudEVudmVsb3BlID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoXHJcbiAgICAgICAgICAgIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUsXHJcbiAgICAgICAgICAgIDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+eyBrZXJuZWxJbmZvOiB0aGlzLmtlcm5lbEluZm8gfSxcclxuICAgICAgICAgICAgaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGVcclxuICAgICAgICApOy8vP1xyXG5cclxuICAgICAgICBpbnZvY2F0aW9uLmNvbnRleHQucHVibGlzaChldmVudEVudmVsb3BlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2VybmVsIG9mIHRoaXMuX2NoaWxkS2VybmVscykge1xyXG4gICAgICAgICAgICBpZiAoa2VybmVsLnN1cHBvcnRzQ29tbWFuZChpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkQ29tbWFuZCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdEtlcm5lbEluZm9UeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0S2VybmVsTmFtZToga2VybmVsLmtlcm5lbEluZm8ubG9jYWxOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZENvbW1hbmQuc2V0UGFyZW50KGludm9jYXRpb24uY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkQ29tbWFuZC5yb3V0aW5nU2xpcC5jb250aW51ZVdpdGgoaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXApO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQga2VybmVsLmhhbmRsZUNvbW1hbmQoY2hpbGRDb21tYW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGQoa2VybmVsOiBLZXJuZWwsIGFsaWFzZXM/OiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGlmICgha2VybmVsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImtlcm5lbCBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGVmYXVsdEtlcm5lbE5hbWUpIHtcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCB0byBmaXJzdCBrZXJuZWxcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0S2VybmVsTmFtZSA9IGtlcm5lbC5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAga2VybmVsLnBhcmVudEtlcm5lbCA9IHRoaXM7XHJcbiAgICAgICAga2VybmVsLnJvb3RLZXJuZWwgPSB0aGlzLnJvb3RLZXJuZWw7XHJcbiAgICAgICAga2VybmVsLmtlcm5lbEV2ZW50cy5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50Oy8vP1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2VybmVsVXJpID0gZ2V0S2VybmVsVXJpKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5yb3V0aW5nU2xpcC5jb250YWlucyhrZXJuZWxVcmkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucm91dGluZ1NsaXAuc3RhbXAoa2VybmVsVXJpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV2ZW50Oy8vP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdWJsaXNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChhbGlhc2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBzZXQgPSBuZXcgU2V0KGFsaWFzZXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGtlcm5lbC5rZXJuZWxJbmZvLmFsaWFzZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGFsaWFzIGluIGtlcm5lbC5rZXJuZWxJbmZvLmFsaWFzZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQuYWRkKGFsaWFzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAga2VybmVsLmtlcm5lbEluZm8uYWxpYXNlcyA9IEFycmF5LmZyb20oc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NoaWxkS2VybmVscy5hZGQoa2VybmVsLCBhbGlhc2VzKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW52b2NhdGlvbkNvbnRleHQgPSBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dC5jdXJyZW50O1xyXG5cclxuICAgICAgICBpZiAoaW52b2NhdGlvbkNvbnRleHQpIHtcclxuICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQuY29tbWFuZEVudmVsb3BlOy8vP1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKFxyXG4gICAgICAgICAgICAgICAgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSxcclxuICAgICAgICAgICAgICAgIDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+e1xyXG4gICAgICAgICAgICAgICAgICAgIGtlcm5lbEluZm86IGtlcm5lbC5rZXJuZWxJbmZvXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQuY29tbWFuZEVudmVsb3BlXHJcbiAgICAgICAgICAgICk7Ly8/XHJcbiAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LnB1Ymxpc2goZXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoXHJcbiAgICAgICAgICAgICAgICBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlLFxyXG4gICAgICAgICAgICAgICAgPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZD57XHJcbiAgICAgICAgICAgICAgICAgICAga2VybmVsSW5mbzoga2VybmVsLmtlcm5lbEluZm9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTsvLz9cclxuICAgICAgICAgICAgdGhpcy5wdWJsaXNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaW5kS2VybmVsQnlVcmkodXJpOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSByb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkodXJpKTtcclxuICAgICAgICBpZiAodGhpcy5rZXJuZWxJbmZvLnVyaSA9PT0gbm9ybWFsaXplZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkS2VybmVscy50cnlHZXRCeVVyaShub3JtYWxpemVkKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kS2VybmVsQnlOYW1lKG5hbWU6IHN0cmluZyk6IEtlcm5lbCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKHRoaXMua2VybmVsSW5mby5sb2NhbE5hbWUgPT09IG5hbWUgfHwgdGhpcy5rZXJuZWxJbmZvLmFsaWFzZXMuZmluZChhID0+IGEgPT09IG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRLZXJuZWxzLnRyeUdldEJ5QWxpYXMobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEtlcm5lbHMocHJlZGljYXRlOiAoa2VybmVsOiBLZXJuZWwpID0+IGJvb2xlYW4pOiBLZXJuZWxbXSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdHM6IEtlcm5lbFtdID0gW107XHJcbiAgICAgICAgaWYgKHByZWRpY2F0ZSh0aGlzKSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGtlcm5lbCBvZiB0aGlzLmNoaWxkS2VybmVscykge1xyXG4gICAgICAgICAgICBpZiAocHJlZGljYXRlKGtlcm5lbCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChrZXJuZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRLZXJuZWwocHJlZGljYXRlOiAoa2VybmVsOiBLZXJuZWwpID0+IGJvb2xlYW4pOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUodGhpcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkS2VybmVscy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVmYXVsdFRhcmdldEtlcm5lbE5hbWVGb3JDb21tYW5kKGNvbW1hbmRUeXBlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kVHlwZSwga2VybmVsTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdEtlcm5lbE5hbWVzQnlDb21tYW5kVHlwZS5zZXQoY29tbWFuZFR5cGUsIGtlcm5lbE5hbWUpO1xyXG4gICAgfVxyXG4gICAgb3ZlcnJpZGUgaGFuZGxlQ29tbWFuZChjb21tYW5kRW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IGludm9jYXRpb25Db250ZXh0ID0gS2VybmVsSW52b2NhdGlvbkNvbnRleHQuY3VycmVudDtcclxuXHJcbiAgICAgICAgbGV0IGtlcm5lbCA9IGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUgPT09IHRoaXMubmFtZVxyXG4gICAgICAgICAgICA/IHRoaXNcclxuICAgICAgICAgICAgOiB0aGlzLmdldEhhbmRsaW5nS2VybmVsKGNvbW1hbmRFbnZlbG9wZSwgaW52b2NhdGlvbkNvbnRleHQpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcHJldml1c29IYW5kbGluZ0tlcm5lbCA9IGludm9jYXRpb25Db250ZXh0Py5oYW5kbGluZ0tlcm5lbCA/PyBudWxsO1xyXG5cclxuICAgICAgICBpZiAoa2VybmVsID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQuaGFuZGxpbmdLZXJuZWwgPSBrZXJuZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmhhbmRsZUNvbW1hbmQoY29tbWFuZEVudmVsb3BlKS5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnZvY2F0aW9uQ29udGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldml1c29IYW5kbGluZ0tlcm5lbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXJuZWwpIHtcclxuICAgICAgICAgICAgaWYgKGludm9jYXRpb25Db250ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5oYW5kbGluZ0tlcm5lbCA9IGtlcm5lbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBrZXJuZWxVcmkgPSBnZXRLZXJuZWxVcmkoa2VybmVsKTtcclxuICAgICAgICAgICAgaWYgKCFjb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuY29udGFpbnMoa2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwLnN0YW1wQXNBcnJpdmVkKGtlcm5lbFVyaSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC53YXJuKGBUcnlpbmcgdG8gc3RhbXAgJHtjb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGV9IGFzIGFycml2ZWQgYnV0IHVyaSAke2tlcm5lbFVyaX0gaXMgYWxyZWFkeSBwcmVzZW50LmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBrZXJuZWwuaGFuZGxlQ29tbWFuZChjb21tYW5kRW52ZWxvcGUpLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGludm9jYXRpb25Db250ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52b2NhdGlvbkNvbnRleHQuaGFuZGxpbmdLZXJuZWwgPSBwcmV2aXVzb0hhbmRsaW5nS2VybmVsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb21tYW5kRW52ZWxvcGUucm91dGluZ1NsaXAuY29udGFpbnMoa2VybmVsVXJpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcC5zdGFtcChrZXJuZWxVcmkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC53YXJuKGBUcnlpbmcgdG8gc3RhbXAgJHtjb21tYW5kRW52ZWxvcGUuY29tbWFuZFR5cGV9IGFzIGNvbXBsZXRlZCBidXQgdXJpICR7a2VybmVsVXJpfSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGludm9jYXRpb25Db250ZXh0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGludm9jYXRpb25Db250ZXh0LmhhbmRsaW5nS2VybmVsID0gcHJldml1c29IYW5kbGluZ0tlcm5lbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIktlcm5lbCBub3QgZm91bmQ6IFwiICsgY29tbWFuZEVudmVsb3BlLmNvbW1hbmQudGFyZ2V0S2VybmVsTmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJyaWRlIGdldEhhbmRsaW5nS2VybmVsKGNvbW1hbmRFbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlLCBjb250ZXh0PzogS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfCBudWxsKTogS2VybmVsIHwgbnVsbCB7XHJcblxyXG4gICAgICAgIGxldCBrZXJuZWw6IEtlcm5lbCB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChjb21tYW5kRW52ZWxvcGUuY29tbWFuZC5kZXN0aW5hdGlvblVyaSkge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkID0gcm91dGluZ3NsaXAuY3JlYXRlS2VybmVsVXJpKGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpKTtcclxuICAgICAgICAgICAga2VybmVsID0gdGhpcy5fY2hpbGRLZXJuZWxzLnRyeUdldEJ5VXJpKG5vcm1hbGl6ZWQpID8/IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChrZXJuZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXJuZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRLZXJuZWxOYW1lID0gY29tbWFuZEVudmVsb3BlLmNvbW1hbmQudGFyZ2V0S2VybmVsTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldEtlcm5lbE5hbWUgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXRLZXJuZWxOYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbkhhbmRsZShjb21tYW5kRW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGFyZ2V0S2VybmVsTmFtZSA9IHRoaXMuX2RlZmF1bHRLZXJuZWxOYW1lc0J5Q29tbWFuZFR5cGUuZ2V0KGNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZSkgPz8gdGhpcy5kZWZhdWx0S2VybmVsTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRLZXJuZWxOYW1lICE9PSB1bmRlZmluZWQgJiYgdGFyZ2V0S2VybmVsTmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBrZXJuZWwgPSB0aGlzLl9jaGlsZEtlcm5lbHMudHJ5R2V0QnlBbGlhcyh0YXJnZXRLZXJuZWxOYW1lKSA/PyBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldEtlcm5lbE5hbWUgJiYgIWtlcm5lbCkge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgS2VybmVsIG5vdCBmb3VuZDogJHt0YXJnZXRLZXJuZWxOYW1lfWA7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFrZXJuZWwpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jaGlsZEtlcm5lbHMuY291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGtlcm5lbCA9IHRoaXMuX2NoaWxkS2VybmVscy5zaW5nbGUoKSA/PyBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWtlcm5lbCkge1xyXG4gICAgICAgICAgICBrZXJuZWwgPSBjb250ZXh0Py5oYW5kbGluZ0tlcm5lbCA/PyBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2VybmVsID8/IHRoaXM7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBLZXJuZWxDb2xsZWN0aW9uIGltcGxlbWVudHMgSXRlcmFibGU8S2VybmVsPiB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29tcG9zaXRlS2VybmVsOiBDb21wb3NpdGVLZXJuZWw7XHJcbiAgICBwcml2YXRlIF9rZXJuZWxzOiBLZXJuZWxbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfbmFtZUFuZEFsaWFzZXNCeUtlcm5lbDogTWFwPEtlcm5lbCwgU2V0PHN0cmluZz4+ID0gbmV3IE1hcDxLZXJuZWwsIFNldDxzdHJpbmc+PigpO1xyXG4gICAgcHJpdmF0ZSBfa2VybmVsc0J5TmFtZU9yQWxpYXM6IE1hcDxzdHJpbmcsIEtlcm5lbD4gPSBuZXcgTWFwPHN0cmluZywgS2VybmVsPigpO1xyXG4gICAgcHJpdmF0ZSBfa2VybmVsc0J5TG9jYWxVcmk6IE1hcDxzdHJpbmcsIEtlcm5lbD4gPSBuZXcgTWFwPHN0cmluZywgS2VybmVsPigpO1xyXG4gICAgcHJpdmF0ZSBfa2VybmVsc0J5UmVtb3RlVXJpOiBNYXA8c3RyaW5nLCBLZXJuZWw+ID0gbmV3IE1hcDxzdHJpbmcsIEtlcm5lbD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb3NpdGVLZXJuZWw6IENvbXBvc2l0ZUtlcm5lbCkge1xyXG4gICAgICAgIHRoaXMuX2NvbXBvc2l0ZUtlcm5lbCA9IGNvbXBvc2l0ZUtlcm5lbDtcclxuICAgIH1cclxuXHJcbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxLZXJuZWw+IHtcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmV4dDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fa2VybmVsc1tjb3VudGVyKytdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6IGNvdW50ZXIgPiB0aGlzLl9rZXJuZWxzLmxlbmd0aCAvLz9cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNpbmdsZSgpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXJuZWxzLmxlbmd0aCA9PT0gMSA/IHRoaXMuX2tlcm5lbHNbMF0gOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhZGQoa2VybmVsOiBLZXJuZWwsIGFsaWFzZXM/OiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9rZXJuZWxzQnlOYW1lT3JBbGlhcy5oYXMoa2VybmVsLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihga2VybmVsIHdpdGggbmFtZSAke2tlcm5lbC5uYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUtlcm5lbEluZm9BbmRJbmRleChrZXJuZWwsIGFsaWFzZXMpO1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbHMucHVzaChrZXJuZWwpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgY291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2VybmVscy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlS2VybmVsSW5mb0FuZEluZGV4KGtlcm5lbDogS2VybmVsLCBhbGlhc2VzPzogc3RyaW5nW10pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKGFsaWFzZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYWxpYXMgb2YgYWxpYXNlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2tlcm5lbHNCeU5hbWVPckFsaWFzLmhhcyhhbGlhcykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGtlcm5lbCB3aXRoIGFsaWFzICR7YWxpYXN9IGFscmVhZHkgZXhpc3RzYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fbmFtZUFuZEFsaWFzZXNCeUtlcm5lbC5oYXMoa2VybmVsKSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgYWxpYXMgb2Yga2VybmVsLmtlcm5lbEluZm8uYWxpYXNlcykge1xyXG4gICAgICAgICAgICAgICAgc2V0LmFkZChhbGlhcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGtlcm5lbC5rZXJuZWxJbmZvLmFsaWFzZXMgPSBBcnJheS5mcm9tKHNldCk7XHJcblxyXG4gICAgICAgICAgICBzZXQuYWRkKGtlcm5lbC5rZXJuZWxJbmZvLmxvY2FsTmFtZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9uYW1lQW5kQWxpYXNlc0J5S2VybmVsLnNldChrZXJuZWwsIHNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhbGlhc2VzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGFsaWFzIG9mIGFsaWFzZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25hbWVBbmRBbGlhc2VzQnlLZXJuZWwuZ2V0KGtlcm5lbCkhLmFkZChhbGlhcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX25hbWVBbmRBbGlhc2VzQnlLZXJuZWwuZ2V0KGtlcm5lbCk/LmZvckVhY2goYWxpYXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9rZXJuZWxzQnlOYW1lT3JBbGlhcy5zZXQoYWxpYXMsIGtlcm5lbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBiYXNlVXJpID0gdGhpcy5fY29tcG9zaXRlS2VybmVsLmhvc3Q/LnVyaSB8fCB0aGlzLl9jb21wb3NpdGVLZXJuZWwua2VybmVsSW5mby51cmk7XHJcblxyXG4gICAgICAgIGlmICghYmFzZVVyaSEuZW5kc1dpdGgoXCIvXCIpKSB7XHJcbiAgICAgICAgICAgIGJhc2VVcmkgKz0gXCIvXCI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBrZXJuZWwua2VybmVsSW5mby51cmkgPSByb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkoYCR7YmFzZVVyaX0ke2tlcm5lbC5rZXJuZWxJbmZvLmxvY2FsTmFtZX1gKTsvLz9cclxuICAgICAgICB0aGlzLl9rZXJuZWxzQnlMb2NhbFVyaS5zZXQoa2VybmVsLmtlcm5lbEluZm8udXJpLCBrZXJuZWwpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGtlcm5lbC5rZXJuZWxJbmZvLmlzUHJveHkpIHtcclxuICAgICAgICAgICAgdGhpcy5fa2VybmVsc0J5UmVtb3RlVXJpLnNldChrZXJuZWwua2VybmVsSW5mby5yZW1vdGVVcmkhLCBrZXJuZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0QnlBbGlhcyhhbGlhczogc3RyaW5nKTogS2VybmVsIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2VybmVsc0J5TmFtZU9yQWxpYXMuZ2V0KGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0QnlVcmkodXJpOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGxldCBrZXJuZWwgPSB0aGlzLl9rZXJuZWxzQnlMb2NhbFVyaS5nZXQodXJpKSB8fCB0aGlzLl9rZXJuZWxzQnlSZW1vdGVVcmkuZ2V0KHVyaSk7XHJcbiAgICAgICAgcmV0dXJuIGtlcm5lbDtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlUaGF0SG9zdFdhc1NldCgpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXJuZWwgb2YgdGhpcy5fa2VybmVscykge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUtlcm5lbEluZm9BbmRJbmRleChrZXJuZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0ICogYXMgcnhqcyBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9zaXRlS2VybmVsIH0gZnJvbSAnLi9jb21wb3NpdGVLZXJuZWwnO1xyXG5pbXBvcnQgKiBhcyBjb21tYW5kc0FuZEV2ZW50cyBmcm9tICcuL2NvbW1hbmRzQW5kRXZlbnRzJztcclxuaW1wb3J0ICogYXMgZGlzcG9zYWJsZXMgZnJvbSAnLi9kaXNwb3NhYmxlcyc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGUgfSBmcm9tICcuL2Rpc3Bvc2FibGVzJztcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSA9IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSB8IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGU7XHJcblxyXG5leHBvcnQgdHlwZSBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlTW9kZWwgPSBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbCB8IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGVNb2RlbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0tlcm5lbENvbW1hbmRFbnZlbG9wZShjb21tYW5kT3JFdmVudDogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSk6IGNvbW1hbmRPckV2ZW50IGlzIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZSB7XHJcbiAgICByZXR1cm4gKDxhbnk+Y29tbWFuZE9yRXZlbnQpLmNvbW1hbmRUeXBlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0tlcm5lbENvbW1hbmRFbnZlbG9wZU1vZGVsKGNvbW1hbmRPckV2ZW50OiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlTW9kZWwpOiBjb21tYW5kT3JFdmVudCBpcyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGVNb2RlbCB7XHJcbiAgICByZXR1cm4gKDxhbnk+Y29tbWFuZE9yRXZlbnQpLmNvbW1hbmRUeXBlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0tlcm5lbEV2ZW50RW52ZWxvcGUoY29tbWFuZE9yRXZlbnQ6IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpOiBjb21tYW5kT3JFdmVudCBpcyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlIHtcclxuICAgIHJldHVybiAoPGFueT5jb21tYW5kT3JFdmVudCkuZXZlbnRUeXBlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0tlcm5lbEV2ZW50RW52ZWxvcGVNb2RlbChjb21tYW5kT3JFdmVudDogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZU1vZGVsKTogY29tbWFuZE9yRXZlbnQgaXMgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZU1vZGVsIHtcclxuICAgIHJldHVybiAoPGFueT5jb21tYW5kT3JFdmVudCkuZXZlbnRUeXBlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyIGV4dGVuZHMgcnhqcy5TdWJzY3JpYmFibGU8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4ge1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIge1xyXG4gICAgc2VuZChrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKTogUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyIGltcGxlbWVudHMgSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyIHtcclxuICAgIHByaXZhdGUgX29ic2VydmFibGU6IHJ4anMuU3Vic2NyaWJhYmxlPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+O1xyXG4gICAgcHJpdmF0ZSBfZGlzcG9zYWJsZXM6IGRpc3Bvc2FibGVzLkRpc3Bvc2FibGVbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3Iob2JzZXJ2ZXI6IHJ4anMuT2JzZXJ2YWJsZTxLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPikge1xyXG4gICAgICAgIHRoaXMuX29ic2VydmFibGUgPSBvYnNlcnZlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IFBhcnRpYWw8cnhqcy5PYnNlcnZlcjxLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPj4pOiByeGpzLlVuc3Vic2NyaWJhYmxlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb2JzZXJ2YWJsZS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGRpc3Bvc2FibGUgb2YgdGhpcy5fZGlzcG9zYWJsZXMpIHtcclxuICAgICAgICAgICAgZGlzcG9zYWJsZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRnJvbU9ic2VydmFibGUob2JzZXJ2YWJsZTogcnhqcy5PYnNlcnZhYmxlPEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+KTogSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IEtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyKG9ic2VydmFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRnJvbUV2ZW50TGlzdGVuZXIoYXJnczogeyBtYXA6IChkYXRhOiBFdmVudCkgPT4gS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSwgZXZlbnRUYXJnZXQ6IEV2ZW50VGFyZ2V0LCBldmVudDogc3RyaW5nIH0pOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIge1xyXG4gICAgICAgIGxldCBzdWJqZWN0ID0gbmV3IHJ4anMuU3ViamVjdDxLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPigpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtYXBwZWQgPSBhcmdzLm1hcChlKTtcclxuICAgICAgICAgICAgc3ViamVjdC5uZXh0KG1hcHBlZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhcmdzLmV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoYXJncy5ldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgIGNvbnN0IHJldCA9IG5ldyBLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlcihzdWJqZWN0KTtcclxuICAgICAgICByZXQuX2Rpc3Bvc2FibGVzLnB1c2goe1xyXG4gICAgICAgICAgICBkaXNwb3NlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLmV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoYXJncy5ldmVudCwgbGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXJncy5ldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGFyZ3MuZXZlbnQsIGxpc3RlbmVyKTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc09ic2VydmFibGUoc291cmNlOiBhbnkpOiBzb3VyY2UgaXMgcnhqcy5PYnNlcnZlcjxLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlPiB7XHJcbiAgICByZXR1cm4gKDxhbnk+c291cmNlKS5uZXh0ICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIgaW1wbGVtZW50cyBJS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyIHtcclxuICAgIHByaXZhdGUgX3NlbmRlcj86IHJ4anMuT2JzZXJ2ZXI8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4gfCAoKGtlcm5lbEV2ZW50RW52ZWxvcGU6IEtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpID0+IHZvaWQpO1xyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIHNlbmQoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZTogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZW5kZXIpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lID0ga2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZS5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbmRlcihjbG9uZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZSh0aGlzLl9zZW5kZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzS2VybmVsQ29tbWFuZEVudmVsb3BlKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbmRlci5uZXh0KGNsb25lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZW5kZXIubmV4dChjbG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU2VuZGVyIGlzIG5vdCBzZXRcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJTZW5kZXIgaXMgbm90IHNldFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBGcm9tT2JzZXJ2ZXIob2JzZXJ2ZXI6IHJ4anMuT2JzZXJ2ZXI8S2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4pOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyIHtcclxuICAgICAgICBjb25zdCBzZW5kZXIgPSBuZXcgS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyKCk7XHJcbiAgICAgICAgc2VuZGVyLl9zZW5kZXIgPSBvYnNlcnZlcjtcclxuICAgICAgICByZXR1cm4gc2VuZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRnJvbUZ1bmN0aW9uKHNlbmQ6IChrZXJuZWxFdmVudEVudmVsb3BlOiBLZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKSA9PiB2b2lkKTogSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciB7XHJcbiAgICAgICAgY29uc3Qgc2VuZGVyID0gbmV3IEtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlcigpO1xyXG4gICAgICAgIHNlbmRlci5fc2VuZGVyID0gc2VuZDtcclxuICAgICAgICByZXR1cm4gc2VuZGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTZXRPZlN0cmluZyhjb2xsZWN0aW9uOiBhbnkpOiBjb2xsZWN0aW9uIGlzIFNldDxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0eXBlb2YgKGNvbGxlY3Rpb24pICE9PSB0eXBlb2YgKG5ldyBTZXQ8c3RyaW5nPigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlPZlN0cmluZyhjb2xsZWN0aW9uOiBhbnkpOiBjb2xsZWN0aW9uIGlzIHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24pICYmIGNvbGxlY3Rpb24ubGVuZ3RoID4gMCAmJiB0eXBlb2YgKGNvbGxlY3Rpb25bMF0pID09PSB0eXBlb2YgKFwiXCIpO1xyXG59XHJcblxyXG5jb25zdCBvbktlcm5lbEluZm9VcGRhdGVzOiAoKGNvbXBvc2l0ZUtlcm5lbDogQ29tcG9zaXRlS2VybmVsKSA9PiB2b2lkKVtdID0gW107XHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckZvcktlcm5lbEluZm9VcGRhdGVzKGNhbGxiYWNrOiAoY29tcG9zaXRlS2VybmVsOiBDb21wb3NpdGVLZXJuZWwpID0+IHZvaWQpIHtcclxuICAgIG9uS2VybmVsSW5mb1VwZGF0ZXMucHVzaChjYWxsYmFjayk7XHJcbn1cclxuZnVuY3Rpb24gbm90aWZ5T2ZLZXJuZWxJbmZvVXBkYXRlcyhjb21wb3NpdGVLZXJuZWw6IENvbXBvc2l0ZUtlcm5lbCkge1xyXG4gICAgZm9yIChjb25zdCB1cGRhdGVyIG9mIG9uS2VybmVsSW5mb1VwZGF0ZXMpIHtcclxuICAgICAgICB1cGRhdGVyKGNvbXBvc2l0ZUtlcm5lbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVPclVwZGF0ZVByb3h5Rm9yS2VybmVsSW5mbyhrZXJuZWxJbmZvOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvLCBjb21wb3NpdGVLZXJuZWw6IENvbXBvc2l0ZUtlcm5lbCkge1xyXG4gICAgaWYgKGtlcm5lbEluZm8uaXNQcm94eSkge1xyXG4gICAgICAgIGNvbnN0IGhvc3QgPSBleHRyYWN0SG9zdEFuZE5vbWFsaXplKGtlcm5lbEluZm8ucmVtb3RlVXJpISk7XHJcbiAgICAgICAgaWYgKGhvc3QgPT09IGV4dHJhY3RIb3N0QW5kTm9tYWxpemUoY29tcG9zaXRlS2VybmVsLmtlcm5lbEluZm8udXJpKSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC53YXJuKGBza2lwcGluIGNyZWF0aW9uIG9mIHByb3h5IGZvciBhIHByb3h5IGtlcm5lbCA6IFske0pTT04uc3RyaW5naWZ5KGtlcm5lbEluZm8pfV1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVyaVRvTG9va3VwID0ga2VybmVsSW5mby5pc1Byb3h5ID8ga2VybmVsSW5mby5yZW1vdGVVcmkhIDoga2VybmVsSW5mby51cmk7XHJcbiAgICBpZiAodXJpVG9Mb29rdXApIHtcclxuICAgICAgICBsZXQga2VybmVsID0gY29tcG9zaXRlS2VybmVsLmZpbmRLZXJuZWxCeVVyaSh1cmlUb0xvb2t1cCk7XHJcbiAgICAgICAgaWYgKCFrZXJuZWwpIHtcclxuICAgICAgICAgICAgLy8gYWRkXHJcbiAgICAgICAgICAgIGlmIChjb21wb3NpdGVLZXJuZWwuaG9zdCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgY3JlYXRpbmcgcHJveHkgZm9yIHVyaVske3VyaVRvTG9va3VwfV13aXRoIGluZm8gJHtKU09OLnN0cmluZ2lmeShrZXJuZWxJbmZvKX1gKTtcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBjbGFzaCB3aXRoIGBrZXJuZWxJbmZvLmxvY2FsTmFtZWBcclxuICAgICAgICAgICAgICAgIGtlcm5lbCA9IGNvbXBvc2l0ZUtlcm5lbC5ob3N0LmNvbm5lY3RQcm94eUtlcm5lbChrZXJuZWxJbmZvLmxvY2FsTmFtZSwgdXJpVG9Mb29rdXAsIGtlcm5lbEluZm8uYWxpYXNlcyk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVLZXJuZWxJbmZvKGtlcm5lbC5rZXJuZWxJbmZvLCBrZXJuZWxJbmZvKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8ga2VybmVsIGhvc3QgZm91bmQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHBhdGNoaW5nIHByb3h5IGZvciB1cmlbJHt1cmlUb0xvb2t1cH1dd2l0aCBpbmZvICR7SlNPTi5zdHJpbmdpZnkoa2VybmVsSW5mbyl9IGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGtlcm5lbC5rZXJuZWxJbmZvLmlzUHJveHkpIHtcclxuICAgICAgICAgICAgLy8gcGF0Y2hcclxuICAgICAgICAgICAgdXBkYXRlS2VybmVsSW5mbyhrZXJuZWwua2VybmVsSW5mbywga2VybmVsSW5mbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub3RpZnlPZktlcm5lbEluZm9VcGRhdGVzKGNvbXBvc2l0ZUtlcm5lbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0tlcm5lbEluZm9Gb3JQcm94eShrZXJuZWxJbmZvOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4ga2VybmVsSW5mby5pc1Byb3h5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlS2VybmVsSW5mbyhkZXN0aW5hdGlvbjogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mbywgc291cmNlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvKSB7XHJcbiAgICBkZXN0aW5hdGlvbi5sYW5ndWFnZU5hbWUgPSBzb3VyY2UubGFuZ3VhZ2VOYW1lID8/IGRlc3RpbmF0aW9uLmxhbmd1YWdlTmFtZTtcclxuICAgIGRlc3RpbmF0aW9uLmxhbmd1YWdlVmVyc2lvbiA9IHNvdXJjZS5sYW5ndWFnZVZlcnNpb24gPz8gZGVzdGluYXRpb24ubGFuZ3VhZ2VWZXJzaW9uO1xyXG4gICAgZGVzdGluYXRpb24uZGlzcGxheU5hbWUgPSBzb3VyY2UuZGlzcGxheU5hbWU7XHJcbiAgICBkZXN0aW5hdGlvbi5pc0NvbXBvc2l0ZSA9IHNvdXJjZS5pc0NvbXBvc2l0ZTtcclxuXHJcbiAgICBpZiAoc291cmNlLmRpc3BsYXlOYW1lKSB7XHJcbiAgICAgICAgZGVzdGluYXRpb24uZGlzcGxheU5hbWUgPSBzb3VyY2UuZGlzcGxheU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VwcG9ydGVkRGlyZWN0aXZlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgY29uc3Qgc3VwcG9ydGVkQ29tbWFuZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcbiAgICBpZiAoIWRlc3RpbmF0aW9uLnN1cHBvcnRlZERpcmVjdGl2ZXMpIHtcclxuICAgICAgICBkZXN0aW5hdGlvbi5zdXBwb3J0ZWREaXJlY3RpdmVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkZXN0aW5hdGlvbi5zdXBwb3J0ZWRLZXJuZWxDb21tYW5kcykge1xyXG4gICAgICAgIGRlc3RpbmF0aW9uLnN1cHBvcnRlZEtlcm5lbENvbW1hbmRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBzdXBwb3J0ZWREaXJlY3RpdmUgb2YgZGVzdGluYXRpb24uc3VwcG9ydGVkRGlyZWN0aXZlcykge1xyXG4gICAgICAgIHN1cHBvcnRlZERpcmVjdGl2ZXMuYWRkKHN1cHBvcnRlZERpcmVjdGl2ZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHN1cHBvcnRlZENvbW1hbmQgb2YgZGVzdGluYXRpb24uc3VwcG9ydGVkS2VybmVsQ29tbWFuZHMpIHtcclxuICAgICAgICBzdXBwb3J0ZWRDb21tYW5kcy5hZGQoc3VwcG9ydGVkQ29tbWFuZC5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHN1cHBvcnRlZERpcmVjdGl2ZSBvZiBzb3VyY2Uuc3VwcG9ydGVkRGlyZWN0aXZlcykge1xyXG4gICAgICAgIGlmICghc3VwcG9ydGVkRGlyZWN0aXZlcy5oYXMoc3VwcG9ydGVkRGlyZWN0aXZlLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHN1cHBvcnRlZERpcmVjdGl2ZXMuYWRkKHN1cHBvcnRlZERpcmVjdGl2ZS5uYW1lKTtcclxuICAgICAgICAgICAgZGVzdGluYXRpb24uc3VwcG9ydGVkRGlyZWN0aXZlcy5wdXNoKHN1cHBvcnRlZERpcmVjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qgc3VwcG9ydGVkQ29tbWFuZCBvZiBzb3VyY2Uuc3VwcG9ydGVkS2VybmVsQ29tbWFuZHMpIHtcclxuICAgICAgICBpZiAoIXN1cHBvcnRlZENvbW1hbmRzLmhhcyhzdXBwb3J0ZWRDb21tYW5kLm5hbWUpKSB7XHJcbiAgICAgICAgICAgIHN1cHBvcnRlZENvbW1hbmRzLmFkZChzdXBwb3J0ZWRDb21tYW5kLm5hbWUpO1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5zdXBwb3J0ZWRLZXJuZWxDb21tYW5kcy5wdXNoKHN1cHBvcnRlZENvbW1hbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbm5lY3RvciBpbXBsZW1lbnRzIERpc3Bvc2FibGUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbGlzdGVuZXI6IHJ4anMuVW5zdWJzY3JpYmFibGU7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZWNlaXZlcjogSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2VuZGVyOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmVtb3RlVXJpczogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlbW90ZUhvc3RVcmlzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9yZW1vdGVVcmlzLnZhbHVlcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNlbmRlcigpOiBJS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VuZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcmVjZWl2ZXIoKTogSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVjZWl2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogeyByZWNlaXZlcjogSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyLCBzZW5kZXI6IElLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIsIHJlbW90ZVVyaXM/OiBzdHJpbmdbXSB9KSB7XHJcbiAgICAgICAgdGhpcy5fcmVjZWl2ZXIgPSBjb25maWd1cmF0aW9uLnJlY2VpdmVyO1xyXG4gICAgICAgIHRoaXMuX3NlbmRlciA9IGNvbmZpZ3VyYXRpb24uc2VuZGVyO1xyXG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uLnJlbW90ZVVyaXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByZW1vdGVVcmkgb2YgY29uZmlndXJhdGlvbi5yZW1vdGVVcmlzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmkgPSBleHRyYWN0SG9zdEFuZE5vbWFsaXplKHJlbW90ZVVyaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3RlVXJpcy5hZGQodXJpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSB0aGlzLl9yZWNlaXZlci5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZTogS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzS2VybmVsRXZlbnRFbnZlbG9wZShrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlLmV2ZW50VHlwZSA9PT0gY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+a2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZS5ldmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudC5rZXJuZWxJbmZvLnJlbW90ZVVyaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJpID0gZXh0cmFjdEhvc3RBbmROb21hbGl6ZShldmVudC5rZXJuZWxJbmZvLnVyaSEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVyaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW90ZVVyaXMuYWRkKHVyaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRSb3V0aW5nU2xpcCA9IGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUucm91dGluZ1NsaXAudG9BcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZXZlbnRSb3V0aW5nU2xpcC5sZW5ndGggPz8gMCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50T3JpZ2luID0gZXZlbnRSb3V0aW5nU2xpcCFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVyaSA9IGV4dHJhY3RIb3N0QW5kTm9tYWxpemUoZXZlbnRPcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdGVVcmlzLmFkZCh1cmkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFJlbW90ZUhvc3RVcmkocmVtb3RlVXJpOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCB1cmkgPSBleHRyYWN0SG9zdEFuZE5vbWFsaXplKHJlbW90ZVVyaSk7XHJcbiAgICAgICAgaWYgKHVyaSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdGVVcmlzLmFkZCh1cmkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuUmVhY2gocmVtb3RlVXJpOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBob3N0ID0gZXh0cmFjdEhvc3RBbmROb21hbGl6ZShyZW1vdGVVcmkpOy8vP1xyXG4gICAgICAgIGlmIChob3N0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW1vdGVVcmlzLmhhcyhob3N0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lci51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEhvc3RBbmROb21hbGl6ZShrZXJuZWxVcmk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmaWx0ZXI6IFJlZ0V4cCA9IC8oPzxob3N0Pi4rOlxcL1xcL1teXFwvXSspKFxcL1teXFwvXSkqL2dpO1xyXG4gICAgY29uc3QgbWF0Y2ggPSBmaWx0ZXIuZXhlYyhrZXJuZWxVcmkpOyAvLz9cclxuICAgIGlmIChtYXRjaD8uZ3JvdXBzPy5ob3N0KSB7XHJcbiAgICAgICAgY29uc3QgaG9zdCA9IG1hdGNoLmdyb3Vwcy5ob3N0O1xyXG4gICAgICAgIHJldHVybiBob3N0Oy8vP1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZXJpYWxpemU8VD4oc291cmNlOiBUKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzb3VyY2UsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgLy9oYW5kbGluZyBOYU4sIEluZmluaXR5IGFuZCAtSW5maW5pdHlcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBTZXJpYWxpemVOdW1iZXJMaXRlcmFscyh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NlZDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VyaWFsaXplTnVtYmVyTGl0ZXJhbHModmFsdWU6IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTmFOXCI7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgIHJldHVybiBcIkluZmluaXR5XCI7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICByZXR1cm4gXCItSW5maW5pdHlcIjtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlc2VyaWFsaXplKGpzb246IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIC8vaGFuZGxpbmcgTmFOLCBJbmZpbml0eSBhbmQgLUluZmluaXR5XHJcbiAgICAgICAgY29uc3QgZGVzZXJpYWxpemVkID0gRGVzZXJpYWxpemVOdW1iZXJMaXRlcmFscyh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplZDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlc2VyaWFsaXplTnVtYmVyTGl0ZXJhbHModmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IFwiTmFOXCIpIHtcclxuICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJJbmZpbml0eVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIEluZmluaXR5O1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCItSW5maW5pdHlcIikge1xyXG4gICAgICAgIHJldHVybiAtSW5maW5pdHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIGNvbW1hbmRzQW5kRXZlbnRzIGZyb20gXCIuL2NvbW1hbmRzQW5kRXZlbnRzXCI7XHJcbmltcG9ydCB7IEtlcm5lbEludm9jYXRpb25Db250ZXh0IH0gZnJvbSBcIi4va2VybmVsSW52b2NhdGlvbkNvbnRleHRcIjtcclxuaW1wb3J0ICogYXMgZGlzcG9zYWJsZXMgZnJvbSBcIi4vZGlzcG9zYWJsZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlQ2FwdHVyZSBpbXBsZW1lbnRzIGRpc3Bvc2FibGVzLkRpc3Bvc2FibGUge1xyXG4gICAgcHJpdmF0ZSBvcmlnaW5hbENvbnNvbGU6IENvbnNvbGU7XHJcbiAgICBwcml2YXRlIF9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dDogS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUgPSBjb25zb2xlO1xyXG4gICAgICAgIGNvbnNvbGUgPSA8Q29uc29sZT48YW55PnRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGtlcm5lbEludm9jYXRpb25Db250ZXh0KHZhbHVlOiBLZXJuZWxJbnZvY2F0aW9uQ29udGV4dCB8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbEludm9jYXRpb25Db250ZXh0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXNzZXJ0KHZhbHVlOiBhbnksIG1lc3NhZ2U/OiBzdHJpbmcsIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmFzc2VydCh2YWx1ZSwgbWVzc2FnZSwgb3B0aW9uYWxQYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGNvdW50KGxhYmVsPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuY291bnQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgY291bnRSZXNldChsYWJlbD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmNvdW50UmVzZXQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgZGVidWcobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuZGVidWcobWVzc2FnZSwgb3B0aW9uYWxQYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgZGlyKG9iajogYW55LCBvcHRpb25zPzogdXRpbC5JbnNwZWN0T3B0aW9ucyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmRpcihvYmosIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZGlyeG1sKC4uLmRhdGE6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUuZGlyeG1sKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZXJyb3IobWVzc2FnZT86IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdEFuZFB1Ymxpc2godGhpcy5vcmlnaW5hbENvbnNvbGUuZXJyb3IsIC4uLlttZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtc10pO1xyXG4gICAgfVxyXG5cclxuICAgIGdyb3VwKC4uLmxhYmVsOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmdyb3VwKGxhYmVsKTtcclxuICAgIH1cclxuICAgIGdyb3VwQ29sbGFwc2VkKC4uLmxhYmVsOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmdyb3VwQ29sbGFwc2VkKGxhYmVsKTtcclxuICAgIH1cclxuICAgIGdyb3VwRW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICB9XHJcbiAgICBpbmZvKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RBbmRQdWJsaXNoKHRoaXMub3JpZ2luYWxDb25zb2xlLmluZm8sIC4uLlttZXNzYWdlLCAuLi5vcHRpb25hbFBhcmFtc10pO1xyXG4gICAgfVxyXG4gICAgbG9nKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RBbmRQdWJsaXNoKHRoaXMub3JpZ2luYWxDb25zb2xlLmxvZywgLi4uW21lc3NhZ2UsIC4uLm9wdGlvbmFsUGFyYW1zXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUodGFidWxhckRhdGE6IGFueSwgcHJvcGVydGllcz86IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbENvbnNvbGUudGFibGUodGFidWxhckRhdGEsIHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG4gICAgdGltZShsYWJlbD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLnRpbWUobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgdGltZUVuZChsYWJlbD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLnRpbWVFbmQobGFiZWwpO1xyXG4gICAgfVxyXG4gICAgdGltZUxvZyhsYWJlbD86IHN0cmluZywgLi4uZGF0YTogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS50aW1lTG9nKGxhYmVsLCBkYXRhKTtcclxuICAgIH1cclxuICAgIHRpbWVTdGFtcChsYWJlbD86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLnRpbWVTdGFtcChsYWJlbCk7XHJcbiAgICB9XHJcbiAgICB0cmFjZShtZXNzYWdlPzogYW55LCAuLi5vcHRpb25hbFBhcmFtczogYW55W10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0QW5kUHVibGlzaCh0aGlzLm9yaWdpbmFsQ29uc29sZS50cmFjZSwgLi4uW21lc3NhZ2UsIC4uLm9wdGlvbmFsUGFyYW1zXSk7XHJcbiAgICB9XHJcbiAgICB3YXJuKG1lc3NhZ2U/OiBhbnksIC4uLm9wdGlvbmFsUGFyYW1zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxDb25zb2xlLndhcm4obWVzc2FnZSwgb3B0aW9uYWxQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2ZpbGUobGFiZWw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5wcm9maWxlKGxhYmVsKTtcclxuICAgIH1cclxuICAgIHByb2ZpbGVFbmQobGFiZWw/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsQ29uc29sZS5wcm9maWxlRW5kKGxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUgPSB0aGlzLm9yaWdpbmFsQ29uc29sZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZGlyZWN0QW5kUHVibGlzaCh0YXJnZXQ6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCwgLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICBpZiAodGhpcy5fa2VybmVsSW52b2NhdGlvbkNvbnRleHQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhcmcgb2YgYXJncykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbWVUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnICE9PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShhcmcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUgPSAndGV4dC9wbGFpbic7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhcmc/LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29ubmVjdGlvbi5TZXJpYWxpemUoYXJnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5ZWRWYWx1ZTogY29tbWFuZHNBbmRFdmVudHMuRGlzcGxheWVkVmFsdWVQcm9kdWNlZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHByZXNzRGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudEVudmVsb3BlID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZHNBbmRFdmVudHMuRGlzcGxheWVkVmFsdWVQcm9kdWNlZFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2VybmVsSW52b2NhdGlvbkNvbnRleHQuY29tbWFuZEVudmVsb3BlXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2tlcm5lbEludm9jYXRpb25Db250ZXh0LnB1Ymxpc2goZXZlbnRFbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0YXJnZXQoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCAqIGFzIGNvbW1hbmRzQW5kRXZlbnRzIGZyb20gXCIuL2NvbW1hbmRzQW5kRXZlbnRzXCI7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBLZXJuZWwsIElLZXJuZWxDb21tYW5kSGFuZGxlciwgSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uLCBnZXRLZXJuZWxVcmkgfSBmcm9tIFwiLi9rZXJuZWxcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCAqIGFzIHJvdXRpbmdTbGlwIGZyb20gXCIuL3JvdXRpbmdzbGlwXCI7XHJcbmltcG9ydCB7IFByb21pc2VDb21wbGV0aW9uU291cmNlIH0gZnJvbSBcIi4vcHJvbWlzZUNvbXBsZXRpb25Tb3VyY2VcIjtcclxuaW1wb3J0IHsgS2VybmVsSW52b2NhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb3h5S2VybmVsIGV4dGVuZHMgS2VybmVsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvdmVycmlkZSByZWFkb25seSBuYW1lOiBzdHJpbmcsIHByaXZhdGUgcmVhZG9ubHkgX3NlbmRlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyLCBwcml2YXRlIHJlYWRvbmx5IF9yZWNlaXZlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIsIGxhbmd1YWdlTmFtZT86IHN0cmluZywgbGFuZ3VhZ2VWZXJzaW9uPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGFuZ3VhZ2VOYW1lLCBsYW5ndWFnZVZlcnNpb24pO1xyXG4gICAgICAgIHRoaXMua2VybmVsSW5mby5pc1Byb3h5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvdmVycmlkZSBnZXRDb21tYW5kSGFuZGxlcihjb21tYW5kVHlwZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZFR5cGUpOiBJS2VybmVsQ29tbWFuZEhhbmRsZXIgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbW1hbmRUeXBlLFxyXG4gICAgICAgICAgICBoYW5kbGU6IChpbnZvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY29tbWFuZEhhbmRsZXIoaW52b2NhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGVsZWdhdGVQdWJsaWNhdGlvbihlbnZlbG9wZTogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSwgaW52b2NhdGlvbkNvbnRleHQ6IEtlcm5lbEludm9jYXRpb25Db250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGFscmVhZHlCZWVuU2VlbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGtlcm5lbFVyaSA9IGdldEtlcm5lbFVyaSh0aGlzKTtcclxuICAgICAgICBpZiAoa2VybmVsVXJpICYmICFlbnZlbG9wZS5yb3V0aW5nU2xpcC5jb250YWlucyhrZXJuZWxVcmkpKSB7XHJcbiAgICAgICAgICAgIGVudmVsb3BlLnJvdXRpbmdTbGlwLnN0YW1wKGtlcm5lbFVyaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxyZWFkeUJlZW5TZWVuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc1NhbWVPcmlnaW4oZW52ZWxvcGUpKSB7XHJcbiAgICAgICAgICAgIGlmICghYWxyZWFkeUJlZW5TZWVuKSB7XHJcbiAgICAgICAgICAgICAgICBpbnZvY2F0aW9uQ29udGV4dC5wdWJsaXNoKGVudmVsb3BlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhc1NhbWVPcmlnaW4oZW52ZWxvcGU6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgY29tbWFuZE9yaWdpblVyaSA9IGVudmVsb3BlLmNvbW1hbmQ/LmNvbW1hbmQ/Lm9yaWdpblVyaSA/PyB0aGlzLmtlcm5lbEluZm8udXJpO1xyXG4gICAgICAgIGlmIChjb21tYW5kT3JpZ2luVXJpID09PSB0aGlzLmtlcm5lbEluZm8udXJpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbW1hbmRPcmlnaW5VcmkgPT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVLZXJuZWxJbmZvRnJvbUV2ZW50KGtlcm5lbEluZm9Qcm9kdWNlZDogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkKSB7XHJcbiAgICAgICAgY29ubmVjdGlvbi51cGRhdGVLZXJuZWxJbmZvKHRoaXMua2VybmVsSW5mbywga2VybmVsSW5mb1Byb2R1Y2VkLmtlcm5lbEluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgX2NvbW1hbmRIYW5kbGVyKGNvbW1hbmRJbnZvY2F0aW9uOiBJS2VybmVsQ29tbWFuZEludm9jYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBjb21tYW5kVG9rZW4gPSBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuZ2V0T3JDcmVhdGVUb2tlbigpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRpb25Tb3VyY2UgPSBuZXcgUHJvbWlzZUNvbXBsZXRpb25Tb3VyY2U8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZT4oKTtcclxuXHJcbiAgICAgICAgLy8gZml4IDogaXMgdGhpcyB0aGUgcmlnaHQgd2F5PyBXZSBhcmUgdHJ5aW5nIHRvIGF2b2lkIGZvcndhcmRpbmcgZXZlbnRzIHdlIGp1c3QgZGlkIGZvcndhcmRcclxuICAgICAgICBsZXQgZXZlbnRTdWJzY3JpcHRpb24gPSB0aGlzLl9yZWNlaXZlci5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoZW52ZWxvcGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmlzS2VybmVsRXZlbnRFbnZlbG9wZShlbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW52ZWxvcGUuZXZlbnRUeXBlID09PSBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbnZlbG9wZS5jb21tYW5kID09PSBudWxsIHx8IGVudmVsb3BlLmNvbW1hbmQgPT09IHVuZGVmaW5lZCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbEluZm9Qcm9kdWNlZCA9IDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+ZW52ZWxvcGUuZXZlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtlcm5lbEluZm9Qcm9kdWNlZC5rZXJuZWxJbmZvOy8vP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtlcm5lbEluZm87Ly8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXJuZWxJbmZvUHJvZHVjZWQua2VybmVsSW5mby51cmkgPT09IHRoaXMua2VybmVsSW5mby5yZW1vdGVVcmkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUtlcm5lbEluZm9Gcm9tRXZlbnQoa2VybmVsSW5mb1Byb2R1Y2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSwgeyBrZXJuZWxJbmZvOiB0aGlzLmtlcm5lbEluZm8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW52ZWxvcGUuY29tbWFuZCEuZ2V0VG9rZW4oKSA9PT0gY29tbWFuZFRva2VuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBwcm94eSBuYW1lPSR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgcmVtb3RlIHVyaToke3RoaXMua2VybmVsSW5mby5yZW1vdGVVcml9XSBwcm9jZXNzaW5nIGV2ZW50LCBlbnZlbG9wZVRva2VuPSR7ZW52ZWxvcGUuY29tbWFuZCEuZ2V0VG9rZW4oKX0sIGNvbW1hbmRUb2tlbj0ke2NvbW1hbmRUb2tlbn1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgbmFtZT0ke3RoaXMubmFtZX1bbG9jYWwgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnVyaX0sIHJlbW90ZSB1cmk6JHt0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpfV0gcHJvY2Vzc2luZyBldmVudCwgJHtKU09OLnN0cmluZ2lmeShlbnZlbG9wZSl9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBbLi4uY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlPy5yb3V0aW5nU2xpcC50b0FycmF5KCkgPz8gW11dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwLmNvbnRpbnVlV2l0aChlbnZlbG9wZS5jb21tYW5kIS5yb3V0aW5nU2xpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VudmVsb3BlLmNvbW1hbmQhLnJvdXRpbmdTbGlwID0gWy4uLmNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcCA/PyBbXV07Ly8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBwcm94eSBuYW1lPSR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgY29tbWFuZCByb3V0aW5nU2xpcCA6JHtvcmlnaW5hbH1dIGhhcyBjaGFuZ2VkIHRvOiAke0pTT04uc3RyaW5naWZ5KGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcCA/PyBbXSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuZXJyb3IoYHByb3h5IG5hbWU9JHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCBlcnJvciAke2U/Lm1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZW52ZWxvcGUuZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXJuZWxJbmZvUHJvZHVjZWQgPSA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkPmVudmVsb3BlLmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2VybmVsSW5mb1Byb2R1Y2VkLmtlcm5lbEluZm8udXJpID09PSB0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUtlcm5lbEluZm9Gcm9tRXZlbnQoa2VybmVsSW5mb1Byb2R1Y2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtlcm5lbEluZm86IHRoaXMua2VybmVsSW5mbyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5yb3V0aW5nU2xpcC5jb250aW51ZVdpdGgoZW52ZWxvcGUucm91dGluZ1NsaXApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVQdWJsaWNhdGlvbihldmVudCwgY29tbWFuZEludm9jYXRpb24uY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGVnYXRlUHVibGljYXRpb24oZW52ZWxvcGUsIGNvbW1hbmRJbnZvY2F0aW9uLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZVB1YmxpY2F0aW9uKGVudmVsb3BlLCBjb21tYW5kSW52b2NhdGlvbi5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZEZhaWxlZFR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRTdWNjZWVkZWRUeXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHByb3h5IG5hbWU9JHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIGZpbmlzaGVkLCB0b2tlbj0ke2VudmVsb3BlLmNvbW1hbmQhLmdldFRva2VuKCl9LCBjb21tYW5kVG9rZW49JHtjb21tYW5kVG9rZW59YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudmVsb3BlLmNvbW1hbmQhLmdldFRva2VuKCkgPT09IGNvbW1hbmRUb2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBwcm94eSBuYW1lPSR7dGhpcy5uYW1lfVtsb2NhbCB1cmk6JHt0aGlzLmtlcm5lbEluZm8udXJpfSwgcmVtb3RlIHVyaToke3RoaXMua2VybmVsSW5mby5yZW1vdGVVcml9XSByZXNvbHZpbmcgcHJvbWlzZSwgZW52ZWxvcGVUb2tlbj0ke2VudmVsb3BlLmNvbW1hbmQhLmdldFRva2VuKCl9LCBjb21tYW5kVG9rZW49JHtjb21tYW5kVG9rZW59YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25Tb3VyY2UucmVzb2x2ZShlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgbmFtZT0ke3RoaXMubmFtZX1bbG9jYWwgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnVyaX0sIHJlbW90ZSB1cmk6JHt0aGlzLmtlcm5lbEluZm8ucmVtb3RlVXJpfV0gbm90IHJlc29sdmluZyBwcm9taXNlLCBlbnZlbG9wZVRva2VuPSR7ZW52ZWxvcGUuY29tbWFuZCEuZ2V0VG9rZW4oKX0sIGNvbW1hbmRUb2tlbj0ke2NvbW1hbmRUb2tlbn1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZVB1YmxpY2F0aW9uKGVudmVsb3BlLCBjb21tYW5kSW52b2NhdGlvbi5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVQdWJsaWNhdGlvbihlbnZlbG9wZSwgY29tbWFuZEludm9jYXRpb24uY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCFjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5kZXN0aW5hdGlvblVyaSB8fCAhY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmNvbW1hbmQub3JpZ2luVXJpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5vcmlnaW5VcmkgPz89IHRoaXMua2VybmVsSW5mby51cmk7XHJcbiAgICAgICAgICAgICAgICBjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5kZXN0aW5hdGlvblVyaSA/Pz0gdGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwOy8vP1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZSA9PT0gY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdEtlcm5lbEluZm9UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvblVyaSA9IHRoaXMua2VybmVsSW5mby5yZW1vdGVVcmkhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5yb3V0aW5nU2xpcC5jb250YWlucyhkZXN0aW5hdGlvblVyaSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgJHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIGZvcndhcmRpbmcgY29tbWFuZCAke2NvbW1hbmRJbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZS5jb21tYW5kVHlwZX0gdG8gJHtjb21tYW5kSW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUuY29tbWFuZC5kZXN0aW5hdGlvblVyaX1gKTtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZGVyLnNlbmQoY29tbWFuZEludm9jYXRpb24uY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgJHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIGFib3V0IHRvIGF3YWl0IHdpdGggdG9rZW4gJHtjb21tYW5kVG9rZW59YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudmVudEVudmVsb3BlID0gYXdhaXQgY29tcGxldGlvblNvdXJjZS5wcm9taXNlO1xyXG4gICAgICAgICAgICBpZiAoZW52ZW50RW52ZWxvcGUuZXZlbnRUeXBlID09PSBjb21tYW5kc0FuZEV2ZW50cy5Db21tYW5kRmFpbGVkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZEludm9jYXRpb24uY29udGV4dC5mYWlsKCg8Y29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZEZhaWxlZD5lbnZlbnRFbnZlbG9wZS5ldmVudCkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgcHJveHkgJHt0aGlzLm5hbWV9W2xvY2FsIHVyaToke3RoaXMua2VybmVsSW5mby51cml9LCByZW1vdGUgdXJpOiR7dGhpcy5rZXJuZWxJbmZvLnJlbW90ZVVyaX1dIGRvbmUgYXdhaXRpbmcgd2l0aCB0b2tlbiAke2NvbW1hbmRUb2tlbn19YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbW1hbmRJbnZvY2F0aW9uLmNvbnRleHQuZmFpbCgoPGFueT5lKS5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIGV2ZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgeyBDb21wb3NpdGVLZXJuZWwgfSBmcm9tICcuL2NvbXBvc2l0ZUtlcm5lbCc7XHJcbmltcG9ydCAqIGFzIGNvbW1hbmRzQW5kRXZlbnRzIGZyb20gJy4vY29tbWFuZHNBbmRFdmVudHMnO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aW9uIGZyb20gJy4vY29ubmVjdGlvbic7XHJcbmltcG9ydCAqIGFzIHJvdXRpbmdTbGlwIGZyb20gJy4vcm91dGluZ3NsaXAnO1xyXG5pbXBvcnQgeyBLZXJuZWwgfSBmcm9tICcuL2tlcm5lbCc7XHJcbmltcG9ydCB7IFByb3h5S2VybmVsIH0gZnJvbSAnLi9wcm94eUtlcm5lbCc7XHJcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcclxuaW1wb3J0IHsgS2VybmVsU2NoZWR1bGVyIH0gZnJvbSAnLi9rZXJuZWxTY2hlZHVsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtlcm5lbEhvc3Qge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcmVtb3RlVXJpVG9LZXJuZWwgPSBuZXcgTWFwPHN0cmluZywgS2VybmVsPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdXJpVG9LZXJuZWwgPSBuZXcgTWFwPHN0cmluZywgS2VybmVsPigpO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfa2VybmVsVG9LZXJuZWxJbmZvID0gbmV3IE1hcDxLZXJuZWwsIGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm8+KCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF91cmk6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3NjaGVkdWxlcjogS2VybmVsU2NoZWR1bGVyPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZT47XHJcbiAgICBwcml2YXRlIF9rZXJuZWw6IENvbXBvc2l0ZUtlcm5lbDtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRDb25uZWN0b3I6IGNvbm5lY3Rpb24uQ29ubmVjdG9yO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29ubmVjdG9yczogY29ubmVjdGlvbi5Db25uZWN0b3JbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGtlcm5lbDogQ29tcG9zaXRlS2VybmVsLCBzZW5kZXI6IGNvbm5lY3Rpb24uSUtlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlciwgcmVjZWl2ZXI6IGNvbm5lY3Rpb24uSUtlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyLCBob3N0VXJpOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9rZXJuZWwgPSBrZXJuZWw7XHJcbiAgICAgICAgdGhpcy5fdXJpID0gcm91dGluZ1NsaXAuY3JlYXRlS2VybmVsVXJpKGhvc3RVcmkgfHwgXCJrZXJuZWw6Ly92c2NvZGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX2tlcm5lbC5ob3N0ID0gdGhpcztcclxuICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSBuZXcgS2VybmVsU2NoZWR1bGVyPGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbENvbW1hbmRFbnZlbG9wZT4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2NoZWR1bGVyLnNldE11c3RUcmFtcG9saW5lKChjID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChjLmNvbW1hbmRUeXBlID09PSBjb21tYW5kc0FuZEV2ZW50cy5SZXF1ZXN0SW5wdXRUeXBlKSB8fCAoYy5jb21tYW5kVHlwZSA9PT0gY29tbWFuZHNBbmRFdmVudHMuU2VuZEVkaXRhYmxlQ29kZVR5cGUpO1xyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbm5lY3RvciA9IG5ldyBjb25uZWN0aW9uLkNvbm5lY3Rvcih7IHNlbmRlciwgcmVjZWl2ZXIgfSk7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdG9ycy5wdXNoKHRoaXMuX2RlZmF1bHRDb25uZWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGVmYXVsdENvbm5lY3RvcigpOiBjb25uZWN0aW9uLkNvbm5lY3RvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRDb25uZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1cmkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXJpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQga2VybmVsKCk6IENvbXBvc2l0ZUtlcm5lbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tlcm5lbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0S2VybmVsQnlSZW1vdGVVcmkocmVtb3RlVXJpOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW1vdGVVcmlUb0tlcm5lbC5nZXQocmVtb3RlVXJpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5Z2V0S2VybmVsQnlPcmlnaW5Vcmkob3JpZ2luVXJpOiBzdHJpbmcpOiBLZXJuZWwgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91cmlUb0tlcm5lbC5nZXQob3JpZ2luVXJpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0S2VybmVsSW5mbyhrZXJuZWw6IEtlcm5lbCk6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm8gfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXJuZWxUb0tlcm5lbEluZm8uZ2V0KGtlcm5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEtlcm5lbEluZm8oa2VybmVsOiBLZXJuZWwsIGtlcm5lbEluZm86IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm8pIHtcclxuICAgICAgICBrZXJuZWxJbmZvLnVyaSA9IHJvdXRpbmdTbGlwLmNyZWF0ZUtlcm5lbFVyaShgJHt0aGlzLl91cml9JHtrZXJuZWwubmFtZX1gKTtcclxuICAgICAgICB0aGlzLl9rZXJuZWxUb0tlcm5lbEluZm8uc2V0KGtlcm5lbCwga2VybmVsSW5mbyk7XHJcbiAgICAgICAgdGhpcy5fdXJpVG9LZXJuZWwuc2V0KGtlcm5lbEluZm8udXJpLCBrZXJuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRLZXJuZWwoa2VybmVsQ29tbWFuZEVudmVsb3BlOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxDb21tYW5kRW52ZWxvcGUpOiBLZXJuZWwge1xyXG5cclxuICAgICAgICBjb25zdCB1cmlUb0xvb2t1cCA9IGtlcm5lbENvbW1hbmRFbnZlbG9wZS5jb21tYW5kLmRlc3RpbmF0aW9uVXJpID8/IGtlcm5lbENvbW1hbmRFbnZlbG9wZS5jb21tYW5kLm9yaWdpblVyaTtcclxuICAgICAgICBsZXQga2VybmVsOiBLZXJuZWwgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHVyaVRvTG9va3VwKSB7XHJcbiAgICAgICAgICAgIGtlcm5lbCA9IHRoaXMuX2tlcm5lbC5maW5kS2VybmVsQnlVcmkodXJpVG9Mb29rdXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFrZXJuZWwpIHtcclxuICAgICAgICAgICAgaWYgKGtlcm5lbENvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGtlcm5lbCA9IHRoaXMuX2tlcm5lbC5maW5kS2VybmVsQnlOYW1lKGtlcm5lbENvbW1hbmRFbnZlbG9wZS5jb21tYW5kLnRhcmdldEtlcm5lbE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBrZXJuZWwgPz89IHRoaXMuX2tlcm5lbDtcclxuICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBVc2luZyBLZXJuZWwgJHtrZXJuZWwubmFtZX1gKTtcclxuICAgICAgICByZXR1cm4ga2VybmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25uZWN0UHJveHlLZXJuZWxPbkRlZmF1bHRDb25uZWN0b3IobG9jYWxOYW1lOiBzdHJpbmcsIHJlbW90ZUtlcm5lbFVyaT86IHN0cmluZywgYWxpYXNlcz86IHN0cmluZ1tdKTogUHJveHlLZXJuZWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3RQcm94eUtlcm5lbE9uQ29ubmVjdG9yKGxvY2FsTmFtZSwgdGhpcy5fZGVmYXVsdENvbm5lY3Rvci5zZW5kZXIsIHRoaXMuX2RlZmF1bHRDb25uZWN0b3IucmVjZWl2ZXIsIHJlbW90ZUtlcm5lbFVyaSwgYWxpYXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUFkZENvbm5lY3Rvcihjb25uZWN0b3I6IHsgc2VuZGVyOiBjb25uZWN0aW9uLklLZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIsIHJlY2VpdmVyOiBjb25uZWN0aW9uLklLZXJuZWxDb21tYW5kQW5kRXZlbnRSZWNlaXZlciwgcmVtb3RlVXJpcz86IHN0cmluZ1tdIH0pIHtcclxuICAgICAgICBpZiAoIWNvbm5lY3Rvci5yZW1vdGVVcmlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RvcnMucHVzaChuZXcgY29ubmVjdGlvbi5Db25uZWN0b3IoY29ubmVjdG9yKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gY29ubmVjdG9yLnJlbW90ZVVyaXMhLmZpbmQodXJpID0+IHRoaXMuX2Nvbm5lY3RvcnMuZmluZChjID0+IGMuY2FuUmVhY2godXJpKSkpO1xyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0b3JzLnB1c2gobmV3IGNvbm5lY3Rpb24uQ29ubmVjdG9yKGNvbm5lY3RvcikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5UmVtb3ZlQ29ubmVjdG9yKGNvbm5lY3RvcjogeyByZW1vdGVVcmlzPzogc3RyaW5nW10gfSkge1xyXG4gICAgICAgIGlmICghY29ubmVjdG9yLnJlbW90ZVVyaXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdXJpIG9mIGNvbm5lY3Rvci5yZW1vdGVVcmlzISkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9jb25uZWN0b3JzLmZpbmRJbmRleChjID0+IGMuY2FuUmVhY2godXJpKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RvcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29ubmVjdFByb3h5S2VybmVsKGxvY2FsTmFtZTogc3RyaW5nLCByZW1vdGVLZXJuZWxVcmk6IHN0cmluZywgYWxpYXNlcz86IHN0cmluZ1tdKTogUHJveHlLZXJuZWwge1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RvcnM7Ly8/XHJcbiAgICAgICAgY29uc3QgY29ubmVjdG9yID0gdGhpcy5fY29ubmVjdG9ycy5maW5kKGMgPT4gYy5jYW5SZWFjaChyZW1vdGVLZXJuZWxVcmkpKTtcclxuICAgICAgICBpZiAoIWNvbm5lY3Rvcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGNvbm5lY3RvciB0byByZWFjaCAke3JlbW90ZUtlcm5lbFVyaX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGtlcm5lbCA9IG5ldyBQcm94eUtlcm5lbChsb2NhbE5hbWUsIGNvbm5lY3Rvci5zZW5kZXIsIGNvbm5lY3Rvci5yZWNlaXZlcik7XHJcbiAgICAgICAga2VybmVsLmtlcm5lbEluZm8ucmVtb3RlVXJpID0gcmVtb3RlS2VybmVsVXJpO1xyXG4gICAgICAgIHRoaXMuX2tlcm5lbC5hZGQoa2VybmVsLCBhbGlhc2VzKTtcclxuICAgICAgICByZXR1cm4ga2VybmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29ubmVjdFByb3h5S2VybmVsT25Db25uZWN0b3IobG9jYWxOYW1lOiBzdHJpbmcsIHNlbmRlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50U2VuZGVyLCByZWNlaXZlcjogY29ubmVjdGlvbi5JS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIsIHJlbW90ZUtlcm5lbFVyaT86IHN0cmluZywgYWxpYXNlcz86IHN0cmluZ1tdKTogUHJveHlLZXJuZWwge1xyXG4gICAgICAgIGxldCBrZXJuZWwgPSBuZXcgUHJveHlLZXJuZWwobG9jYWxOYW1lLCBzZW5kZXIsIHJlY2VpdmVyKTtcclxuICAgICAgICBrZXJuZWwua2VybmVsSW5mby5yZW1vdGVVcmkgPSByZW1vdGVLZXJuZWxVcmk7XHJcbiAgICAgICAgdGhpcy5fa2VybmVsLmFkZChrZXJuZWwsIGFsaWFzZXMpO1xyXG4gICAgICAgIHJldHVybiBrZXJuZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUdldENvbm5lY3RvcihyZW1vdGVVcmk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0b3JzLmZpbmQoYyA9PiBjLmNhblJlYWNoKHJlbW90ZVVyaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBjb25uZWN0KCk6IFByb21pc2U8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsUmVhZHk+IHtcclxuICAgICAgICB0aGlzLl9rZXJuZWwuc3Vic2NyaWJlVG9LZXJuZWxFdmVudHMoZSA9PiB7XHJcbiAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYEtlcm5lbEhvc3QgZm9yd2FyZGluZyBldmVudDogJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcclxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdENvbm5lY3Rvci5zZW5kZXIuc2VuZChlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbm5lY3Rvci5yZWNlaXZlci5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZTogY29ubmVjdGlvbi5LZXJuZWxDb21tYW5kT3JFdmVudEVudmVsb3BlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24uaXNLZXJuZWxDb21tYW5kRW52ZWxvcGUoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5pbmZvKGBLZXJuZWxIb3N0IGRpc3BhY3RoaW5nIGNvbW1hbmQ6ICR7SlNPTi5zdHJpbmdpZnkoa2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZSl9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVyLnJ1bkFzeW5jKGtlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGUsIGNvbW1hbmRFbnZlbG9wZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbCA9IHRoaXMuX2tlcm5lbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtlcm5lbC5zZW5kKGNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qga2VybmVsSW5mb3MgPSBbdGhpcy5fa2VybmVsLmtlcm5lbEluZm8sIC4uLkFycmF5LmZyb20odGhpcy5fa2VybmVsLmNoaWxkS2VybmVscy5tYXAoayA9PiBrLmtlcm5lbEluZm8pLmZpbHRlcihraSA9PiBraS5pc1Byb3h5ID09PSBmYWxzZSkpXTtcclxuXHJcbiAgICAgICAgY29uc3Qga2VybmVrUmVhZHk6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbFJlYWR5ID0ge1xyXG4gICAgICAgICAgICBrZXJuZWxJbmZvczoga2VybmVsSW5mb3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbFJlYWR5VHlwZSwga2VybmVrUmVhZHkpO1xyXG4gICAgICAgIGV2ZW50LnJvdXRpbmdTbGlwLnN0YW1wKHRoaXMuX2tlcm5lbC5rZXJuZWxJbmZvLnVyaSEpO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLl9kZWZhdWx0Q29ubmVjdG9yLnNlbmRlci5zZW5kKGV2ZW50KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtlcm5la1JlYWR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRLZXJuZWxJbmZvcygpOiBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvW10ge1xyXG4gICAgICAgIGxldCBrZXJuZWxJbmZvcyA9IFt0aGlzLl9rZXJuZWwua2VybmVsSW5mb107XHJcbiAgICAgICAgZm9yIChsZXQga2VybmVsIG9mIHRoaXMuX2tlcm5lbC5jaGlsZEtlcm5lbHMpIHtcclxuICAgICAgICAgICAga2VybmVsSW5mb3MucHVzaChrZXJuZWwua2VybmVsSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBrZXJuZWxJbmZvcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0S2VybmVsSW5mb1Byb2R1Y2VkKCk6IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGVbXSB7XHJcbiAgICAgICAgbGV0IGV2ZW50czogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZVtdID0gQXJyYXkuZnJvbSh0aGlzLmdldEtlcm5lbEluZm9zKCkubWFwKGtlcm5lbEluZm8gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEluZm9Qcm9kdWNlZFR5cGUsIDxjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWQ+eyBrZXJuZWxJbmZvOiBrZXJuZWxJbmZvIH0pO1xyXG4gICAgICAgICAgICBldmVudC5yb3V0aW5nU2xpcC5zdGFtcChrZXJuZWxJbmZvLnVyaSEpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZXZlbnRzO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvc2l0ZUtlcm5lbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29ubmVjdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uc29sZUNhcHR1cmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbW1hbmRzQW5kRXZlbnRzJztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXNwb3NhYmxlcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4va2VybmVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9rZXJuZWxIb3N0JztcclxuZXhwb3J0ICogZnJvbSAnLi9rZXJuZWxJbnZvY2F0aW9uQ29udGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4va2VybmVsU2NoZWR1bGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9sb2dnZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3Byb21pc2VDb21wbGV0aW9uU291cmNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9wcm94eUtlcm5lbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcm91dGluZ3NsaXAnO1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIC5ORVQgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgZnVsbCBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG5cclxuaW1wb3J0ICogYXMgY29tbWFuZHNBbmRFdmVudHMgZnJvbSBcIi4vY29tbWFuZHNBbmRFdmVudHNcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGlvbiBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XHJcbmltcG9ydCB7IENvbnNvbGVDYXB0dXJlIH0gZnJvbSBcIi4vY29uc29sZUNhcHR1cmVcIjtcclxuaW1wb3J0IHsgS2VybmVsLCBJS2VybmVsQ29tbWFuZEludm9jYXRpb24gfSBmcm9tIFwiLi9rZXJuZWxcIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XHJcbmltcG9ydCAqIGFzIHBvbHlnbG90Tm90ZWJvb2tzQXBpIGZyb20gXCIuL2FwaVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEphdmFzY3JpcHRLZXJuZWwgZXh0ZW5kcyBLZXJuZWwge1xyXG4gICAgcHJpdmF0ZSBzdXBwcmVzc2VkTG9jYWxzOiBTZXQ8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgY2FwdHVyZTogQ29uc29sZUNhcHR1cmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUgPz8gXCJqYXZhc2NyaXB0XCIsIFwiSmF2YVNjcmlwdFwiKTtcclxuICAgICAgICB0aGlzLmtlcm5lbEluZm8uZGlzcGxheU5hbWUgPSBgJHt0aGlzLmtlcm5lbEluZm8ubG9jYWxOYW1lfSAtICR7dGhpcy5rZXJuZWxJbmZvLmxhbmd1YWdlTmFtZX1gO1xyXG4gICAgICAgIHRoaXMuc3VwcHJlc3NlZExvY2FscyA9IG5ldyBTZXQ8c3RyaW5nPih0aGlzLmFsbExvY2FsVmFyaWFibGVOYW1lcygpKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoeyBjb21tYW5kVHlwZTogY29tbWFuZHNBbmRFdmVudHMuU3VibWl0Q29kZVR5cGUsIGhhbmRsZTogaW52b2NhdGlvbiA9PiB0aGlzLmhhbmRsZVN1Ym1pdENvZGUoaW52b2NhdGlvbikgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKHsgY29tbWFuZFR5cGU6IGNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RWYWx1ZUluZm9zVHlwZSwgaGFuZGxlOiBpbnZvY2F0aW9uID0+IHRoaXMuaGFuZGxlUmVxdWVzdFZhbHVlSW5mb3MoaW52b2NhdGlvbikgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKHsgY29tbWFuZFR5cGU6IGNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RWYWx1ZVR5cGUsIGhhbmRsZTogaW52b2NhdGlvbiA9PiB0aGlzLmhhbmRsZVJlcXVlc3RWYWx1ZShpbnZvY2F0aW9uKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoeyBjb21tYW5kVHlwZTogY29tbWFuZHNBbmRFdmVudHMuU2VuZFZhbHVlVHlwZSwgaGFuZGxlOiBpbnZvY2F0aW9uID0+IHRoaXMuaGFuZGxlU2VuZFZhbHVlKGludm9jYXRpb24pIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhcHR1cmUgPSBuZXcgQ29uc29sZUNhcHR1cmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNlbmRWYWx1ZShpbnZvY2F0aW9uOiBJS2VybmVsQ29tbWFuZEludm9jYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCBzZW5kVmFsdWUgPSA8Y29tbWFuZHNBbmRFdmVudHMuU2VuZFZhbHVlPmludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmNvbW1hbmQ7XHJcbiAgICAgICAgaWYgKHNlbmRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNlbmRWYWx1ZS5mb3JtYXR0ZWRWYWx1ZS5taW1lVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgKDxhbnk+Z2xvYmFsVGhpcylbc2VuZFZhbHVlLm5hbWVdID0gY29ubmVjdGlvbi5EZXNlcmlhbGl6ZShzZW5kVmFsdWUuZm9ybWF0dGVkVmFsdWUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAoPGFueT5nbG9iYWxUaGlzKVtzZW5kVmFsdWUubmFtZV0gPSBzZW5kVmFsdWUuZm9ybWF0dGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmb3JtYXR0ZWRWYWx1ZSBpcyByZXF1aXJlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVN1Ym1pdENvZGUoaW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0Q29kZSA9IDxjb21tYW5kc0FuZEV2ZW50cy5TdWJtaXRDb2RlPmludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmNvbW1hbmQ7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IHN1Ym1pdENvZGUuY29kZTtcclxuXHJcbiAgICAgICAgc3VwZXIua2VybmVsSW5mby5sb2NhbE5hbWU7Ly8/XHJcbiAgICAgICAgc3VwZXIua2VybmVsSW5mby51cmk7Ly8/XHJcbiAgICAgICAgc3VwZXIua2VybmVsSW5mby5yZW1vdGVVcmk7Ly8/XHJcbiAgICAgICAgY29uc3QgY29kZVN1Ym1pc3Npb25SZWNlaXZlZEV2ZW50ID0gbmV3IGNvbW1hbmRzQW5kRXZlbnRzLktlcm5lbEV2ZW50RW52ZWxvcGUoY29tbWFuZHNBbmRFdmVudHMuQ29kZVN1Ym1pc3Npb25SZWNlaXZlZFR5cGUsIHsgY29kZSB9LCBpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgaW52b2NhdGlvbi5jb250ZXh0LnB1Ymxpc2goY29kZVN1Ym1pc3Npb25SZWNlaXZlZEV2ZW50KTtcclxuICAgICAgICBpbnZvY2F0aW9uLmNvbnRleHQuY29tbWFuZEVudmVsb3BlLnJvdXRpbmdTbGlwOy8vP1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZS5rZXJuZWxJbnZvY2F0aW9uQ29udGV4dCA9IGludm9jYXRpb24uY29udGV4dDtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IEFzeW5jRnVuY3Rpb24gPSBldmFsKGBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24oKXt9KS5jb25zdHJ1Y3RvcmApO1xyXG4gICAgICAgICAgICBjb25zdCBldmFsdWF0b3IgPSBBc3luY0Z1bmN0aW9uKFwiY29uc29sZVwiLCBcInBvbHlnbG90Tm90ZWJvb2tzXCIsIGNvZGUpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBldmFsdWF0b3IodGhpcy5jYXB0dXJlLCBwb2x5Z2xvdE5vdGVib29rc0FwaSk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWUgPSBmb3JtYXRWYWx1ZShyZXN1bHQsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudDogY29tbWFuZHNBbmRFdmVudHMuUmV0dXJuVmFsdWVQcm9kdWNlZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZXM6IFtmb3JtYXR0ZWRWYWx1ZV1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXR1cm5WYWx1ZVByb2R1Y2VkRXZlbnQgPSBuZXcgY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZShjb21tYW5kc0FuZEV2ZW50cy5SZXR1cm5WYWx1ZVByb2R1Y2VkVHlwZSwgZXZlbnQsIGludm9jYXRpb24uY29tbWFuZEVudmVsb3BlKTtcclxuICAgICAgICAgICAgICAgIGludm9jYXRpb24uY29udGV4dC5wdWJsaXNoKHJldHVyblZhbHVlUHJvZHVjZWRFdmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IGU7Ly8/XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmUua2VybmVsSW52b2NhdGlvbkNvbnRleHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUmVxdWVzdFZhbHVlSW5mb3MoaW52b2NhdGlvbjogSUtlcm5lbENvbW1hbmRJbnZvY2F0aW9uKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVJbmZvczogY29tbWFuZHNBbmRFdmVudHMuS2VybmVsVmFsdWVJbmZvW10gPSB0aGlzLmFsbExvY2FsVmFyaWFibGVOYW1lcygpLmZpbHRlcih2ID0+ICF0aGlzLnN1cHByZXNzZWRMb2NhbHMuaGFzKHYpKS5tYXAodiA9PiAoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHYsXHJcbiAgICAgICAgICAgICAgICB0eXBlTmFtZTogZ2V0VHlwZSh0aGlzLmdldExvY2FsVmFyaWFibGUodikpLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdFZhbHVlKHRoaXMuZ2V0TG9jYWxWYXJpYWJsZSh2KSwgXCJ0ZXh0L3BsYWluXCIpLFxyXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkTWltZVR5cGVzOiBbXVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50OiBjb21tYW5kc0FuZEV2ZW50cy5WYWx1ZUluZm9zUHJvZHVjZWQgPSB7XHJcbiAgICAgICAgICAgIHZhbHVlSW5mb3NcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZUluZm9zUHJvZHVjZWRFdmVudCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKGNvbW1hbmRzQW5kRXZlbnRzLlZhbHVlSW5mb3NQcm9kdWNlZFR5cGUsIGV2ZW50LCBpbnZvY2F0aW9uLmNvbW1hbmRFbnZlbG9wZSk7XHJcbiAgICAgICAgaW52b2NhdGlvbi5jb250ZXh0LnB1Ymxpc2godmFsdWVJbmZvc1Byb2R1Y2VkRXZlbnQpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJlcXVlc3RWYWx1ZShpbnZvY2F0aW9uOiBJS2VybmVsQ29tbWFuZEludm9jYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0VmFsdWUgPSA8Y29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdFZhbHVlPmludm9jYXRpb24uY29tbWFuZEVudmVsb3BlLmNvbW1hbmQ7XHJcbiAgICAgICAgY29uc3QgcmF3VmFsdWUgPSB0aGlzLmdldExvY2FsVmFyaWFibGUocmVxdWVzdFZhbHVlLm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0VmFsdWUocmF3VmFsdWUsIHJlcXVlc3RWYWx1ZS5taW1lVHlwZSB8fCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHJldHVybmluZyAke0pTT04uc3RyaW5naWZ5KGZvcm1hdHRlZFZhbHVlKX0gZm9yICR7cmVxdWVzdFZhbHVlLm5hbWV9YCk7XHJcbiAgICAgICAgY29uc3QgZXZlbnQ6IGNvbW1hbmRzQW5kRXZlbnRzLlZhbHVlUHJvZHVjZWQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHJlcXVlc3RWYWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlUHJvZHVjZWRFdmVudCA9IG5ldyBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxFdmVudEVudmVsb3BlKGNvbW1hbmRzQW5kRXZlbnRzLlZhbHVlUHJvZHVjZWRUeXBlLCBldmVudCwgaW52b2NhdGlvbi5jb21tYW5kRW52ZWxvcGUpO1xyXG4gICAgICAgIGludm9jYXRpb24uY29udGV4dC5wdWJsaXNoKHZhbHVlUHJvZHVjZWRFdmVudCk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhbGxMb2NhbFZhcmlhYmxlTmFtZXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBnbG9iYWxUaGlzKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKDxhbnk+Z2xvYmFsVGhpcylba2V5XSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5lcnJvcihgZXJyb3IgZ2V0dGluZyB2YWx1ZSBmb3IgJHtrZXl9IDogJHtlfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBMb2dnZXIuZGVmYXVsdC5lcnJvcihgZXJyb3Igc2Nhbm5pbmcgZ2xvYmxhIHZhcmlhYmxlcyA6ICR7ZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2FsVmFyaWFibGUobmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gKDxhbnk+Z2xvYmFsVGhpcylbbmFtZV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRWYWx1ZShhcmc6IGFueSwgbWltZVR5cGU6IHN0cmluZyk6IGNvbW1hbmRzQW5kRXZlbnRzLkZvcm1hdHRlZFZhbHVlIHtcclxuICAgIGxldCB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIHN3aXRjaCAobWltZVR5cGUpIHtcclxuICAgICAgICBjYXNlICd0ZXh0L3BsYWluJzpcclxuICAgICAgICAgICAgdmFsdWUgPSBhcmc/LnRvU3RyaW5nKCkgfHwgJ3VuZGVmaW5lZCc7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gYFske3ZhbHVlfV1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uL2pzb24nOlxyXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbm5lY3Rpb24uU2VyaWFsaXplKGFyZyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgdW5zdXBwb3J0ZWQgbWltZSB0eXBlOiAke21pbWVUeXBlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWltZVR5cGUsXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgc3VwcHJlc3NEaXNwbGF5OiBmYWxzZVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUoYXJnOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgbGV0IHR5cGU6IHN0cmluZyA9IGFyZyA/IHR5cGVvZiAoYXJnKSA6IFwiXCI7Ly8/XHJcblxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xyXG4gICAgICAgIHR5cGUgPSBgJHt0eXBlb2YgKGFyZ1swXSl9W11gOy8vP1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmcgPT09IEluZmluaXR5IHx8IGFyZyA9PT0gLUluZmluaXR5IHx8IChhcmcgIT09IGFyZykpIHtcclxuICAgICAgICB0eXBlID0gXCJudW1iZXJcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHlwZTsgLy8/XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAuTkVUIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuXHJcbmltcG9ydCB7IENvbXBvc2l0ZUtlcm5lbCB9IGZyb20gXCIuLi9jb21wb3NpdGVLZXJuZWxcIjtcclxuaW1wb3J0IHsgSmF2YXNjcmlwdEtlcm5lbCB9IGZyb20gXCIuLi9qYXZhc2NyaXB0S2VybmVsXCI7XHJcbmltcG9ydCB7IExvZ0VudHJ5LCBMb2dnZXIgfSBmcm9tIFwiLi4vbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEtlcm5lbEhvc3QgfSBmcm9tIFwiLi4va2VybmVsSG9zdFwiO1xyXG5pbXBvcnQgKiBhcyByeGpzIGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCAqIGFzIGNvbm5lY3Rpb24gZnJvbSBcIi4uL2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0ICogYXMgY29tbWFuZHNBbmRFdmVudHMgZnJvbSBcIi4uL2NvbW1hbmRzQW5kRXZlbnRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9zdChcclxuICAgIGdsb2JhbDogYW55LFxyXG4gICAgY29tcG9zaXRlS2VybmVsTmFtZTogc3RyaW5nLFxyXG4gICAgY29uZmlndXJlUmVxdWlyZTogKGludGVyYWN0aXZlOiBhbnkpID0+IHZvaWQsXHJcbiAgICBsb2dNZXNzYWdlOiAoZW50cnk6IExvZ0VudHJ5KSA9PiB2b2lkLFxyXG4gICAgbG9jYWxUb1JlbW90ZTogcnhqcy5PYnNlcnZlcjxjb25uZWN0aW9uLktlcm5lbENvbW1hbmRPckV2ZW50RW52ZWxvcGU+LFxyXG4gICAgcmVtb3RlVG9Mb2NhbDogcnhqcy5PYnNlcnZhYmxlPGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4sXHJcbiAgICBvblJlYWR5OiAoKSA9PiB2b2lkKSB7XHJcbiAgICBMb2dnZXIuY29uZmlndXJlKGNvbXBvc2l0ZUtlcm5lbE5hbWUsIGxvZ01lc3NhZ2UpO1xyXG5cclxuICAgIGdsb2JhbC5pbnRlcmFjdGl2ZSA9IHt9O1xyXG4gICAgY29uZmlndXJlUmVxdWlyZShnbG9iYWwuaW50ZXJhY3RpdmUpO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvc2l0ZUtlcm5lbCA9IG5ldyBDb21wb3NpdGVLZXJuZWwoY29tcG9zaXRlS2VybmVsTmFtZSk7XHJcbiAgICBjb25zdCBrZXJuZWxIb3N0ID0gbmV3IEtlcm5lbEhvc3QoY29tcG9zaXRlS2VybmVsLCBjb25uZWN0aW9uLktlcm5lbENvbW1hbmRBbmRFdmVudFNlbmRlci5Gcm9tT2JzZXJ2ZXIobG9jYWxUb1JlbW90ZSksIGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZEFuZEV2ZW50UmVjZWl2ZXIuRnJvbU9ic2VydmFibGUocmVtb3RlVG9Mb2NhbCksIGBrZXJuZWw6Ly8ke2NvbXBvc2l0ZUtlcm5lbE5hbWV9YCk7XHJcblxyXG4gICAga2VybmVsSG9zdC5kZWZhdWx0Q29ubmVjdG9yLnJlY2VpdmVyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgbmV4dDogKGVudmVsb3BlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmlzS2VybmVsRXZlbnRFbnZlbG9wZShlbnZlbG9wZSkgJiYgZW52ZWxvcGUuZXZlbnRUeXBlID09PSBjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXJuZWxJbmZvUHJvZHVjZWQgPSA8Y29tbWFuZHNBbmRFdmVudHMuS2VybmVsSW5mb1Byb2R1Y2VkPmVudmVsb3BlLmV2ZW50O1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5lbnN1cmVPclVwZGF0ZVByb3h5Rm9yS2VybmVsSW5mbyhrZXJuZWxJbmZvUHJvZHVjZWQua2VybmVsSW5mbywgY29tcG9zaXRlS2VybmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVzZSBjb21wb3NpdGUga2VybmVsIGFzIHJvb3RcclxuXHJcbiAgICBnbG9iYWwua2VybmVsID0ge1xyXG4gICAgICAgIGdldCByb290KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9zaXRlS2VybmVsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2xvYmFsW2NvbXBvc2l0ZUtlcm5lbE5hbWVdID0ge1xyXG4gICAgICAgIGNvbXBvc2l0ZUtlcm5lbCxcclxuICAgICAgICBrZXJuZWxIb3N0LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBqc0tlcm5lbCA9IG5ldyBKYXZhc2NyaXB0S2VybmVsKCk7XHJcbiAgICBjb21wb3NpdGVLZXJuZWwuYWRkKGpzS2VybmVsLCBbXCJqc1wiXSk7XHJcblxyXG4gICAga2VybmVsSG9zdC5jb25uZWN0KCk7XHJcblxyXG4gICAgb25SZWFkeSgpO1xyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgLk5FVCBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcHJvamVjdCByb290IGZvciBmdWxsIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcblxyXG5pbXBvcnQgKiBhcyBmcm9udEVuZEhvc3QgZnJvbSAnLi9mcm9udEVuZEhvc3QnO1xyXG5pbXBvcnQgKiBhcyByeGpzIGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCAqIGFzIGNvbm5lY3Rpb24gZnJvbSBcIi4uL2Nvbm5lY3Rpb25cIjtcclxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBLZXJuZWxIb3N0IH0gZnJvbSAnLi4va2VybmVsSG9zdCc7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgS2VybmVsSW5mbyB9IGZyb20gJy4uL2NvbnRyYWN0cyc7XHJcbmltcG9ydCB7IEtlcm5lbENvbW1hbmRFbnZlbG9wZSwgS2VybmVsRXZlbnRFbnZlbG9wZSB9IGZyb20gJy4uL2NvbW1hbmRzQW5kRXZlbnRzJztcclxuXHJcbnR5cGUgS2VybmVsTWVzc2FnaW5nQXBpID0ge1xyXG4gICAgb25EaWRSZWNlaXZlS2VybmVsTWVzc2FnZTogKGFyZzogYW55KSA9PiBhbnk7XHJcbiAgICBwb3N0S2VybmVsTWVzc2FnZTogKGRhdGE6IHVua25vd24pID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoY29udGV4dDogS2VybmVsTWVzc2FnaW5nQXBpKSB7XHJcbiAgICBjb25maWd1cmUod2luZG93LCBjb250ZXh0KTtcclxuICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYHNldCB1cCAnd2VidmlldycgaG9zdCBtb2R1bGUgY29tcGxldGVgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlKGdsb2JhbDogYW55LCBjb250ZXh0OiBLZXJuZWxNZXNzYWdpbmdBcGkpIHtcclxuICAgIGlmICghZ2xvYmFsKSB7XHJcbiAgICAgICAgZ2xvYmFsID0gd2luZG93O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW90ZVRvTG9jYWwgPSBuZXcgcnhqcy5TdWJqZWN0PGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4oKTtcclxuICAgIGNvbnN0IGxvY2FsVG9SZW1vdGUgPSBuZXcgcnhqcy5TdWJqZWN0PGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZT4oKTtcclxuXHJcbiAgICBsb2NhbFRvUmVtb3RlLnN1YnNjcmliZSh7XHJcbiAgICAgICAgbmV4dDogZW52ZWxvcGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbnZlbG9wZUpzb24gPSBlbnZlbG9wZS50b0pzb24oKTtcclxuICAgICAgICAgICAgY29udGV4dC5wb3N0S2VybmVsTWVzc2FnZSh7IGVudmVsb3BlOiBlbnZlbG9wZUpzb24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgd2ViVmlld0lkID0gdXVpZCgpO1xyXG4gICAgY29udGV4dC5vbkRpZFJlY2VpdmVLZXJuZWxNZXNzYWdlKChhcmc6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChhcmcuZW52ZWxvcGUgJiYgYXJnLndlYlZpZXdJZCA9PT0gd2ViVmlld0lkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudmVsb3BlID0gPGNvbm5lY3Rpb24uS2VybmVsQ29tbWFuZE9yRXZlbnRFbnZlbG9wZU1vZGVsPjxhbnk+KGFyZy5lbnZlbG9wZSk7XHJcbiAgICAgICAgICAgIGlmIChjb25uZWN0aW9uLmlzS2VybmVsRXZlbnRFbnZlbG9wZU1vZGVsKGVudmVsb3BlKSkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlZmF1bHQuaW5mbyhgY2hhbm5lbCBnb3QgJHtlbnZlbG9wZS5ldmVudFR5cGV9IHdpdGggdG9rZW4gJHtlbnZlbG9wZS5jb21tYW5kPy50b2tlbn1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gS2VybmVsRXZlbnRFbnZlbG9wZS5mcm9tSnNvbihlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdGVUb0xvY2FsLm5leHQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IEtlcm5lbENvbW1hbmRFbnZlbG9wZS5mcm9tSnNvbihlbnZlbG9wZSk7XHJcbiAgICAgICAgICAgICAgICByZW1vdGVUb0xvY2FsLm5leHQoY29tbWFuZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmcud2ViVmlld0lkID09PSB3ZWJWaWV3SWQpIHtcclxuICAgICAgICAgICAgY29uc3Qga2VybmVsSG9zdCA9ICg8S2VybmVsSG9zdD4oZ2xvYmFsWyd3ZWJ2aWV3J10ua2VybmVsSG9zdCkpO1xyXG4gICAgICAgICAgICBpZiAoa2VybmVsSG9zdCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcmcucHJlbG9hZENvbW1hbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICcjIWNvbm5lY3QnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5kZWZhdWx0LmluZm8oYGNvbm5lY3RpbmcgdG8ga2VybmVscyBmcm9tIGV4dGVuc2lvbiBob3N0YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtlcm5lbEluZm9zID0gPEtlcm5lbEluZm9bXT4oYXJnLmtlcm5lbEluZm9zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXJuZWxJbmZvIG9mIGtlcm5lbEluZm9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVVcmkgPSBrZXJuZWxJbmZvLmlzUHJveHkgPyBrZXJuZWxJbmZvLnJlbW90ZVVyaSEgOiBrZXJuZWxJbmZvLnVyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2VybmVsSG9zdC50cnlHZXRDb25uZWN0b3IocmVtb3RlVXJpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlcm5lbEhvc3QuZGVmYXVsdENvbm5lY3Rvci5hZGRSZW1vdGVIb3N0VXJpKHJlbW90ZVVyaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmVuc3VyZU9yVXBkYXRlUHJveHlGb3JLZXJuZWxJbmZvKGtlcm5lbEluZm8sIGtlcm5lbEhvc3Qua2VybmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZyb250RW5kSG9zdC5jcmVhdGVIb3N0KFxyXG4gICAgICAgIGdsb2JhbCxcclxuICAgICAgICAnd2VidmlldycsXHJcbiAgICAgICAgY29uZmlndXJlUmVxdWlyZSxcclxuICAgICAgICBlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQucG9zdEtlcm5lbE1lc3NhZ2UoeyBsb2dFbnRyeTogZW50cnkgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2NhbFRvUmVtb3RlLFxyXG4gICAgICAgIHJlbW90ZVRvTG9jYWwsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXJuZWxJbmZvcyA9ICg8S2VybmVsSG9zdD4oZ2xvYmFsWyd3ZWJ2aWV3J10ua2VybmVsSG9zdCkpLmdldEtlcm5lbEluZm9zKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvc3RVcmkgPSAoPEtlcm5lbEhvc3Q+KGdsb2JhbFsnd2VidmlldyddLmtlcm5lbEhvc3QpKS51cmk7XHJcbiAgICAgICAgICAgIGNvbnRleHQucG9zdEtlcm5lbE1lc3NhZ2UoeyBwcmVsb2FkQ29tbWFuZDogJyMhY29ubmVjdCcsIGtlcm5lbEluZm9zLCBob3N0VXJpLCB3ZWJWaWV3SWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlndXJlUmVxdWlyZShpbnRlcmFjdGl2ZTogYW55KSB7XHJcbiAgICBpZiAoKHR5cGVvZiAocmVxdWlyZSkgIT09IHR5cGVvZiAoRnVuY3Rpb24pKSB8fCAodHlwZW9mICgoPGFueT5yZXF1aXJlKS5jb25maWcpICE9PSB0eXBlb2YgKEZ1bmN0aW9uKSkpIHtcclxuICAgICAgICBsZXQgcmVxdWlyZV9zY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICByZXF1aXJlX3NjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9yZXF1aXJlLmpzLzIuMy42L3JlcXVpcmUubWluLmpzJyk7XHJcbiAgICAgICAgcmVxdWlyZV9zY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xyXG4gICAgICAgIHJlcXVpcmVfc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW50ZXJhY3RpdmUuY29uZmlndXJlUmVxdWlyZSA9IChjb25maW5nOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGFueT5yZXF1aXJlKS5jb25maWcoY29uZmluZykgfHwgcmVxdWlyZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHJlcXVpcmVfc2NyaXB0KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGludGVyYWN0aXZlLmNvbmZpZ3VyZVJlcXVpcmUgPSAoY29uZmluZzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGFueT5yZXF1aXJlKS5jb25maWcoY29uZmluZykgfHwgcmVxdWlyZTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1dWlkLnBhcnNlIiwidXVpZC52NCIsIlN5bWJvbF9vYnNlcnZhYmxlIiwicnhqcy5TdWJqZWN0IiwiY29tbWFuZHNBbmRFdmVudHMuS2VybmVsQ29tbWFuZEVudmVsb3BlIiwiY29tbWFuZHNBbmRFdmVudHMuS2VybmVsRXZlbnRFbnZlbG9wZSIsImNvbW1hbmRzQW5kRXZlbnRzLkNvbW1hbmRTdWNjZWVkZWRUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuQ29tbWFuZEZhaWxlZFR5cGUiLCJyb3V0aW5nc2xpcC5jcmVhdGVLZXJuZWxVcmkiLCJjb21tYW5kc0FuZEV2ZW50cy5SZXF1ZXN0S2VybmVsSW5mb1R5cGUiLCJjb21tYW5kc0FuZEV2ZW50cy5LZXJuZWxJbmZvUHJvZHVjZWRUeXBlIiwicnhqcy5tYXAiLCJjb21tYW5kc0FuZEV2ZW50cy5SZXF1ZXN0Q29tcGxldGlvbnNUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdFNpZ25hdHVyZUhlbHBUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdERpYWdub3N0aWNzVHlwZSIsImNvbW1hbmRzQW5kRXZlbnRzLlJlcXVlc3RIb3ZlclRleHRUeXBlIiwiY29ubmVjdGlvbi5TZXJpYWxpemUiLCJjb21tYW5kc0FuZEV2ZW50cy5EaXNwbGF5ZWRWYWx1ZVByb2R1Y2VkVHlwZSIsImNvbm5lY3Rpb24udXBkYXRlS2VybmVsSW5mbyIsImNvbm5lY3Rpb24uaXNLZXJuZWxFdmVudEVudmVsb3BlIiwicm91dGluZ1NsaXAuY3JlYXRlS2VybmVsVXJpIiwiY29tbWFuZHNBbmRFdmVudHMuUmVxdWVzdElucHV0VHlwZSIsImNvbW1hbmRzQW5kRXZlbnRzLlNlbmRFZGl0YWJsZUNvZGVUeXBlIiwiY29ubmVjdGlvbi5Db25uZWN0b3IiLCJjb25uZWN0aW9uLmlzS2VybmVsQ29tbWFuZEVudmVsb3BlIiwiY29tbWFuZHNBbmRFdmVudHMuS2VybmVsUmVhZHlUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuU3VibWl0Q29kZVR5cGUiLCJjb21tYW5kc0FuZEV2ZW50cy5SZXF1ZXN0VmFsdWVJbmZvc1R5cGUiLCJjb21tYW5kc0FuZEV2ZW50cy5SZXF1ZXN0VmFsdWVUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuU2VuZFZhbHVlVHlwZSIsImNvbm5lY3Rpb24uRGVzZXJpYWxpemUiLCJjb21tYW5kc0FuZEV2ZW50cy5Db2RlU3VibWlzc2lvblJlY2VpdmVkVHlwZSIsImNvbW1hbmRzQW5kRXZlbnRzLlJldHVyblZhbHVlUHJvZHVjZWRUeXBlIiwiY29tbWFuZHNBbmRFdmVudHMuVmFsdWVJbmZvc1Byb2R1Y2VkVHlwZSIsImNvbW1hbmRzQW5kRXZlbnRzLlZhbHVlUHJvZHVjZWRUeXBlIiwiY29ubmVjdGlvbi5LZXJuZWxDb21tYW5kQW5kRXZlbnRTZW5kZXIiLCJjb25uZWN0aW9uLktlcm5lbENvbW1hbmRBbmRFdmVudFJlY2VpdmVyIiwiY29ubmVjdGlvbi5lbnN1cmVPclVwZGF0ZVByb3h5Rm9yS2VybmVsSW5mbyIsInV1aWQiLCJjb25uZWN0aW9uLmlzS2VybmVsRXZlbnRFbnZlbG9wZU1vZGVsIiwiZnJvbnRFbmRIb3N0LmNyZWF0ZUhvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrRUFBa0UsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUUsT0FBTyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLDBJQUEwSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsMkhBQTJILENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBUSxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUc7O0FDQXZxWDtBQVFNLFNBQVUsZUFBZSxDQUFDLFNBQWlCLEVBQUE7SUFFN0MsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxJQUFBLEdBQUcsQ0FBQyxTQUFTLENBQUM7QUFDZCxJQUFBLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDVCxJQUFBLElBQUksV0FBVyxHQUFHLENBQUEsRUFBRyxHQUFHLENBQUMsTUFBTSxDQUFNLEdBQUEsRUFBQSxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdkUsT0FBTyxXQUFXLENBQUM7QUFDdkIsQ0FBQztBQUVLLFNBQVUsd0JBQXdCLENBQUMsU0FBaUIsRUFBQTtJQUV0RCxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLElBQUEsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUNkLElBQUEsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNU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QUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQy9CO0FBQ0EsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN2RCxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztBQUMzQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMxQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BCO0FBQ0EsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2RCxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BCO0FBQ0EsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4RCxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BCO0FBQ0EsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4RCxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BCO0FBQ0E7QUFDQSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztBQUMxRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQztBQUNuQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztBQUM1QixFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztBQUM1QixFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMzQixFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDYjs7QUM3QkEsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDbEMsRUFBRSxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUMxQixFQUFFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ3REO0FBQ0EsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEM7QUFDQSxFQUFFLElB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
