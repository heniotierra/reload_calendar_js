var path = require("path");
var DIST_DIR = path.resolve(__dirname, "www");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR,
        filename: './bundle.js'
    },
};
module.exports = config;

