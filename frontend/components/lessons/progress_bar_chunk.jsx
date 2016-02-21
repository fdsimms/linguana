var React = require('react'),
    ExerciseStore = require('../../stores/exercise_store');

var ProgressBarChunk = React.createClass({
  render: function () {

    return(
      <div style={{"width": this.props.width}}
           className={"chunk " + this.props.className}>
      </div>
    );
  }
});

module.exports = ProgressBarChunk;
