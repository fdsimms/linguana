var React = require('react'),
    key = require('../../keymaster');

var AnswerChoiceIndexItem = React.createClass({
  bindKeyHandlers: function () {
    var idx = this.props.idx

    key((idx + 1).toString(), function () {
      this.props._handleClick(idx);
    }.bind(this));
  },

  componentDidMount: function () {
    this.bindKeyHandlers();
  },

  componentWillUnmount: function () {
    key.unbind((this.props.idx + 1).toString());
  },

  _handleClick: function () {
    if (this.props._handleClick) {
      var idx = this.props.idx;
      this.props._handleClick(idx);
    }
  },

  render: function () {
    var classes = "answer-choice-list-item-wrapper",
        circle = <i className="fa fa-lg fa-circle-o" />;
    if (this.props.selected) {
      classes = "answer-choice-list-item-wrapper selected"
      circle = <i className="fa fa-lg fa-dot-circle-o" />
    }

    return(
      <div onClick={this._handleClick}
           className={classes}>
         {circle}
        <li className="answer-choice-list-item">
          {this.props.answerChoice.body}
        </li>
        <li className="answer-choice-item-idx">
          {this.props.idx + 1}
        </li>
      </div>
    );
  }
});

module.exports = AnswerChoiceIndexItem;
