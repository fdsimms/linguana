var React = require('react');

var AnswerChoiceIndexItem = React.createClass({
  _handleClick: function () {
    var idx = this.props.idx;
    this.props._handleClick(idx);
  },

  render: function () {
    var classes = "answer-choice-list-item-wrapper"
    if (this.props.selected) {
      classes = "answer-choice-list-item-wrapper selected"
    }

    return(
      <div onClick={this._handleClick}
           className={classes}>
        <li className="answer-choice-list-item">
          {this.props.answerChoice.body}
        </li>
      </div>
    );
  }
});

module.exports = AnswerChoiceIndexItem;
