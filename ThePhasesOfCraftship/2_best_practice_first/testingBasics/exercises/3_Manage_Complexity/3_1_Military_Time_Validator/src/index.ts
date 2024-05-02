export class MilitaryTimeValidator {
  private static validateMilitaryTime(militaryTime: string): boolean {
    const parsedMilitaryTime = militaryTime.split(":");

    if (parsedMilitaryTime.length !== 2) return false;

    const [hour, minutes] = parsedMilitaryTime;

    const parsedHour = Number.parseFloat(hour);
    const parsedMinutes = Number.parseFloat(minutes);

    return (
      parsedHour <= 24 &&
      parsedHour >= 0 &&
      parsedMinutes <= 59 &&
      parsedMinutes >= 0
    );
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
