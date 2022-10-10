//https://school.programmers.co.kr/learn/courses/30/lessons/120866#

function solution(board) {
  const boomIndex = {};
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board.length; k++) {
      if (board[i][k] == 1) {
        boomIndex[i - 1 + "" + (k - 1)] = 1;
        boomIndex[i - 1 + "" + k] = 1;
        boomIndex[i - 1 + "" + (k + 1)] = 1;
        boomIndex[i + "" + (k - 1)] = 1;
        boomIndex[i + "" + k] = 1;
        boomIndex[i + "" + (k + 1)] = 1;
        boomIndex[i + 1 + "" + (k - 1)] = 1;
        boomIndex[i + 1 + "" + k] = 1;
        boomIndex[i + 1 + "" + (k + 1)] = 1;
      }
    }
  }
  return (
    board.length ** 2 -
    Object.keys(boomIndex).filter(
      (v) => +v >= 0 && v[0] < board.length && v[1] < board.length
    ).length
  );
}

// 테스트케이스 7만 실패
