import { CreateUserUsecase, UserRepository } from './CreateUserUsecase';

describe('CreateUserUsecase', () => {
  let userRepository: UserRepository;
  let createUserUsecase: CreateUserUsecase;

  beforeEach(() => {
    userRepository = { issueId: jest.fn(), create: jest.fn() };
    createUserUsecase = new CreateUserUsecase(userRepository);
  });

  test('execute method should call issueId and create methods of userRepository', async () => {
    const user = { name: 'Test User', email: 'test@example.com' };
    await createUserUsecase.execute(user);
    expect(userRepository.issueId).toHaveBeenCalled();
    expect(userRepository.create).toHaveBeenCalled();
  });
});