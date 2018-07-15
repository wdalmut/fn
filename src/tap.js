
module.exports = fn => value => {
  fn(value);
  return value;
};
