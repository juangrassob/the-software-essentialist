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
    {
      numbers: [0, 0, 0, 0],
      expectedValues: {
        minimin: 0,
        maximun: 0,
        numberOfElements: 4,
        average: 0,
      },
    },
    {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      expectedValues: {
        minimin: 1,
        maximun: 10,
        numberOfElements: 10,
        average: 5.5,
      },
    },
    {
      numbers: [-99, 28, 2.2, 812, 23, 0, -2, -45],
      expectedValues: {
        minimin: -99,
        maximun: 812,
        numberOfElements: 8,
        average: 89.9,
      },
    },
    {
      numbers: [2, 4, 21, -8, 53, 40],
      expectedValues: {
        minimin: -8,
        maximun: 53,
        numberOfElements: 6,
        average: 18.666666666666668,
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
