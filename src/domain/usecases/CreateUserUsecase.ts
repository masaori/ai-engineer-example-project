import { User } from "../enitites/User";

export interface UserRepository {
  issueId(): Promise<string>
  create(user: User): Promise<void>
}

export class CreateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: Omit<User, 'id'>): Promise<void> {
    const id = await this.userRepository.issueId()
    await this.userRepository.create({ ...user, id })
  }
}