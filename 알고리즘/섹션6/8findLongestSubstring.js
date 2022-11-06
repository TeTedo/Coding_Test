// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)
//반복되는 글자 사이에 들어가있는 글자 중 가장 긴 갯수
function findLongestSubstring(str) {
  let obj = {};
  let num = 0;
  let start = 0;
  // 중복위치 사이 찾기
  for (let i = 0; i < str.length; i++) {
    const index = obj[str[i]];
    if (index) {
      // 중복점 설정
      start = Math.max(start, index);
    }
    // 사이 갯수가 가장 많은거 찾기
    num = Math.max(num, i - start + 1);
    obj[str[i]] = i + 1;
  }
  return num;
}
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
