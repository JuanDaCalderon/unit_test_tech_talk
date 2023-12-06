import { TaxesCalculator } from "../../src/03_taxes_calculator/taxesCalculator";

describe('Calculate final value with taxes', () => {
    test('Calculate final value with taxes of 0.19 of its value', () => {
        const calculator = new TaxesCalculator();
        calculator.addWithTaxes(4374);
        expect(calculator.result).toBe(5205.06);
    });
});
