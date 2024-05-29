function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    for(let city of cities) {
        city = city.toUpperCase();
        if(cache.includes(city)) time += 1;
        else time += 5;
        cache = cache.filter((cachedCity) => cachedCity !== city);
        cache.unshift(city);
        if(cache.length > cacheSize) cache.pop();
    }
    return time;
}