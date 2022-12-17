function solution(routes) {
  //진입이 제일 큰곳에 설치
  // 나가는 곳이 진입하기 전이면 그 차 진입에 설치하고 answer + 1
  // 반복
  var answer = 1;
  routes = routes.sort((a, b) => b[0] - a[0]);
  let current = routes[0][0];
  for (let i = 1; i < routes.length; i++) {
    if (routes[i][1] < current) {
      answer++;
      current = routes[i][0];
    }
  }
  return answer;
}
