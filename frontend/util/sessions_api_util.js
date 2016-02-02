var CurrentUserActions = require("./../actions/current_user_actions");
var CookieActions = require("./../actions/cookie_actions");
var SessionsApiUtil = {
  logIn: function (credentials, success) {

    var username = credentials.children[0].children[0].value,
        password = credentials.children[0].children[1].value,
        sessionParams = {session: {username: username, password: password}};

    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: sessionParams,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      }
    });
  },

  logOut: function () {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        CurrentUserActions.receiveCurrentUser({});
      }
    });
  },

  fetchCurrentUser: function (cb) {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        console.log("fetched current user!");
        CurrentUserActions.receiveCurrentUser(currentUser);
        cb && cb(currentUser);
      }
    });
  }


};

module.exports = SessionsApiUtil;
