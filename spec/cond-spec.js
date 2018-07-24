const cond = require('../src/cond');
const T = require('../src/t');
const equals = require('../src/eq');
const always = require('../src/always');

describe("Cond", () => {
  it("should apply the first condition", () => {
    expect(
      cond([
        [equals(0), always('water freezes at 0°C')],
        [equals(100), always('water boils at 100°C')],
				[T, temp => 'nothing special happens at ' + temp + '°C']
      ])(0)
    ).toEqual('water freezes at 0°C');
  });

  it("should apply the second condition", () => {
    expect(
      cond([
        [equals(0), always('water freezes at 0°C')],
        [equals(100), always('water boils at 100°C')],
				[T, temp => 'nothing special happens at ' + temp + '°C']
      ])(100)
    ).toEqual('water boils at 100°C');
  });

  it("should apply the final condition", () => {
    expect(
      cond([
        [equals(0), always('water freezes at 0°C')],
        [equals(100), always('water boils at 100°C')],
				[T, temp => 'nothing special happens at ' + temp + '°C']
      ])(50)
    ).toEqual('nothing special happens at 50°C');
  });

  it("should return undefined otherwise", () => {
    expect(
      cond([
        [equals(0), always('water freezes at 0°C')],
        [equals(100), always('water boils at 100°C')],
      ])(50)
    ).toBe(undefined);
  });
});
