var _ = require('lodash')

var chained = words => {
  return _.chain(words)
    .map( word => {
	  return (word + 'Chained').toUpperCase()
  })
  .sort()
}

module.exports = chained