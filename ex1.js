var _ = require('lodash')

var worker = users => {
  return _.where(users, { active: true})
}

module.exports = worker
