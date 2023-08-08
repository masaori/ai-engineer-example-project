import { UserRepository } from './CreateUserUsecase';
import { CreateUserUsecase } from './CreateUserUsecase';

describe('CreateUserUsecase', () => {
    let userRepository: UserRepository;
    let createUserUsecase: CreateUserUsecase;

    beforeEach(() => {
        userRepository = {
            issueId: jest.fn().mockResolvedValue('test-id'),
            create: jest.fn().mockResolvedValue(undefined)
        };
        createUserUsecase = new CreateUserUsecase(userRepository);
    });

    it('should create user with issued id', async () => {
        const user = { name: 'test', email: 'test@example.com', isDemo: false };
        await createUserUsecase.execute(user);
        expect(userRepository.issueId).toBeCalledTimes(1);
        expect(userRepository.create).toBeCalledWith({ ...user, id: 'test-id' });
    });
});