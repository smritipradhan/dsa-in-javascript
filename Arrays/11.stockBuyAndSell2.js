//Efficient - we let the stock fall and reach to top.Simply check if current element if greater than previous, if yes than add it

const stockBuyAndSell = (arr, n) => {
  let profit = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      profit = profit + (arr[i] - arr[i - 1]);
    }
  }
  console.log(profit);
};

const arr = [2, 3, 1, 1, 6, 10];
const n = arr.length;
stockBuyAndSell(arr, n);

//Expected result = 10
