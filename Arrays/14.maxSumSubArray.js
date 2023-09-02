// Max Sum Sub Array

const maxSumSubArray = (arr, n) => {
  let maxSum = 0;
  let maxEle = arr[0];
  for (let i = 1; i < n; i++) {
    maxEle = Math.max(arr[i], maxEle + arr[i]);
    maxSum = Math.max(maxSum, maxEle);
  }
  console.log(maxSum);
};

const arr = [1, 4, -1, 4, 10, 3, 5, 6];
const n = arr.length;
