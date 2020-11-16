// The following is somewhat less efficient compared to
// the lecturer's reduce solution.

// Having already seen that example I opted to write
// a recursive alternative.

// import the votes data
const fs = require('fs')
const path = require('path')

const electionVotes = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/votes.json')))

const tallyVotes = ([vote, ...votes], results = {}) =>
  (!votes.length)
    ? results
    : tallyVotes(
      votes,
      {
        ...results,
        [vote]: results[vote] ? results[vote] + 1 : 1
      }
    )

console.log(tallyVotes(electionVotes))

/* Output

Harry: 4,
Rick: 5,
Ben: 3,
Ashley: 3,
Connor: 1,
Albert: 3,
Michael: 1,
Karen: 2,
Donna: 2,
Dane: 2

*/
