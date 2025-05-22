export class UserId {
  public readonly value: string

  private constructor(value: string) {
    this.value = value
  }

  public static create(value: string): UserId {
    if (value === null || value === undefined || value.trim() === '') {
      throw new Error('UserIdRequired')
    }

    if (!UserId.isValidGuid(value)) {
      throw new Error('UserIdInvalid')
    }

    return new UserId(value)
  }

  public equals(other: UserId): boolean {
    return this.value === other.value
  }

  private static isValidGuid(guid: string): boolean {
    // GUID/UUID v4 regex
    const guidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    return guidRegex.test(guid)
  }
}
