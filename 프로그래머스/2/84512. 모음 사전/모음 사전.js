function solution(word) {
  const dict = [];
  for (let len = 1; len < 6; len++) dfs(0, dict, '', len);
  dict.sort();
  return dict.indexOf(word) + 1;
}

function dfs(n, dict, word, len) {
  const alphas = ['A', 'E', 'I', 'O', 'U'];

  if (n === len) {
    dict.push(word);
    return;
  }
  alphas.forEach((alpha) => {
    dfs(n + 1, dict, word + alpha, len);
  });
}