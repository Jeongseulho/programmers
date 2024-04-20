function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]); // 작업 시작 시간 기준 정렬
    
    const workTime = [];
    let time = 0;
    let index = 0;  // 현재 처리 중인 작업 인덱스
    const priorityQueue = []; // 작업 소요 시간 기준 정렬을 위한 우선순위 큐 (여기서는 배열 사용)

    while (workTime.length < jobs.length) {
        // 현재 시간 이전에 도착한 모든 작업을 우선순위 큐에 넣음
        while (index < jobs.length && jobs[index][0] <= time) {
            priorityQueue.push(jobs[index++]);
            priorityQueue.sort((a, b) => a[1] - b[1]); // 작업 시간 기준 정렬
        }
        
        if (priorityQueue.length > 0) {
            const [start, duration] = priorityQueue.shift();
            time += duration;
            workTime.push(time - start);
        } else {
            time = jobs[index][0]; // 다음 작업까지 시간을 바로 점프
        }
    }
    
    return Math.floor(workTime.reduce((acc, cur) => acc + cur, 0) / workTime.length);
}
