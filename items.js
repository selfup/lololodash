var _ = require("lodash");

var items = [
  { 'article': 41,   'quantity': 24 },
  { 'article': 2323, 'quantity': 2  },
  { 'article': 655,  'quantity': 23 }
]

var sorting = function(items) {
  return _.sortBy(items, function(item) {
    return -item.quantity;
  });
};

module.exports = sorting;
