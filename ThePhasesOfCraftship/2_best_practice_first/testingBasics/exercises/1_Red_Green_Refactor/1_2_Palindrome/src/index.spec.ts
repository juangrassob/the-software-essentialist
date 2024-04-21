import { palindromeChecker } from "./index";
describe("palindrome checker", () => {
  it("Should return a boolean", () => {
    expect(typeof palindromeChecker("test")).toBe("boolean");
  });

  it.each(["mom", "Mom", "xMomx", "Was It A Rat I Saw", "Never Odd or Even"])(
    "Should return true for '%s'",
    (text: string) => {
      expect(palindromeChecker(text)).toBe(true);
    }
  );

  it.each(["Momx", "Never Odd or Even1"])(
    "Should return false for '%s'",
    (text: string) => {
      expect(palindromeChecker(text)).toBe(false);
    }
  );
});
