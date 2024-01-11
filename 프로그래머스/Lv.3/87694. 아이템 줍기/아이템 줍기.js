function solution(rectangle, characterX, characterY, itemX, itemY) {
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    const doubleRec = rectangle.map((rec) => rec.map((point) => point * 2));
    // 상, 하, 좌, 우
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    const ground = Array.from({length : 102}, () => new Array(102).fill(0))
    
    doubleRec.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1; i <= x2; i++) {
          for (let j = y1; j <= y2; j++) {
            if (i === x1 || i === x2 || j === y1 || j === y2) {
              if (ground[i][j] === 0) ground[i][j] = 1;
            } else {
              ground[i][j] = 2;
            }
          }
        }
    });
    
    ground[characterX][characterY] = 0;
    
    const needVisit = [[characterX, characterY, 0]]
    while(needVisit.length !== 0) {
        const [x, y, cnt] = needVisit.shift();
        if(x === itemX && y === itemY) return cnt/2;
        
        for(let i = 0; i < 4; i++) {
            const nx = dx[i] + x;
            const ny = dy[i] + y;
            if(ground[nx][ny] === 1) {
                needVisit.push([nx, ny, cnt + 1]);
                ground[nx][ny] = 0;
            }
        }
    }
}