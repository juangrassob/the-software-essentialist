import { MilitaryTimeRangeValidator } from "./index";

describe("military time validator", () => {
  describe("Should know if a time range is correct", () => {
    it.each(["12:33 - 15:52", "23:32 - 23:56", "1:22 - 12:33", "00:33 - 9:22"])(
      "Should know that the time range %s is valid",
      (timeRange) => {
        const valid = MilitaryTimeRangeValidator.validate(timeRange);
        expect(valid).toBeTruthy();
      }
    );

    describe("Should know if a time range have incorrect format", () => {
      it.each(["1:12-12:32", "1:12 - 12:33 - 14:44", "22:33 ~ 23:10"])(
        "Should know that the time range %s is not valid",
        (timeRange) => {
          const valid = MilitaryTimeRangeValidator.validate(timeRange);
          expect(valid).toBeFalsy();
        }
      );
    });

    describe("Should know if a military time have incorrect format", () => {
      it.each(["1.12 - 12:32", "1:12 - 12.32", "23'32 - 23:54"])(
        "Should know that the military time  is not valid",
        (timeRange) => {
          const valid = MilitaryTimeRangeValidator.validate(timeRange);
          expect(valid).toBeFalsy();
        }
      );
    });

    describe("Should know if a military time hour or minute is out of range", () => {
      it.each([
        "27:32 - 12:45",
        "22:123 - 12:45",
        "2I:12 - 12:45",
        "22:12.11 - 12:45",
        "22.23:12 - 12:45",
        "20:2P - 12:54",
      ])("Should know that the time range %s is not valid", (timeRange) => {
        const valid = MilitaryTimeRangeValidator.validate(timeRange);
        expect(valid).toBeFalsy();
      });
    });
  });
});
