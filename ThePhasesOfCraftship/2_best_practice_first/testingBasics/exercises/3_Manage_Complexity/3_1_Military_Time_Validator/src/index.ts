export class MilitaryTimeValidator {
  static validate(time: string): boolean {
    const splitTimeRange = time.split(" - ");

    const validTimeRangeFormat =
      time.length === 13 && splitTimeRange.length === 2;

    const initialTime = splitTimeRange[0];
    const finalTime = splitTimeRange[1];

    const validTimeFormat =
      initialTime.split(":").length === 2 && finalTime.split(":").length === 2;

    return validTimeRangeFormat && validTimeFormat;
  }
}
