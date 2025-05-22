import { UserRepository } from "../../application/users/UserRepository.ts";
import { UserId } from "../../domain/types/UserId.ts";
import { User } from "../../domain/User.ts";

class UserPersistenceModel {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly password: string,
    public readonly name: string
  ) { }
}

export class InMemoryUserRepository implements UserRepository {

  private users: UserPersistenceModel[] = [];

  insert(user: User): void {
    const persistenceModel = this.buildPersistenceModel(user);
    this.users.push(persistenceModel);
  }

  searchByEmail(email: string): User | null {
    const found = this.users.find(user => user.email === email);
    if (!found) return null;

    return this.buildDomainModel(found);
  }

  private buildPersistenceModel(user: User): UserPersistenceModel {
    return new UserPersistenceModel(
      user.id.value,
      user.email,
      user.password,
      user.name
    );
  }

  private buildDomainModel(persistenceModel: UserPersistenceModel): User {

    const userId = UserId.create(persistenceModel.id);

    return new User(
      userId,
      persistenceModel.email,
      persistenceModel.password,
      persistenceModel.name
    );
  }
}
