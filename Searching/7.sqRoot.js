const sqaureRoot = (x) => {
  let low = 1;
  let high = x;
  let res = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midSquare = mid * mid;

    if (midSquare === x) {
      res = midSquare;
    } else if (midSquare < x) {
      res = low;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;
};

const x = 10;
const ans = sqaureRoot(x);
console.log(ans);
