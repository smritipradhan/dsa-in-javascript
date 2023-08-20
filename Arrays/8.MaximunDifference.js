//Find the maximum difference between elements

const maximumDifference = (arr, n) => {
  let minimumElement = arr[0];

  let difference = 0;

  for (let i = 1; i < arr.length; i++) {
    difference = Math.max(difference, arr[i] - minimumElement);
    minimumElement = Math.min(minimumElement, arr[i]);
  }
  return difference;
};

const arr = [2, 3, 10, 1, 4, 8, 20];
const n = arr.length;

console.log(maximumDifference(arr, n));
