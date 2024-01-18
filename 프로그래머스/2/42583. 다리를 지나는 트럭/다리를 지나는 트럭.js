function solution(bridge_length, weight, truck_weights) {
    const bridge = new Array(bridge_length).fill(0);
    let weightSum = 0;
    const maxWeight = weight;
    const waitTrucks = truck_weights;
    const completeTrucks = [];
    let time = 0;
    
    while(waitTrucks.length) {
        time++;
        
        bridge.unshift(0);
        weightSum -= bridge.pop();
        
        if (((weightSum + waitTrucks[0]) <= maxWeight)) {
            bridge[0] = waitTrucks.shift();
            weightSum += bridge[0]
        }
        
    }

    for (let i = 0; i < bridge.length; i++) {
        if (bridge[i] > 0) {
            time += (bridge.length - i)
            break;
        }
    }
    return time;
}