var AppDispatcher = require('../dispatcher/dispatcher'),
    LessonConstants = require('../constants/lesson_constants');

var LessonActions = {
  receiveAll: function (lessons) {
    AppDispatcher.dispatch({
      actionType: LessonConstants.LESSONS_RECEIVED,
      lessons: lessons
    });
  },

  receiveLesson: function (lesson) {
    AppDispatcher.dispatch({
      actionType: LessonConstants.LESSON_RECEIVED,
      lesson: lesson
    });
  }
};

module.exports = LessonActions;
