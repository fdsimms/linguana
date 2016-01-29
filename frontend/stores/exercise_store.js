var Store = require('flux/utils').Store;
var ExerciseConstants = require('../constants/exercise_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ModalStore = require('./modal_store');

var ExerciseStore = new Store(AppDispatcher);

var _exercises = [];
var resetExercises = function (exercises) {
  _exercises = exercises.slice();
};

ExerciseStore.all = function () {
  return _exercises.slice();
};

ExerciseStore.findByIdx = function (idx) {
  return _exercises[idx];
};

ExerciseStore.findByLesson = function (lessonId) {
  var result = [];
  if (_exercises === []) { return {}; }
  _exercises.forEach(function (exercise) {
    if (exercise.lesson_id === lessonId) {
      result.push(exercise);
    }
  });
  return result;
};

ExerciseStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ExerciseConstants.EXERCISES_RECEIVED:
      resetExercises(payload.exercises);
      ExerciseStore.__emitChange();
      break;
    case ExerciseConstants.EXERCISE_RECEIVED:
      resetExercises([payload.exercise]);
      ExerciseStore.__emitChange();
      break;
  }
};

window.ExerciseStore = ExerciseStore;

module.exports = ExerciseStore;
