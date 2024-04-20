

function solution(n, costs) {
    let minCost = 0;
    const parent = Array.from({length : n}, (_, idx) => idx );
    
    const getParent = (x) => {
      if(parent[x] === x) return x;
      return parent[x] = getParent(parent[x]);
    }

    const unionParent = (a, b) => {
      const n1 = getParent(a);
      const n2 = getParent(b);
      n1 < n2 ? (parent[n2] = n1) : (parent[n1] = n2);
    }

    const isSameParent = (a, b) => {
      return getParent(a) === getParent(b);
    }
  
    costs.sort((a, b) => a[2] - b[2]);
  
    for(const [from, to, cost] of costs) {
        if(!isSameParent(from, to)) {
        minCost += cost;
        unionParent(from, to);
        }
    }
  
  return minCost;
}