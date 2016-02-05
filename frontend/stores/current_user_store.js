var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UsersApiUtil = require('../util/users_api_util');
var CurrentUserConstants = require('../constants/current_user_constants');
var CookieConstants = require('../constants/cookie_constants');

var _currentUser = {};
var _userHasBeenFetched = false;
var CurrentUserStore = new Store(AppDispatcher);

var awardPoints = function (points) {
  _currentUser.points += points;
};

var updateUserFromCookie = function (cookie) {
  UsersApiUtil.updateUserFromCookie(cookie);
};

CurrentUserStore.findCompletion = function (completableId, completableType) {
  var result;
  if (_currentUser.completions) {
    _currentUser.completions.forEach(function (completion) {
      if (completion.completable_id == completableId &&
          completion.completable_type === completableType ) {
        result = completion;
      }
    });
  }
  return result;
};
CurrentUserStore.findEnrollment = function (course_id) {
  var result;
  if (_currentUser.enrolled_courses) {
    _currentUser.enrolled_courses.forEach(function (course) {
      if (course.id === course_id) {
        result = course;
      }
    });
  }
  return result;
};

CurrentUserStore.currentUser = function () {
  return Object.assign({}, _currentUser);
};

CurrentUserStore.isLoggedIn = function () {
  return !!_currentUser.id;
};

CurrentUserStore.userHasBeenFetched = function () {
  return _userHasBeenFetched;
};

CurrentUserStore.__onDispatch = function (payload) {
  if (payload.actionType === CurrentUserConstants.RECEIVE_CURRENT_USER) {
    _userHasBeenFetched = true;
    _currentUser = payload.currentUser;
    CurrentUserStore.__emitChange();
  } else if (payload.actionType === CurrentUserConstants.POINTS_AWARDED) {
    _currentUser = payload.currentUser;
    awardPoints(payload.points);
    _userHasBeenFetched = true;
    CurrentUserStore.__emitChange();
  } else if (payload.actionType === CookieConstants.COOKIE_RECEIVED) {
    updateUserFromCookie(payload.cookie);
    CookieStore.__emitChange();
  }
};

window.CurrentUserStore = CurrentUserStore;

module.exports = CurrentUserStore;
