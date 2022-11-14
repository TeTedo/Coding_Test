// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const temp = obj[keys[i]];
    if (temp === +temp) {
      obj[keys[i]] = temp.toString();
    } else {
      stringifyNumbers(obj[keys[i]]);
    }
  }
  return obj;
}
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
