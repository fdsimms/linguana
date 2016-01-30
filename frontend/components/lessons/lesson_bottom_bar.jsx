var React = require('react');

var LessonBottomBar = React.createClass({
  render: function () {
    return(
      <div className="lesson-bottom-bar group">
        <a className="skip-button">Skip</a>
        <button onClick={this.props.onClickCheck}
                className="check-button">Check</button>
      </div>
    );
  }
});

module.exports = LessonBottomBar;
