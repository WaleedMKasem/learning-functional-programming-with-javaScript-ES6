// A variation on the lecturers solution using chaining

const fs = require('fs')
const path = require('path')

const employees = JSON.parse(fs.readFileSync(path.join(__dirname, '/data/employees.json')))


const average = arr => arr.reduce((x, y) => x + y) / arr.length

const developerSalaries = employees
  .filter(({ jobTitle }) => jobTitle === 'developer')
  .map(({ salary }) => salary)

console.log(Math.floor(average(developerSalaries))) // 81250

const nonDeveloperSalaries = employees
  .filter(({ jobTitle }) => jobTitle !== 'developer')
  .map(({ salary }) => salary)

console.log(Math.floor(average(nonDeveloperSalaries))) // 56333
