var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CookieConstants = require('../constants/cookie_constants');

var _cookies = {};
var CookieStore = new Store(AppDispatcher);

var _COOKIE_NAMES = {
  curLng: "curLng"
};

var addCookie = function (cookie) {
  var key = Object.keys(cookie)[0];
  window.localStorage.setItem(key, cookie[key]);
  _cookies[key] = cookie[key];
};

var receiveCookies = function (cookies) {
  var key = Object.keys(cookies)[0];
  _cookies = cookies;
};


CookieStore.all = function () {
  return Object.assign({}, _cookies);
};


CookieStore.__onDispatch = function (payload) {
  if (payload.actionType === CookieConstants.COOKIES_RECEIVED) {
    var cookies = payload.cookies;
    receiveCookies(cookies);
    CookieStore.__emitChange();
  } else if (payload.actionType === CookieConstants.COOKIE_RECEIVED) {
    var cookie = payload.cookie;
    addCookie(cookie);
    CookieStore.__emitChange();
  }
};

window.CookieStore = CookieStore;

module.exports = CookieStore;
