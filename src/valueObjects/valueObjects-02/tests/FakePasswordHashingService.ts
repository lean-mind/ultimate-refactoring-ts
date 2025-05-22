import { PasswordHasingService } from "../application/cryptography/passwordHashingService.ts";

export class FakePasswordHashingService implements PasswordHasingService {
    async hash(plainPassword: string): Promise<string> {
        return `hashed_${plainPassword}`;
    }

    async compare(originalPassword: string, passwordIntent: string): Promise<boolean> {
        return passwordIntent === `hashed_${originalPassword}`;
    }
}