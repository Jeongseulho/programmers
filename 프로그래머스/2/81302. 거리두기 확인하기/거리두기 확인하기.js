function solution(places) {
    const ans = [];

    const di = [-1, 1, 0, 0];
    const dj = [0, 0, -1, 1];

    const checkSeat = (place, ci, cj) => {
        for (let dir = 0; dir < 4; dir++) {
            const ni = di[dir] + ci;
            const nj = dj[dir] + cj;
            if (ni >= 0 && ni < 5 && nj >= 0 && nj < 5) {
                if (place[ni][nj] === 'P') {
                    return false;
                }
                if (place[ni][nj] === 'O') {
                    for (let dir2 = 0; dir2 < 4; dir2++) {
                        const nni = di[dir2] + ni;
                        const nnj = dj[dir2] + nj;
                        if (nni >= 0 && nni < 5 && nnj >= 0 && nnj < 5 && 
                            place[nni][nnj] === 'P' && 
                            (nni !== ci || nnj !== cj)) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    };

    const checkPlace = (place) => {
        for (let ci = 0; ci < 5; ci++) {
            for (let cj = 0; cj < 5; cj++) {
                if (place[ci][cj] === 'P') {
                    if (!checkSeat(place, ci, cj)) {
                        ans.push(0);
                        return;
                    }
                }
            }
        }
        ans.push(1);
    };

    places.forEach(place => {
        checkPlace(place);
    });

    return ans;
}
