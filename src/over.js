
module.exports = lens => fn => obj => {
  return lens.set(fn(lens.get(obj)))(obj);
}

