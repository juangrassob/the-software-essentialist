import { StatsCalculator, StatsCalculatorResponse } from "./index";

describe("Stats calculator", () => {
  it("Should use a valid response format with minimun, maximun, numberOfElements and average", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([0]);

    expect(response).toHaveProperty("minimun");
    expect(response).toHaveProperty("maximun");
    expect(response).toHaveProperty("numberOfElements");
    expect(response).toHaveProperty("average");
  });

  it("Should know that for numbers 1, 3 , 10 and -3. The minimin is -3, the maximun is 10, the number of elements is 4 and the average is 2.75", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([
      1, 3, 10, -3,
    ]);

    expect(response.minimun).toBe(-3);
    expect(response.maximun).toBe(10);
    expect(response.numberOfElements).toBe(4);
    expect(response.average).toBe(2.75);
  });

  it("Should know that for numbers -1, -3 , -10 and -20. The minimin is -20, the maximun is -1, the number of elements is 4 and the average is -8.5", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([
      -1, -3, -10, -20,
    ]);

    expect(response.minimun).toBe(-20);
    expect(response.maximun).toBe(-1);
    expect(response.numberOfElements).toBe(4);
    expect(response.average).toBe(-8.5);
  });

  it("Should know that for numbers -1, -3 , 0 and 20. The minimin is -1, the maximun is 20, the number of elements is 4 and the average is 4", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([
      -1, -3, 0, 20,
    ]);

    expect(response.minimun).toBe(-3);
    expect(response.maximun).toBe(20);
    expect(response.numberOfElements).toBe(4);
    expect(response.average).toBe(4);
  });
});
