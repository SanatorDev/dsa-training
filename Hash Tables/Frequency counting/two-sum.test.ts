import { twoSum } from "./two-sum";

describe("twoSum", () => {
  it("is exported", () => {
    expect(typeof twoSum).toBe("function");
  });
  it("returns the indices of the two numbers that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("returns an empty array if no two numbers add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 10)).toEqual([]);
  });
});
