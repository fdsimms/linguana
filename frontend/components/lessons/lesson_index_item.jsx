var React = require('react'),
    CurrentUserStore = require('../../stores/current_user_store');

var LessonIndexItem = React.createClass({
  uncompletedRender: function () {
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

  completedRender: function () {
    return(
      <div className="lesson-list-item-wrapper">
        <h2 className="lesson-list-item completed">
          {this.props.lesson.name}
        </h2>
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
    if (CurrentUserStore.findCompletion(this.props.lesson.id, "lesson")) {
      toRender = this.completedRender();
    } else {
      toRender = this.uncompletedRender();
    }

    return toRender;
  }
});

module.exports = LessonIndexItem;
