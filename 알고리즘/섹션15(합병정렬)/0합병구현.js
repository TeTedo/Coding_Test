function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let temp = [];
  while (i < arr1.length || j < arr2.length) {
    if (i == arr1.length) {
      temp.push(arr2[j]);
      j++;
    } else if (j == arr2.length) {
      temp.push(arr2[i]);
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

// Merges two already sorted arrays
function merge1(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
