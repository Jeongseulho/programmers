function solution(n, cores) {
    var lowTime = 0;
    var highTime = n * Math.max(...cores) / cores.length;
    
    while(lowTime <= highTime) {
        var midTime = Math.floor((lowTime + highTime) / 2);
        
        var startTask = cores.reduce((acc, cur) => acc + Math.floor(midTime / cur), cores.length);
        
        if(n <= startTask) highTime = midTime - 1;
        else lowTime = midTime + 1;
    }
    
    var startTask = cores.reduce((acc, cur) => acc + Math.floor((lowTime - 1) / cur), cores.length);
    
    for(let coreNum = 0; coreNum < cores.length; coreNum++) {
        if(lowTime % cores[coreNum] === 0) {
            startTask += 1;
            if(startTask === n) return coreNum + 1;
        }
    }
}
