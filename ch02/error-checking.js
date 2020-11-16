// an example of error checking using higher order functions
// and following the single responsibility principle

const divide = (x, y) => x / y

// error checking moved to a higher order function
// @param {Function} callback function
// @return {Function} returns an error checking wrapper around
// our callback function
const notByZero = func =>
  (x, y) => {
    if (y === 0) {
      throw Error('Error: Division by zero')
    }
    return func(x, y)
  }

const safeDivide = notByZero(divide)

console.log(safeDivide(8, 2))
console.log(safeDivide(10, 0))
