// Three Sum , Similar approach like 2 Sum

const threeSum = (arr, n) => {
  const resultArray = [];
  arr.sort(function (a, b) {
    return a - b;
  });
  let sum = 0;
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      if (arr[i] + arr[j] + arr[k] < sum) {
        j++;
      } else if (arr[i] + arr[j] + arr[k] > sum) {
        k--;
      } else {
        resultArray.push([arr[i], arr[j], arr[k]]);

        // Here we skip the duplicates
        while (arr[j] === arr[j + 1] && j < k) {
          j++;
        }
        while (arr[k] === arr[k - 1] && j < k) {
          k--;
        }

        j++;
        k--;
      }
    }

    //Processing duplicate of First number
    while (i + 1 < arr.length && arr[i + 1] == arr[i]) i++;
  }
  console.log(resultArray);
};

const arr = [-1, -4, 0, 1, 2, -1];
const n = arr.length;
threeSum(arr, n);
