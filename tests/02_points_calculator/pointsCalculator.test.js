import { PointsCalculator } from "../../src/02_points_calculator/PointsCalculator";

describe("Calculates the accumulated points of a user who consecutively attends pricesmart", () => {
  test("Calculate points for a normal user on its first day", () => {
    const pointsCalculator = new PointsCalculator();
    const result = pointsCalculator.calculate(1);
    expect(result).toBe(10);
  });

  test("Calculate points for a normal user on its second consecutive week", () => {
    const pointsCalculator = new PointsCalculator();
    const result = pointsCalculator.calculate(14);
    expect(result).toBe(140);
  });

  test("Calculate points for a premium user on its first day", () => {
    const pointsCalculator = new PointsCalculator();
    const result = pointsCalculator.calculate(1, true);
    expect(result).toBe(20);
  });

  test("Calculate points for a premium user on its second consecutive week", () => {
    const pointsCalculator = new PointsCalculator();
    const result = pointsCalculator.calculate(14, true);
    expect(result).toBe(630);
  });
});
