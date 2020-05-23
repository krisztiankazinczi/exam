const Guest = require('./Guest')
const Stock = require('./Stock')
const Ingredient = require('./Ingredient')
const OrderItem = require('./OrderItem')
const Order = require('./Order')

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

  makeOrder(order, name) {
    const isGuesthaveSeat = this.guests.find(g => g.name === name)
    if (isGuesthaveSeat) {
      if (order.areOrderItemsOnStock()) {
        this.orders.push(order)
        order.decreaseStock()
        return 'full order possible'
      }
      else {
        if (!order.isAnyOrderItemsOnStock()) {
          return 'everything run out'
        }
        this.orders.push(order.filterOrderItems(order))
        order.decreaseStock()
        return 'order partly possible'
      }
    }
    
  }

}