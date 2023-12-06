/* 
  CA-01 calculator: multiply feature
  - As a user I want to multiply two numbers
    to obtain the addition of a same number as
    many times as indicated by another number

  Acceptance criteria: 
  - The application should be able to receibe two any numbers
  - The application should be able to return the result of the operation
  - If the result of the multiplication is greater than 99999 or less than 99999, it should return infinity and -infinity respectively.
*/

/* 
  CA-02 calculator: Divide feature
  - As a user I want to divide two numbers
    to separate a total into equal parts

  Acceptance criteria: 
  - The application should be able to receibe two any numbers
  - The application should be able to return the result of the operation
  - If the application receibe 0 as divider it should return 'Math Error'
  - If the result is a float number, it must be approximated to the nearest integer.
*/

/* 
  CA-03 calculator: Add feature
  - As a user I want to Add two numbers
    to combine them to obtain a total amount.

  Acceptance criteria: 
  - The application should be able to receibe two any numbers
  - The application should be able to return the result of the operation
  - If the result of the add is greater than 9999 or less than 9999, it should return infinity and -infinity respectively.
*/

/* 
  CA-04 calculator: Subtraction feature
  - As a user I want to Substract two numbers
    to remove one quantity from another.

  Acceptance criteria: 
  - The application should be able to receibe two any numbers
  - The application should be able to return the result of the operation
  - If the result of the subtraction is greater than 9999 or less than 9999, it should return infinity and -infinity respectively.
*/

/* 
  CA-05 calculator: historical feature
  - As a user I want to get the last operation and first
    operation of the calculator to have a quick way to get them

  Acceptance criteria: 
  - The application should be able to receibe LA (Last answer) to get the last operation of the calculator
  - The application should be able to receibe FA (First answer) to get the First operation of the calculator
*/

export class Calculator {

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


