var React = require('react'),
    AnswerChoiceIndexItem = require('./answer_choice_index_item');

var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

var AnswerChoiceIndex = React.createClass({
  _handleClick: function (idx) {
    if (this.props.answerChoices[idx].is_correct) {
      this.props.getAnswerChoiceStatus("correctIsSelected", idx)
    } else {
      this.props.getAnswerChoiceStatus("otherIsSelected", idx)
    }
  },

  componentWillReceiveProps: function () {
    this.forceUpdate();
  },

  answerChoices: function () {
    var answerChoices = this.props.answerChoices;
    answerChoices = answerChoices.map(function (choice, idx) {

      var selected;

      if (idx === this.props.currentAnswerChoiceIdx) {
        selected = "selected";
      }

      var _handleClick;
      if (!this.props.checkClicked) {
        _handleClick = this._handleClick;
      }

      return(
        <AnswerChoiceIndexItem
          key={idx}
          selected={selected}
          answerChoice={choice}
          idx={idx}
          _handleClick={_handleClick} />
      );
    }.bind(this));
    return shuffleArray(answerChoices);
  },

  render: function () {
    if (this.props.answerChoices === []) {
      return <div />;
    }

    return(
      <div className="answer-choice-index">
        <ul className="answer-choice-list group">
          {this.answerChoices()}
        </ul>
      </div>
    );
  }
});

module.exports = AnswerChoiceIndex;
