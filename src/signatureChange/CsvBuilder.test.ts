import { CsvBuilder } from './CsvBuilder'
import { describe, expect, it } from 'vitest'

describe('CsvBuilder should', () => {
  const builder = new CsvBuilder()

  it('build csv lines', () => {
    const lines = builder.aFileWithLine(builder.buildLine(['a', 'b']))
    expect(lines[0]).toMatch(/Field1, Field2/i)
    expect(lines[1]).toMatch(/a,b/)
  })

  it('build csv lines with more fields than headers', () => {
    const lines = builder.aFileWithLine(builder.buildLine(['a', 'b', 'c']))
    expect(lines[1]).toMatch(/a,b,c/i)
  })
})
