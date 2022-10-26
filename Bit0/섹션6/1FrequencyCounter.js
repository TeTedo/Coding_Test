// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
  const obj1 = {};
  num1 = num1.toString();
  for (let i = 0; i < num1.length; i++) {
    obj1[num1[i]] ? (obj1[num1[i]] += 1) : (obj1[num1[i]] = 1);
  }
  num2 = num2.toString();
  for (let j = 0; j < num2.length; j++) {
    if (obj1[num2[j]]) {
      obj1[num2[j]] -= 1;
    } else {
      return false;
    }
  }
  return true;
}
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
