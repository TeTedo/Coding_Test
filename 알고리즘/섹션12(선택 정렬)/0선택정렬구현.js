function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = arr[i];
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (small > arr[j]) {
        small = arr[j];
        index = j;
      }

      if (j == arr.length - 1) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
      }
    }
  }
  return arr;
}

console.log(sort([5, 4, 3, 1, 2, 6]));
