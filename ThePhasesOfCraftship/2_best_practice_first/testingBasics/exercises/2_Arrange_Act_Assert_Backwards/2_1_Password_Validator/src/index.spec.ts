import { PasswordValidator } from "./index";

describe("password validator", () => {
  it("Return true for the valid password: StrongPass2", () => {
    // arrange

    // act
    const { validPassword, errors } =
      PasswordValidator.checkPassword("StrongPass2");
    // assert
    expect(validPassword).toBeTruthy();
    expect(errors.length).toEqual(0);
  });
});
