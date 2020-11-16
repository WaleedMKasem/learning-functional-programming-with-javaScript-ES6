// Simple task set to come up with our own map function.
// With the addition of an optional context parameter, my solution
// loosely follows Javascript's implementation.

function map (arr, fn, context) {
  const result = []
  const bound = context ? fn.bind(context) : fn

  for (let i = 0, len = arr.length; i < len; i++) {
    result.push(bound(arr[i], i, arr))
  }

  return result
}

const square = (num) => num * num

console.log(map([1, 2, 3, 4], square)) // [1, 4, 9, 16]

const names = ['Bob', 'Sue', 'Rita']

console.log(
  map(
    [1, 2, 3],
    function (num, i) {
      return `${num}: ${this[i]}`
    },
    names
  )
) // ['1: Bob', '2: Sue', '3: Rita']
