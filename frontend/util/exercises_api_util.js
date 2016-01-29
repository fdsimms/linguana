var ExerciseActions = require('../actions/exercise_actions');

var ExercisesApiUtil = {
	fetchExercises: function (exerciseId) {
		$.ajax({
			type: "GET",
			url: "api/lessons/" + exerciseId + "/exercises",
			dataType: "json",
			success: function (exercises) {
        var exercisesPayload = {};
        exercises.forEach(function (exercise) {
          exercisesPayload[exercise.id] = exercise;
        });
  			ExerciseActions.receiveAll(exercisesPayload);
			},
		});
	},

  fetchExercise: function (exerciseId, successCallback) {
    $.ajax({
      type: "GET",
      url: "api/exercises/" + exerciseId,
      dataType: "json",
      success: function (exercise) {
        ExerciseActions.receiveExercise(exercise);
        successCallback && successCallback();
      },
    });
  }
};

window.ExercisesApiUtil = ExercisesApiUtil;

module.exports = ExercisesApiUtil;
