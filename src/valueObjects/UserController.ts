import { User } from "./User.ts";
import { UserService } from "./UserService.ts";

export interface UserSignUpResponse {
  status: number
  message: string
}

export class UserController {
  constructor(private readonly userService: UserService) {}

  signUp(user: User): UserSignUpResponse {
    try {
      this.userService.createUser(user)
      return {
        status: 200,
        message: `User registered successfully.`,
      };
    } catch (error) {
      return {
        status: 500,
        message: `Error: ${(error as Error).message}`,
      }
    }
  }
}
