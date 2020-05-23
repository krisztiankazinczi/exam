const Stock = require('./Stock')

class Ingredient {
  /**
   * 
   * @param {number} unit 
   * @param {number} stock 
   */
  constructor(name, unit, stock) {
    this.name = name
    this.unit = unit
    this.stock = stock
  }

  isStockEnough() {
    return this.stock.isStockEnough(this.name, this.unit)
  }

  decreaseStock() {
    return this.stock.decreaseStock(this.name, this.unit)
  }

  
}

module.exports = Ingredient