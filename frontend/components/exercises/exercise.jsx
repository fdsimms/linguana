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
    if(typeof this.state.exercise === "undefined") { return <div></div>; }

    return(
      <div></div>
    );
  }
});

module.exports = Exercise;
