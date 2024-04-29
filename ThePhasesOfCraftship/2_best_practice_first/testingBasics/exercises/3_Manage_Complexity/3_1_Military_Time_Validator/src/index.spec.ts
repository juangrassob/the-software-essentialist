import { MilitaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("Should have a valid response format", () => {
    const valid: boolean = MilitaryTimeValidator.validate("22:01 - 23:23");
    expect(typeof valid).toBe("boolean");
  });
});
