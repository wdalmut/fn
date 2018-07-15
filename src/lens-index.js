const at = require('./at');
const lens = require('./lens');
const pipe = require('./pipe');
const insert = require('./insert');
const remove = require('./remove');

module.exports = (index) => {
  return lens(at(index))(value => pipe([remove(index)(1), insert(index)(value)]));
};
