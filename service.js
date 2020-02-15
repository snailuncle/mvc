module.exports = {
  eat: function () { toastLog('我在吃  方便面') },
  bark: function () { toastLog('房租还没交, 忧桑') },
  goToBed: function () { toastLog('我要  睡觉了') },
  readNum: function () {
    let num = ui.num.text()
    toastLog(num)
  },
}