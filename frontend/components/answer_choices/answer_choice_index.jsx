var React = require('react'),
    AnswerChoiceIndexItem = require('./answer_choice_index_item');

var AnswerChoiceIndex = React.createClass({
  getInitialState: function () {
    return { selectedItemIdx: -1 };
  },

  _handleClick: function (idx) {
    this.setState({ selectedItemIdx: idx });
  },

  componentWillReceiveProps: function () {
    this.setState({ selectedItemIdx: -1 });
  },

  answerChoices: function () {
    var answerChoices = this.props.answerChoices;
    answerChoices = answerChoices.map(function (choice, idx) {
      var selected;

      if (idx === this.state.selectedItemIdx) {
        selected = "selected";
      }

      return(
        <AnswerChoiceIndexItem
          key={idx}
          selected={selected}
          answerChoice={choice}
          idx={idx}
          _handleClick={this._handleClick} />
      );
    }.bind(this));

    return answerChoices;
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
