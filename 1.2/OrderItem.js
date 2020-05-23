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

  isAnyIngredientsAvailable() {
    return this.ingredients.some( i => i.isStockEnough())
  }

  filterIngredients() {
    return this.ingredients.filter( i => i.isStockEnough())
  }

  decreaseStock() {
    const enoughIngredientItems =  this.ingredients.filter( i => i.isStockEnough())
    enoughIngredientItems.forEach(item => item.decreaseStock())
  }
}

module.exports = OrderItem