var React = require('react');

var LessonBottomBar = React.createClass({
  componentWillReceiveProps: function () {
    this.forceUpdate();
  },

  _correctAnswerBar: function () {
    return(
      <div className="lesson-bottom-bar-correct group">
      <i className="fa fa-4x fa-check-circle-o"></i>
      <h2 className="bottom-bar-header">You got it!</h2>
        <a onClick={this.props.onClickContinue}
           className="check-button">
           Continue
        </a>
      </div>
    )
  },
  _incorrectAnswerBar: function () {
    return(
      <div className="lesson-bottom-bar-incorrect group">
      <i className="fa fa-4x fa-times-circle-o"></i>
      <h2 className="bottom-bar-header">That wasn't right...</h2>
        <a onClick={this.props.onClickContinue}
           className="check-button">
           Continue
        </a>
      </div>
    )
  },

  _selectedAnswerBar: function () {
    return(
      <div className="lesson-bottom-bar group">
        <a onClick={this.props.onClickSkip}
           className="skip-button">
           Skip
        </a>
        <a onClick={this.props.onClickCheck}
           className="check-button">
           Check
        </a>
      </div>
    )
  },

  _unselectedAnswerBar: function () {
    return(
      <div className="lesson-bottom-bar group">
        <a onClick={this.props.onClickSkip}
           className="skip-button">
           Skip
        </a>
        <a className="disabled-check-button">
          Check
        </a>
      </div>
    )
  },

  _finalPageBar: function () {
    return(
      <div className="lesson-bottom-bar group">

        <a onClick={this.props.onClickContinue}
           className="check-button">
          Continue
        </a>
      </div>
    );
  },

  render: function () {
    var bar;
    debugger
    if (this.props.lessonOver) {
      bar = this._finalPageBar();
    }
    else if (this.props.checkClicked) {
      if (this.props.selected === "correctIsSelected") {
        bar = this._correctAnswerBar();
      } else {
        bar = this._incorrectAnswerBar();
      }
    } else if (this.props.selected) {
        bar = this._selectedAnswerBar();

    } else {
        bar = this._unselectedAnswerBar();
    }

    return bar;
  }
});

module.exports = LessonBottomBar;
