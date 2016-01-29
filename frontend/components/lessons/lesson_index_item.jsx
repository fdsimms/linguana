var React = require('react');

var LessonIndexItem = React.createClass({
  render: function () {
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
  }
});

module.exports = LessonIndexItem;
