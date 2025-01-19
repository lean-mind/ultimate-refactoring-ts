import { Role } from './Role'
import { Player } from './Player'
import { describe, expect, it } from 'vitest'

describe('Player should', () => {
  it('Has the given score', () => {
    const player = Player.createExistingPlayer(
      Role.Warrior,
      'Garrosh Hellscream',
      10,
    )

    expect(player.getScore()).toBe(10)
  })

  it('Has an empty score', () => {
    const player = Player.createNewPlayer(
      Role.Dragon,
      'Onyxia - Ruler of the Black Dragonflight',
    )

    expect(player.getScore()).toBe(0)
  })

  it('Increase score when Dragon plays', () => {
    const player = Player.createNewPlayer(
      Role.Dragon,
      'Onyxia - Ruler of the Black Dragonflight',
    )

    player.play()

    expect(player.getScore()).toBe(20)
  })

  it('Decrease score when no Dragon role plays', () => {
    const player = Player.createExistingPlayer(
      Role.Warrior,
      'Garrosh Hellscream',
      10,
    )

    player.play()

    expect(player.getScore()).toBe(0)
  })
})
