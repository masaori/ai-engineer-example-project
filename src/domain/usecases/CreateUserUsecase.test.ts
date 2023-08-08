import { CreateUserUsecase, UserRepository } from './CreateUserUsecase';
import { User } from '../enitites/User';

describe('CreateUserUsecase', () => {
  let userRepository: UserRepository;
  let usecase: CreateUserUsecase;

  beforeEach(() => {
    userRepository = {
      issueId: jest.fn().mockResolvedValue('1'),
      create: jest.fn().mockResolvedValue(undefined),
    };
    usecase = new CreateUserUsecase(userRepository);
  });

  it('should create a new user', async () => {
    const user: Omit<User, 'id'> = {
      name: 'John',
      email: 'john@example.com',
      isDemo: false,
    };
    await usecase.execute(user);
    expect(userRepository.issueId).toBeCalledTimes(1);
    expect(userRepository.create).toBeCalledWith({ ...user, id: '1' });
  });
});