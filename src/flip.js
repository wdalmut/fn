
module.exports = (fn) => function() {
  return fn.apply(fn, Array.from(arguments).slice().reverse());
}
