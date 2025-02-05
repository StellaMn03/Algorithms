function bubbleSort(arr) {
  const n = arr.length;
  let flag = false;
  for (let i = 0; i < n - 1; ++i) {
    for (let j = 0; j < n - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) {
      return arr;
    }
  }
  return arr;
}
console.log(bubbleSort([1, 2, 4, 2, 1, 2]));
