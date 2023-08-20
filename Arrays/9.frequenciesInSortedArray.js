// Frequency of the elements in an array (sorted or unsorted Array).

const frequencyInArray = (arr, n) => {
  const frequencyMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!frequencyMap.has(arr[i])) {
      frequencyMap.set(arr[i], 1);
    } else {
      frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
    }
  }
  frequencyMap.forEach((key, value) => {
    console.log(key, value);
  });
};

const arr = [10, 10, 40, 10, 80, 2, 2, 2, 2, 2];
const n = arr.length;

frequencyInArray(arr, n);
