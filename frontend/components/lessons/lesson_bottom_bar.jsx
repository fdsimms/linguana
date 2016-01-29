var React = require('react');

var LessonBottomBar = React.createClass({
  render: function () {
    return(
      <div className="lesson-bottom-bar group">
        <a className="skip-button">Skip</a>
        <a className="check-button">Check</a>
      </div>
    );
  }
});

module.exports = LessonBottomBar;
