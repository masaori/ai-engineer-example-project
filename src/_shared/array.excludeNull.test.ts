import { excludeNull } from './array.excludeNull';

describe('excludeNull', () => {
  it('should exclude null and undefined values', () => {
    const array = [1, null, 2, undefined, 3];
    const result = excludeNull(array);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should return an empty array when all elements are null or undefined', () => {
    const array = [null, undefined, null, undefined];
    const result = excludeNull(array);
    expect(result).toEqual([]);
  });

  it('should return the same array when there are no null or undefined elements', () => {
    const array = [1, 2, 3];
    const result = excludeNull(array);
    expect(result).toEqual(array);
  });
});