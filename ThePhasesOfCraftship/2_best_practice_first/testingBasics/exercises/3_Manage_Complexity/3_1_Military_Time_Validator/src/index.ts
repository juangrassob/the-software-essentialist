export class MilitaryTimeValidator {
  static validate(time: string): boolean {
    const splitTimeRange = time.split(" - ");

    const validTimeRangeFormat =
      time.length === 13 && splitTimeRange.length === 2;

    if (!validTimeRangeFormat) return false;

    const initialTime = splitTimeRange[0];
    const finalTime = splitTimeRange[1];

    const validTimeFormat =
      initialTime.split(":").length === 2 && finalTime.split(":").length === 2;

    const splitInitialTime = initialTime.split(":");
    const splitFinalTime = finalTime.split(":");

    const initialHour = Number(splitInitialTime[0]);
    const initialMinutes = Number(splitInitialTime[1]);

    const finalHour = Number(splitFinalTime[0]);
    const finallMinutes = Number(splitFinalTime[1]);

    return (
      validTimeRangeFormat &&
      validTimeFormat &&
      initialHour <= 24 &&
      initialMinutes <= 60 &&
      finalHour <= 24 &&
      finallMinutes <= 60
    );
  }
}
