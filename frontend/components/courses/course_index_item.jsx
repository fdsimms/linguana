var React = require('react'),
    CookieActions = require('./../../actions/cookie_actions'),
    CurrentUserStore = require('./../../stores/current_user_store'),
    UsersApiUtil = require('./../../util/users_api_util');

var CourseIndexItem = React.createClass({
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
    var courseName = this.props.course.name;

    return(
      <div className="course-list-item-wrapper">
        <a href={"#/course/" + this.props.course.id }
           className="course-list-item"
           onClick={this.setCourseCookie}>
          {courseName}
        </a>
      </div>
    );
  }
});

module.exports = CourseIndexItem;
