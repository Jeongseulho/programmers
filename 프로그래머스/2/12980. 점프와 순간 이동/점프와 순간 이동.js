function solution(n)
{
    let dist = n;
    let use = 0;
    while(dist !== 0) {
        if(dist % 2 === 0) dist /= 2;
        else {
            dist -= 1;
            use += 1;
        }
    }
    
    return use;
}