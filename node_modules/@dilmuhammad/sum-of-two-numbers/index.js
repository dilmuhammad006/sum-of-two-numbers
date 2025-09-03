/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 * @throws {Error}
 */
function sumOfTwoNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Both parameters must be numbers");
  }

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Parameters cannot be NaN");
  }

  return num1 + num2;
}

module.exports = sumOfTwoNumbers;
