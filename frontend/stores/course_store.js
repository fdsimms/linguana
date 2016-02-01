var Store = require('flux/utils').Store;
var CourseConstants = require('../constants/course_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _courses = {};
var CourseStore = new Store(AppDispatcher);

var resetCourses = function (courses) {
  _courses = Object.assign({}, courses);
};

var addCourse = function (course) {
  _courses[course.id] = course;
};


CourseStore.findByName = function (name) {
  var result;
  if (_courses === {}) { return {}; }
  Object.keys(_courses).forEach(function (key) {
    var course = _courses[key];
    if (course.name === name) {
      result = course;
    }
  });
  return result;
};

CourseStore.all = function () {
  return Object.assign({}, _courses);
};

CourseStore.find = function (courseId) {
  return _courses[courseId];
};

CourseStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CourseConstants.COURSES_RECEIVED:
      resetCourses(payload.courses);
      CourseStore.__emitChange();
      break;
    case CourseConstants.COURSE_RECEIVED:
      addCourse(payload.course);
      CourseStore.__emitChange();
      break;
  }
};

window.CourseStore = CourseStore;

module.exports = CourseStore;
