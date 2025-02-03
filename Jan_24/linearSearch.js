function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 2, 3], 4));
//time-complexity
//best` O(1) target is at index 0
//average` O(n/2)=O(n) target is in the middle
//worst` O(n) target is at the end or not found

//space-complexit` O(1)
