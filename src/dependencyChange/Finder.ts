import type { UserRepository } from './UserRepository'

export class Finder {
  // eslint-disable-next-line no-useless-constructor
  constructor (private repository: UserRepository) {}

  find (query: string) {
    return this.repository.findAll().filter(user => user.profiles.length === 0 || user.profiles.includes(query))
  }
}
