// A variation on the lecturers solution and a more
// declarative approach using pipe

const fs = require('fs')
const path = require('path')

const employees = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/employees.json')))

// functional JS helper functions
const { not, filter, pipe, tap, map, average } = require('./helpers/functional-helpers')


// helper callback functions for filtering and mapping
const keyValue = (keyName, value) => (obj) => obj[keyName] === value
const key = (keyName) => (obj) => obj[keyName]

const developers = keyValue('jobTitle', 'developer')
const salary = key('salary')

const averageDeveloperSalary = pipe(
  filter(developers),
  map(salary),
  tap(console.log), // [ 70000, 100000, 65000, 90000 ]
  average,
  Math.floor
)

console.log(averageDeveloperSalary(employees)) // 81250

const averageNonDeveloperSalary = pipe(
  filter(not(developers)),
  map(salary),
  average,
  Math.floor
)

console.log(averageNonDeveloperSalary(employees)) // 56333
