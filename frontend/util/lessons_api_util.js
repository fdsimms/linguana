var LessonActions = require('../actions/lesson_actions');

var LessonsApiUtil = {
	fetchLessons: function (lessonId) {
		$.ajax({
			type: "GET",
			url: "api/skills/" + lessonId + "/lessons",
			dataType: "json",
			success: function (lessons) {
				LessonActions.receiveAll(lessons);
			},
		});
	},

  fetchLesson: function (lessonId) {
    $.ajax({
      type: "GET",
      url: "api/lessons/" + lessonId,
      dataType: "json",
      success: function (lesson) {
        LessonActions.receiveLesson(lesson);
      },
    });
  }
};

window.LessonsApiUtil = LessonsApiUtil;

module.exports = LessonsApiUtil;
