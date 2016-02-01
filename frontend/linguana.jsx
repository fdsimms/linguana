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
             component={CourseIndex} />
      <Route path="/courses/:courseId"
             component={Course} />
      <Route path="/skills/:skillId"
             component={Skill} />
      <Route path="/lessons/:lessonId"
             component={Lesson} />
      <Route path="/congrats" component={LessonFinalPage} />
    </Route>
  );



  function _ensureLoggedIn(nextState, replace, callback) {
    if (CurrentUserStore.userHasBeenFetched()) {
      _redirectIfNotLoggedIn();
    } else {

      SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
    }

    function _redirectIfNotLoggedIn() {
      if (!CurrentUserStore.isLoggedIn()) {
        replace({}, "/login");
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
