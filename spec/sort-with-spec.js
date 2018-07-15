const sortBy = require('../src/sort-by');

describe("Sort by", () => {
  it("should sort by asc", () => {
    let identity = i => i
    expect(sortBy(identity)(["pippo", "pluto", "paperino"])).toEqual(["paperino", "pippo", "pluto"]);
  });

  it("should sort by asc 2", () => {
    let toLower = i => i.toLowerCase()
    expect(sortBy(toLower)(["ALICE", "Bob", "clara"])).toEqual(["ALICE", "Bob", "clara"]);
  });
});

