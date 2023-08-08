import { CreateUserUsecase, UserRepository } from './CreateUserUsecase';

const mockUserRepository: UserRepository = {
    issueId: jest.fn().mockResolvedValue('1'),
    create: jest.fn().mockImplementation(user => {
        if (!user.email.includes('@')) {
            throw new Error('Invalid email');
        }
        return Promise.resolve();
    })
};

describe('CreateUserUsecase', () => {
    test('should create a user successfully', async () => {
        const usecase = new CreateUserUsecase(mockUserRepository);
        const result = await usecase.execute({ name: 'Test User', email: 'test@example.com', isDemo: false });
        expect(result).toBeUndefined();
        expect(mockUserRepository.create).toHaveBeenCalledWith({ name: 'Test User', email: 'test@example.com', isDemo: false, id: '1' });
    });

    test('should throw an error when email is invalid', async () => {
        const usecase = new CreateUserUsecase(mockUserRepository);
        await expect(usecase.execute({ name: 'Test User', email: 'invalid email', isDemo: false })).rejects.toThrow('Invalid email');
    });
});