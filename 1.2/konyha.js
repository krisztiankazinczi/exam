
class Guest {
  constructor(name) {
    this.name = name
  }
}

class Order {
  /**
   * @param {[OrderItem]} orderItems
   */
  constructor() {
    this.orderItems = []
  }

  addOrderItems(OrderItem) {
    this.orderItems.push(OrderItem)
  }

  areOrderItemsOnStock() {
    return this.orderItems.every( oi => oi.areIngredientsEnough())
  }
}

class OrderItem {
  /**
   * @param {[Ingredient]} ingredients
   */
  constructor() {
    this.ingredients = []
  }

  addIngredients(Ingredient) {
    this.ingredients.push(Ingredient)
  }

  areIngredientsEnough() {
    return this.ingredients.every( i => i.isStockEnough())
  }
}

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

  
}

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

class Lacikonyha {
  constructor() {
    this.guests = []
    this.orders = []
  }

  addGuest(Guest) {
    if (this.guests.length === 10) return false
    this.guests.push(Guest)
  }

  leaveGuest(name) {
    const guestIdx = this.guests.findIndex(g => g.name === name)
    if (guestIdx !== -1) this.guests.splice(guestIdx, 1)
  }

  makeOrder(order) {
    if (order.areOrderItemsOnStock()) {
      this.orders.push(order)
    }
  }

}




// const stock = new Stock()
// stock.addItem()



// const ing1 = new Ingredient(2, 10)
// const ing2 = new Ingredient(1, 10)
// const ing3 = new Ingredient(3, 10)
// const ing4 = new Ingredient(4, 10)
// const ing5 = new Ingredient(5, 4)
// console.log(ing3.isStockEnough())


// const oitem1 = new OrderItem()
// oitem1.addIngredients(ing1)
// oitem1.addIngredients(ing5)
// const oitem2 = new OrderItem()
// oitem2.addIngredients(ing1)
// oitem2.addIngredients(ing2)
// const oitem3 = new OrderItem()
// oitem3.addIngredients(ing2)
// oitem3.addIngredients(ing3)
// const oitem4 = new OrderItem()
// oitem4.addIngredients(ing3)
// oitem4.addIngredients(ing4)
// console.log(oitem2.areIngredientsEnough())


// const order1 = new Order()
// order1.addOrderItems(oitem4)
// order1.addOrderItems(oitem2)
// const order2 = new Order()
// order2.addOrderItems(oitem1)
// order2.addOrderItems(oitem2)
// const order3 = new Order()
// order3.addOrderItems(oitem4)
// order3.addOrderItems(oitem3)
// const order4 = new Order()
// order4.addOrderItems(oitem3)
// order4.addOrderItems(oitem1)
// console.log(order.areOrderItemsOnStock())


// const guest1 = new Guest('Dani')
// const guest2 = new Guest('Jani')
// const guest3 = new Guest('Marta')
// const guest4 = new Guest('Angela')