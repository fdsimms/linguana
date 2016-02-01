var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app'),
    CourseIndex = require('./components/courses/course_index'),
    LanguageIndex = require('./components/languages/language_index'),
    Course = require('./components/courses/course'),
    Splash = require('./components/splash'),
    SkillIndex = require('./components/skills/skill_index'),
    Skill = require('./components/skills/skill'),
    LessonFinalPage = require('./components/lessons/lesson_final_page'),
    SessionsApiUtil = require('./util/sessions_api_util'),
    Lesson = require('./components/lessons/lesson'),
    CookieActions = require('./actions/cookie_actions');

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Splash}
                  onEnter={ _ensureLoggedOutAndNoCurrentCourse }>
      </IndexRoute>
      <Route path="/courses"
             onEnter={ _ensureLoggedOutAndNoCurrentCourse }
             component={CourseIndex} />
      <Route path="/courses/:courseId"
             onEnter={ _ensureLoggedInOrCurrentCourse }
             component={Course} />
      <Route path="/skills/:skillId"
            onEnter={ _ensureLoggedInOrCurrentCourse }
             component={Skill} />
      <Route path="/lessons/:lessonId"
             onEnter={ _ensureLoggedInOrCurrentCourse }
             component={Lesson} />
      <Route path="/congrats"
             onEnter={ _ensureLoggedInOrCurrentCourse }
             component={LessonFinalPage} />
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
        path = "/courses/"; //+ user.course.name
        replace({}, path);
      } else if (CookieStore.curCourse()) {
        path = "/courses/" + CookieStore.curCourse();
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
