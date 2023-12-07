import { Calculator } from "../../src/01_calculator/calculator";

describe('Calculate the basic operations of a calculator', () => {
  test("Multiply 7 * 8 to equal 56", () => {
    const calculator = new Calculator();

    const result = calculator.multiply(7, 8);

    expect(result).toBe(56);
  });

  test("Divide 8 / 4 to equal 2", () => {
    const calculator = new Calculator();

    const result = calculator.divide(8, 4);

    expect(result).toBe(2);
  });

  test("adds 1 + 2 to equal 3", () => {
    // Arrange
    const calculator = new Calculator();
    // Act
    const result = calculator.add(1, 2);
    // Assert
    expect(result).toBe(3);
  });

  test("subtract 2 - 1 to equal 1", () => {
    const calculator = new Calculator();

    const result = calculator.sub(2, 1);

    expect(result).toBe(1);
  });

  test("Get the last answer operation of the calculator", () => {
    const calculator = new Calculator();
    calculator.multiply(6, 7);
    calculator.sub(34, 5);
    calculator.divide(665, 7);

    const result = calculator.historic('LA')

    expect(result).toBe(95);
  });
})