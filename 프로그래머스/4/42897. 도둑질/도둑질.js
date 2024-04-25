function solution(money) {
    // 첫번째 집 털기
    const dp1 = new Array(money.length).fill(0);
    dp1[0] = dp1[1] = money[0];
    
    for(let i = 2; i < money.length - 1; i++) {
        dp1[i] = Math.max(dp1[i - 2] + money[i], dp1[i - 1])
    }
          
    // 첫번째 집 안털기
    const dp2 = new Array(money.length).fill(0);
    dp2[1] = money[1];
    
    for(let i = 2; i < money.length; i++) {
        dp2[i] = Math.max(dp2[i - 2] + money[i], dp2[i - 1])
    }
    
    return Math.max(dp1.at(-2), dp2.at(-1))
}