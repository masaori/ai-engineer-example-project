import { User } from './User';

describe('User', () => {
    it('should be a type', () => {
        const user: User = {
            id: '1',
            name: 'Test User',
            email: 'test@test.com',
            isDemo: false
        };
        expect(typeof user).toBe('object');
    });
});