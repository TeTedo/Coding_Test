// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  const answer = [];
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] instanceof Object) {
      if (collectStrings(obj[keys[i]]).length) {
        answer.push(...collectStrings(obj[keys[i]]));
      }
    } else {
      answer.push(obj[keys[i]]);
    }
  }
  return answer;
}
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
