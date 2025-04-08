// triangle.js
function triangleType(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
      return 'Invalid';
    }
  
    if (a + b <= c || a + c <= b || b + c <= a) {
      return 'Invalid';
    }
  
    if (a === b && b === c) {
      return 'Equilateral';
    } else if (a === b || a === c || b === c) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  }
  
  module.exports = triangleType;