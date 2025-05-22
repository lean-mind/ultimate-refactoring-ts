export interface PasswordHasingService {
    hash(plainPassword: string): Promise<string>;
    compare(originalPassword: string, passwordIntent: string): Promise<boolean>;
}