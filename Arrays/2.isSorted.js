//Check if the array is sorted or not

const isSorted = (arr, n) => {
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

const arr = [2, 1, 10, 2, 99];
// const arr = [2, 2, 34, 555];
console.log(isSorted(arr, arr.length));
