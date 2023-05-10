function solution(nums) {
  const selectCnt = nums.length / 2;
  const setNums = new Set(nums);
  if (setNums.size > selectCnt) {
    return selectCnt;
  } else {
    return setNums.size;
  }
}
