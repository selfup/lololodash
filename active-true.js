var _ = require("lodash");

var duty = [
  { id: 22, username: "martin", active: true},
  { id: 23, username: "max",    active: false},
  { id: 24, username: "linda",  active: false}
]

var worker = function(duty) {
  return _.where(duty, {active: true});
};

module.exports = worker;
