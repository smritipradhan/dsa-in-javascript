// Three Sum Closest

const threeSumClosest = (arr, target) => {
  let minDiff = 9999;

  arr.sort(function (a, b) {
    return a - b;
  });

  if (arr.length === 3) return arr[0] + arr[1] + arr[2];

  let result = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      let difference = Math.abs(sum - target);
      if (difference < minDiff) {
        minDiff = difference;
        result = sum;
      }

      if (arr[i] + arr[j] + arr[k] < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  console.log(result);
};

const arr = [-1, 2, 1, -4];
const target = 1;
threeSumClosest(arr, target);
