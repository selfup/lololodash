var _ = require("lodash")

var worker = (record) => {
  return _.template('Hello <%= name %> (logins: <%= loginCount %>)')
	({
		name: record.name 
		, loginCount: record.login.length
	})
}

module.exports = worker
