// plugins/MyPlugin.js

class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      console.log('Bravo!');
    });
  }
}

module.exports = MyPlugin;