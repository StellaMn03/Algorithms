function countingSort(arr) {
  if (arr.length === 0) return [];

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let count = new Array(max - min + 1).fill(0);
  for (let num of arr) {
    count[num - min]++;
  }
  let sortedArr = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedArr.push(i + min);
      count[i]--;
    }
  }

  return sortedArr;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
console.log(countingSort([5, 5, 5, 1, 2, 2, 3]));
console.log(countingSort([]));
