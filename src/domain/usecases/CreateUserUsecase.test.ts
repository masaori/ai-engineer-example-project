import { UserRepository, CreateUserUsecase } from './CreateUserUsecase';
import { User } from '../enitites/User';

describe('CreateUserUsecase', () => {
  let userRepository: UserRepository;
  let createUserUsecase: CreateUserUsecase;

  beforeEach(() => {
    userRepository = {
      issueId: jest.fn().mockResolvedValue('1'),
      create: jest.fn().mockResolvedValue(undefined)
    };
    createUserUsecase = new CreateUserUsecase(userRepository);
  });

  it('should create a user', async () => {
    const user: Omit<User, 'id'> = {
      name: 'Alice',
      email: 'alice@example.com',
      isDemo: false
    };

    await createUserUsecase.execute(user);

    expect(userRepository.issueId).toHaveBeenCalled();
    expect(userRepository.create).toHaveBeenCalledWith({ ...user, id: '1' });
  });
});