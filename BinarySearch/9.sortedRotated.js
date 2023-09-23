// Search in sorted rotated array

const sortedRotated = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;

    if (arr[low] < arr[mid]) {
      // if left sorted
      if (arr[low] < target && target < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } // if right sorted
    else {
      if (arr[mid] < target && target < arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

const arr = [10, 20, 30, 40, 50, 8, 9];
const target = 8;
console.log(sortedRotated(arr, target));
