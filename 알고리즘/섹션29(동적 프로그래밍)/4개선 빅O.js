// O(n)으로 줄일수 있다.

// 동적 프로그래밍의 핵심은 한문제를 풀때 그 문제를 더 작은 하위 문제들로 나누고
// 각각을 한번 이상 풀어야 할때 앞에서 계산한 값을 저장해서
//  같은 하위문제를 다시 풀지 않는것이다.

// 지금 한건 위에서 아래로 내려가는 구조이고
//  아래에서 위로 올라오는 구조도 있다.

// 방금 한 방법 : 메모이제이션
// 새로운 방법 : 타뷸레이션
// 보통은 루프와 같이 순환을 통해서 작업을 한다.
// 가장 작은 하위 문제를 푼 다음에 그 결과를 테이블에 저장한다.
