//https://school.programmers.co.kr/learn/courses/30/lessons/68644
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      if (answer.indexOf(numbers[i] + numbers[k]) == -1) {
        answer.push(numbers[i] + numbers[k]);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

// 다른사람 풀이 본후
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
// new Set으로 배열의 중복을 제거 할수 있다.
// 중복제거 후 배열의 형태로 다시 변환해 줘야 한다.
