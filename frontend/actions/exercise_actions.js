var AppDispatcher = require('../dispatcher/dispatcher'),
    ExerciseConstants = require('../constants/exercise_constants');

var ExerciseActions = {
  receiveAll: function (exercises) {
    AppDispatcher.dispatch({
      actionType: ExerciseConstants.EXERCISES_RECEIVED,
      exercises: exercises
    });
  },

  pushExercise: function (exercise) {
    AppDispatcher.dispatch({
      actionType: ExerciseConstants.EXERCISE_RECEIVED,
      exercise: exercise
    });
  },

  removeFirstExercise: function () {
    AppDispatcher.dispatch({
      actionType: ExerciseConstants.REMOVE_FIRST_EXERCISE
    });
  }
};

module.exports = ExerciseActions;
