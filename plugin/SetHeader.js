const path = require("path");
const fs = require("fs");
const scriptConfig = require("../scriptConfig");
const ConcatSource = require("webpack-sources").ConcatSource;

var headerFile = path.join(__dirname, '..', "header.txt");
var header = fs.readFileSync(headerFile, "utf8");
header = header.trim();

var 声明 = "";
// var 声明 = ";\n// 本软件仅可用于合法用途,禁止非法用途, 禁止破解, 禁止黄赌毒!!!\n;";
class SetHeader {
  apply(compiler) {
    // compiler.hooks.shouldEmit.tap('MyPlugin', params => {
    // compiler.hooks.compile.tap("emit", function(compilation, callback) {
    compiler.hooks.emit.tapAsync("SetHeader", (compilation, callback) => {
      compilation.chunks.forEach(chunk => {
        chunk.files.forEach(file => {
          compilation.assets[file] = new ConcatSource(声明 + 声明 + 声明, ";\n;\n", header, ";\n;\n\n", compilation.assets[file]);
          if (scriptConfig.uiMode) {
            console.log('uiMode = true, 需要添加"ui";');
            compilation.assets[file] = new ConcatSource('"ui";', "\n", compilation.assets[file]);
          }
        });
      });
      callback();
    });
  }
}
module.exports = SetHeader;
