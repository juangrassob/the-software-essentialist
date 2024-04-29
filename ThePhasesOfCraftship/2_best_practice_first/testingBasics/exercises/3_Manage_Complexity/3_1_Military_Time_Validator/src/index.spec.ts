import { MilitaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("Should have a valid response format", () => {
    const valid: boolean = MilitaryTimeValidator.validate("22:01 - 23:23");
    expect(typeof valid).toBe("boolean");
  });

  describe("Should know if a time range have correct format", () => {
    it("Should know that '01:12 - 14:32' is valid", () => {
      const valid = MilitaryTimeValidator.validate("01:12 - 14:32");
      expect(valid).toBeTruthy();
    });

    it("Should know that '01:12-14:32' not is valid", () => {
      const valid = MilitaryTimeValidator.validate("01:12-14:32");
      expect(valid).toBeFalsy();
    });
  });
});
