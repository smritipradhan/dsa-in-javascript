// https://practice.geeksforgeeks.org/batch/dsa-4/track/DSASP-Arrays/video/NzU4OQ%3D%3D

const maximumApprearingElement = (leftArray, rightArray) => {
  const freq = new Array(101).fill(0);

  for (let i = 0; i < leftArray.length; i++) {
    freq[leftArray[i]] = 1;
    freq[rightArray[i + 1]] = -1;
  }

  let res = 0;
  for (let i = 1; i < freq.length; i++) {
    freq[i] = freq[i] + freq[i - 1];
    if (freq[res] < freq[i]) {
      res = i;
    }
  }
  console.log(freq);
  console.log(res);
};

const leftArray = [1, 2, 5, 15];
const rightArray = [5, 8, 7, 18];

maximumApprearingElement(leftArray, rightArray);
