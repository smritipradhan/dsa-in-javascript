
// Given an array A[] of N positive integers. The task is to find the maximum of j - i subjected to the constraint of A[i] < A[j] and i < j.
// https://practice.geeksforgeeks.org/batch/dsa-4/track/DSASP-Arrays/problem/maximum-index-1587115620
const maxIndexDiff = (A, N) => {
  let n = A.length;
  let rightMaxArr = new Array(n).fill(0);
  let leftMinArr = new Array(n).fill(0);

  // Construct RightMaxArray
  rightMaxArr[n - 1] = A[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMaxArr[i] = Math.max(A[i], rightMaxArr[i + 1]);
  }

  //Construct LeftMinArray
  leftMinArr[0] = A[0];
  for (let i = 1; i < n; i++) {
    leftMinArr[i] = Math.min(A[i], leftMinArr[i - 1]);
  }

  // console.log(rightMaxArr);
  // console.log(leftMinArr);

  // Find the max diff
  let i = 0;
  let j = 0;
  let diff = -1;
  while (i < n && j < n) {
    if (rightMaxArr[j] >= leftMinArr[i]) {
      diff = Math.max(diff, j - i);
      j++;
    } else {
      i++;
    }
  }
  return diff;
};
