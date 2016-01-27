var CourseActions = require('../actions/course_actions');

var CoursesApiUtil = {
	fetchCourses: function () {
		$.ajax({
			type: "GET",
			url: "api/courses/",
			dataType: "json",
			success: function (courses) {
				CourseActions.receiveAll(courses);
			},
		});
	}
};

window.CoursesApiUtil = CoursesApiUtil;

module.exports = CoursesApiUtil;
