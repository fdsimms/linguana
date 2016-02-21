var React = require('react'),
    ProgressBarChunk = require('./progress_bar_chunk'),
    ExerciseStore = require("../../stores/exercise_store");

var ProgressBar = React.createClass({
  componentWillReceiveProps: function (newProps) {
    this.forceUpdate();
  },

  render: function () {
    var totalChunks = ExerciseStore.all().length;
    var currentChunkIdx = this.props.currentIdx;
    var bar = [];
    for (var i = 0; i <= totalChunks; i++) {

      if (i === currentChunkIdx + 1) {

      bar.push(
        <ProgressBarChunk
          width={0}
          background="white"
          className="current-chunk empty-chunk"
          key={i} />);

      } else if (i > currentChunkIdx) {

        bar.push(
          <ProgressBarChunk
            width={Math.floor(550 / totalChunks)}
            className="unfilled-chunk"
            background="white"
            key={i} />);

      } else if (i === currentChunkIdx) {

        bar.push(
          <ProgressBarChunk
            width={Math.floor(550 / totalChunks)}
            background="red"
            className="current-chunk"
            key={i} />);

      } else {

        bar.push(
          <ProgressBarChunk
            width={Math.floor(550 / totalChunks)}
            className="filled-chunk"
            background="red"
            key={i} />);
      }
    }

    var trophyClass = "fa fa-3x fa-trophy disabled-trophy";
    if (this.props.currentIdx === ExerciseStore.all().length) {
      trophyClass = "fa fa-3x fa-trophy";
    }

    return(
      <div className="progress-bar">
        <div className="progress-bar-chunks group">
          {bar}
        </div>
        <i className={trophyClass}></i>
      </div>
    );
  }
});

module.exports = ProgressBar;
