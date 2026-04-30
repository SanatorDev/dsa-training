import { minSubArrayLen } from "./minimum-subarray-length";

describe("minSubArrayLen", () => {
  it("is exported", () => {
    expect(typeof minSubArrayLen).toBe("function");
  });
  it("returns 0 if the array is empty", () => {
    expect(minSubArrayLen(7, [])).toBe(0);
  });
  it("returns the minimum length of the subarray", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });
  it("returns the length of the subarray if the target is found", () => {
    expect(minSubArrayLen(10, [2, 3, 1, 2, 4, 3])).toBe(4);
  });
  it("returns the length of the subarray if the target is found", () => {
    expect(minSubArrayLen(10, [1, 5, 5, 3])).toBe(2);
  });
});
