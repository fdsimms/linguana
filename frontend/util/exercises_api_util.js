var ExerciseActions = require('../actions/exercise_actions');

var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};


var ExercisesApiUtil = {
	fetchExercises: function (lessonId, successCallback) {
		$.ajax({
			type: "GET",
			url: "api/lessons/" + lessonId + "/exercises",
			dataType: "json",
			success: function (exercises) {
				exercises.forEach(function (exercise, idx) {
					var shuffled = shuffleArray(exercise.answer_choices);
					exercises[idx].answer_choices = shuffled;
				});

  			ExerciseActions.receiveAll(exercises);
        successCallback && successCallback();
			}
		});
	}
};

window.ExercisesApiUtil = ExercisesApiUtil;

module.exports = ExercisesApiUtil;
