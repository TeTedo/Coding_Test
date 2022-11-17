function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
  };

  let pivot = arr[start]; // 아무값 지정 가능
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
};
console.log(quickSort([5, 2, 7, 8, 1, 3, 6, 4]));
