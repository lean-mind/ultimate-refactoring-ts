import { God } from './God'

describe('God should', () => {
  it('add numbers', () => {
    expect(God.add(2, 2)).toBe(4)
  })

  it('subtract numbers', () => {
    const god = new God()
    expect(god.subtract(2, 2)).toBe(0)
  })

  it('say hello', () => {
    new God().sayHello()
  })

  it('say bye', () => {
    new God().sayBye()
  })
})
