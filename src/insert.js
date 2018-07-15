
module.exports = (pos) => (value) => (data) => {
  return data.slice(0, pos).concat([value]).concat(data.slice(pos));
};
