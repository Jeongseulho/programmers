function solution(life, dungeons) {
  const N = dungeons.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(life, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (life >= dungeons[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(life - dungeons[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(life, 0);
  return ans;
}
