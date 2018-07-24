
module.exports = (fn) => (args) => {
  return fn.apply(fn, args);
}
