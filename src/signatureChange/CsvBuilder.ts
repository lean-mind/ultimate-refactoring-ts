export class CsvBuilder {
  buildLine (fields: string[]): string {
    return fields.join(',')
  }

  private header (): string {
    return 'Field1, Field2'
  }

  aFileWithLine (line: string): string[] {
    return [this.header(), line]
  }
}
