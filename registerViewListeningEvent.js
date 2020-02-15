module.exports = function (config) {
  let button = config.button
  for (var k in button) {
    ui[k].on('click', button[k])
  }
}