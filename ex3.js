var _ = require('lodash')

var sized = cities => {
  return _.forEach(cities, city => {
    if (city.population > 1) {
      city.size = 'big'
    } else if (city.population > .5) {
      city.size = 'med'
    } else {
      city.size = 'small'
    }
  })
}

module.exports = sized
