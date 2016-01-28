var AppDispatcher = require('../dispatcher/dispatcher'),
    CourseConstants = require('../constants/course_constants');

var CourseActions = {
  receiveAll: function (courses) {
    AppDispatcher.dispatch({
      actionType: CourseConstants.COURSES_RECEIVED,
      courses: courses
    });
  },

  receiveCourse: function (course) {
    AppDispatcher.dispatch({
      actionType: CourseConstants.COURSE_RECEIVED,
      course: course
    });
  }
};

module.exports = CourseActions;
