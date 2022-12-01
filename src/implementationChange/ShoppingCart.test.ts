import { ShoppingCart } from './ShoppingCart'

describe('Shopping Cart should', () => {
  it('counts number of products', () => {
    const shoppingCart: ShoppingCart = new ShoppingCart()
    shoppingCart.add(10)

    expect(shoppingCart.numberOfProducts()).toEqual(1)
  })

  it('calculates total price', () => {
    const shoppingCart: ShoppingCart = new ShoppingCart()
    shoppingCart.add(10)

    expect(shoppingCart.calculateTotalPrice()).toEqual(10)
  })

  it('knows when is discount applicable', () => {
    const shoppingCart: ShoppingCart = new ShoppingCart()
    shoppingCart.add(100)

    expect(shoppingCart.hasDiscount()).toBeTruthy()
  })

  it('knows when is discount applicable', () => {
    const shoppingCart: ShoppingCart = new ShoppingCart()
    shoppingCart.add(99)

    expect(shoppingCart.hasDiscount()).toBeFalsy()
  })
})
