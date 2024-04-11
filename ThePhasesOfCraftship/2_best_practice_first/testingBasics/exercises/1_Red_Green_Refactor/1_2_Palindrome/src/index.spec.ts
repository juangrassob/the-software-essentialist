import { palindromeChecker } from "./index";
describe("palindrome checker", () => {
  it("Should return a boolean", () => {
    expect(typeof palindromeChecker("test")).toBe("boolean");
  });
});

