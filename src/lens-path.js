const path = require('./path');
const lens = require('./lens');
const assocPath = require('./assoc-path');

module.exports = (property) => {
  return lens(path(property))(assocPath(property));
};

