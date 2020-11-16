// My solution to the anagram challenge

const words = require('an-array-of-english-words')

// strip char at given index e.g. removeCharAt('table', 2) => 'tale'
const removeCharAt = (word, i) => `${word.slice(0, i)}${word.slice(i + 1)}`

// Recursively call subtracting a matching letter from the word.
// If a match isn't found return the remaining characters
function subtractMatches (word, [letter, ...restOfLetters]) {
  const found = word.indexOf(letter)

  return found < 0
    ? word
    : subtractMatches(removeCharAt(word, found), restOfLetters)
}

function isAnagram (wordA) {
  return function (wordB) {
    // exclude words of different lengths
    return wordA.length !== wordB.length
      ? false
        // if subtractMatches returns an empty string we have an anagram
      : subtractMatches(wordA, wordB).length === 0
  }
}

function findAnagrams (word, allWords) {
  return allWords
    .filter(isAnagram(word))
    .filter(anagram => anagram !== word)
}

console.log(findAnagrams('cinema', words))

// output: ['iceman', 'anemic']
