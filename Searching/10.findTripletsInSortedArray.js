// Find Triplets in Sorted Arrays .

const findTriplets = (arr, target) => {
  const n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      let calSum = arr[i] + arr[j] + arr[k];

      if (calSum === target) return true;
      else if (calSum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return false;
};

const arr = [2, 3, 4, 8, 9, 20, 40];
const target = 32;
console.log(findTriplets(arr, target));

// while (arr[j] === arr[j + 1] && j < k) {
//     j++;
//   }
//   while (arr[k] === arr[k - 1] && j < k) {
//     k--;
//   }
