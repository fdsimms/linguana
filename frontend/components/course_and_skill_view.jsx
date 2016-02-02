var React = require('react'),
    NavBar = require('./nav_bar'),
    SignupModal = require('./modals/signup_modal'),
    CourseIndex = require("./courses/course_index");

module.exports = React.createClass({
  render: function () {
    return(
      <div className="main-content group">
        {this.props.children}
      </div>
    );
  }
});
