function solution(cacheSize, cities) {
    let cache = [];
    let ans = 0;
    for (let city of cities) {
        city = city.toUpperCase();
        if (cache.includes(city)) {
            ans += 1;
        } else {
            ans += 5;
        }
        cache = cache.filter((cachedCity) => cachedCity !== city)
        cache.push(city);
        if (cache.length > cacheSize) cache.shift();
    }
    return ans;
}