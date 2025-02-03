function binarySearchRecursive(arr, target, left, right) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] == target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
  return binarySearchRecursive(arr, target, mid + 1, right);
}

const arr = [2, 4, 5, 6, 8, 9, 10];
console.log(binarySearchRecursive(arr, 7, 0, arr.length - 1));
console.log(binarySearchRecursive(arr, 10, 0, arr.length - 1));
console.log(binarySearchRecursive(arr, 10, 0, 4));
//time-complexity
//best` 0(1) if target is in the middle
//average` O(log n) in each step count of number/2
//worst` O(log n)

//space-complexity O(log n)because of call stack
