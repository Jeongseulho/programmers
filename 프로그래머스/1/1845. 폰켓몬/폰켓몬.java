import java.util.HashSet;

class Solution {
    public int solution(int[] nums) {
        HashSet<Integer> pocketSet = new HashSet<>();
        
        for(int num : nums) {
            pocketSet.add(num);
        }
        
        return Math.min(pocketSet.size(), nums.length / 2);
    }
}