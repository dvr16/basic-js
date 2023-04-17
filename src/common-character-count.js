const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let sum = 0;
  let len = s1.length;
  let i = 0;

  while (i < len) {
    let el = s1[i];
    let pos = s2.indexOf(el);

    if (pos >= 0) {
      s1 = s1.slice(i + 1);
      s2 = s2.slice(0, pos) + s2.slice(pos + 1)

      len = s1.length;
      sum++;
    } else i++
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
