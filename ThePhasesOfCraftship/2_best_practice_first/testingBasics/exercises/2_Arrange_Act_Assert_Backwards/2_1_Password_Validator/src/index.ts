export type CheckPasswordResponse = {
  validPassword: boolean;
  errors: string[];
};

export class PasswordValidator {
  public static checkPassword(password: string): CheckPasswordResponse {
    return { validPassword: true, errors: [] };
  }
}
