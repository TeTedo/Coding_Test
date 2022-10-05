//https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  let answer = [];
  if (total % num == 0) {
    answer.push(total / num);
    for (let i = 1; i < num / 2; i++) {
      answer.unshift(total / num - i);
      answer.push(total / num + i);
    }
  } else {
    for (let i = 1; i <= num / 2; i++) {
      answer.unshift(Math.ceil(total / num - i));
      answer.push(Math.ceil(total / num + i) - 1);
    }
  }
  return answer;
}

//다른사람 풀이 본 후
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}
