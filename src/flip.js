
module.exports = (fn) => () => {
  return fn.apply(fn, arguments.flip().reverse());
}
