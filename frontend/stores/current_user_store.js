var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var _currentUser = {};
var _userHasBeenFetched = false;
var CurrentUserStore = new Store(AppDispatcher);

var awardPoints = function (points) {
  _currentUser.points += points;
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
    debugger
    awardPoints(payload.points);
    _currentUser = payload.currentUser;
    _userHasBeenFetched = true;
    CurrentUserStore.__emitChange();
  }
};

window.CurrentUserStore = CurrentUserStore;

module.exports = CurrentUserStore;
