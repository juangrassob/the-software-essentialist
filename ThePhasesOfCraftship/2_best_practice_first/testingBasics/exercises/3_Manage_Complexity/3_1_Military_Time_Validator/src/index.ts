type ParsedTimeRangeResult = {
  startTime: string;
  endTime: string;
};

type ParseMilitaryTimeResult = {
  hour: string;
  minutes: string;
};

export class MilitaryTimeRangeValidator {
  static validate(timeRange: string): boolean {
    const validTimeRange = this.validateTimeRange(timeRange);

    if (!validTimeRange) return false;

    const { startTime, endTime } = this.parseTimeRange(timeRange);

    const validStartTime = this.validateMilitaryTime(startTime);
    const validEndTime = this.validateMilitaryTime(endTime);

    if (!validStartTime || !validEndTime) return false;

    return true;
  }

  private static validateTimeRange(timeRange: string): boolean {
    return timeRange.split(" - ").length === 2;
  }

  private static parseTimeRange(timeRange: string): ParsedTimeRangeResult {
    const [startTime, endTime] = timeRange.split(" - ");

    return { startTime, endTime };
  }

  private static validateMilitaryTime(militaryTime: string): boolean {
    const validMilitaryTime = this.validateMilitaryTimeFormat(militaryTime);

    if (!validMilitaryTime) return false;

    const { hour, minutes } = this.parseMilitaryTime(militaryTime);

    const validHour = this.validateHour(hour);
    const validMinutes = this.validateMinutes(minutes);

    return validHour && validMinutes;
  }

  private static parseMilitaryTime(
    militaryTime: string
  ): ParseMilitaryTimeResult {
    const [hour, minutes] = militaryTime.split(":");
    return { hour, minutes };
  }

  private static validateMilitaryTimeFormat(militaryTime: string): boolean {
    return militaryTime.length !== 2;
  }

  private static validateHour(hour: string): boolean {
    if (/[^0-9]/.test(hour)) return false;

    const parsedHour = Number.parseInt(hour);

    return parsedHour <= 24 && parsedHour >= 0;
  }

  private static validateMinutes(minutes: string): boolean {
    if (/[^0-9]/.test(minutes)) return false;
    const parsedMinutes = Number.parseInt(minutes);
    return parsedMinutes <= 59 && parsedMinutes >= 0;
  }
}
