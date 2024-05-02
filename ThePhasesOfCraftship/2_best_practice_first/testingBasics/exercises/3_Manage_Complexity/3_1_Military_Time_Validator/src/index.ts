export class MilitaryTimeValidator {
  private static validateMilitaryTime(militaryTime: string): boolean {
    return militaryTime.split(":").length === 2;
  }

  static validate(timeRange: string): boolean {
    const parsedTimeRange = timeRange.split(" - ");

    if (parsedTimeRange.length !== 2) return false;

    const [startTime, endTime] = parsedTimeRange;

    const validStartTime = this.validateMilitaryTime(startTime);
    const validEndTime = this.validateMilitaryTime(endTime);

    return validStartTime && validEndTime;
  }
}
