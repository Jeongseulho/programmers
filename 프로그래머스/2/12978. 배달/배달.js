class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  getValue(i) {
    return this.heap[i][2];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  shiftUp(i) {
    while (i > 0 && this.getValue(this.parent(i)) > this.getValue(i)) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  shiftDown(i) {
    while (this.leftChild(i) < this.size()) {
      const minChild =
        this.rightChild(i) < this.size() &&
        this.getValue(this.rightChild(i)) < this.getValue(this.leftChild(i))
          ? this.rightChild(i)
          : this.leftChild(i);

      if (this.getValue(i) <= this.getValue(minChild)) break;
      this.swap(i, minChild);
      i = minChild;
    }
  }

  push(value) {
    this.heap.push(value);
    this.shiftUp(this.size() - 1);
  }

  pop() {
    if (this.isEmpty()) return;

    const min = this.heap[0];
    this.swap(0, this.size() - 1);
    this.heap.pop();
    this.shiftDown(0);
    return min;
  }
}

const dijkstra = (n, graph, startNode) => {
  const minDist = Array(n).fill(Infinity);
  minDist[startNode] = 0;
  const adjList = Array.from({ length: n}, () => []);

  graph.forEach(([from, to, weight]) => {
    adjList[from].push([to, weight]);
    adjList[to].push([from, weight]);
  });
    
  const priorityQueue = new MinHeap();
  priorityQueue.push([startNode, 0]);

  while (!priorityQueue.isEmpty()) {
    const [node, _] = priorityQueue.pop();

    adjList[node].forEach(([nextNode, weight]) => {
      if (minDist[nextNode] > minDist[node] + weight) {
        minDist[nextNode] = minDist[node] + weight;
        priorityQueue.push([nextNode, minDist[nextNode]]);
      }
    });
  }

  return minDist;
};

function solution(N, road, K) {
    const minDist = dijkstra(N + 1, road, 1);
    return minDist.filter((time) => time <= K).length;
}