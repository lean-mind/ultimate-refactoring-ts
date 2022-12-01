import { Role } from './Role'

export class Player {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private role: Role,
    // @ts-ignore
    private name: string,
    private score: number) {
  }

  static createNewPlayer (
    role: Role,
    name: string
  ): Player {
    return new Player(
      role,
      name,
      0
    )
  }

  static createExistingPlayer (
    role: Role,
    name: string,
    score: number
  ): Player {
    return new Player(
      role,
      name,
      score
    )
  }

  play () {
    if (this.role === Role.Dragon) {
      this.score += 20
    } else {
      this.score = this.score - 10
    }
  }

  getScore () {
    return this.score
  }
}
