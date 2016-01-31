var React = require('react');

var LessonBottomBar = React.createClass({
  componentWillReceiveProps: function () {
    this.forceUpdate();
  },

  render: function () {
    var secondButton;
    if (this.props.selected) {
      secondButton =
        <a onClick={this.props.onClickCheck}
          className="check-button">Check</a>;

    } else {
      secondButton = <a className="disabled-check-button">Check</a>;
    }

    return(
      <div className="lesson-bottom-bar group">
        <a className="skip-button">Skip</a>
        {secondButton}
      </div>
    );
  }
});

module.exports = LessonBottomBar;
