
module.exports = If => Then => Else => args => {
  return If(args) ? Then(args) : Else(args);
};
