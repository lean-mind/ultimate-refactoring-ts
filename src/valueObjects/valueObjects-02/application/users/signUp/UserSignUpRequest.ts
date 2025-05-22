import { UserId } from '../../../domain/types/UserId'
import { ValidationResult } from '../../../domain/types/ValidationResult'

export class UserSignUpRequestArgs {
  public constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly password: string,
    public readonly name: string,
  ) {}
}

export class UserSignUpRequest {
  public static create(
    requestArgs: UserSignUpRequestArgs,
  ): ValidationResult<string, UserSignUpRequest> {
    const errors: string[] = []

    let userId: UserId | null = null

    try {
      userId = UserId.create(requestArgs.id)
    } catch (error) {
      errors.push((error as Error).message)
    }

    try {
      if (
        requestArgs.email === null ||
        requestArgs.email === undefined ||
        requestArgs.email.trim() === ''
      ) {
        throw new Error('EmailRequired')
      }

      if (requestArgs.email.length > 255) {
        throw new Error('EmailTooLong')
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(requestArgs.email)) {
        throw new Error('EmailInvalid')
      }
    } catch (error) {
      errors.push((error as Error).message)
    }

    try {
      if (
        requestArgs.password === null ||
        requestArgs.password === undefined ||
        requestArgs.password.trim() === ''
      ) {
        throw new Error('PasswordRequired')
      }

      if (requestArgs.password.length < 6) {
        throw new Error('PasswordTooShort')
      }

      if (!/[A-Z]/.test(requestArgs.password)) {
        throw new Error('PasswordMustContainUppercase')
      }

      if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\];'/`~]/.test(requestArgs.password)) {
        throw new Error('PasswordMustContainSpecialCharacter')
      }

      if (!/\d/.test(requestArgs.password)) {
        throw new Error('PasswordMustContainNumber')
      }
    } catch (error) {
      errors.push((error as Error).message)
    }

    if (
      requestArgs.name === null ||
      requestArgs.name === undefined ||
      requestArgs.name.trim() === ''
    ) {
      errors.push('NameRequired')
    }

    if (errors.length > 0) {
      return ValidationResult.failure(errors)
    }

    return ValidationResult.success(
      new UserSignUpRequest(
        userId!,
        requestArgs.email,
        requestArgs.password,
        requestArgs.name,
      ),
    )
  }

  private constructor(
    public readonly id: UserId,
    public readonly email: string,
    public readonly password: string,
    public readonly name: string,
  ) {}
}
