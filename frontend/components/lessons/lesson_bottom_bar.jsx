var React = require('react'),
    key = require('../../keymaster');

var LessonBottomBar = React.createClass({
  bindKeyHandlers: function () {
    key('enter', function () {
      if (this.props.showFinalPageBar) {
        key.unbind('enter');
        setTimeout(function () {
          key('enter', function () {
            this.props.onClickContinue();
          }.bind(this));
        }.bind(this), 0);

      } else if (this.props.checkClicked) {
        this.props.onClickContinue();

      } else if (this.props.selected){
        this.props.onClickCheck();
      }
    }.bind(this))
  },

  componentDidMount: function () {
    this.bindKeyHandlers();
  },

  componentWillUnmount: function () {
    key.unbind('enter');
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
      <div className="lesson-bottom-bar final-page-bar group">

        <a onClick={this.props.onClickContinue}
           className="check-button">
          Continue
        </a>
      </div>
    );
  },

  render: function () {
    var bar;
    if (this.props.showFinalPageBar) {
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
