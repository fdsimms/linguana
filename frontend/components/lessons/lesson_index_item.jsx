var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store');

var LessonIndexItem = React.createClass({
  renderPlayable: function () {
    return(
      <div className="lesson-list-item-wrapper">
        <h2 className="lesson-list-item">
          {this.props.lesson.name}
        </h2>
        <div className="lesson-list-contents">
          <a className="lesson-begin-button"
             href={"#/lessons/" + this.props.lesson.id }>
            Begin
          </a>
        </div>
      </div>
    );
  },

  renderLocked: function () {
    return(
      <div className="lesson-list-item-wrapper locked">
        <h2 className="lesson-list-item">
          {this.props.lesson.name}
        </h2>
        <div className="lesson-list-contents">
          <h3 className="lesson-begin-button">Locked</h3>
        </div>
      </div>
    );
  },

  renderCompleted: function () {
    return(
      <div className="lesson-list-item-wrapper completed">
        <h2 className="lesson-list-item">
          {this.props.lesson.name}
        </h2>
        <i className="fa fa-check-circle fa-2x" />
        <div className="lesson-list-contents">
          <a className="lesson-begin-button"
             href={"#/lessons/" + this.props.lesson.id }>
            Redo
          </a>
        </div>
      </div>
    );
  },

  render: function () {
    var toRender;
    var findCompletion = CurrentUserStore.findCompletion;
    if (CurrentUserStore.findCompletion(this.props.lesson.id, "lesson")) {
      toRender = this.renderCompleted();
    } else if ((this.props.prevLesson && findCompletion(this.props.prevLesson.id, "lesson")) ||
                !this.props.prevLesson) {
      toRender = this.renderPlayable();
    } else {
      toRender = this.renderLocked();
    }

    return toRender;
  }
});

module.exports = LessonIndexItem;
