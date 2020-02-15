
let showInfo=function(info){
  toastLog(info)
  ui.log.setText(info)
}

module.exports = {
  eat: function () {
    let info = '我在吃  方便面'
    showInfo(info)
  },
  bark: function () {
    let info = '房租还没交, 忧桑'
    showInfo(info)
  },
  goToBed: function () {
    let info = '我要  睡觉了'
    showInfo(info)
  },
  readNum: function () {
    let info = ui.num.text()
    showInfo(info)
  },
}