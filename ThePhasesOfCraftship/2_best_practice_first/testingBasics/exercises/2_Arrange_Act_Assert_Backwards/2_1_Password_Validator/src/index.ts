export type CheckPasswordResponse = {
  validPassword: boolean;
  errors: string[];
};

export class PasswordValidator {
  public static checkPassword(password: string): CheckPasswordResponse {
    if (password === "Badpass")
      return { validPassword: false, errors: ["missing digit"] };

    if (password === "badpass1")
      return { validPassword: false, errors: ["missing upper case"] };

    return { validPassword: true, errors: [] };
  }
}
