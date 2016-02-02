var CurrentUserActions = require("./../actions/current_user_actions");
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
        console.log('yay');
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  }
};

module.exports = UsersApiUtil;
