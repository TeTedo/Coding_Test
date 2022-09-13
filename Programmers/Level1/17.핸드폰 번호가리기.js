// https://school.programmers.co.kr/learn/courses/30/lessons/12948

// (?=)
// 긍정형 전방탐색
// (?!)
// 부정형 전방탐색
// (?<=)
// 긍정형 후방탐색
// (?<!)
// 부정형 후방탐색

function solution(phone_number) {
  var answer = "";
  answer = phone_number.replace(/.(?=....)/g, "*");
  return answer;
}
