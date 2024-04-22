import { StatsCalculator, StatsCalculatorResponse } from "./index";

describe("Stats calculator", () => {
  it("Should use a valid response format with minimun, maximun, numberOfElements and average", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([0]);

    expect(response).toHaveProperty("minimun");
    expect(response).toHaveProperty("maximun");
    expect(response).toHaveProperty("numberOfElements");
    expect(response).toHaveProperty("average");
  });
});

