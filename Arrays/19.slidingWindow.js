// MAx Subarray sum with k consecutive elements

const maxSubArrayWithK = (arr, k) => {
  const n = arr.length;
  let newSum = 0;
  for (let i = 0; i < k; i++) {
    newSum = newSum + arr[i];
  }
  let maxResult = newSum;
  for (let i = 1; i < n - k + 1; i++) {
    newSum = newSum - arr[i - 1] + arr[i + k - 1];
    console.log(newSum);
    maxResult = Math.max(newSum, maxResult);
  }
};

const arr = [1, 8, 30, -5, 20, 7];
const k = 4;
maxSubArrayWithK(arr, k);
