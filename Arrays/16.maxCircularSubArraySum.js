// Naive Approach
const maxSubCircularArraySum = (arr, n) => {
  let result = 0;
  // n = 6
  // For every element find the circular sum starting from it
  for (let i = 0; i < n; i++) {
    let currentMax = arr[i];
    let currentSum = arr[i];

    // For elements greater than i , if i = 1 ,  j = 1,2,3,4,5 and index is  2,3,4,5,0
    for (let j = 1; j < n; j++) {
      let index = (j + i) % n;
      currentSum += arr[index];
      currentMax = Math.max(currentSum, currentMax); // Finding max in subpair starting from one element
    }
    result = Math.max(result, currentMax); // Finding max between all pairs
  }
  console.log(result);
};

// Efficient appraoch is using normax MAx Sum using Kadanes Algorithm and then Subtracting the min subarray from total sum
// Now rather than subtracting we can revert all the elements in an array and add witht the total sum, check the normal or circular is max

const maxSubArraySum = (arr) => {
  let result = 0;
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxSum = Math.max(arr[i], arr[i] + maxSum);
    result = Math.max(result, maxSum);
  }
  return result;
};

const optimisedMaxSubArraySum = (arr, n) => {
  let result = 0;
  const normalSum = maxSubArraySum(arr);
  if (normalSum < 0) {
    return normalSum;
  }

  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
    arr[i] = -arr[i];
  }
  result = totalSum + maxSubArraySum(arr);

  return Math.max(result, normalSum);
};

const arr = [1, 2, -3, 4, 5, 10];
const n = arr.length;
maxSubCircularArraySum(arr, n);
console.log(optimisedMaxSubArraySum(arr, n));
// Expected Answer = 22
