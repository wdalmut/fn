const groupBy = require('../src/group-by');

describe("GroupBy", () => {
  it("should create a group", () => {
    let users = [{name: "Walter", age: 31}, {name: "Roberto", age: 31}, {name: "Laura", age: 28}]
    expect(groupBy((i)=> i.age)(users)).toEqual({
      31: [{name: "Walter", age: 31}, {name: "Roberto", age: 31}],
      28: [{name: "Laura", age: 28}],
    });
  });
});
