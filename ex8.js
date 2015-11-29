var _ = require('lodash')

var analyze = eplyIncs => {
  let average = _.reduce(eplyIncs, (sum, employeeIncome) => {
    return sum += employeeIncome.income
  }, 0) / eplyIncs.length

  let underperform = _.filter(eplyIncs , (employeeIncome) => {
    return employeeIncome.income <= average
  })

  let overperform = _.filter(eplyIncs, (employeeIncome) => {
    return employeeIncome.income > average
  })

  return {
    average: average,
    underperform: _.sortBy(underperform, 'income'),
    overperform: _.sortBy(overperform, 'income')
  }

}

module.exports = analyze