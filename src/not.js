
module.exports = (fn) => (data) => {
  return !fn(data);
};
