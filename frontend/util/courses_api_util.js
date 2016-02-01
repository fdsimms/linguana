var CourseActions = require('../actions/course_actions');

var CoursesApiUtil = {
	fetchCourses: function (lngName) {
		$.ajax({
			type: "GET",
			url: "api/courses/?lngName=" + lngName,
			dataType: "json",
			success: function (courses) {
        var coursesPayload = {};
        courses.forEach(function (course) {
          coursesPayload[course.id] = course;
        });
				CourseActions.receiveAll(coursesPayload);
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
