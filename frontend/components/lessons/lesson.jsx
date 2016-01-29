var React = require('react'),
    LessonStore = require('../../stores/lesson_store'),
    LessonIndex = require('./lesson_index'),
    LessonsApiUtil = require('../../util/lessons_api_util');

var Lesson = React.createClass({
  getInitialState: function () {
    return({ lesson: null });
  },

  componentDidMount: function () {
    var lessonId = this.props.params.lessonId;
    LessonsApiUtil.fetchLesson(lessonId);
    this.lessonListener = LessonStore.addListener(this._lessonsChanged);
  },

  componentWillUnmount: function () {
    this.lessonListener.remove();
  },

  _lessonsChanged: function () {
    this.setState({ lesson: LessonStore.find(this.props.params.lessonId) });
  },

  render: function () {
    if(this.state.lesson === null) { return <div></div>; }

    return(
      <div className="lesson-page">
        <div className="lesson-page-content">
          <h2 className="lesson-page-header">
            Inside lesson
          </h2>
        </div>
      </div>
    );
  }
});

module.exports = Lesson;
