// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  if (arr.length === 0) return 1;
  const num = arr.splice(0, 1);
  return num * productOfArray(arr);
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
