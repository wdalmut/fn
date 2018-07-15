const sort = require('./sort');

module.exports = (fn) => (data) => {
  return sort((a,b) => fn(a)>fn(b))(data);
}
