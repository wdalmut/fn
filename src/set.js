
module.exports = lens => value => obj => {
  return lens.set(value)(obj);
}

