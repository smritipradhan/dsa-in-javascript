/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const n = height.length;

  let i = 0;
  let j = n - 1;
  let maxArea = 0;
  while (i < j) {
    maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxArea;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Container with Most Water is", maxArea(arr));
