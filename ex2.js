var _ = require('lodash')

var sorted = items => {
  return _.sortBy(items, 'quantity').reverse()
}

module.exports = sorted
