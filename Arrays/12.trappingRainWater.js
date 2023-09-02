//Important Interview Question
// Trapping Rain water problem . Naive solution and optimised solution
/* Logic -  When there is a bar , the water stored above a bar is 
    (the minimum of the maxLeftBar and maxRightBar) -  height of the current bar */

// Naive Solution
const naiveTrappingRainWater = (arr, n) => {
  let result = 0;

  //Running loop from 1 to n-2 cause the first and the last bar wont store any water
  for (let i = 1; i < n - 1; i++) {
    //leftmax
    let leftMax = arr[i];
    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, arr[j]);
    }

    //rightmax
    let rightMax = arr[i];
    for (let j = i + 1; j < n; j++) {
      rightMax = Math.max(rightMax, arr[j]);
    }

    result = result + (Math.min(leftMax, rightMax) - arr[i]);
  }
  console.log(result);
};

//Optimised Solution
const optimisedTrappingRainWater = (arr, n) => {
  const leftMaxArray = new Array(n).fill(-1);
  leftMaxArray[0] = arr[0];

  const rightMaxArray = new Array(n).fill(-1);
  rightMaxArray[n - 1] = arr[n - 1];

  //leftmost
  for (let i = 1; i < n; i++) {
    let maxEle = Math.max(arr[i], leftMaxArray[i - 1]);
    leftMaxArray[i] = maxEle;
  }

  //rightmost

  for (let i = n - 2; i >= 0; i--) {
    let maxEle = Math.max(arr[i], rightMaxArray[i + 1]);
    rightMaxArray[i] = maxEle;
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    result = result + (Math.min(leftMaxArray[i], rightMaxArray[i]) - arr[i]);
  }

  console.log(result);
};

const arr = [3, 0, 1, 2, 5];
const n = arr.length;

optimisedTrappingRainWater(arr, n);
