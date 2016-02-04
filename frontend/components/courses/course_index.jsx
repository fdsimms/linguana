var React = require('react'),
    CourseStore = require('../../stores/course_store'),
    CourseIndexItem = require('./course_index_item'),
    CookieStore = require('../../stores/cookie_store'),
    CoursesApiUtil = require('../../util/courses_api_util');

var CourseIndex = React.createClass({
  getInitialState: function () {
    return { courses: CourseStore.all() };
  },

  _coursesChanged: function () {
    this.setState({ courses: CourseStore.all() });
  },

  _cookiesChanged: function () {
    CoursesApiUtil.fetchCourses(CookieStore.curLng());
    this.forceUpdate();
  },

  componentDidMount: function () {
    this.courseListener = CourseStore.addListener(this._coursesChanged);
    this.cookieListener = CookieStore.addListener(this._cookiesChanged);
    CoursesApiUtil.fetchCourses(CookieStore.curLng());
  },

  componentWillUnmount: function () {
    this.courseListener.remove();
  },

  render: function () {
    if (this.state.courses === {}) { return <div />; }

    var classes = "course-index-container",
        header = <h2 className="course-index-header">I want to learn...</h2>;
    if (this.props.view === "addCourse") {
      classes = "course-index-container course-selection";
      header = <div />;
    }

    var courses = this.state.courses;
    var courseKeys = Object.keys(this.state.courses);
    courses = courseKeys.map(function (key, idx) {
      var course = courses[key];
      return <CourseIndexItem key={idx} course={course} />;
    });


    return(
      <div className={classes}>
        <div className="course-index">
          {header}
          <ul className="course-list group">
            {courses}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = CourseIndex;
