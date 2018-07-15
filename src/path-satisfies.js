const path = require('./path');

module.exports = (fn) => (p) => (e) => (data) => {
  return fn(path(p)(data))(e)
};

