function solution(stones, k) {
    const isPossible = (stones, k, cnt) => {
        let emptyCnt = 0;
        for (let j = 0; j < stones.length; j++) {
            if (stones[j] - cnt < 1) {
                emptyCnt++;
                if (emptyCnt >= k) return false;
            }
            else emptyCnt = 0;
        }
        return true;
    }
    
    let s = 1;
    let e = 200000000;
    
    while (s <= e) {
        const mid = Math.floor((s + e) / 2);
        if (isPossible(stones, k, mid)) s = mid + 1;
        else e = mid - 1;
    }
    
    return s;
}
