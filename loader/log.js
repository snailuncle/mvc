
const process = require('process');

var someAsyncOperation = function (content, callback) {
  var err = "";
  try {
    console.log('这里是 log  loader ================ 开始')
    console.log(content)
    console.log('这里是 log  loader ================ 结束')
  } catch (e) {
    err = e;
  }
  callback(err, content);
};

module.exports = function (content, map, meta) {
  var callback = this.async();
  someAsyncOperation(content, function (err, result) {
    if (err) return callback(err);
    callback(null, result, map, meta);
  });
};


