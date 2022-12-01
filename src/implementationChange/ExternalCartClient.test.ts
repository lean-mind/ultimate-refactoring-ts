import { ExternalCartClient } from './ExternalCartClient'

describe('ExternalCartClient should', () => {
  it('format total price message', () => {
    const client = new ExternalCartClient()

    expect(client.formattedTotalPrice(50)).toEqual('Total price is 50 euro')
  })
})
