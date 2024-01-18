function isMorePriorExist(waitQ, process) {
    return waitQ.some((waitProcess) => waitProcess.priority > process.priority)
}

function solution(priorities, location) {
    const waitQ = 
          new Array(priorities.length).fill(0)
    .map((_, idx) => ({ idx, priority : priorities[idx] }))
    let order = 0;
 
    while (waitQ.length !== 0) {
        const process = waitQ.shift()
        if (isMorePriorExist(waitQ, process)) {
            waitQ.push(process)
        } else {
            order += 1
            if (location === process.idx) {
                return order
            }
        }
    }
}