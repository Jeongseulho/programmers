from heapq import heappush, heappop, heapify

def solution(operations):
    heap = []
    for operation in operations:
        if "I" in operation:
            num = int(operation.split()[1])
            heappush(heap, num)
        elif "-" in operation:
            if heap:
                heappop(heap)
        else:
            if heap:
                max_num = max(heap)
                heap.remove(max_num)
                heapify(heap)
    
    if heap:
        return [max(heap), heap[0]]
    else:
        return [0, 0]
