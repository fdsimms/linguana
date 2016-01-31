var React = require('react'),
    AnswerChoiceIndexItem = require('./answer_choice_index_item');

var AnswerChoiceIndex = React.createClass({
  render: function () {
    if (this.props.answerChoices === []) {
      return <div />;
    }

    var answerChoices = this.props.answerChoices
    answerChoices = answerChoices.map(function (choice, idx) {
      return <AnswerChoiceIndexItem key={idx} answerChoice={choice} />;
    });

    return(
      <div className="answer-choice-index">
        <ul className="answer-choice-list group">
          {answerChoices}
        </ul>
      </div>
    );
  }
});

module.exports = AnswerChoiceIndex;
