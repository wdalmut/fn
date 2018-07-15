
module.exports = (fn) => (data) => {
  return data.map(fn);
}
