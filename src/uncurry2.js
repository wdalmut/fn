
module.exports = (fn) => {
  return (a,b) => fn(a)(b);
}
