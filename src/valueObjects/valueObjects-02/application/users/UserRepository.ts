import { User } from "../../domain/User.ts";

export interface UserRepository {
  insert(user: User): void;
  searchByEmail(email: string): User | null;
}
