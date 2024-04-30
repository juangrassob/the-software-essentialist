import { MilitaryTimeValidator } from "./index";

describe("military time validator", () => {
  describe("Should know if a time range is correct", () => {
    it("Should know that the time range 12:33 - 15:52 is valid", () => {
      const valid = MilitaryTimeValidator.validate("12:33 - 15:52");
      expect(valid).toBeTruthy();
    });
  });
});
