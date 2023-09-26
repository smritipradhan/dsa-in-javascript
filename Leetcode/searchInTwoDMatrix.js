/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) return false;

  let n = matrix.length;
  let m = matrix[0].length;

  let low = 0;
  let high = m * n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (matrix[Math.floor(mid / m)][mid % m] === target) return true;

    if (matrix[Math.floor(mid / m)][mid % m] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};
