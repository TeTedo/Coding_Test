// arr num가 있다.
// arr안에 있는 요소중 연속된 num개만큼 뽑아 더하는데
// 더한값중 가장 큰값은/

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
//시간복잡도 O(n^2)
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
