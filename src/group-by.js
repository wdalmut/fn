const assoc = require('../src/assoc');

module.exports = (fn) => (list) => {
  return list.reduce((memo, item) => {
    let groupKey = fn(item);

    if (!memo[groupKey]) {
      return assoc(groupKey)([item])(memo);
    }

    return assoc(groupKey)(memo[groupKey].concat(item))(memo);
  }, {});
};
