const rotateArrayByOne = (arr, n) => {
  let temp = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
  console.log(arr);
};

const arr = [1, 2, 3, 4, 5, 6];
rotateArrayByOne(arr, arr.length);
