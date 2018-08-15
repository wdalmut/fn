
module.exports = (fn) => (a, b) => {
  return fn(a) > fn(b)
};
