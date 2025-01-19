import { InvoiceService } from './InvoiceService'
import { describe, expect, it } from 'vitest'

describe('InvoiceService should', () => {
  it('calculate net amount', () => {
    const invoiceService = new InvoiceService()

    const result = invoiceService.calculateNetAmount('100', '10')
    expect(result).toEqual('90')
  })
})
