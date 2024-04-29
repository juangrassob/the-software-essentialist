export class MilitaryTimeValidator {
  static validate(time: string): boolean {
    const validTimeRangeFormat =
      time.length === 13 && time.split(" - ").length === 2;

    const initialTime = time.split(" - ")[0];
    const finalTime = time.split(" - ")[1];

    const validTimeFormat =
      initialTime.split(":").length === 2 && finalTime.split(":").length === 2;

    return validTimeRangeFormat && validTimeFormat;
  }
}
