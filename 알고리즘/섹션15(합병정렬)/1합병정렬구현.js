function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let temp = [];
  while (i < arr1.length || j < arr2.length) {
    if (i == arr1.length) {
      temp.push(arr2[j]);
      j++;
    } else if (j == arr2.length) {
      temp.push(arr1[i]);
      i++;
    } else {
      if (arr1[i] < arr2[j]) {
        temp.push(arr1[i]);
        i++;
      } else {
        temp.push(arr2[j]);
        j++;
      }
    }
  }
  return temp;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let index = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, index));
  let right = mergeSort(arr.slice(index));
  return merge(left, right);
}
console.log(mergeSort([10, 24, 76, 73]));
