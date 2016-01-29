var Store = require('flux/utils').Store;
var ExerciseConstants = require('../constants/exercise_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ModalStore = require('./modal_store');
var ExerciseStore = new Store(AppDispatcher);

var _exercises = {};
var resetExercises = function (exercises) {
  _exercises = Object.assign({}, exercises);
};

var addExercise = function (exercise) {
  _exercises[exercise.id] = exercise;
};

ExerciseStore.all = function () {
  return Object.assign({}, _exercises);
};

ExerciseStore.find = function (exerciseId) {
  return _exercises[exerciseId];
};

ExerciseStore.findByLesson = function (lessonId) {
  var result = {};
  if (_exercises === {}) { return {}; }
  Object.keys(_exercises).forEach(function (key) {
    var exercise = _exercises[key];
    if (exercise.lesson_id === lessonId) {
      result[exercise.id] = exercise;
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
      addExercise(payload.exercise);
      ExerciseStore.__emitChange();
      break;
  }
};

window.ExerciseStore = ExerciseStore;

module.exports = ExerciseStore;
