
module.exports = (paths) => (data) => {
  return paths.reduce((memo, path) => {
    return memo && memo.hasOwnProperty(path) ? memo[path] : undefined;
  }, data);
};
