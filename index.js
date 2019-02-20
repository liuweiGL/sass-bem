const path = require("path");
const fs = require("fs");
const srcPath = path.resolve(__dirname, "src");
const result = fs
  .readdirSync(srcPath)
  .map(filename => fs.readFileSync(path.resolve(srcPath, filename)).toString())
  .join("\n");

module.exports = result;
