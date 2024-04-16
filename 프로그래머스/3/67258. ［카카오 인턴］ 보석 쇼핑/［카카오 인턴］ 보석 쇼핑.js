function solution(gems) {
    const totalGemCnt = new Set(gems).size;
    const ans = [1, gems.length];
    
    let s = 0;
    let e = 0;
    const bag = new Map();
    bag.set(gems[0], 1);
    
    while(e < gems.length) {
        if (bag.size === totalGemCnt) {
            if (ans[1] - ans[0] > e - s) {
                ans[0] = s + 1;
                ans[1] = e + 1;
            }
            const gem = gems[s];
            const gemCnt = bag.get(gem);
            
            if (gemCnt === 1) bag.delete(gem);
            else bag.set(gem, gemCnt - 1);
            
            s += 1;
            
        } else {  
            e += 1;
            const gem = gems[e]
            const gemCnt = bag.get(gem);
            bag.set(gem, gemCnt ? gemCnt + 1 : 1);
        }
    }
    return ans;
}