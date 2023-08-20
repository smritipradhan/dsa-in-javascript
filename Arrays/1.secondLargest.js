

const secondLargest = (arr, n) => {
  let largestIndex = 0;
  let secondLargestIndex = -1;

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[largestIndex]) {
      secondLargestIndex = largestIndex;
      largestIndex = i;
    } else if (arr[i] != arr[largestIndex]) {
      if (arr[secondLargestIndex] < arr[i] || secondLargest == -1) {
        secondLargestIndex = i;
      }
    }
  }

  return arr[secondLargestIndex];
};

const arr = [2, 3, 4, 77, 11, 2];
const n = arr.length;

console.log(secondLargest(arr, n));
