// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum(arr, length) {
  if (arr.length < length) {
    return null;
  }
  // 초기값
  let maxSum = 0;
  let answer = 0;
  for (let i = 0; i < length; i++) {
    maxSum += arr[i];
    answer += arr[i];
  }
  // 뒤에꺼 더하고 앞에꺼 빼기
  for (let i = length; i < arr.length; i++) {
    maxSum = maxSum - arr[i - length] + arr[i];
    //값이 크면 적용
    if (maxSum > answer) answer = maxSum;
  }
  return answer;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
