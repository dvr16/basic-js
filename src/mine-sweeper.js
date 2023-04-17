const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(m) {
  let mass = [];
  function getMine(i, j) {
    if (i < 0 || i >= m.length || j < 0 || j >= m[0].length) return 0;
    return m[i][j] ? 1 : 0;
  }

  for (let i = 0; i < m.length; i++) {
    let tempMass = [];
    for (let j = 0; j < m[i].length; j++) {
      let count = 0;
      for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
          count += (x || y) ? getMine(i + x, j + y) : 0;
        }
      }
      tempMass.push(count);
    }
    mass.push(tempMass);
  }
  return mass;
}

module.exports = {
  minesweeper
};
