var React = require('react'),
    ExerciseStore = require('../../stores/exercise_store'),
    ExercisesApiUtil = require('../../util/exercises_api_util');

var Exercise = React.createClass({
  getInitialState: function () {
    return({ exercise: ExerciseStore.findByIdx(this.props.exerciseIdx) });
  },

  componentDidMount: function () {
    this.exerciseListener = ExerciseStore.addListener(this._exercisesChanged);
    var exerciseId = this.state.exercise.id;
    ExercisesApiUtil.fetchExercises(this.props.lessonId, function () {
      this.setState({ exercise: ExerciseStore.findByIdx(this.props.exerciseIdx) });
    }.bind(this));
  },

  componentWillReceiveProps: function (newProps) {
    var newExercise = ExerciseStore.findByIdx(newProps.exerciseIdx);
    this.setState({ exercise: newExercise });
  },

  componentWillUnmount: function () {
    this.exerciseListener.remove();
  },

  _exercisesChanged: function () {
    var exercise = ExerciseStore.findByIdx(this.props.exerciseIdx);
    this.setState({ exercise: exercise });

  },

  render: function () {
    if (typeof this.state.exercise === "undefined") {
      return <div></div>
    }

    var counter = this.props.exerciseIdx + 1;
    var total = ExerciseStore.all().length;

    var thing_to_translate = this.state.exercise.thing_to_translate
    return(
      <div className="exercise">
        <div className="exercise-contents">
          <h2 className="counter">
            Exercise {counter}/{total}
          </h2>
          <h2 className="exercise-header">
            Choose the right translation for "{thing_to_translate}."
          </h2>
        </div>
      </div>
    );
  }
});

module.exports = Exercise;
