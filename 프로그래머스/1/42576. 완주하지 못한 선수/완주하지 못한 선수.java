import java.util.HashMap;

class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String, Integer> people = new HashMap<>();
        
        for (String startPerson : participant) {
            people.put(startPerson, people.getOrDefault(startPerson, 0) + 1);
        }

        for (String completedPerson : completion) {
            people.put(completedPerson, people.get(completedPerson) - 1);
        }
        
        for (String person : people.keySet()) {
            if (people.get(person) > 0) {
                return person;
            }
        }
        
        return "";
    }
}