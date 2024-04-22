export type StatsCalculatorResponse = {
  minimun: number;
  maximun: number;
  numberOfElements: number;
  average: number;
};

export class StatsCalculator {
  public static process(numbers: number[]): StatsCalculatorResponse {
    let minimun = numbers[0];
    let maximun = numbers[0];
    let numberOfElements = numbers.length;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < minimun) minimun = numbers[i];

      if (numbers[i] > maximun) maximun = numbers[i];
    }

    return {
      minimun,
      maximun,
      numberOfElements,
      average: numbers[0],
    };
  }
}
