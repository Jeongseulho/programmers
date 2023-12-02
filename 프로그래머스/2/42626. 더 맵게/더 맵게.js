function shiftDown(heap) {
  let targetIdx = 0;
  let leftChildIdx = 1;
  let rightChildIdx = 2;
  let smallerChildIdx = leftChildIdx;
  while (smallerChildIdx < heap.length) {
    if (
      rightChildIdx < heap.length &&
      heap[rightChildIdx] < heap[leftChildIdx]
    ) {
      smallerChildIdx = rightChildIdx;
    } else {
      smallerChildIdx = leftChildIdx;
    }

    if (heap[smallerChildIdx] >= heap[targetIdx]) break;

    [heap[targetIdx], heap[smallerChildIdx]] = [
      heap[smallerChildIdx],
      heap[targetIdx],
    ];
    targetIdx = smallerChildIdx;
    leftChildIdx = targetIdx * 2 + 1;
    rightChildIdx = leftChildIdx + 1;
    smallerChildIdx = leftChildIdx;
  }
}

function minHeapPush(minHeap, item) {
    minHeap.push(item);
    let targetIdx = minHeap.length - 1;
    
    while(targetIdx > 0) {
        const parIdx = (targetIdx - 1) >> 1;
        const par = minHeap[parIdx];
        if (item < par) {
            minHeap[targetIdx] = par;
            targetIdx = parIdx;
            continue;
        }
        break;
    }
    minHeap[targetIdx] = item;
}

function minHeapPop(heap) {
  const lastItem = heap.pop();
  if (heap.length) {
    const minItem = heap[0];
    heap[0] = lastItem;
    shiftDown(heap);
    return minItem;
  }
  return lastItem;
}

function solution(scoville, K) {
    const minHeap = [];
    for (const food of scoville) {
        minHeapPush(minHeap, food);
    }
    let cnt = 0;
    while(minHeap[0] < K) {
        if (minHeap.length === 1) {
            return -1;
        }
        const curFood = minHeapPop(minHeap);
        const nextFood = minHeapPop(minHeap);
        const mixedFood = curFood + nextFood * 2
        minHeapPush(minHeap, mixedFood);
        cnt += 1;
    }
    
    return cnt;
}

[1,1,1,1,1], K=3, 3