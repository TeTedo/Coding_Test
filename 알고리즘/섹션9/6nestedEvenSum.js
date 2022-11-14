// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let num = 0;
  const keys = Object.keys(obj);
  for (const value of keys) {
    if (obj[value] instanceof Object) {
      num += nestedEvenSum(obj[value]);
    } else {
      if (obj[value] % 2 === 0) {
        num += obj[value];
      }
    }
  }
  return num;
  // 객체 순회
  // 객체면 재귀 돌리기
  // 짝수면 값 추가
  // return 추가할 값
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
