/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const fs = require('fs')
const process = require('process')


var printObj = function (obj) {
  let arr = []
  for (var k in obj) {
    arr.push(k)
  }
  arr.sort()
  console.log(arr)

}

/** @typedef {import("../Compiler")} Compiler */

class LogAllFile {
	/**
	 * @param {Compiler} compiler the compiler
	 * @returns {void}
	 */
  apply (compiler) {
    compiler.hooks.compilation.tap(
      "LogAllFile",
      compilation => {
        compilation.hooks.optimizeChunks.tap(
          {
            name: "LogAllFile"
          },
          chunks => {
            console.log('this is LogAllFile ===========================================开始')
            // console.log(compilation.assets)
            // let chunk=chunks[0]
            // console.table(chunk._modules)
            // printObj(chunk._modules._sortFn)
            let k=0
            for (const module of compilation.modules) {
              console.log(module._source._value)
              console.log(k++)
            }
            console.log('this is LogAllFile ===========================================结束')
          }

        )
        // let assets = compilation.assets;




      }
    );
  }
}
module.exports = LogAllFile;