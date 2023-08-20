const swap = (a, b) => {
  const temp = a;
  a = b;
  b = temp;

  return a, b;
};

const moveZeroToEnd = (arr, n) => {
  let count = 0; //Number of Non Zero Elements

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
      count++;
    }
  }
  console.log(arr);
};

const arr = [1, 2, 0, 0, 5];
moveZeroToEnd(arr, arr.length);
