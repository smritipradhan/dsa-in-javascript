//Find the leader in an array

const findLeader = (arr, n) => {
  let maxElement = arr[n - 1]; //last element in an array
  const finalLeaderArray = [maxElement];
  for (let i = n - 1; i > 0; i--) {
    if (maxElement < arr[i - 1]) {
      maxElement = arr[i - 1];
      finalLeaderArray.push(arr[i - 1]);
    }
  }
  return finalLeaderArray;
};

const arr = [7, 10, 4, 3, 6, 5, 2];
console.log(findLeader(arr, arr.length));
