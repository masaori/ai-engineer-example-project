import { all } from './array.all'

describe('all function', () => {
  test('should return true if the predicate function returns true for all elements', () => {
    // Arrange
    const array = [1, 2, 3, 4, 5]
    const predict = (num: number) => num > 0
    // Act
    const result = all(array, predict)
    // Assert
    expect(result).toBe(true)
  })
  test('should return false if the predicate function returns false for at least one element', () => {
    // Arrange
    const array = [1, 2, 3, 4, -5]
    const predict = (num: number) => num > 0
    // Act
    const result = all(array, predict)
    // Assert
    expect(result).toBe(false)
  })
  test('should return true for an empty array', () => {
    // Arrange
    const array: number[] = []
    const predict = (num: number) => num > 0
    // Act
    const result = all(array, predict)
    // Assert
    expect(result).toBe(true)
  })
})