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

  it("Return false and a array with the error 'missing digit' for the password 'Badpass'", () => {
    const { validPassword, errors } =
      PasswordValidator.checkPassword("Badpass");

    expect(validPassword).toBeFalsy();
    expect(errors.length).toEqual(1);
    expect(errors[0]).toEqual("missing digit");
  });

  it("Return false and a array with the error 'missing digit' for the password 'Master'", () => {
    const { validPassword, errors } = PasswordValidator.checkPassword("Master");

    expect(validPassword).toBeFalsy();
    expect(errors.length).toEqual(1);
    expect(errors[0]).toEqual("missing digit");
  });

  it("Return false and a array with the error 'missing digit' for the password 'JuanTest'", () => {
    const { validPassword, errors } =
      PasswordValidator.checkPassword("JuanTest");

    expect(validPassword).toBeFalsy();
    expect(errors.length).toEqual(1);
    expect(errors[0]).toEqual("missing digit");
  });

  it("Return false and a array with the error 'missing upper case' for the password 'badpass1'", () => {
    const { validPassword, errors } =
      PasswordValidator.checkPassword("badpass1");

    expect(validPassword).toBeFalsy();
    expect(errors.length).toEqual(1);
    expect(errors[0]).toEqual("missing upper case");
  });

  it("Return false and a array with the error 'missing upper case' for the password 'master1123'", () => {
    const { validPassword, errors } =
      PasswordValidator.checkPassword("master1123");

    expect(validPassword).toBeFalsy();
    expect(errors.length).toEqual(1);
    expect(errors[0]).toEqual("missing upper case");
  });

  it("Return false and a array with the error 'missing upper case' for the password 'juanpassword1'", () => {
    const { validPassword, errors } =
      PasswordValidator.checkPassword("juanpassword1");

    expect(validPassword).toBeFalsy();
    expect(errors.length).toEqual(1);
    expect(errors[0]).toEqual("missing upper case");
  });

  it("Return false and a array with the error 'too short or too long' for the password 'ReallyLongPassword1'", () => {
    const { validPassword, errors } = PasswordValidator.checkPassword(
      "ReallyLongPassword1"
    );

    expect(validPassword).toBeFalsy();
    expect(errors.length).toEqual(1);
    expect(errors[0]).toEqual("too short or too long");
  });
});
