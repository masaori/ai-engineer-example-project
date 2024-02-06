import { User } from './User';

describe('User', () => {
  test('should correctly assign properties', () => {
    const mockUser: User = {
      id: '123',
      name: 'Test User',
      email: 'test@example.com',
      isDemo: true
    };

    expect(mockUser.id).toBe('123');
    expect(mockUser.name).toBe('Test User');
    expect(mockUser.email).toBe('test@example.com');
    expect(mockUser.isDemo).toBe(true);
  });
});