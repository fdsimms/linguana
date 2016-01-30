var React = require('react'),
    ProgressBarChunk = require('./progress_bar_chunk'),
    ExerciseStore = require("../../stores/exercise_store");

var ProgressBar = React.createClass({
  componentWillReceiveProps: function (newProps) {

  },

  render: function () {
    var totalChunks = ExerciseStore.all().length;
    var currentChunkIdx = this.props.currentIdx;
    var bar = [];
    for (var i = 0; i < totalChunks; i++) {

      if (i > currentChunkIdx) {

        bar.push(
          <ProgressBarChunk
            className="unfilled-chunk"
            key={i} />);

      } else if (i === currentChunkIdx) {

        bar.push(
          <ProgressBarChunk
            className="current-chunk"
            key={i} />);

      } else {

        bar.push(
          <ProgressBarChunk
            className="filled-chunk"
            key={i} />);
      }
    }

    return(
      <div className="progress-bar group">{bar}</div>
    );
  }
});

module.exports = ProgressBar;
