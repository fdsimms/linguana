var Store = require('flux/utils').Store;
var LessonConstants = require('../constants/lesson_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ModalStore = require('./modal_store');
var LessonStore = new Store(AppDispatcher);

var _lessons = {};
var resetLessons = function (lessons) {
  _lessons = Object.assign({}, lessons);
};

var addLesson = function (lesson) {
  _lessons[lesson.id] = lesson;
};

LessonStore.all = function () {
  return Object.assign({}, _lessons);
};

LessonStore.find = function (lessonId) {
  return _lessons[lessonId];
};

LessonStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case LessonConstants.LESSONS_RECEIVED:
      resetLessons(payload.lessons);
      LessonStore.__emitChange();
      break;
    case LessonConstants.LESSON_RECEIVED:
      addLesson(payload.lesson);
      LessonStore.__emitChange();
      break;
  }
};

window.LessonStore = LessonStore;

module.exports = LessonStore;
