var ExerciseActions = require('../actions/exercise_actions');

var ExercisesApiUtil = {
	fetchExercises: function (lessonId, successCallback) {
		$.ajax({
			type: "GET",
			url: "api/lessons/" + lessonId + "/exercises",
			dataType: "json",
			success: function (exercises) {
  			ExerciseActions.receiveAll(exercises);
        successCallback && successCallback();
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
