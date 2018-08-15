const not = require('../src/not');
const identity = require('../src/identity');

module.exports = (paths) => (value) => (data) => {
  return (function a(paths, data) {
    if (Array.isArray(data)) {
      data = data.slice();
    }

    if (typeof data == 'object' && !Array.isArray(data)) {
      data = Object.assign({}, data);
    }

    if (paths.length == 1) {
      data[paths.slice().pop()] = value;
      return data;
    }

    let key = paths.slice().shift();

    if (not(identity)(typeof data[key] == 'object')) {
      data[key] = {};
    }

    data[key] =  a(paths.slice(1), data[key]);
    return data;
  })(paths.slice(), data);
};
