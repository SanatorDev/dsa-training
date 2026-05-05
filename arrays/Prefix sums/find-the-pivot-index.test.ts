import { findThePivotIndex } from "./find-the-pivot-index";

describe("findThePivotIndex", () => {
  it("is exported", () => {
    expect(typeof findThePivotIndex).toBe("function");
  });
  it("returns the pivot index", () => {
    expect(findThePivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });
  it("returns -1 if no pivot index exists", () => {
    expect(findThePivotIndex([1, 2, 3, 4, 5])).toBe(-1);
  });
});
