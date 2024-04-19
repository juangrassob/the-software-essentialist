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

  it.each(["Badpass", "Master", "JuanTest"])(
    "Return false and a array with the error 'missing digit' for the password '%s'",
    (password: string) => {
      const { validPassword, errors } =
        PasswordValidator.checkPassword(password);

      expect(validPassword).toBeFalsy();
      expect(errors.length).toEqual(1);
      expect(errors[0]).toEqual("missing digit");
    }
  );

  it.each(["badpass1", "master1123", "juanpassword1"])(
    "Return false and a array with the error 'missing upper case' for the password '%s'",
    (password: string) => {
      const { validPassword, errors } =
        PasswordValidator.checkPassword(password);

      expect(validPassword).toBeFalsy();
      expect(errors.length).toEqual(1);
      expect(errors[0]).toEqual("missing upper case");
    }
  );

  it.each(["ReallyLongPassword1", "Mom1", "1Cat"])(
    "Return false and a array with the error 'too short or too long' for the password '%s'",
    (password: string) => {
      const { validPassword, errors } = PasswordValidator.checkPassword(
        "ReallyLongPassword1"
      );

      expect(validPassword).toBeFalsy();
      expect(errors.length).toEqual(1);
      expect(errors[0]).toEqual("too short or too long");
    }
  );

  it.each(["juantest", "test-test", "wololo"])(
    "Return false and array with the errors 'missing digit' and 'missing upper case' for the password '%s'",
    (password: string) => {
      const { validPassword, errors } =
        PasswordValidator.checkPassword(password);

      expect(validPassword).toBeFalsy();
      expect(errors.length).toEqual(2);
      expect(errors.includes("missing digit")).toBeTruthy();
      expect(errors.includes("missing upper case")).toBeTruthy();
    }
  );

  it.each(["Juan", "Test", "Wolo"])(
    "Return false and array with the errors 'missing digit' and 'missing upper case' for the password '%s'",
    (password: string) => {
      const { validPassword, errors } =
        PasswordValidator.checkPassword(password);

      expect(validPassword).toBeFalsy();
      expect(errors.length).toEqual(2);
      expect(errors.includes("missing digit")).toBeTruthy();
      expect(errors.includes("too short or too long")).toBeTruthy();
    }
  );

  it.each(["jua1", "t5s1", "wo23"])(
    "Return false and array with the errors 'missing digit' and 'missing upper case' for the password '%s'",
    (password: string) => {
      const { validPassword, errors } =
        PasswordValidator.checkPassword(password);

      expect(validPassword).toBeFalsy();
      expect(errors.length).toEqual(2);
      expect(errors.includes("missing upper case")).toBeTruthy();
      expect(errors.includes("too short or too long")).toBeTruthy();
    }
  );
});
