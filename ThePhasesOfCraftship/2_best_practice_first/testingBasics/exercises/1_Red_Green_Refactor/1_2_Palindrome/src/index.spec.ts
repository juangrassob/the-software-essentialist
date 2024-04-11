import { palindromeChecker } from "./index";
describe("palindrome checker", () => {
  it("Should return a boolean", () => {
    expect(typeof palindromeChecker("test")).toBe("boolean");
  });

  it("Should return true for 'mom'", () => {
    expect(palindromeChecker("mom")).toBe(true);
  });

  it("Should return true for 'Mom'", () => {
    expect(palindromeChecker("Mom")).toBe(true);
  });
});

