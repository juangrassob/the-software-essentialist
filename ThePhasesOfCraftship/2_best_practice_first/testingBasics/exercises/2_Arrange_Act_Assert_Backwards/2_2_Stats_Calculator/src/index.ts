export type StatsCalculatorResponse = {
  minimun: number;
  maximun: number;
  numberOfElements: number;
  average: number;
};

export class StatsCalculator {
  public static process(numbers: number[]): StatsCalculatorResponse {
    let minimun = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < minimun) minimun = numbers[i];
    }

    return {
      minimun,
      maximun: numbers[0],
      numberOfElements: numbers[0],
      average: numbers[0],
    };
  }
}
