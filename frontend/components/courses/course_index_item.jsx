var React = require('react'),
    CookieActions = require('./../../actions/cookie_actions'),
    CookieStore = require('./../../stores/cookie_store'),
    CourseStore = require('./../../stores/course_store'),
    LanguageStore = require('./../../stores/language_store'),
    LanguagesApiUtil = require('./../../util/languages_api_util'),
    CurrentUserStore = require('./../../stores/current_user_store'),
    UsersApiUtil = require('./../../util/users_api_util'),
    CoursesApiUtil = require('./../../util/courses_api_util');

var CourseIndexItem = React.createClass({
  getInitialState: function () {
    return({ showFlag: false });
  },

  componentDidMount: function () {
    this.setState({ showFlag: true });
  },

  setCourseCookie: function () {
    var courseId = this.props.course.id;

    if (CurrentUserStore.isLoggedIn()) {
      var userParams = { current_course_id: courseId };
      UsersApiUtil.updateUser(userParams, function () {
        var userId = CurrentUserStore.currentUser().id,
            enrollmentParams = { user_id: userId, course_id: courseId };

        if (!CurrentUserStore.findEnrollment(courseId)) {
          UsersApiUtil.createCourseEnrollment(enrollmentParams, function () {
            CookieActions.receiveCookie({ curCourseId: courseId });
          });
        } else {
          CookieActions.receiveCookie({ curCourseId: courseId });
        }
      });
    } else {
      CookieActions.receiveCookie({ curCourseId: courseId});
    }
  },

  render: function () {
    if (!this.props.course.id) {
      return <div />;
    }
    var flag;
    if (this.props.flag && this.state.showFlag) {
      flag = (
        <div className="language-index-flag" >
          <img src={this.props.flag} />
        </div>
      );
    } else {
      return <div />;
    }

    var courseName = this.props.course.name;

    return(
      <div className="course-list-item-wrapper">
        <a href={"#/course/" + this.props.course.id }
           className="course-list-item"
           onClick={this.setCourseCookie}>
          {courseName}
          {flag}
        </a>
      </div>
    );
  }
});

module.exports = CourseIndexItem;
