var React = require('react');

var AnswerChoiceIndexItem = React.createClass({
  render: function () {
    return(
      <li className="answer-choice-list-item">
        {this.props.answerChoice.body}
      </li>
    );
  }
});

module.exports = AnswerChoiceIndexItem;
