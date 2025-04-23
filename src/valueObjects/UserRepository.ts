import { User } from "./User.ts";

export interface UserRepository {
  insert(user: User): void;
}
