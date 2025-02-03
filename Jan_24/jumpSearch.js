function jumpSearch(arr, target) {
  let step = Math.floor(Math.sqrt(arr.length));
  let prev = 0;
  while (arr[Math.min(step, arr.length) - 1] < target) {
    prev = step;
    step += step;
    if (prev >= arr.length) {
      return -1;
    }
  }
  while (arr[prev] < target) {
    prev++;
  }
  if (arr[prev] == target) {
    return prev;
  }
  return -1;
}

console.log(jumpSearch([1, 4, 6, 11, 13, 15], 4));
console.log(jumpSearch([5, 9, 11, 15], 10));
//time-complexity
//best` O(1) if the element is in first block
//average`O(sqrt(n))
//worst`(O(sqrt(n)))
//space-complecity`O(1)
