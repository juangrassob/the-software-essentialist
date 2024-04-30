export class MilitaryTimeValidator {
  static validate(time: string): boolean {
    if (time.split(" - ").length !== 2) return false;

    return true;
  }
}
