const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [];
  let arr = String(n).split("");
  let arr1 = [];

  for (let j = 0; j < arr.length; j++) {
    arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (i != j) arr1.push(arr[i]);
    }
    numbers.push(arr1.join(""));
  }

  return Math.max.apply(null, numbers);
}

module.exports = {
  deleteDigit
};
