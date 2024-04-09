import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should exist", () => {
    expect(fizzbuzz).toBeDefined();
  });

  it("should return a string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });

  it("should return 'fizz' if I pass the number 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it("should return 'buzz' if I pass the number 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });

  it("should return 'fizzbuzz' if I pass the number 15", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });

  it("should return '43' if i pass the number 43", () => {
    expect(fizzbuzz(43)).toBe("43");
  });
});
