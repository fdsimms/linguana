var Store = require('flux/utils').Store;
var CourseConstants = require('../constants/course_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _courses = [];
var CourseStore = new Store(AppDispatcher);

var resetCourses = function(courses) {
  _courses = courses.slice();
};

CourseStore.all = function () {
  return _courses.slice();
};

CourseStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CourseConstants.COURSES_RECEIVED:
      var result = resetCourses(payload.courses);
      CourseStore.__emitChange();
      break;
  }
};

window.CourseStore = CourseStore;

module.exports = CourseStore;
