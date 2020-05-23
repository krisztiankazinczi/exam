class Stock {
  constructor(ingName, onStock) {
    this.stock = [] // {ingName, onStock}
  }

  addItem(name, onStock) {
    this.stock.push({name, onStock})
  }

  isStockEnough(name, neededAmount) {
    const idx = this.stock.findIndex(s => s.name === name)
    return this.stock[idx].onStock > neededAmount
  }

  decreaseStock(ingName, amount) {
    const idx = this.stock.findIndex(s => s.name === ingName)
    if (idx) {
      this.stock[idx].onStock -= amount
    }
  }
}

module.exports = Stock