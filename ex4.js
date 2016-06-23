var _ = require('lodash')
var temped = cities => {
  let final = { hot: []
	              , warm: []
	           }

  let greatest = (temp) => {
	  return temp > 19
	}

  _.forEach(cities, (values, city) => {
	  if (_.every(values, greatest)) {
		final.hot.push(city)
	  } else if (_.some(values, greatest)) {
		final.warm.push(city)
	  }
  })
  return final
}

module.exports = temped