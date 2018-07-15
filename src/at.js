
module.exports = (pos) => (data) => {
  return ((pos >= 0) ? data.slice(pos, pos+1) : data.slice(pos)).shift();
};
