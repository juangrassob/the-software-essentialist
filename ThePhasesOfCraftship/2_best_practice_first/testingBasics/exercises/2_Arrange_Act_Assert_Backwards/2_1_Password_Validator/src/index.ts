export type CheckPasswordResponse = {
  validPassword: boolean;
  errors: string[];
};

export class PasswordValidator {
  public static checkPassword(password: string): CheckPasswordResponse {
    const errors = [];

    const containsDigit = /\d/.test(password);
    const containsUpperCase = /[A-Z]/.test(password);
    const validLength = password.length >= 5 && password.length <= 15;

    if (!containsDigit) {
      errors.push("missing digit");
    }

    if (!containsUpperCase) {
      errors.push("missing upper case");
    }

    if (!validLength) {
      errors.push("too short or too long");
    }

    return { validPassword: errors.length === 0 ? true : false, errors };
  }
}
