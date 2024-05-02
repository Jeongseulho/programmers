function solution(n, build_frame) {
    let ans = [];
    const PILLAR = 0;
    const PLATE = 1;
    
    const checkPillar = (px, py, ans) => {
        // 기둥이 바닥 위에 있으면 가능
        if (py === 0) return true;

        // 기둥 아래 기둥 확인
        const onPillar = ans.some(([x, y, frame]) => frame === PILLAR && x === px && y === py - 1);
        if (onPillar) return true;

        // 기둥 아래 판 확인
        const onPlate = ans.some(([x, y, frame]) => 
                                         frame === PLATE && (x === px || x === px - 1) && y === py);
        if (onPlate) return true;

        return false;
    }
    
    const checkPlate = (px, py, ans) => {
        // 판 아래 기둥 확인
        const onPillar = ans.some(([x, y, frame]) => 
                                  (frame === PILLAR && (x === px || x === px + 1) && y === py - 1));
        if(onPillar) return true;
        
        // 사이에 판 확인
        const onLeftPlate = ans.some(([x, y, frame]) => frame === PLATE && x === px - 1 && y === py);
        const onRightPlate = ans.some(([x, y, frame]) => frame === PLATE && x === px + 1 && y === py);
        if(onLeftPlate && onRightPlate) return true;
        
        return false;
    }
    
    const canRemove = (newAns) => {
        return newAns.every(([x, y, frame]) => frame === PILLAR ? 
                            checkPillar(x, y, newAns) : 
                            checkPlate(x, y, newAns));
    }
    
    const removePillar = (px, py) => {
        let tempAns = ans.filter(([x, y, frame]) => !(frame === PILLAR && x === px && y === py));
        if (canRemove(tempAns)) ans = tempAns;
    }
    
    const removePlate = (px, py) => {
        let tempAns = ans.filter(([x, y, frame]) => !(frame === PLATE && x === px && y === py));
        if (canRemove(tempAns)) ans = tempAns;
    }
    
    build_frame.forEach(([x, y, frame, isInstall]) => {
        if (frame === PILLAR) {
            if (isInstall && checkPillar(x, y, ans)) ans.push([x, y, PILLAR]);
            else if (!isInstall) removePillar(x, y);
        } else {
            if (isInstall && checkPlate(x, y, ans)) ans.push([x, y, PLATE]);
            else if (!isInstall) removePlate(x, y);
        }
    });
    
    return ans.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });
}
