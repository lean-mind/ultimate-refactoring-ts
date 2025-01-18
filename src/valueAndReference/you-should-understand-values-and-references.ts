import { SomeType } from './some-type'

describe('You should understand values and references', () => {
  it('because it is fundamental', () => {
    const instance = new SomeType()

    const arg1 = 'bar'
    instance.firstMethod(arg1)
    // expect(arg1).toEqual('???')

    const other = new SomeType()
    other.numbers[0] = 100
    instance.secondMethod(other)
    // expect(other.numbers[0]).toEqual(-1000)
    // expect(other.someField).toEqual('???')

    const another = new SomeType()
    another.numbers[0] = 200
    instance.thirdMethod(another)
    // expect(other.numbers[0]).toEqual(-1000)
    expect(other.numbers[0]).toBeUndefined()
    // expect(other.someField).toEqual('???')
    expect(other.someField).toBeUndefined()
    // expect(another.child).toBeUndefined()
    expect(another.child).toBeUndefined()
  })
})
