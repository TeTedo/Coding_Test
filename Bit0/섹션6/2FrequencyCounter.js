// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Restrictions:

// Time - O(n)

// Space - O(n)
function areThereDuplicates(...arg) {
  const obj = {};
  for (let i = 0; i < arg.length; i++) {
    if (obj[arg[i]]) {
      return true;
    } else {
      obj[arg[i]] = 1;
    }
  }
  return false;
}
//시간복잡도 O(n)
//공간복잡도 O(n)
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

// 다중 포인터
function areThereDuplicates1(...arg) {
  let i = 0;
  let j = 1;
  arg = arg.sort((a, b) => a > b);
  while (j < arg.length) {
    if (arg[i] === arg[j]) {
      return true;
    } else {
      i++;
      j++;
    }
  }
  return false;
}
//시간복잡도 O(nlog(n))
//공간복잡도 1
// one Line
function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}
//시간복잡도O(n)
//공간복잡도O(n)
