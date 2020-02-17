
let str = `ui.layout(YFwQwBHRyKar75372746118316099785);`
console.log('替换前str =')
console.log(str)
let 替换语句='$$${$$1}'
str = str.replace(/ui\.layout\(([a-zA-Z]+[0-9]+)\)/gm, `ui.layout($1.replace(/\\{\\{(.*?)\\}\\}/,"${替换语句}"))`)


                                                            //  str = str.replace(/\{\{(.*?)\}\}/, "$${$1}");



console.log('替换后str =')
console.log(str)






