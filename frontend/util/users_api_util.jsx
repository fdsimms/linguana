var CurrentUserActions = require("./../actions/current_user_actions"),
    LanguageStore = require('./../stores/language_store');

var UsersApiUtil = {
  createUser: function (credentials, success) {
    var username = credentials.elements[0].value,
        email = credentials.elements[1].value,
        password = credentials.elements[2].value,
        fname = credentials.elements[3].value,
        lname = credentials.elements[4].value,
        current_course_id = (CookieStore.curCourse() || ""),
        userParams = { user: {
          username: username,
          password: password,
          fname: fname,
          lname: lname,
          email: email,
          current_course_id: current_course_id,
        }};

    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: userParams,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success(currentUser.id);
      }
    });
  },

  awardPoints: function (user, points, success) {
    user = user || CurrentUserStore.currentUser();
    var newPoints = user.points + points;
    $.ajax({
      url: '/api/users/' + user.id,
      type: 'PATCH',
      dataType: 'json',
      data: {user: {points: newPoints}},
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  },

  updateUser: function (userParams, success) {
    $.ajax({
      url: '/api/users/' + CurrentUserStore.currentUser().id,
      type: 'PATCH',
      dataType: 'json',
      data: {user: userParams},
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  },

  updateUserFromCookie: function (cookie, success) {

    if (!CurrentUserStore.isLoggedIn()) { return; }
    userParams = {};

    if (cookie.curLng) {
      var curLngId = LanguageStore.findByName(cookie.curLng).id;
      userParams.current_language_id = curLngId;
    }
    if (cookie.curCourseId) {
      userParams.current_course_id = cookie.curCourseId;
    }

    if (!$.isEmptyObject(userParams)) {
      $.ajax({
        url: '/api/users/' + CurrentUserStore.currentUser().id,
        type: 'PATCH',
        dataType: 'json',
        data: {user: userParams},
        success: function (currentUser) {
          CurrentUserActions.receiveCurrentUser(currentUser);
          success && success();
        }
      });
    }
  },

  createCompletionForUser: function (completionParams, success) {
    $.ajax({
      url: '/api/completions/',
      type: 'post',
      dataType: 'json',
      data: {completion: completionParams},
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  },

  createCourseEnrollment: function (enrollmentParams, success) {
    $.ajax({
      url: '/api/course_enrollments/',
      type: 'post',
      dataType: 'json',
      data: {course_enrollment: enrollmentParams},
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  }

};

module.exports = UsersApiUtil;
