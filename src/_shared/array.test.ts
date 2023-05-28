import * as array from './array'

describe('array', () => {
  test('excludeNull', () => {
    const input = [null, 1, undefined, 2, null, 3, undefined]
    const expected = [1, 2, 3]
    expect(array.excludeNull(input)).toEqual(expected)
  })

  // Add other tests for the remaining functions in array.ts
})