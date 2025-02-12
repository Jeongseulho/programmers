function solution(people, limit) {
    people.sort((a, b) => a - b);
    let [l, r] = [0, people.length - 1];
    let boatCnt = 0;
    while(l <= r) {
        const small = people[l];
        const big = people[r];
        if(small + big <= limit) {
            l += 1;
            r -= 1;
        } else {
            r -= 1;
        } 
        boatCnt += 1;
    }
    
    return boatCnt;
}