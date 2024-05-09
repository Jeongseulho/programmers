const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim().split(' ').map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  _shiftDown() {
    let targetIdx = 0;
    let leftChildIdx = 1;
    let rightChildIdx = 2;
    let smallerChildIdx = leftChildIdx;

    while (smallerChildIdx < this.heap.length) {
      if (
        rightChildIdx < this.heap.length &&
        this.heap[rightChildIdx] < this.heap[leftChildIdx]
      ) {
        smallerChildIdx = rightChildIdx;
      } else {
        smallerChildIdx = leftChildIdx;
      }

      if (this.heap[smallerChildIdx] >= this.heap[targetIdx]) break;

      [this.heap[targetIdx], this.heap[smallerChildIdx]] = [
        this.heap[smallerChildIdx],
        this.heap[targetIdx],
      ];

      targetIdx = smallerChildIdx;
      leftChildIdx = targetIdx * 2 + 1;
      rightChildIdx = leftChildIdx + 1;
      smallerChildIdx = leftChildIdx;
    }
  }

  push(newItem) {
    this.heap.push(newItem);
    let targetIdx = this.heap.length - 1;

    while (targetIdx > 0) {
      const parentIdx = (targetIdx - 1) >> 1;
      const parent = this.heap[parentIdx];
      if (newItem >= parent) break;
      this.heap[targetIdx] = parent;
      targetIdx = parentIdx;
    }
    this.heap[targetIdx] = newItem;
  }

  pop() {
    const lastItem = this.heap.pop();
    if (this.heap.length) {
      const minItem = this.heap[0];
      this.heap[0] = lastItem;
      this._shiftDown(this.heap);
      return minItem;
    }
    return lastItem;
  }
}

const N = input[0][0];
const M = input[0][1];
const adjList = Array.from({ length: N + 1 }, () => []);
const inDegree = Array.from({ length: N + 1 }, () => 0);
for (const [from, to] of input.slice(1)) {
  adjList[from].push(to);
  inDegree[to]++;
}

const minHeap = new MinHeap();

for (let node = 1; node <= N; node++) {
  if (inDegree[node] === 0) {
    minHeap.push(node);
  }
}

const sortedVisit = [];
while (minHeap.heap.length) {
  const node = minHeap.pop();
  sortedVisit.push(node);

  for (const adjNode of adjList[node]) {
    inDegree[adjNode]--;
    if (inDegree[adjNode] === 0) minHeap.push(adjNode);
  }
}

console.log(sortedVisit.join(' '));
