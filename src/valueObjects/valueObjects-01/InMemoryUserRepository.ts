import { UserRepository } from './UserRepository.ts'
import { User } from './User.ts'

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];
  insert(user: User): void {
    if (user.password.length < 6) {
      throw new Error("Password too short");
    }
    if (this.users.some(({ email }) => email === user.email)) {
      throw new Error("User already exists");
    }
    this.users.push(user);
  }
}
