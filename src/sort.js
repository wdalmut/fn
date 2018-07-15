
module.exports = (fn) => (data) => {
  return data.sort(fn);
};
