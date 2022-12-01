import { InvoiceService } from './InvoiceService'

describe('InvoiceService should', () => {
  it('calculate net amound', () => {
    const invoiceService = new InvoiceService()

    const result = invoiceService.calculateNetAmount('100', '10')
    expect(result).toEqual('90')
  })
})
