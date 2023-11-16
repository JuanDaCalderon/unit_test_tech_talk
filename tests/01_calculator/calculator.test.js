import { Calculator } from "../../src/01_calculator/calculator";

test("adds 1 + 2 to equal 3", () => {
  const calculator = new Calculator();

  const result = calculator.add(1, 2)

  expect(result).toBe(3);
});

test("subtract 2 - 1 to equal 1", () => {
  const calculator = new Calculator();

  const result = calculator.sub(2, 1)

  expect(result).toBe(1);
});