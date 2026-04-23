import { reverseString } from "./reverse-string";

describe("reverseString", () => {
  it("is exported", () => {
    expect(typeof reverseString).toBe("function");
  });
  it("reverses a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("")).toBe("");
    expect(reverseString("a")).toBe("a");
    expect(reverseString("ab")).toBe("ba");
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("abcd")).toBe("dcba");
    expect(reverseString("abcde")).toBe("edcba");
    expect(reverseString("abcdef")).toBe("fedcba");
  });
});
