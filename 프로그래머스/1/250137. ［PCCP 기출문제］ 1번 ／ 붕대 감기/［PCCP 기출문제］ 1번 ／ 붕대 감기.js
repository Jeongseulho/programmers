function solution(bandage, health, attacks) {
    const endTime = attacks[attacks.length - 1][0];
    let maxHp = health;
    let curHp = health;
    let [castingTime, healPerS, bonusHeal] = bandage;
    let attackCnt = 0;
    let consecutiveCasting = 1;
    
    for(let t = 1; t <= endTime; t++) {
        const [attackTime, deal] = attacks[attackCnt];
        
        if(attackTime === t) {
            curHp -= deal;
            consecutiveCasting = 0;
            attackCnt += 1;
            if(curHp <= 0) return -1;
        } else {
            curHp += healPerS;
            consecutiveCasting += 1
            if(consecutiveCasting === castingTime) {
                curHp += bonusHeal;
                consecutiveCasting = 0;
            }
            if(curHp > maxHp) curHp = maxHp;
        }
    }
    
    return curHp;
}