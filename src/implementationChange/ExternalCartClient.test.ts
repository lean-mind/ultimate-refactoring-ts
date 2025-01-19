import { ExternalCartClient } from './ExternalCartClient'
import { describe, expect, it } from 'vitest'

describe('ExternalCartClient should', () => {
  it('format total price message', () => {
    const client = new ExternalCartClient()

    expect(client.formattedTotalPrice(50)).toEqual('Total price is 50 euro')
  })
})
