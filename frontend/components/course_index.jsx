var React = require('react'),
    CourseStore = require('../stores/course_store'),
    CourseIndexItem = require('./course_index_item'),
    CoursesApiUtil = require('../util/courses_api_util');

var CourseIndex = React.createClass({
  getInitialState: function () {
    return { courses: CourseStore.all() };
  },

  _onChange: function () {
    this.setState({ courses: CourseStore.all() });
  },

  componentDidMount: function () {
    this.courseListener = CourseStore.addListener(this._onChange);
    CoursesApiUtil.fetchCourses();
  },

  componentWillUnmount: function () {
    this.courseListener.remove();
  },

  render: function () {
    if (this.state.courses === {}) { return <div />; }

    var courses = this.state.courses;
    var courseKeys = Object.keys(this.state.courses);
    courses = courseKeys.map(function (key, idx) {
      var course = courses[key];
      return <CourseIndexItem key={idx} course={course} />;
    });

    return(
      <div className="course-index-container">
        <div className="course-index">
          <h2 className="course-index-header">I want to learn...</h2>
          <ul className="course-list group">
            {courses}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = CourseIndex;
