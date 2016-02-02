var AppDispatcher = require('../dispatcher/dispatcher');
var CurrentUserConstants = require('../constants/current_user_constants');

var CurrentUserActions = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  },

  awardPoints: function (currentUser, points) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.POINTS_AWARDED,
      points: points,
      currentUser: currentUser
    });
  },


};

module.exports = CurrentUserActions;
