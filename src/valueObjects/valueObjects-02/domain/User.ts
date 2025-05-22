import { UserId } from "./types/UserId.ts";
import { Email } from "./types/Email.ts";

export class User {
  constructor(
    public readonly id: UserId,
    public readonly email: Email,
    public readonly password: string,
    public readonly name: string,
  ) { }
}