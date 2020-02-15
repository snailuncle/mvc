'ui';
/**
 * @作者 家
 * @qq 203118908
 * @交流群 812825651
 * @功能 autojs的 MVC框架
 * @备注 哈哈哈
 * @备注2 ui编写使用的是xml格式, 所以我们自定义一个后缀: xml.js
 * @备注2 为了让vscode可以识别这个后缀, 利于格式化代码, 我们需要在当前根目录下的.vscode文件夹的settings.json文件中添加我们的自定义关联文件类型
 * @备注2  "files.associations": {
 * @备注2  "*.xml.js": "xml"
 * @备注2  }
 * @备注2  虽然是.xml.js, 但是我们最后运行代码的时候, 还是要在第一行加上: module.exports =, 编写界面的时候, 我们先将他注释就可以了: <!-- module.exports = -->, 运行的时候再取消注释
 */




let config = require('./config') // 配置按钮的点击事件
let layout = require('./layout.xml') // 导入界面
let registerViewListeningEvent = require('./registerViewListeningEvent') // 注册按钮点击事件


ui.layout(layout)
registerViewListeningEvent(config)
