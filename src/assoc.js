
module.exports = key => value => data => {
  let object = {};
  object[key] = value;

  return Object.assign({}, data, object);
};
