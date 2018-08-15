
module.exports = (from) => (to) => {
  return Array.apply(null, new Array(to-from)).map((_, i) => i+from);
};
