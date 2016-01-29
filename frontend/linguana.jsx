var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app'),
    CourseIndex = require('./components/course_index'),
    Course = require('./components/course'),
    Splash = require('./components/splash'),
    SkillIndex = require('./components/skill_index'),
    Skill = require('./components/skill'),
    Lesson = require('./components/lessons/lesson');


  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
      <Route path="/courses" component={CourseIndex} />
      <Route path="/courses/:courseId" component={Course} />
      <Route path="/skills/:skillId" component={Skill} />
      <Route path="/lessons/:lessonId" component={Lesson} />
    </Route>
  );

  document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
      <Router>{routes}</Router>,
      document.getElementById('root')
    );
  });
