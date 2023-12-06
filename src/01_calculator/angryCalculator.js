/* 
  AC-01 The angry calculator: Multiply feature
  - As a user I want to multiply two numbers
    to obtain the addition of a same number as
    many times as indicated by another number

  Acceptance criteria: 
  - The application can only multiply integers following: (-9999 < x < 9999)
  - The application can only return the result of a multiplication in natural numbers including zero (x >= 0)
  - The largest number that multiplication can return is 9999, if the result of multiplication is greater than this number it will return infinity
  - If the result of a multiplication is negative, it must return the absolute of it
*/

/* 
  AC-02 The angry calculator: Divide feature
  - As a user I want to divide two numbers
    to separate a total into equal parts

  Acceptance criteria: 
  - The application can only receibe as dividend even integer numbers and as divisor any integer number
  - The application can only return the result of the operation in integer numbers following: (-9999 < x < 9999)
  - If the result of the operation is greater than 9999 or less than 9999, it should return infinity and -infinity respectively.
  - If the result is a float number, it must be approximated to the nearest integer below.
*/

/* 
  AC-03 calculator: Add feature
  - As a user I want to Add two numbers
    to combine them to obtain a total amount.

  Acceptance criteria: 
  - The application can only add floats numbers following: (-9999.0 <= x <= 9999.0)
  - The application should be able to return the result of the operation only as a float number
  - If the result of the add is greater than 9999.0 or less than 9999.0, it should return infinity and -infinity respectively.
*/

/* 
  AC-04 calculator: Subtraction feature
  - As a user I want to Substract two numbers
    to remove one quantity from another.

  Acceptance criteria: 
  - The application can only substract floats numbers following: (-9999.0 < x < 9999.0)
  - The application should be able to return the result of the operation only as a float positive number (x >= 0)
  - If the result of the subtraction is greater than 9999.0 or less than 9999.0, it should return infinity and -infinity respectively.
  - If the result of the substraction is negative, it must return the absolute of it
*/

/* 
  AC-05 calculator: historical feature
  - As a user I want to get the last operation and first
    operation of the calculator to have a quick way to get them

  Acceptance criteria: 
  - The application should be able to receibe LA (Last answer) to get the last operation of the calculator
  - If the last answer is 0 it must return the last answer different than 0
  - The application should be able to receibe FA (First answer) to get the First operation of the calculator
  - If the first answer is 0 it must return the first answer different than 0
*/

export class AngryCalculator {

  historical = []

  /**
   * This multiply two numbers, a and b
   * @param {number} a
   * @param {number} b
   * @returns {number} a * b
   */
  multiply(a, b) {
    const result = a * b;
    this.historical.push(result);
    return result;
  }

  /**
   * This divide two numbers, a and b
   * @param {number} a
   * @param {number} b
   * @returns {number} a / b
   */
  divide(a, b) {
    const result = a / b;
    this.historical.push(result);
    return result;
  }

  /**
   * This adds two numbers, a and b
   * @param {number} a
   * @param {number} b
   * @returns {number} a + b
   */
  add(a, b) {
    const result = a + b;
    this.historical.push(result);
    return result;
  }

  /**
   * This substracts two numbers, a and b
   * @param {number} a
   * @param {number} b
   * @returns {number} a - b
   */
  sub(a, b) {
    const result = a - b;
    this.historical.push(result);
    return result;
  }

  /**
   * This returns the last or the first answer on the calculator historical 
   * @param {string} a 'LA' or 'FA' as parameters
   * @returns {number} answer
   */
  historic(a) {
    if (a === 'LA') {
      return this.historical.pop()
    }
  }
}
