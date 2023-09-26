var searchMatrix = function (matrix, target) {
  let startPos1 = 0;
  let startPos2 = matrix.length - 1;

  console.log(startPos1, startPos2);

  while (startPos1 >= 0 && startPos2 <= matrix.length - 1 && startPos2 >= 0) {
    console.log(matrix[startPos1][startPos2]);
    if (matrix[startPos1][startPos2] === target) return true;
    else if (matrix[startPos1][startPos2] > target) {
      startPos2 = startPos2 - 1;
    } else {
      startPos1 = startPos1 + 1;
    }
  }
  return false;
};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 5;

console.log(searchMatrix(matrix, target));
