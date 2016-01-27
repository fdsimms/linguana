var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    App = require('./components/app.jsx'),
    LanguageStore = require('./stores/language_store'),
    LanguagesApiUtil = require('./util/languages_api_util');


  var routes = (
    <Route path="/" component={App}>
    </Route>
  );

  document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
      <Router>{routes}</Router>,
      document.getElementById('root')
    );
  });
