import { User } from './User'

export class UserRepository {
  findAll () {
    return [new User()]
  }
}
