function solution(bridge_length, weight, truck_weights) {
    const bridge = new Array(bridge_length).fill(0);
    let weightSum = 0;
    const maxWeight = weight;
    const waitTrucks = truck_weights;
    const passTrucks = [];
    let time = 0;
    
    while(waitTrucks.length !== 0) {
        const lastTruck = bridge.shift();
        weightSum -= lastTruck;
        bridge.push(0);
        if (waitTrucks[0] + weightSum <= maxWeight) {
            const firstTruck = waitTrucks.shift();
            bridge[bridge_length - 1] = firstTruck;
            weightSum += firstTruck;
        }
        
        time += 1;
    }
    
    let lastTruckIdx = -1;
    for (let i = 0; i < bridge_length; i++) {
        if (bridge[i] !== 0) {
            lastTruckIdx = i;
        }
    }
    
    if (lastTruckIdx === -1) {
        return time;
    }
    return time + lastTruckIdx + 1;
    
}