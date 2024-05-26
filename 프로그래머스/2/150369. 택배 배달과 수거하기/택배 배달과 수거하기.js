function solution(cap, n, deliveries, pickups) {
    const findLastNonZeroIndex = (arr) => {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] > 0) return i;
            else arr.pop();
        }
        return -1;
    };

    const moveItems = (arr, cap, index) => {
        let capacity = cap;
        for (let i = index; i >= 0; i--) {
            if (arr[i] > capacity) {
                arr[i] -= capacity;
                break;
            } else {
                capacity -= arr[i];
                arr[i] = 0;
            }
        }
    };
    
    let totalDistance = 0;
    let lastDeliveryIndex = findLastNonZeroIndex(deliveries);
    let lastPickupIndex = findLastNonZeroIndex(pickups);

    while (lastDeliveryIndex !== -1 || lastPickupIndex !== -1) {
        if (lastDeliveryIndex !== -1) moveItems(deliveries, cap, lastDeliveryIndex);
        if (lastPickupIndex !== -1) moveItems(pickups, cap, lastPickupIndex);
        
        const maxIndex = Math.max(lastDeliveryIndex, lastPickupIndex);
        totalDistance += (maxIndex + 1) * 2;
        
        lastDeliveryIndex = findLastNonZeroIndex(deliveries);
        lastPickupIndex = findLastNonZeroIndex(pickups);
    }
    
    return totalDistance;
}