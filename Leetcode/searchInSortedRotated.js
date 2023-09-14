const searchSortedRotated = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;

    // left sorted or either right sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    } else {
      if (nums[high] >= target && target >= nums[mid]) {
        low = mid + 1;
      } else high = mid - 1;
    }
  }
  return -1;
};

// const searchSortedRotated = (A, target) => {
//   let lo = 0;
//   let hi = A.length - 1;
//   let n = A.length - 1;
//   while (lo < hi) {
//     let mid = (lo + hi) / 2;
//     if (A[mid] > A[hi]) lo = mid + 1;
//     else hi = mid;
//   }
//   console.log(lo);

//   let rotation = lo;

//   let low = 0;
//   let high = A.length - 1;

//   while (low < high) {
//     let mid = (low + high) / 2;
//     let realMid = (mid + rotation) % n;

//     if (A[realMid] === target) return realMid;
//     else if (A[realMid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// };

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;

console.log(searchSortedRotated(nums, target));
