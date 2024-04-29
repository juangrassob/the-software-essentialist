export class MilitaryTimeValidator {
  static validate(time: string): boolean {
    return time.length === 13 && time.split("-").length === 2;
  }
}
