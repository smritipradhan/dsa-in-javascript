// Maximum Consecutive 1s

const maxConsecutiveOnes = (arr, n) => {
  let result = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      count = 0;
    } else {
      count++;
    }
    result = Math.max(count, result);
  }
  console.log(result);
};

const arr = [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0];
const n = arr.length;
maxConsecutiveOnes(arr, n);
