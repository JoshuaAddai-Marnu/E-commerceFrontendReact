"use strict";
const request = require('request');
function search(query) {
    if (!query || !query.length) {
        return Promise.resolve([]);
    }
    const url = `https://packagesearch.azurewebsites.net/Search/?searchTerm=${query}`;
    return new Promise((resolve, reject) => {
        request(url, (err, resp, body) => {
            if (err) {
                reject(`ERROR: ${JSON.stringify(err)}`);
                return;
            }
            let results = JSON.parse(body || '');
            console.log('Search Results: ', results);
            if (!Array.isArray(results)) {
                reject('Response in invalid format');
                return;
            }
            let packages = results.map(x => x.PackageDetails), distinctPackages = distinct(packages, x => x.Name);
            resolve(distinctPackages);
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = search;
function distinct(array, identifier) {
    let distinct = [], unique = {};
    array.forEach(i => {
        let id = identifier(i);
        if (!unique[id]) {
            distinct.push(i);
        }
        unique[id] = true;
    });
    return distinct;
}
//# sourceMappingURL=search.js.map