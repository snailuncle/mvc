'ui';
/**
 * @作者 家
 * @qq 203118908
 * @交流群 812825651
 * @功能 autojs的 MVC框架
 * @备注 ╰つ゛无名小姐‭说:界面文件直接用xml后缀
 */

let config = require('./config') // 配置按钮的点击事件
ui.layoutFile("./layout.xml"); // 加载界面
let registerViewListeningEvent = require('./registerViewListeningEvent') // 注册按钮点击事件
registerViewListeningEvent(config)


