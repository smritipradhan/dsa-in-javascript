const indexOfFirstOccurence = (arr, n, target) => {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid] !== arr[mid - 1]) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

const arr = [1, 1, 2, 2, 2, 3, 5];
const n = arr.length;
const target = 2;
const ans = indexOfFirstOccurence(arr, n, target);
console.log(ans);
