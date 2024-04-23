import { StatsCalculator, StatsCalculatorResponse } from "./index";

describe("Stats calculator", () => {
  it("Should use a valid response format with minimun, maximun, numberOfElements and average", () => {
    const response: StatsCalculatorResponse = StatsCalculator.process([0]);

    expect(response).toHaveProperty("minimun");
    expect(response).toHaveProperty("maximun");
    expect(response).toHaveProperty("numberOfElements");
    expect(response).toHaveProperty("average");
  });

  it.each([
    {
      numbers: [1, 3, 10, -3],
      expectedValues: {
        minimin: -3,
        maximun: 10,
        numberOfElements: 4,
        average: 2.75,
      },
    },
    {
      numbers: [-1, -3, -10, -20],
      expectedValues: {
        minimin: -20,
        maximun: -1,
        numberOfElements: 4,
        average: -8.5,
      },
    },
    {
      numbers: [-1, -3, 0, 20],
      expectedValues: {
        minimin: -3,
        maximun: 20,
        numberOfElements: 4,
        average: 4,
      },
    },
  ])(
    `Should know that for the numbers $numbers the expectedValues are $expectedValues`,
    ({ numbers, expectedValues }) => {
      const response: StatsCalculatorResponse =
        StatsCalculator.process(numbers);

      expect(response.minimun).toBe(expectedValues.minimin);
      expect(response.maximun).toBe(expectedValues.maximun);
      expect(response.numberOfElements).toBe(expectedValues.numberOfElements);
      expect(response.average).toBe(expectedValues.average);
    }
  );
});
