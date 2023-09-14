const nSum = (nums, target, k) => {
  nums.sort(function (a, b) {
    return a - b;
  });
  const result = [];
  const twoSum = (arr, target, res) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
      if (arr[i] + arr[j] == target) {
        result.push([...res, arr[i], arr[j]]);
        while (arr[i] === arr[i + 1]) i++;
        while (arr[j] === arr[j - 1]) j--;

        i++;
        j--;
      } else if (arr[i] + arr[j] < target) {
        i++;
      } else {
        j--;
      }
    }
  };

  const numSumHelper = (arr, target, res, k) => {
    console.log("Array", arr, target, res, k);
    if (k == 2) {
      twoSum(arr, target, res);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) i++;
      numSumHelper(arr.slice(i + 1), target - arr[i], [...res, arr[i]], k - 1);
    }
  };
  numSumHelper(nums, target, [], k);
  console.log(result);
};

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
nSum(nums, target, 4);
