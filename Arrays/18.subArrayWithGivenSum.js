// SubArray with Given Sum

const subArrayWithGivenSum = (arr, sum) => {
  let start = 0;

  let curSum = 0;
  for (let end = 0; end < arr.length; end++) {
    curSum = curSum + arr[end];

    while (sum < curSum) {
      curSum = curSum - arr[start];
      start++;
    }
    if (curSum === sum) {
      return true;
    }
  }
  return false;
};

const arr = [1, 4, 20, 3, 1, 1];
const sum = 33;
console.log(subArrayWithGivenSum(arr, sum));
