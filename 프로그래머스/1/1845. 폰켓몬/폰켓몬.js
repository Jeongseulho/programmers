function solution(nums) {
    const selectCnt = nums.length / 2;
    const numSet = new Set(nums);
    return Math.min(selectCnt, numSet.size)
}