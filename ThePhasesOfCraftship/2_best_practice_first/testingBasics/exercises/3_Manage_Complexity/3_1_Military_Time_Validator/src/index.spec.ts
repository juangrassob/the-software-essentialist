import { MilitaryTimeValidator } from "./index";

describe("military time validator", () => {
  it("Should have a valid response format", () => {
    const valid: boolean = MilitaryTimeValidator.validate("22:01 - 23:23");
    expect(typeof valid).toBe("boolean");
  });

  describe("Should know if a time range have correct format", () => {
    it.each([
      { time: "01:12 - 14:32", expectedValidity: true },
      { time: "01:12-14:32", expectedValidity: false },
      { time: "01:12-14:32", expectedValidity: false },
    ])(
      `Should know that $time is expected to be valid: $expectedValidity`,
      ({ time, expectedValidity }) => {
        const valid = MilitaryTimeValidator.validate(time);
        expect(valid).toBe(expectedValidity);
      }
    );
  });

  describe("Should know if a military time have correct format", () => {
    it.each([
      { time: "22:00 - 23:00", expectedValidity: true },
      { time: "22.00 - 23:00", expectedValidity: false },
      { time: "22:00 - 23.00", expectedValidity: false },
    ])(
      `Should know that $time is expected to be valid: $expectedValidity`,
      ({ time, expectedValidity }) => {
        const valid = MilitaryTimeValidator.validate(time);
        expect(valid).toBe(expectedValidity);
      }
    );
  });

  describe("Should know if the hour and minutes are in a valid rage", () => {
    it.each([
      { time: "22:00 - 23:12", expectedValidity: true },
      { time: "27:00 - 23:00", expectedValidity: false },
      { time: "20:00 - 32:00", expectedValidity: false },
      { time: "20:00 - 32:00", expectedValidity: false },
      { time: "27:00 - 23:00", expectedValidity: false },
      { time: "25:00 - 12:23", expectedValidity: false },
    ])(
      `Should know that $time is expected to be valid: $expectedValidity`,
      ({ time, expectedValidity }) => {
        const valid = MilitaryTimeValidator.validate(time);
        expect(valid).toBe(expectedValidity);
      }
    );
  });
});
