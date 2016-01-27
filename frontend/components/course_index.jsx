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
    var courses = this.state.courses.map(function (course) {
      return <CourseIndexItem key={course.id} course={course} />;
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
