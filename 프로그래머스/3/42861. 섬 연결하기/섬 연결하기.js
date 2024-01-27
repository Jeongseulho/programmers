const getParent = (parent, x) => {
  if(parent[x] === x) return x;
  return parent[x] = getParent(parent, parent[x]);
}

const unionParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  if(n1 < n2) return parent[n2] = n1;
  else return parent[n1] = n2;
}

const isSameParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  if(n1 === n2) return true;
  else return false;
}

function solution(n, costs) {
  let answer = 0;
  const parent = Array.from({length : n}, (_, idx) => idx );
  
  costs.sort((a, b) => a[2] - b[2]);
  
  for(const cost of costs) {
    if(!isSameParent(parent, cost[0], cost[1])) {
      answer += cost[2];
      unionParent(parent, cost[0], cost[1]);
    }
  }
  
  return answer;
}