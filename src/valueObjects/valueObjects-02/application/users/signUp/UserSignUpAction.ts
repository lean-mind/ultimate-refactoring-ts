import { User } from "../../../domain/User.ts";
import { UserSignUpRequest } from "./UserSignUpRequest.ts";
import { UserRepository } from "../UserRepository.ts";
import { PasswordHasingService } from "../../cryptography/passwordHashingService.ts";

export class UserSignUpAction {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashingService: PasswordHasingService) { }

  async signUp(request: UserSignUpRequest): Promise<void> {

    const existingUser = this.userRepository.searchByEmail(request.email);
    if (existingUser != null) {
      throw new Error("UserAlreadyExist");
    }

    const hashedPassword = await this.hashingService.hash(request.password);
    const user = new User(
      request.id,
      request.email,
      hashedPassword,
      request.name);

    this.userRepository.insert(user)
  }
}
