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

  isAnyOrderItemsOnStock() {
    return this.orderItems.some( oi => oi.isAnyIngredientsAvailable())
  }

  filterOrderItems() {
    return this.orderItems.filter( oi => oi.filterIngredients())
  }

  decreaseStock() {
    return this.orderItems.forEach( oi => oi.decreaseStock())
  }

}

module.exports = Order