var React = require('react'),
    NavBar = require('./nav_bar'),
    SignupModal = require('./modals/signup_modal'),
    CookieStore = require('../stores/cookie_store'),
    CourseIndex = require("./courses/course_index");

module.exports = React.createClass({

  render: function () {
    return(
      <div className="main-content box-shadowed group">
        {this.props.children}
      </div>
    );
  }
});
