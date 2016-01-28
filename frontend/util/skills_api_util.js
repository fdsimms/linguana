var CourseActions = require('../actions/skill_actions');

var SkillsApiUtil = {
	fetchCourses: function () {
		$.ajax({
			type: "GET",
			url: "api/skills/",
			dataType: "json",
			success: function (skills) {
				CourseActions.receiveAll(skills);
			},
		});
	},

  fetchCourse: function (skillId) {
    $.ajax({
      type: "GET",
      url: "api/skills/" + skillId,
      dataType: "json",
      success: function (skill) {
        CourseActions.receiveCourse(skill);
      },
    });
  }
};

window.SkillsApiUtil = SkillsApiUtil;

module.exports = SkillsApiUtil;
