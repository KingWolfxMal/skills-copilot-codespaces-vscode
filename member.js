function skillsMember() {
    // Path: member.js
    var member = {
        skills: ['JavaScript', 'HTML', 'CSS'],
        addSkill: function (skill) {
            this.skills.push(skill);
        }
    };
    return member;
}