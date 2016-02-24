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
        <i className="fa fa-lock fa-lg" />
          <h3 className="lesson-begin-button">
            Locked
          </h3>
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

  completionExists: function (id) {
    return(
      CurrentUserStore.findCompletion(id, "lesson") ||
      CookieStore.findCompletionByTypeAndID("lesson", id)
    );
  },

  render: function () {
    var toRender,
        findCompletion = CurrentUserStore.findCompletion,
        prevLesson = this.props.prevLesson;
    if (this.completionExists(this.props.lesson.id)) {
      toRender = this.renderCompleted();
    } else if ((prevLesson &&
                this.completionExists(prevLesson.id)) ||
                !prevLesson) {
      toRender = this.renderPlayable();
    } else {
      toRender = this.renderLocked();
    }

    return toRender;
  }
});

module.exports = LessonIndexItem;
