function solution(absolutes, signs) {
  var answer;
  let index = 0;
  absolutes.reduce((pre, cur) => {
    if (signs[index]) {
      pre += cur;
    } else {
      pre += -cur;
    }
    index++;
    return (answer = pre);
  }, 0);
  return answer;
}
