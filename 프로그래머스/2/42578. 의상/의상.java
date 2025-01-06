import java.util.HashMap;

class Solution {
    public int solution(String[][] clothes) {
        HashMap<String, Integer> clothesCnt = new HashMap<>();

        for (String[] cloth : clothes) {
            String type = cloth[1];
            clothesCnt.put(type, clothesCnt.getOrDefault(type, 0) + 1);
        }

        int totalCases = 1;
        for (Integer cnt : clothesCnt.values()) {
            totalCases *= (cnt + 1);
        }

        return totalCases - 1;
    }
}
