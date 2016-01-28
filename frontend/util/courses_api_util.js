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
	},

  fetchCourse: function (courseId) {
    $.ajax({
      type: "GET",
      url: "api/courses/" + courseId,
      dataType: "json",
      success: function (course) {
        CourseActions.receiveCourse(course);
      },
    });
  }
};

window.CoursesApiUtil = CoursesApiUtil;

module.exports = CoursesApiUtil;
