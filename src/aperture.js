
module.exports = (length, array) => {
  return (function aperture(memo, array) {
    if (length > array.length) {
      return memo;
    }

    return aperture(memo.concat([array.slice(0, length)]), array.slice(1));
  })([], array)
}
