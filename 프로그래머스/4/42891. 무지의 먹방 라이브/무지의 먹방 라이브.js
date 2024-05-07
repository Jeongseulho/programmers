// https://www.youtube.com/watch?v=zpz8SMzwiHM
function solution(food_times, k) {
    let n = food_times.length;
    let foods = food_times.map((time, index) => ({index: index + 1, time}));
    foods.sort((a, b) => a.time - b.time);

    let prevTime = 0;
    for (let i = 0; i < n; i++) {
        let diff = foods[i].time - prevTime;
        if (diff !== 0) {
            let total = diff * (n - i);
            if (k < total) {
                foods = foods.slice(i).sort((a, b) => a.index - b.index);
                return foods[k % (n - i)].index;
            }
            k -= total;
            prevTime = foods[i].time;
        }
    }

    return -1;
}