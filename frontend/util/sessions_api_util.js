var CurrentUserActions = require("./../actions/current_user_actions");
var CookieActions = require("./../actions/cookie_actions");
var UsersApiUtil = require('./users_api_util');
var CoursesApiUtil = require('./courses_api_util');
var CookieStore = require('./../stores/cookie_store');

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
          currentUser.current_course_id || CookieStore.curCourseId();

        CookieActions.receiveCookie({
            curCourseId: curCourseId
          });
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success(currentUser.current_course_id);
      }.bind(this)
    });
  },

  createEnrollments: function (userId) {
    if (CookieStore.enrolledCourses()[0]) {
      CookieStore.enrolledCourses().forEach(function (courseId, idx) {
        var enrollmentParams = {};
        enrollmentParams.course_id = courseId;
        enrollmentParams.user_id = userId;
        if (CurrentUserStore.findEnrollment(courseId)) {
          if (idx === CookieStore.enrolledCourses().length - 1) {
            var userParams = { current_course_id: courseId };
            UsersApiUtil.updateUser(userParams);
          }
        } else if (idx === CookieStore.enrolledCourses().length - 1) {
          UsersApiUtil.createCourseEnrollment(enrollmentParams, function () {
            var userParams = { current_course_id: courseId };
            UsersApiUtil.updateUser(userParams);
            CookieActions.clearCookie("enrolledCourses");
          }.bind(this));
        } else {
          UsersApiUtil.createCourseEnrollment(enrollmentParams);
        }
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

  addCompletions: function () {
    if (CookieStore.curCompletions()[0]) {
      CookieStore.curCompletions().forEach(function (completion) {
        var completionParams = {},
            id = completion.completionId,
            type = completion.completionType;
        completionParams.completable_id = id;
        if (CurrentUserStore.isLoggedIn()) {
          completionParams.user_id = CurrentUserStore.currentUser().id;
        } else {
          completionParams.user_id = userId;
        }
        completionParams.completable_type = type;
        if (!CurrentUserStore.findCompletion(id, type)) {
          UsersApiUtil.createCompletionForUser(completionParams);
        }
      }.bind(this));
    }
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
          CurrentUserActions.receiveCurrentUser(currentUser);
          this.createEnrollments(currentUser.id);
          this.addCompletions();
          if (CookieStore.getLocalStorage("curPoints")) {
            var curPoints = parseInt(CookieStore.getLocalStorage("curPoints"));
            UsersApiUtil.awardPoints(currentUser, curPoints);
            CookieActions.clearCookie("curPoints");
          }
        }
        if (!CurrentUserStore.userHasBeenFetched()) {
          CurrentUserActions.receiveCurrentUser(currentUser);
        }
        callback && callback(currentUser);
      }.bind(this)
    });
  }


};

module.exports = SessionsApiUtil;
