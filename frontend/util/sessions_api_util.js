var CurrentUserActions = require("./../actions/current_user_actions");
var CookieActions = require("./../actions/cookie_actions");
var UsersApiUtil = require('./users_api_util');
var CoursesApiUtil = require('./courses_api_util');

var SessionsApiUtil = {
  logIn: function (credentials, success) {
    var username = credentials.elements[0].value,
        password = credentials.elements[1].value,
        sessionParams = {session: {username: username, password: password}};
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: sessionParams,
      success: function (currentUser) {
        var curCourseId =
          currentUser.current_course_id || CookieStore.curCourse();

        CookieActions.receiveCookie({
            curCourseId: curCourseId
          });
          debugger

        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success(currentUser.current_course_id);
      }.bind(this)
    });
  },

  createEnrollments: function (userId) {
    debugger
    if (CookieStore.enrolledCourses()[0]) {
      CookieStore.enrolledCourses().forEach(function (courseId) {
        var enrollmentParams = {};
        enrollmentParams.course_id = courseId;
        enrollmentParams.user_id = userId;
        UsersApiUtil.createCourseEnrollment(enrollmentParams);
      }.bind(this));
    }
  },

  logOut: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        CurrentUserActions.receiveCurrentUser({});
        callback && callback()
      }
    });
  },

  fetchCurrentUser: function (callback) {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        if (currentUser.current_course_id) {
          CookieActions.receiveCookie({
            curCourseId: currentUser.current_course_id
          });
        }
        if (Object.keys(currentUser)[0]) {
          this.createEnrollments(currentUser.id);
          CookieActions.clearCookie("enrolledCourses");
        }
        CurrentUserActions.receiveCurrentUser(currentUser);
        callback && callback(currentUser);
      }.bind(this)
    });
  }


};

module.exports = SessionsApiUtil;
