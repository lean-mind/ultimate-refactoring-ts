import { UserRepository } from './UserRepository'
import { Finder } from './Finder'
import { SpecificFinder } from './SpecificFinder'

describe('Finder should', () => {
  it('find_users_by_querying_profile() throws Exception {', () => {
    const repository: UserRepository = new UserRepository()
    const finder: Finder = new Finder(repository)

    expect(finder.find('programmer'))
      .toHaveLength(1)
  })

  it('get_users_with_empty_profile() throws Exception {', () => {
    const repository: UserRepository = new UserRepository()
    const finder: Finder = new Finder(repository)

    expect(
      finder.find(''))
      .toHaveLength(1)
  })

  it('avoid_duplicates() throws Exception {', () => {
    const repository: UserRepository = new UserRepository()
    const finder: SpecificFinder = new SpecificFinder(repository)

    expect(
      finder.findUnique('').size)
      .toBe(1)
  })
})
