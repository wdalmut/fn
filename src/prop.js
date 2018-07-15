
module.exports = (prop) => (obj) => {
  return (obj.hasOwnProperty(prop)) ? obj[prop] : null;
};
