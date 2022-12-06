// 내풀이
function solution(k, dungeons) {
  var answer = [];
  DFS(dungeons, k);
  function DFS(arr, k, count = 0) {
    if (!arr.length) {
      answer.push(count);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (k >= arr[i][0]) {
        DFS(arr.slice(0, i).concat(arr.slice(i + 1)), k - arr[i][1], count + 1);
      } else {
        answer.push(count);
      }
    }
  }
  return Math.max(...answer);
}

// 문제점 : DFS를 재귀로 불러오는 과정에서 slice,concat으로 시간복잡도 증가함

// 다른사람 풀이보고 해결

// 다른사람 풀이
function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }
  dfs(k, 0);
  return ans;
}
