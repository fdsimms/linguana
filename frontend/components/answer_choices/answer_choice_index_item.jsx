var React = require('react');

var AnswerChoiceIndexItem = React.createClass({
  render: function () {
    return(
      <div className="answer-choice-list-item-wrapper">
        <li className="answer-choice-list-item">
          {this.props.answerChoice.body}
        </li>
      </div>
    );
  }
});

module.exports = AnswerChoiceIndexItem;
