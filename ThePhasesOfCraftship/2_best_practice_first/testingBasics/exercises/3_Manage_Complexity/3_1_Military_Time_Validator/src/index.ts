export class MilitaryTimeValidator {
  static validate(timeRange: string): boolean {
    const parsedTimeRange = timeRange.split(" - ");

    if (parsedTimeRange.length !== 2) return false;

    const [startTime] = parsedTimeRange;

    if (startTime.split(":").length !== 2) return false;

    return true;
  }
}
