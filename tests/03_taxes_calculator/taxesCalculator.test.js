import { TaxesCalculator } from "../../src/03_taxes_calculator/taxesCalculator";

describe("Taxes", () => {
  it("Taxes test", () => {
    // initialization
    const calculator = new TaxesCalculator();
    const value = 4374;
    // It supposed to give me the taxes of 4374
    calculator.addWithTaxes(value);
    expect(calculator.result).toBe(5205.06);
  });
});
