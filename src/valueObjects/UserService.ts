import { User } from "./User.ts";
import { UserRepository } from "./UserRepository.ts";

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(user: User): void {
    if (!user.email.includes('@')) {
      throw new Error('Invalid email')
    }
    this.userRepository.insert(user)
  }
}
