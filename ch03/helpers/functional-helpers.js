// Monad
const Box = (x) => ({
  map: (fn) => Box(fn(x)),
  logResult: () => (console.log(x), Box(x)),
  fold: (fn) => fn(x)
})

// pipe composition
const pipe = (...fns) =>
  value => fns.reduce((value, fn) => fn(value), value)

const tap = fn => x => (fn(x), x)

/**
 * not:
 * @param {Function} fn callback
 * @return {Function} returns an anonymous function
 * which when invoked, invokes the callback returning !not result
 */
const not = fn => (...args) => !fn(...args)

/**
 * curried filter:
 * @param {Function} fn callback
 * @returns {Function} returns an anonymous function
 */
const filter = fn => arr => arr.filter(fn)

/**
 * curried map:
 * @param {Function} fn callback
 * @returns {Function} returns an anonymous function
 */
const map = fn => arr => arr.map(fn)

const add = (x, y) => x + y

const average = arr => arr.reduce(add) / arr.length

module.exports = { Box, pipe, tap, not, filter, map, average }
