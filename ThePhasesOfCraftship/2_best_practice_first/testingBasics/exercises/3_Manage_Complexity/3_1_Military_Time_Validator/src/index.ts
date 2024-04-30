export class MilitaryTimeValidator {
  static validate(time: string): boolean {
    const splitTimeRange = time.split(" - ");

    const validTimeRangeFormat =
      time.length === 13 && splitTimeRange.length === 2;

    if (!validTimeRangeFormat) return false;

    const initialTime = splitTimeRange[0];
    const finalTime = splitTimeRange[1];

    const splitInitialTime = initialTime.split(":");
    const splitFinalTime = finalTime.split(":");

    const validTimeFormat =
      splitFinalTime.length === 2 && splitFinalTime.length === 2;

    if (!validTimeFormat) return false;

    const initialHour = Number(splitInitialTime[0]);
    const initialMinutes = Number(splitInitialTime[1]);
    const validInitialTime = initialHour <= 24 && initialMinutes <= 60;

    if (!validInitialTime) return false;

    const finalHour = Number(splitFinalTime[0]);
    const finallMinutes = Number(splitFinalTime[1]);
    const validFinalTime = finalHour <= 24 && finallMinutes <= 60;

    if (!validFinalTime) return false;

    return true;
  }
}
