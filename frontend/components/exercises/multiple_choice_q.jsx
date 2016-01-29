var React = require('react'),
    ExerciseStore = require('../../stores/exercise_store'),
    ExerciseIndex = require('./exercise_index'),
    ExercisesApiUtil = require('../../util/exercises_api_util');

var MultipleChoiceQ = React.createClass({
  getInitialState: function () {
    return({ MultipleChoiceQ: ExerciseStore.find(this.props.params.MultipleChoiceQId)});
  },

  componentDidMount: function () {
    var lessonId = this.props.params.lessonId;
    this.lessonListener = ExerciseStore.addListener(this._lessonsChanged);
    ExercisesApiUtil.fetchExercise(lessonId, function () {
      this.setState({ lesson: ExerciseStore.find(this.props.params.lessonId), showModal: true});
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.lessonListener.remove();
  },

  _lessonsChanged: function () {
    this.setState({ lesson: ExerciseStore.find(this.props.params.lessonId),
    showModal: this.state.showModal });

  },

  render: function () {
    if(typeof this.state.lesson === "undefined") { return <div></div>; }

    return(
      <div />
    );
  }
});

module.exports = Exercise;
