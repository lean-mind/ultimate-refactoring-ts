import { ShoppingCart } from './ShoppingCart'

export function main() {
  const shoppingCart: ShoppingCart = new ShoppingCart()
  shoppingCart.add(10)
  console.log(`shoppingCart.numberOfProducts() = ${shoppingCart.numberOfProducts()}`)
  console.log(`shoppingCart.calculateTotalPrice() = ${shoppingCart.calculateTotalPrice()}`)
  console.log(`shoppingCart.hasDiscount() = ${shoppingCart.hasDiscount()}`)
}
