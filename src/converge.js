const map = require('./map');
const apply = require('./apply');

module.exports = (fn) => (paths) => (value) => {
  return apply(fn)(map((fn) => fn(value))(paths))
}
