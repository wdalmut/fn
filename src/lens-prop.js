const prop = require('./prop');
const lens = require('./lens');
const assoc = require('./assoc');

module.exports = (property) => {
  return lens(prop(property))(assoc(property));
};
