import { min } from './array.min';
describe('min', () => {
  it('returns the smallest number in an array', () => {
    expect(min([3, 1, 4])).toBe(1);
  });

  it('returns undefined for an empty array', () => {
    expect(min([])).toBeUndefined();
  });

  it('throws an error if the input is not an array', () => {
    expect(() => min(null)).toThrow();
    expect(() => min(undefined)).toThrow();
    expect(() => min({})).toThrow();
    expect(() => min(123)).toThrow();
  });
});
