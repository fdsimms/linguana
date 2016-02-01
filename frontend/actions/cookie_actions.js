var AppDispatcher = require('../dispatcher/dispatcher'),
    CookieConstants = require('../constants/cookie_constants');

var CookieActions = {
  receiveAll: function (cookies) {
    AppDispatcher.dispatch({
      actionType: CookieConstants.COOKIES_RECEIVED,
      cookies: cookies
    });
  },

  receiveCookie: function (cookie) {
    AppDispatcher.dispatch({
      actionType: CookieConstants.COOKIE_RECEIVED,
      cookie: cookie
    });
  },

  fetchCookiesFromBrowser: function () {
    AppDispatcher.dispatch({
      actionType: CookieConstants.FETCH_COOKIES
    });
  }
};

module.exports = CookieActions;
