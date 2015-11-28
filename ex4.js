var _ = require('lodash');
var temped = function(cities) {
  var final = { hot: [],
	            warm: []
	           };

  function greatest(temp) {
	  return temp > 19;
	};

  _.forEach(cities, function(values, city) {
	  if (_.every(values, greatest)) {
		final.hot.push(city);
	  } else if (_.some(values, greatest)) {
		final.warm.push(city);
	  };
    });
  return final;
};

module.exports = temped;