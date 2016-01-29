var React = require('react');

var LessonIndexItem = React.createClass({
  render: function () {
    return(
      <div className="lesson-list-item-wrapper">
        <p className="lesson-list-item">
          <a className="lesson-list-circle"
             href={"#/lessons/" + this.props.lesson.id }>
          </a>
          {this.props.lesson.name}
        </p>
      </div>
    );
  }
});

module.exports = LessonIndexItem;
