module.exports = (fn) => (data) => {
  return data.filter(fn);
}
