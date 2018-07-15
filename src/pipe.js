const identity = (i) => i;

module.exports = (fns) => (data) => {
  return fns.reduce((value, fn) => {
    return fn(value);
  }, data);
};
