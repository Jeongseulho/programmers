function solution(users, emoticons) {
    
    // 할인율 경우의 수
    const allCase = [];
    const getCase = (comb, rests, n) => {
        if(comb.length === n) return allCase.push(comb);
        
        rests.forEach((ele, idx) => {
            getCase([...comb, ele], rests, n);
        })
    }
    getCase([], [10, 20, 30, 40], emoticons.length);
    
    let maxPlusUser = 0;
    let maxProfit = 0;
    // 각 경우에서 가입자와 판매액
    for(const oneCase of allCase) {
   
        let profit = 0;
        let plusUser = 0;
        // 각 사용자에 대하여 계산
        for(const [buySalePercent, maxPriceSum] of users) {
            
            // 사용자 별 이모티콘 구매 여부 및 구독 여부
            let profitPerUser = 0;
            let isJoin = false;
            for(let j = 0; j < oneCase.length; j++) {
                if(buySalePercent <= oneCase[j]) {
                    const sale = emoticons[j] * (oneCase[j] / 100);
                    profitPerUser += emoticons[j] - sale;
                    if(profitPerUser >= maxPriceSum) {
                        plusUser += 1;
                        isJoin = true;
                        break;
                    }
                }
            }
            if(!isJoin) profit += profitPerUser;
            
        }

        if(plusUser > maxPlusUser) {
            maxPlusUser = plusUser;
            maxProfit = profit;
        } else if (maxPlusUser === plusUser) {
            maxProfit = Math.max(profit, maxProfit);
        } 
    }
    
    return [maxPlusUser, maxProfit]
}