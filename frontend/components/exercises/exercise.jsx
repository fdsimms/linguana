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
    ExercisesApiUtil.fetchExercise(exerciseId, function () {
      this.setState({ exercise: ExerciseStore.findByIdx(this.props.exerciseIdx) });
    }.bind(this));
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

    var thing_to_translate = this.state.exercise.thing_to_translate
    return(
      <div className="exercise">
        <div className="exercise-contents">
          <h2 className="exercise-header">
            Choose the right translation for "{thing_to_translate}"
          </h2>
        </div>
      </div>
    );
  }
});

module.exports = Exercise;
