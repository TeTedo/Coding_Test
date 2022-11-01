// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  let pointer = 0;
  //첫번째 글자 찾기
  //첫번째 다음 글자중 두번째 글자찾기
  // 반복
  for (let i = 0; i < str2.length; i++) {
    if (str1[pointer] === str2[i]) {
      // 마지막글자인경우 return true
      if (pointer === str1.length - 1) {
        return true;
      }
      pointer++;
    }
  }
  return false;
}
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
