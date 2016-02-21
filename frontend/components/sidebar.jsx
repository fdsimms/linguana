var React = require('react'),
    NavBar = require('./nav_bar'),
    SignupModal = require('./modals/signup_modal'),
    ModalActions = require('../actions/modal_actions'),
    CurrentUserStore = require('../stores/current_user_store'),
    CourseIndex = require("./courses/course_index");

module.exports = React.createClass({

  createProfileBox: function () {
    var contents;
    if (CurrentUserStore.isLoggedIn()) {
      contents = <div />;
    } else {
      contents = (
        <div className="createProfile">
          <h2>Log in to save your progress!</h2>
          <button className="sideBarLoginButton">
            Log in
          </button>
          <button className="sideBarSignupButton">
            Sign up
          </button>
        </div>
      );
    }
    return contents;
  },

  render: function () {
    return(
      <div className="sidebar group">
        {this.createProfileBox()}
      </div>
    );
  }
});
