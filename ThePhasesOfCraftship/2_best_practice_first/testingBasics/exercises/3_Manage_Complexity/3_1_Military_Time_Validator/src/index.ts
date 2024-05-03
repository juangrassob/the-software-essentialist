type ParsedTimeRangeResult = {
  startTime: string;
  endTime: string;
};

type ParseMilitaryTimeResult = {
  hour: string;
  minutes: string;
};

class MilitaryTimeParser {
  static parseTimeRange(timeRange: string): ParsedTimeRangeResult {
    const [startTime, endTime] = timeRange.split(" - ");

    return { startTime, endTime };
  }

  static parseMilitaryTime(militaryTime: string): ParseMilitaryTimeResult {
    const [hour, minutes] = militaryTime.split(":");
    return { hour, minutes };
  }
}

export class MilitaryTimeRangeValidator {
  static validate(timeRange: string): boolean {
    const validTimeRange = this.validateTimeRange(timeRange);

    if (!validTimeRange) return false;

    const { startTime, endTime } = MilitaryTimeParser.parseTimeRange(timeRange);

    const validStartTime = this.validateMilitaryTime(startTime);
    const validEndTime = this.validateMilitaryTime(endTime);

    if (!validStartTime || !validEndTime) return false;

    return true;
  }

  private static validateTimeRange(timeRange: string): boolean {
    return timeRange.split(" - ").length === 2;
  }

  private static validateMilitaryTime(militaryTime: string): boolean {
    const validMilitaryTime = militaryTime.length !== 2;

    if (!validMilitaryTime) return false;

    const { hour, minutes } =
      MilitaryTimeParser.parseMilitaryTime(militaryTime);

    const validHour = this.validateHour(hour);
    const validMinutes = this.validateMinutes(minutes);

    return validHour && validMinutes;
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
