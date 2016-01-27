var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app'),
    CourseIndex = require('./components/course_index'),
    Splash = require('./components/splash');


  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
      <Route path="/courses" component={CourseIndex} />
    </Route>
  );

  document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
      <Router>{routes}</Router>,
      document.getElementById('root')
    );
  });
