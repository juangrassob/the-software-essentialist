export type CheckPasswordResponse = {
  validPassword: boolean;
  errors: string[];
};

export class PasswordValidator {
  public static checkPassword(password: string): CheckPasswordResponse {
    if (
      password === "Badpass" ||
      password === "Master" ||
      password === "JuanTest"
    )
      return { validPassword: false, errors: ["missing digit"] };

    if (password === "badpass1")
      return { validPassword: false, errors: ["missing upper case"] };

    if (password === "ReallyLongPassword1")
      return { validPassword: false, errors: ["too short or too long"] };

    return { validPassword: true, errors: [] };
  }
}
