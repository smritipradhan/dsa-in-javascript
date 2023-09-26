const binarySearchRecursion = (arr, low, high, target) => {
  if (low > high) return -1;

  let mid = Math.floor((high + low) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) {
    return binarySearchRecursion(arr, mid + 1, high, target);
  } else {
    return binarySearchRecursion(arr, low, mid - 1, target);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const n = arr.length;
const target = 7;
const ans = binarySearchRecursion(arr, 0, n, target);
console.log(ans);
