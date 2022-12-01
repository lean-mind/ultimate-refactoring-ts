export class ShoppingCart {
  private price: number = 0

  add (price: number) {
    this.price = price
  }

  calculateTotalPrice () {
    return this.price
  }

  hasDiscount () {
    return this.price >= 100
  }

  numberOfProducts () {
    return 1
  }
}
