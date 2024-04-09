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

  it("should return 'fizz' when i pass the number 9", () => {
    expect(fizzbuzz(9)).toBe("fizz");
  });

  it("should return 'buzz' when i pass the number 10", () => {
    expect(fizzbuzz(10)).toBe("buzz");
  });

  it("should throw an error when i pass the number 102", () => {
    expect(() => fizzbuzz(102)).toThrow(new Error("n must be less than 101"));
  });

  it("should throw an error when i pass the number -12", () => {
    expect(() => fizzbuzz(-12)).toThrow(new Error("n must be bigger than 0"));
  });

  it("should return 'fizz' when i pass the number 42", () => {
    expect(fizzbuzz(42)).toBe("fizz");
  });

  it("should return 'fizzbuzz' if I pass the number 45", () => {
    expect(fizzbuzz(45)).toBe("fizzbuzz");
  });
});
