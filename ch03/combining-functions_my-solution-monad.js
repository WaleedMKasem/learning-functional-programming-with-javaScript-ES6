// A variation on the lecturers solution and a more
// declarative approach using Monads

const fs = require('fs')
const path = require('path')

const employees = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/employees.json')))

// functional JS helper functions
const { Box, not, filter, map, average } = require('./helpers/functional-helpers')


// helper callback functions for filtering and mapping
const keyValue = (keyName, value) => (obj) => obj[keyName] === value
const key = (keyName) => (obj) => obj[keyName]

const developers = keyValue('jobTitle', 'developer')
const salary = key('salary')


const averageDeveloperSalary = Box(employees)
  .map(filter(developers))
  .map(map(salary))
  .map(average)
  .fold(Math.floor)

console.log(averageDeveloperSalary) // 81250

const averageNonDeveloperSalary = Box(employees)
  .map(filter(not(developers)))
  .map(map(salary))
  .logResult() // [ 75000, 54000, 40000 ]
  .map(average)
  .fold(Math.floor)

console.log(averageNonDeveloperSalary) // 56333
