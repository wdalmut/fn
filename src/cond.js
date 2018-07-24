const curry2 = require('../src/curry2');
const ifElse = require('../src/if-else');

module.exports = function cond(conds) {
  return (args) => {
    if (!conds.length) {
      return undefined;
    }

    let condition = conds.slice().shift();
    return ifElse(condition[0])(condition[1])(cond(conds.slice(1)))(args);
  };
};
