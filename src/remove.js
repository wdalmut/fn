
module.exports = pos => count => data => {
  return data.slice(0,pos).concat(data.slice(pos+count));
};
