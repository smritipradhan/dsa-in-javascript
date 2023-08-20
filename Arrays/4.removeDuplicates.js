//Remove Duplicates from sorted array

const removeDuplicates = (arr, n) => {
  let res = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[res-1]) {
      arr[res] = arr[i];
      res++;
    }
  }
  console.log(arr);
};

const arr = [2, 2, 3, 3, 4, 5, 5];
removeDuplicates(arr, arr.length);
