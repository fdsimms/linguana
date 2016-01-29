var AppDispatcher = require('../dispatcher/dispatcher'),
    ExerciseConstants = require('../constants/exercise_constants');

var ExerciseActions = {
  receiveAll: function (exercises) {
    AppDispatcher.dispatch({
      actionType: ExerciseConstants.EXERCISES_RECEIVED,
      exercises: exercises
    });
  },

  receiveExercise: function (exercise) {
    AppDispatcher.dispatch({
      actionType: ExerciseConstants.EXERCISE_RECEIVED,
      exercise: exercise
    });
  }
};

module.exports = ExerciseActions;
