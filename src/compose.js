const identity = (i) => i;

module.exports = (fns) => (data) => {
  return fns.slice().reverse().reduce((value, fn) => {
    return fn(value);
  }, data);
};

