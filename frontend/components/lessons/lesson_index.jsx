var React = require('react'),
    LessonStore = require('../../stores/lesson_store'),
    LessonIndexItem = require('./lesson_index_item'),
    LessonsApiUtil = require('../../util/lessons_api_util');

var LessonIndex = React.createClass({

  render: function () {
    var lessons = this.props.lessons;
    if (typeof lessons === "undefined") {
      return <div />;
    }

    var lessonKeys = Object.keys(this.props.lessons);
    var prevLesson,
        isLastLesson;
    lessons = lessonKeys.map(function (key, idx) {
      var lesson = lessons[key];
      if (idx > 0) {
        prevLesson = lessons[Object.keys(this.props.lessons)[idx - 1]];
      }
      if (idx === lessonKeys.length - 1) {
        isLastLesson = true;
      }

      return <LessonIndexItem
                key={idx}
                lesson={lesson}
                prevLesson={prevLesson}
                isLastLesson={isLastLesson}/>;
    }.bind(this));

    return(
      <div className="lesson-index">
        <ul className="lesson-list group">
          {lessons}
        </ul>
      </div>
    );
  }
});

module.exports = LessonIndex;
