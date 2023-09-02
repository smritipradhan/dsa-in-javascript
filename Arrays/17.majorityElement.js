// An element which appears more than n/2 times in an array is the Majority Element and we need to return its index

const naiveMajorityElement = (arr, n) => {
  let countOfApperance = n / 2;
  let result = -1;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }

    if (map.get(arr[i]) > countOfApperance) {
      result = arr[i];
    }
  }
  console.log(result);
};

// Big n 2
const gfgNaive = (arr, n) => {
  for (let i = 0; i < n; i++) {
    let count = 1;

    for (j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }

    if (count > n / 2) {
      console.log(i);
      return i;
    }
  }
};

// Using Moore's Voting Algorithm
const mooreVotingAlgorithm = () => {
  // First part the vote the majority element
  let resultIndex = 0;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[resultIndex] == arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      resultIndex = i; // Updated the Result index
      count = 1; // Counting the first new element
    }
  }

  // Second to cross check
  count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[resultIndex] == arr[i]) {
      count++;
    }
  }

  if (count <= n / 2) {
    return -1;
  }
  return resultIndex;
};

const arr = [8, 7, 6, 8, 6, 6, 6, 6];
const n = arr.length;
// naiveMajorityElement(arr, n);
gfgNaive(arr, n);
mooreVotingAlgorithm(arr, n);
