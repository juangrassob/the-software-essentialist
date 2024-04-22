import { StatsCalculator, StatsCalculatorResponse } from "./index";

describe("Stats calculator", () => {
  it("Should use a valid response format with minimun, maximun, numberOfElements and average", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([0]);

    expect(response).toHaveProperty("minimun");
    expect(response).toHaveProperty("maximun");
    expect(response).toHaveProperty("numberOfElements");
    expect(response).toHaveProperty("average");
  });

  it("Should know that the minimun of the numbers  1, 3 , 10 and -3 is -3", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([
      1, 3, 10, -3,
    ]);

    expect(response.minimun).toBe(-3);
  });

  it("Should know that the maximun of the numbers  1, 3 , 10 and -3 is 10", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([
      1, 3, 10, -3,
    ]);

    expect(response.maximun).toBe(10);
  });
});
