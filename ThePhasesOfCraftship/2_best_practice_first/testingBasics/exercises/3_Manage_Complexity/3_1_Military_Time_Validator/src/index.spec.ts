import { MilitaryTimeRangeValidator } from "./index";

describe("military time validator", () => {
  describe("Should know if a time range is correct", () => {
    it("Should know that the time range 12:33 - 15:52 is valid", () => {
      const valid = MilitaryTimeRangeValidator.validate("12:33 - 15:52");
      expect(valid).toBeTruthy();
    });

    describe("Should know if a time range have incorrect format", () => {
      it("Should know that the time range 1:12-12:32 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("1:12-12:32");
        expect(valid).toBeFalsy();
      });

      it("Should know that the time range 1:12 - 12:32 - 14:44 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate(
          "1:12 - 12:32 - 14:44"
        );
        expect(valid).toBeFalsy();
      });
    });

    describe("Should know if a military time have incorrect format", () => {
      it("Should know that the military time 1.12 - 12:32 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("1.12 - 12:32");
        expect(valid).toBeFalsy();
      });
      it("Should know that the military time 1:12 - 12.32 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("1:12 - 12.32");
        expect(valid).toBeFalsy();
      });
    });

    describe("Should know if a military time hour or minute is out of range", () => {
      it("Should know that the time range 27:32 - 12:45 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("27:32 - 12:54");
        expect(valid).toBeFalsy();
      });
      it("Should know that the time range 22:123 - 12:45 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("22:123 - 12:54");
        expect(valid).toBeFalsy();
      });
      it("Should know that the time range 22.23:12 - 12:45 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("22.23:12 - 12:54");
        expect(valid).toBeFalsy();
      });
      it("Should know that the time range 22:12.11 - 12:45 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("22:12.11 - 12:54");
        expect(valid).toBeFalsy();
      });
      it("Should know that the time range 2I:12 - 12:45 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("2I:12 - 12:54");
        expect(valid).toBeFalsy();
      });
      it("Should know that the time range 20:2P - 12:45 is not valid", () => {
        const valid = MilitaryTimeRangeValidator.validate("20:2P - 12:54");
        expect(valid).toBeFalsy();
      });
    });
  });
});
