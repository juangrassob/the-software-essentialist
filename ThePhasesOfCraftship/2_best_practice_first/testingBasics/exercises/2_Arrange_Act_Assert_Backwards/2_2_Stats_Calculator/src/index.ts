export type StatsCalculatorResponse = {
  minimun: number;
  maximun: number;
  numberOfElements: number;
  average: number;
};

export class StatsCalculator {
  public static process(numbers: number[]): StatsCalculatorResponse {
    return {
      minimun: numbers[0],
      maximun: numbers[0],
      numberOfElements: numbers[0],
      average: numbers[0],
    };
  }
}
