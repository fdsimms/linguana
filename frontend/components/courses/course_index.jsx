var React = require('react'),
    CourseStore = require('../../stores/course_store'),
    CourseIndexItem = require('./course_index_item'),
    CookieStore = require('../../stores/cookie_store'),
    LanguageStore = require('../../stores/language_store'),
    CoursesApiUtil = require('../../util/courses_api_util');

var CourseIndex = React.createClass({
  getInitialState: function () {
    return { courses: CourseStore.all(), displayItems: false };
  },

  _coursesChanged: function () {
    this.setState({ courses: CourseStore.all() });
  },

  _languagesChanged: function () {
    CoursesApiUtil.fetchCourses(CookieStore.curLng(), function () {
      this.forceUpdate();
    }.bind(this));
  },

  _cookiesChanged: function () {
    CoursesApiUtil.fetchCourses(CookieStore.curLng(), function () {
      this.forceUpdate();
    }.bind(this));
  },

  componentDidMount: function () {
    this.cookieListener = CookieStore.addListener(this._cookiesChanged);
    this.languagesListener = LanguageStore.addListener(this._languagesChanged);
    this.coursesListener = CourseStore.addListener(this._coursesChanged);
    CoursesApiUtil.fetchCourses(CookieStore.curLng(), function () {
      this.setState({ displayItems: true });
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.cookieListener.remove();
    this.coursesListener.remove();
    this.languagesListener.remove();
  },

  render: function () {

    if (this.state.courses === {} || !this.state.displayItems) { return <div />; }

    var classes = "course-index-container",
        header = <h2 className="course-index-header">I want to learn...</h2>;
    if (this.props.view === "addCourse") {
      classes = "course-index-container course-selection";
      header = <div />;
    }

    var courses = this.state.courses;
    var courseKeys = Object.keys(this.state.courses);
    courses = courseKeys.map(function (key, idx) {

      var course = courses[key],
          flag = LanguageStore.find(course.target_language_id).flag;
      return <CourseIndexItem key={idx} course={course} flag={flag} />;
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
