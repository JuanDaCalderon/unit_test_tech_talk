import { PointsCalculator } from "../../src/02_points_calculator/PointsCalculator";

describe('Calculates the accumulated points of a user who consecutively attends pricesmart', () => {
    test('Calculate points for a normal user on its first day', () => {
        const calculator = new PointsCalculator();
        expect(calculator.calculate(1)).toBe(10);
    });

    test('Calculate points for a normal user on its second consecutive week', () => {
        const calculator = new PointsCalculator();
        expect(calculator.calculate(14)).toBe(140);
    });

    test('Calculate points for a premium user on its first day', () => {
        const calculator = new PointsCalculator();
        expect(calculator.calculate(1, true)).toBe(20);
    });

    test('Calculate points for a premium user on its second consecutive week', () => {
        const calculator = new PointsCalculator();
        expect(calculator.calculate(14, true)).toBe(630);
    });
});
