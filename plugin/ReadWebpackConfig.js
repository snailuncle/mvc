// plugins/MyPlugin.js

const process=require('process')

class ReadWebpackConfig {
  apply (compiler) {
const process=require('process')
    console.log('this is ReadWebpackConfig ======================  开始')
    // 获取设置的loader列表
    console.log('compiler.options.loaders =')
    console.log(compiler.options.loaders)
    // 获取context
    console.log('compiler.options.context =')
    console.log(compiler.options.context)
    // 获取插件列表
    console.log('compiler.options.plugins =')
    console.log(compiler.options.plugins)
    console.log('this is ReadWebpackConfig ======================  结束')


  }
}

module.exports = ReadWebpackConfig;

