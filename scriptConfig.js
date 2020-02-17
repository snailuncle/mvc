const path = require('path');
const fs = require('fs');

var entryFile = path.join(__dirname, 'entry.txt');
var entry = fs.readFileSync(entryFile, 'utf8');
entry = entry.replace('\\', '/');

var stat = fs.lstatSync(entry);
var is_direc = stat.isDirectory(); // true || false 判断是不是文件夹

var config = {
  uiMode: true,
  entry: entry,
  isDirectory: is_direc,
  scriptNamePrefix: 'mvc_',
  target: 'node', // web || node
  mvc:true,
  xmlConfigPath:'F:\\myGithub\\mvc\\config.js'
};

module.exports = config;
