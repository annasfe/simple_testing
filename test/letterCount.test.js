const letterCount = require("../src/letterCount");

describe("Testing function letterCount", () => {
  test("returns object from string by counting letters", () => {
    expect(letterCount("h")).toStrictEqual({ h: 1 });
    expect(letterCount("hello")).toStrictEqual({ h: 1, e: 1, l: 2, o: 1 });
    expect(letterCount("eeeee")).toStrictEqual({ e: 5 });
  });

  test("empty string must return empty object", () => {
    expect(letterCount("")).toStrictEqual({});
  });

  test("spaces in string must be ignored", () => {
    expect(letterCount("hello world")).toStrictEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    });
  });

  test("when input is not a string return empty object", () => {
    expect(letterCount(1)).toStrictEqual({});
  });
});
