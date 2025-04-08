// triangle.test.js
const triangleType = require('./triangle');

describe('triangleType', () => {
  test('should return Invalid for non-positive sides', () => {
    expect(triangleType(0, 1, 2)).toBe('Invalid');
    expect(triangleType(-1, 2, 3)).toBe('Invalid');
  });

  test('should return Invalid for triangle inequality violations', () => {
    expect(triangleType(1, 2, 3)).toBe('Invalid'); // 1+2 = 3, not strictly greater
    expect(triangleType(10, 1, 1)).toBe('Invalid');
  });

  test('should return Equilateral for all equal sides', () => {
    expect(triangleType(5, 5, 5)).toBe('Equilateral');
  });

  test('should return Isosceles for two equal sides', () => {
    expect(triangleType(5, 5, 3)).toBe('Isosceles');
    expect(triangleType(3, 5, 5)).toBe('Isosceles');
    expect(triangleType(5, 3, 5)).toBe('Isosceles');
  });

  test('should return Scalene for all different sides', () => {
    expect(triangleType(4, 5, 6)).toBe('Scalene');
  });
});