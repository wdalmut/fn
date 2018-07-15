const eq = require('./eq');
const pathSatisfies = require('./path-satisfies');

module.exports = (givenPath) => (valueToEqual) => (object) => {
  return pathSatisfies(eq)(givenPath)(valueToEqual)(object);
};
