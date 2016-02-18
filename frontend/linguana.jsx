var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app'),
    Course = require('./components/courses/course'),
    Splash = require('./components/splash'),
    Skill = require('./components/skills/skill'),
    CourseAndSkillView = require('./components/course_and_skill_view'),
    MainView = require('./components/main_view'),
    SessionsApiUtil = require('./util/sessions_api_util'),
    Lesson = require('./components/lessons/lesson'),
    CourseSelection = require('./components/courses/course_selection'),
    UserProfile = require('./components/user_profile'),
    CookieActions = require('./actions/cookie_actions');

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Splash}
                  onEnter={ _ensureLoggedOutAndNoCurrentCourse }>
      </IndexRoute>
      <Route path="main" component={MainView}>
        <Route path="/course" component={CourseAndSkillView}>
          <Route path=":courseId"
            onEnter={ _ensureLoggedInOrCurrentCourse }
            component={Course} />
          <Route path="/skill/:skillId"
            onEnter={ _ensureLoggedInOrCurrentCourse }
            component={Skill} />
        </Route>
        <Route path="/lessons/:lessonId"
          onEnter={ _ensureLoggedInOrCurrentCourse }
          component={Lesson} />
        <Route path="/add" component={CourseSelection}/>
        <Route path="/user/:username"
               component={UserProfile}
               onEnter={_ensureLoggedIn}/>
      </Route>
    </Route>
  );

  function _ensureLoggedInOrCurrentCourse(nextState, replace, callback) {
    if (CurrentUserStore.userHasBeenFetched()) {
      _redirectIfNotLoggedInOrNoCurrentCourse();
    } else {
      SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedInOrNoCurrentCourse);
    }

    function _redirectIfNotLoggedInOrNoCurrentCourse() {
      if (!CookieStore.cookiesHaveBeenFetched()) {
        CookieActions.fetchCookiesFromBrowser();
      }

      var path;
      if (!CurrentUserStore.isLoggedIn() && !CookieStore.curCourse()) {
        path = "/"; //+ user.course.name
        replace({}, path);
      }

      callback();
    }
  }

  function _ensureLoggedIn(nextState, replace, callback) {
    if (CurrentUserStore.userHasBeenFetched()) {
      _redirectIfNotLoggedIn();
    } else {
      SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
    }

    function _redirectIfNotLoggedIn() {


      var path;
      if (!CurrentUserStore.isLoggedIn()) {
        path = "/"; //+ user.course.name
        replace({}, path);
      }

      callback();
    }
  }

  function _ensureLoggedOutAndNoCurrentCourse(nextState, replace, callback) {
    if (CurrentUserStore.userHasBeenFetched() || CookieStore.curCourse()) {
      _redirectIfLoggedInOrCurrentCourseExists();
    } else {

      SessionsApiUtil.fetchCurrentUser(_redirectIfLoggedInOrCurrentCourseExists);
    }

    function _redirectIfLoggedInOrCurrentCourseExists() {
      if (!CookieStore.cookiesHaveBeenFetched()) {
        CookieActions.fetchCookiesFromBrowser();
      }

      var path;
      if (CurrentUserStore.isLoggedIn()) {
        if (!CurrentUserStore.currentUser.current_course_id) {
          path = "/add";
          replace({}, path);
        } else {
          path = "/course/" + CurrentUserStore.currentUser().current_course_id;
          replace({}, path);
        }
      } else if (CookieStore.curCourse()) {

        path = "/course/" + CookieStore.curCourse();
        replace({}, path);
      }
      callback();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
      <Router>{routes}</Router>,
      document.getElementById('root')
    );
  });
