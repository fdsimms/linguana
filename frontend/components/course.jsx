var React = require('react'),
    History = require('react-router').History,
    CourseStore = require('../stores/course_store'),
    SkillIndex = require('./skill_index'),
    CoursesApiUtil = require('../util/courses_api_util');

var Course = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return({ courses: null });
  },

  componentDidMount: function () {
    var courseId = this.props.params.courseId;
    CoursesApiUtil.fetchCourse(courseId);
    var courseListener = CourseStore.addListener(this._coursesChanged);
  },

  _coursesChanged: function () {
    this.setState({ course: CourseStore.find(this.props.params.courseId) });
  },

  render: function () {
    if(this.state.course === undefined) { return <div></div>; }

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
