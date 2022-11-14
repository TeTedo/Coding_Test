// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let index = 0;
  if (arr[start] > num || arr[end] < num) return -1;
  while (start !== end) {
    index = Math.floor((start + end) / 2);
    if (arr[index] === num) {
      return index;
    } else if (arr[index + 1] === num) {
      return index + 1;
    } else if (arr[index] < num) {
      start = index;
    } else {
      end = index;
    }
  }
  return -1;
}

// refactoring
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let index = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[index] === num) return index;
    if (arr[index] < num) start = index + 1;
    if (arr[index] > num) end = index - 1;
    index = Math.floor((start + end) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
