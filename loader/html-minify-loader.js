// src/loaders/html-minify-loader.js
var loaderUtils = require('loader-utils');
var Minimize = require('minimize');

module.exports = function(source) {
    var options = loaderUtils.getOptions(this) || {}; //这里拿到 webpack.config.js 的 loader 配置
    var minimize = new Minimize(options);
    return minimize.parse(source);
};