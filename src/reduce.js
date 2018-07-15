
module.exports = (fn) => (initValue) => (data) => {
  return data.reduce(fn, initValue);
};
