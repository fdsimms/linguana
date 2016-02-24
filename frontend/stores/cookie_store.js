var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    LanguageStore = require('./language_store'),
    CourseStore = require('./course_store'),
    UsersApiUtil = require('../util/users_api_util'),
    CoursesApiUtil = require('../util/courses_api_util'),
    SJCL = require('../sjcl-master/sjcl'),
    CookieConstants = require('../constants/cookie_constants');

var _cookiesHaveBeenFetched = false;

var _COOKIE_DEFAULTS = {
  curLng: "English",
  curCourseId: "",
  enrolledCourses: [],
  curCompletions: [],
  curPoints: 0
};

var encode = function (key) {
  return SJCL.codec.utf8String.toBits(key);
};

var decode = function (bits) {
  return SJCL.codec.utf8String.fromBits(bits);
};

var ensureLinguanaCookie = function () {
  if (!localStorage.Linguana) {
    localStorage.Linguana = JSON.stringify(encode(JSON.stringify(_COOKIE_DEFAULTS)));
  }
};

var _COOKIE_NAMES = {
  curLng: "curLng",
  curCourseId: "curCourseId",
  enrolledCourses: "enrolledCourses",
  curCompletions: "curCompletions",
  curPoints: "curPoints"
};

var _cookies = _COOKIE_DEFAULTS;

var CookieStore = new Store(AppDispatcher);

ensureLinguanaCookie();

var linguanaCookie = function () {
  return JSON.parse(decode(JSON.parse(localStorage.Linguana)));
};

var encodeTopLevelCookie = function (cookie) {
  return JSON.stringify(encode(JSON.stringify(cookie)));
};

var setLocalStorage = function (cookieObject) {
  var cookieKey = Object.keys(cookieObject)[0];
  var linguana = linguanaCookie();
  linguana[cookieKey] = cookieObject[cookieKey];
  var encrypted = encodeTopLevelCookie(linguana);
  localStorage.setItem("Linguana", encrypted);
};

var addCookie = function (cookie) {
  var key = Object.keys(cookie)[0];

  if (!CurrentUserStore.isLoggedIn()) {
    var value = cookie[key];
    if (key === "curCompletions") {
      _cookies.curCompletions.push(value);
      setLocalStorage({ curCompletions: _cookies.curCompletions });
    } else if (key === "enrolledCourses") {
      var courses = CookieStore.getLocalStorage(key);
      courses.push(value);
      setLocalStorage({ enrolledCourses: courses });
    } else if (key === "curCourseId"){
      _cookies[key] = cookie[key];
      setLocalStorage({ curCourseId: _cookies[key]});
    } else if (key === "curPoints") {
      _cookies[key] += parseInt(cookie[key]);
      setLocalStorage({ curPoints: _cookies.curPoints });
    }
  }

  var newCookie = {};
  if (key === "curCourseId" && CurrentUserStore.isLoggedIn())  {
    UsersApiUtil.updateUser({ current_course_id: cookie[key] });
    newCookie[key] = cookie[key];
    setLocalStorage(newCookie);
  } else if (key === "curLng") {
    _cookies[key] = cookie[key];
    newCookie[key] = cookie[key];
    setLocalStorage(newCookie);
    var lang = LanguageStore.findByName(cookie[key]);
    UsersApiUtil.updateUser({ current_language_id: lang.id });
  }
};

var fetchCookiesFromBrowser = function () {
  ensureLinguanaCookie();
  Object.keys(localStorage).forEach(function (key) {
    if (_COOKIE_NAMES[key]) {
      if (key === "curCompletions") {
        if (localStorage.curCompletions) {
          _cookies.curCompletions = this.getLocalStorage(key);
        }
      } else if (key === "enrolledCourses") {
          if(localStorage.enrolledCourses) {
            _cookies.enrolledCourses = this.getLocalStorage(key);
          }
      } else if (key === "curPoints") {
        _cookies[key] = parseInt(localStorage[key]);
      } else {
        _cookies[key] = parseInt(this.getLocalStorage(key));
      }
    }
  }.bind(this));
};

var receiveCookies = function (cookies) {
  var keys = Object.keys(cookie);
  keys.forEach(function (key, idx) {
    if (key === "curCourseId") {
      _cookies[key] = cookie[key];
      setLocalStorage(_cookies[key]);
      UsersApiUtil.updateUser({ current_course_id: cookie[key] });
    } else if (key === "curLng") {
      _cookies[key] = cookie[key];
      setLocalStorage(_cookies[key]);
      var lang = LanguageStore.findByName(cookie[key]);
      UsersApiUtil.updateUser({ current_language_id: lang.id });
    }
  }.bind(this));
};

var clearCookies = function () {
  _cookies = {curLng: "English", curCourseId: "", curCompletions: [], enrolledCourses: [] };

  setLocalStorage({ "curLng": "English" });
  setLocalStorage({ "curCourseId": "" });
  setLocalStorage({ "curCompletions": [] });
  setLocalStorage({ "enrolledCourses": [] });
  setLocalStorage({ "curPoints": 0 });
};

var clearCookie = function (cookieName) {
  _cookies[cookieName] = _COOKIE_DEFAULTS[cookieName];
  var newCookie = {};
  newCookie[cookieName] = _COOKIE_DEFAULTS[cookieName];
  setLocalStorage(newCookie);
};

CookieStore.all = function () {
  // return Object.assign({}, _cookies);
  return linguanaCookie();
};

CookieStore.getCurCourse = function () {
  var curCourseId = this.getLocalStorage("curCourseId");
  var course = CourseStore.find(curCourseId);
  if (course) {
    return course;
  } else if (curCourseId) {
    CoursesApiUtil.fetchCourse(curCourseId, function (fetchedCourse) {
      course = fetchedCourse;
    }.bind(this));
  }

  return course;
};

CookieStore.curLng = function () {
  // return _cookies.curLng;
  return this.getLocalStorage("curLng");
};

CookieStore.curCourseId = function () {
  // return _cookies.curCourseId;
  return this.getLocalStorage("curCourseId");
};

CookieStore.curPoints = function () {
  // return _cookies.curPoints;
  return this.getLocalStorage("curPoints");
};

CookieStore.cookiesHaveBeenFetched = function () {
  return _cookiesHaveBeenFetched;
};

CookieStore.curCompletions = function () {
  // return _cookies.curCompletions;
  return this.getLocalStorage("curCompletions");
};

CookieStore.enrolledCourses = function () {
  // return _cookies.enrolledCourses;
  return this.getLocalStorage("enrolledCourses");
};

CookieStore.findCompletionByTypeAndID = function (type, id) {
  var completions = this.curCompletions(),
      result;

  completions.forEach(function (completion) {
    var completionType = completion.completionType,
        completionId = completion.completionId;
    if (completionType === type && completionId === id) {
      result = completion;
    }
  }.bind(this));

  return result;
};

CookieStore.getLocalStorage = function (cookieKey) {
  var decoded = JSON.parse(decode(JSON.parse(localStorage.Linguana)));
  return decoded[cookieKey];
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
  } else if (payload.actionType === CookieConstants.FETCH_COOKIES) {
    _cookiesHaveBeenFetched = true;
    fetchCookiesFromBrowser();
    CookieStore.__emitChange();
  } else if (payload.actionType === CookieConstants.CLEAR_COOKIES) {
    clearCookies();
    CookieStore.__emitChange();
  } else if (payload.actionType === CookieConstants.CLEAR_COOKIE) {
    clearCookie(payload.cookieName);
    CookieStore.__emitChange();
  }
};

window.CookieStore = CookieStore;

module.exports = CookieStore;
