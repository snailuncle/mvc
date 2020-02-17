class CopyrightWebpackPlugin {
  // 接收参数
  constructor(options){
      console.log(options)
  }

  //complier是webpack的实例
  apply(compiler){
      // emit生成资源文件到输出目录之前的生命周期  是个异步的钩子
      compiler.hooks.emit.tapAsync(
          // 第一个参数为类的名称  
          'CopyrightWebpackPlugin',
          // compilation为资源的api
          // compilation.assets是一个资源列表   打印出来为 文件输出到目录之前的列表
          (compilation, cb) => {
              console.log(compilation.assets)
              compilation.assets['readme.txt'] = {
                  // 文件内容
                  source: function(){
                      return 'hello webpack';
                  },
                  // 文件大小
                  size: function(){
                      return 20;
                  }
              };
              // 完成之后进行回调  告诉compilation结束
              cb();
          }
      );

      // 当使用同步钩子的写法  不需要使用cb回调
      compiler.hooks.compile.tap(
          'CopyrightWebpackPlugin',
          compilation => {
              console.log('同步钩子')
          }
      )

  }
}

module.exports = CopyrightWebpackPlugin;