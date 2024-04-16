function solution(orders, course) {
    const ans = [];
    
    const combination = (comb, rests, output, n) => {
        if (comb.length === n) {
            return output.push(comb.sort().join(''));
        }
        rests.forEach((ele, idx) => {
            combination([...comb, ele], rests.slice(idx + 1), output, n)
        })
    }
    
    const courseList = {};
    course.forEach((ele) => {
        courseList[ele] = new Array();
    })
    
    for (let n in courseList) {
        for (const order of orders) {
            combination([], order.split(''), courseList[n], Number(n));
        }
        const caseCnt = new Map();
        courseList[n].forEach((course) => {
            if (caseCnt.has(course)) caseCnt.set(course, caseCnt.get(course) + 1)
            else caseCnt.set(course, 1);
        })
        let maxCnt = Math.max(...caseCnt.values());
        if (maxCnt < 2) continue;
        
        let maxCntCourse = [];
        for (const courseCnt of caseCnt) {
            const [course, cnt] = courseCnt;
            if (cnt === maxCnt) {
                maxCntCourse.push(course);
            }
        }
        ans.push(...maxCntCourse);
    }
    return ans.sort();
}