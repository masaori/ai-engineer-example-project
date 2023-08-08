import { CreateUserUsecase } from './CreateUserUsecase';

describe('CreateUserUsecase', () => {
    let createUserUsecase: CreateUserUsecase;

    beforeEach(() => {
        createUserUsecase = new CreateUserUsecase();
    });

    test('successfully creates a user', () => {
        const user = createUserUsecase.execute({ username: 'testuser', password: 'testpass' });
        expect(user).toHaveProperty('username', 'testuser');
        expect(user).toHaveProperty('password', 'testpass');
    });
});