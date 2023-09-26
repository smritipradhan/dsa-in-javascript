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

const indexOfLastOccurence = (arr, n, target) => {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      if (mid === n - 1 || arr[mid] !== arr[mid + 1]) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
};

const arr = [5, 7, 7, 8, 8, 10];
const n = arr.length;
const target = 6;
if (indexOfFirstOccurence(arr, n, target) === 0) {
  return -1;
}
const ans =
  indexOfLastOccurence(arr, n, target) -
  indexOfFirstOccurence(arr, n, target) +
  1;
console.log(ans);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 1 && nums[0] === target) return [0, 0];
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

  const indexOfLastOccurence = (arr, n, target) => {
    let low = 0;
    let high = n - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] > target) {
        high = mid - 1;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        if (mid === n - 1 || arr[mid] !== arr[mid + 1]) {
          return mid;
        } else {
          low = mid + 1;
        }
      }
    }
    return -1;
  };

  if (indexOfFirstOccurence(nums, nums.length, target) === -1) {
    return [-1, -1];
  } else
    return [
      indexOfFirstOccurence(nums, nums.length, target),
      indexOfLastOccurence(nums, nums.length, target),
    ];
};
