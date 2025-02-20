function solution(skill, skill_trees) {
    let cnt = 0;
    for(const skill_tree of skill_trees) {
        let isPossible = true;
        const impossibleSkills = skill.split('').slice(1);
        let possibleSkill = skill[0];
        for(const skill of skill_tree) {
            if(skill === possibleSkill) {
                possibleSkill = impossibleSkills.shift();
            } else if(impossibleSkills.includes(skill)) {
                isPossible = false;
                break;
            }
        }
        
        if(isPossible) cnt += 1;
    }
    
    return cnt;
}