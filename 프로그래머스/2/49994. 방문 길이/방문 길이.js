function solution(dirs) {
    const visited = new Set();
    const dot = Array.from({ length : 11 }, () => Array(11).fill(false));
    const move = {
        'U' : [-1, 0],
        'D' : [1, 0],
        'R' : [0, 1],
        'L' : [0, -1]
    }
    
    let [ci, cj] = [5, 5];
    for(const dir of dirs) {
        const ni = ci + move[dir][0];
        const nj = cj + move[dir][1];
        if(ni > -1 && ni < 11 && nj > -1 && nj < 11) {
            visited.add(JSON.stringify([[ci, cj], [ni, nj]]));
            visited.add(JSON.stringify([[ni, nj], [ci, cj]]));
            ci = ni;
            cj = nj;
        }
    }
    
    return visited.size / 2;
}