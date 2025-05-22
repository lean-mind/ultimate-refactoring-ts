export class ValidationResult<E, T> {
    public readonly validationErrors: E[];
    public readonly value?: T;

    private constructor(errors: E[], value?: T) {
        this.validationErrors = errors;
        this.value = value;
    }

    static success<E, T>(value: T): ValidationResult<E, T> {
        return new ValidationResult<E, T>([], value);
    }

    static failure<E, T>(validationErrors: E[]): ValidationResult<E, T> {
        return new ValidationResult<E, T>(validationErrors);
    }

    isSuccess(): boolean {
        return this.validationErrors.length === 0 && this.value !== undefined;
    }

    isFailure(): boolean {
        return this.validationErrors.length > 0;
    }

    serializeErrors(): string {
        return `[${this.validationErrors.join(', ')}]`;
    }
}