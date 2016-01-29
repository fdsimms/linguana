var SkillActions = require('../actions/skill_actions');

var SkillsApiUtil = {
	fetchSkills: function (courseId) {

		$.ajax({
			type: "GET",
			url: "api/courses/" + courseId + "/skills",
			dataType: "json",
			success: function (skills) {
        var skillsPayload = {};
        skills.forEach(function (skill) {
          skillsPayload[skill.id] = skill;
        });
				SkillActions.receiveAll(skillsPayload);
			},
		});
	},

  fetchSkill: function (skillId) {
    $.ajax({
      type: "GET",
      url: "api/skills/" + skillId,
      dataType: "json",
      success: function (skill) {
        SkillActions.receiveSkill(skill);
      },
    });
  }
};

window.SkillsApiUtil = SkillsApiUtil;

module.exports = SkillsApiUtil;
