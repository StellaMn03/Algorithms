function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearchIterative([1, 2, 3, 4, 5], 6));
//time-complecity
//best` 0(1) if target is in the middle
//average` O(log n) in each step count of number/2
//worst` O(log n)

//space-complexity O(1)
