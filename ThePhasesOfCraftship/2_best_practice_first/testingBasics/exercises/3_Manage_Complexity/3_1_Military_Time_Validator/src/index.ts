export class MilitaryTimeValidator {
  static validate(time: string): boolean {
    if (time.indexOf(" - ") === -1) return false;

    return true;
  }
}
