var LessonActions = require('../actions/lesson_actions');

var LessonsApiUtil = {
	fetchLessons: function (lessonId) {
		$.ajax({
			type: "GET",
			url: "api/skills/" + lessonId + "/lessons",
			dataType: "json",
			success: function (lessons) {
        var lessonsPayload = {};
        lessons.forEach(function (lesson) {
          lessonsPayload[lesson.id] = lesson;
        });
  			LessonActions.receiveAll(lessonsPayload);
			},
		});
	},

  fetchLesson: function (lessonId, successCallback) {
    $.ajax({
      type: "GET",
      url: "api/lessons/" + lessonId,
      dataType: "json",
      success: function (lesson) {
        LessonActions.receiveLesson(lesson);
        successCallback && successCallback();
      },
    });
  }
};

window.LessonsApiUtil = LessonsApiUtil;

module.exports = LessonsApiUtil;
