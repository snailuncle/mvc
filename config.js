let service = require('./service')

module.exports = {
  button:{
    eat: service.eat,
    bark: service.bark,
    goToBed: service.goToBed,
    readNum: service.readNum,
  }
}