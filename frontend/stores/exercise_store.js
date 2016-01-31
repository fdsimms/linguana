var Store = require('flux/utils').Store;
var ExerciseConstants = require('../constants/exercise_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ModalStore = require('./modal_store');

var ExerciseStore = new Store(AppDispatcher);

var _exercises = [];

var resetExercises = function (exercises) {
  _exercises = exercises.slice();
};

var pushExercise = function (exerciseIdx) {
  var toPush = _exercises[exerciseIdx];
  _exercises.push(toPush);
  return _exercises;
};

var removeFirstExercise = function () {
  _exercises.splice(0, 1);
  return _exercises;
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
      pushExercise(payload.exercise);
      ExerciseStore.__emitChange();
      break;
    case ExerciseConstants.REMOVE_FIRST_EXERCISE:
      removeFirstExercise();
      ExerciseStore.__emitChange();
      break;
  }
};

window.ExerciseStore = ExerciseStore;

module.exports = ExerciseStore;
