const tail = require('./tail');
const ifElse = require('./if-else');

module.exports = function cond(conds) {
  return (args) => {
    if (!conds.length) {
      return undefined;
    }

    let [condition, action] = conds.slice().shift();
    return ifElse(condition)(action)(cond(tail(conds)))(args);
  };
};
