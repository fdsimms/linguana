var React = require('react'),
    CourseStore = require('../../stores/course_store'),
    SkillIndex = require('../skills/skill_index'),
    CoursesApiUtil = require('../../util/courses_api_util');

var Course = React.createClass({
  getInitialState: function () {
    return({ course: CourseStore.find(this.props.params.courseId) });
  },

  componentDidMount: function () {
    var courseId = this.props.params.courseId;
    this.courseListener = CourseStore.addListener(this._coursesChanged);
    CoursesApiUtil.fetchCourse(courseId);
  },

  componentWillUnmount: function () {
    this.courseListener.remove();
  },

  _coursesChanged: function () {
    this.setState({ course: CourseStore.find(this.props.params.courseId) });
  },

  render: function () {

    if (typeof this.state.course === "undefined") { return <div></div>; }
    return(
      <div className="course-page">
        <div className="course-page-content">
          <h2 className="course-page-header">
            {this.state.course.name} Skills
          </h2>
          <SkillIndex courseId={this.state.course.id} />
        </div>
      </div>
    );
  }
});

module.exports = Course;
