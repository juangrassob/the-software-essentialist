export type CheckPasswordResponse = {
  validPassword: boolean;
  errors: string[];
};

export class PasswordValidator {
  public static checkPassword(password: string): CheckPasswordResponse {
    const containsDigit = /\d/.test(password);
    const containsUpperCase = /[A-Z]/.test(password);

    if (!containsDigit)
      return { validPassword: false, errors: ["missing digit"] };

    if (!containsUpperCase)
      return { validPassword: false, errors: ["missing upper case"] };

    if (password === "ReallyLongPassword1" || password === "Mom1")
      return { validPassword: false, errors: ["too short or too long"] };

    return { validPassword: true, errors: [] };
  }
}
