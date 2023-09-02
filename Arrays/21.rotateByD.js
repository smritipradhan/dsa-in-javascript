const reverse = (arr, low, high) => {
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;

    low++;
    high--;
  }
  return arr;
};

const rotateByD = (arr, D) => {
  const n = arr.length;

  let newArr = reverse(arr, 0, D - 1);
  newArr = reverse(arr, D, n - 1);
  newArr = reverse(arr, 0, n - 1);
  console.log(newArr);
};

const arr = [3, 4, 1, 2];
rotateByD(arr, 2);
