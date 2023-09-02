checkRotatedAndSorted(arr, n);
{
  let pivot = 0;
  // Check if the order is increasing / decreasing bit . For every rotatedSorted Array there will be only one pivot Element.

  if (arr[0] < arr[n - 1]) {
    for (let i = 0; i < n; i++) {
      if (arr[i] < arr[i + 1]) {
        pivot++;
      }
    }
    if (pivot === 1) {
      return true;
    }
  } else {
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        pivot++;
      }
    }
    if (pivot === 1) {
      return true;
    }
  }
  return false;
}
