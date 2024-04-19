export type CheckPasswordResponse = {
  validPassword: boolean;
  errors: string[];
};

export class PasswordValidator {
  public static checkPassword(password: string): CheckPasswordResponse {
    const containsDigit = /\d/.test(password);
    const containsUpperCase = /[A-Z]/.test(password);
    const validLength = password.length >= 5 && password.length <= 15;

    if (!containsDigit)
      return { validPassword: false, errors: ["missing digit"] };

    if (!containsUpperCase)
      return { validPassword: false, errors: ["missing upper case"] };

    if (!validLength)
      return { validPassword: false, errors: ["too short or too long"] };

    return { validPassword: true, errors: [] };
  }
}
