import { Finder } from './Finder'
import { User } from './User'

export class SpecificFinder extends Finder {
  findUnique (query: string): Set<User> {
    return new Set(this.find(query))
  }
}
