const binarySearch = (arr, n, target) => {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const n = arr.length;
const target = 7;
const ans = binarySearch(arr, n, target);
console.log(ans);
