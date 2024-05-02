export class MilitaryTimeValidator {
  static validate(timeRange: string): boolean {
    const parsedTimeRange = timeRange.split(" - ");

    if (parsedTimeRange.length !== 2) return false;

    const [startTime, endTime] = parsedTimeRange;

    console.log({ endTime });

    if (startTime.split(":").length !== 2) return false;
    if (endTime.split(":").length !== 2) return false;

    return true;
  }
}
