const reverseArray = (arr, n) => {
  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  console.log(arr);
};

const arr = [1, 2, 3, 4, 5];
// const arr = [1, 2, 3, 4];
reverseArray(arr, arr.length);
