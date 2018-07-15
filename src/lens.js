
module.exports = getter => setter => {
  return {
    get: obj => getter(obj),
    set: val => obj => setter(val)(obj),
  }
};
