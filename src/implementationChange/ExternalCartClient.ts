import { ShoppingCart } from './ShoppingCart'

export class ExternalCartClient {
  formattedTotalPrice (price: number): string {
    const shoppingCart: ShoppingCart = new ShoppingCart()
    shoppingCart.add(price)
    return `Total price is ${shoppingCart.calculateTotalPrice()} euro`
  }
}
