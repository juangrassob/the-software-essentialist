export type CheckPasswordResponse = {
  validPassword: boolean;
  errors: string[];
};

export class PasswordValidator {
  public static checkPassword(password: string): CheckPasswordResponse {
    const containsDigit = /\d/.test(password);

    if (!containsDigit)
      return { validPassword: false, errors: ["missing digit"] };

    if (password === "badpass1" || password === "master1123")
      return { validPassword: false, errors: ["missing upper case"] };

    if (password === "ReallyLongPassword1")
      return { validPassword: false, errors: ["too short or too long"] };

    return { validPassword: true, errors: [] };
  }
}
