import { Resolver, Query, Authorized, Mutation, Root } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";

import User from "../../entities/User";

@Resolver(of => User)
export class TestResolver {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  @Query(returns => [User!]!)
  async users(): Promise<User[]> {
    return await this.userRepository.createQueryBuilder().getMany();
  }

  @Authorized()
  @Mutation(returns => User)
  addUser(@Root() userInput: User): User {
    return this.userRepository.create(userInput);
  }
}
