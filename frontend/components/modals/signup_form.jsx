var React = require('react'),
    History = require('react-router').History,
    UsersApiUtil = require('./../../util/users_api_util'),
    SessionsApiUtil = require('./../../util/sessions_api_util'),
    ModalActions = require('./../../actions/modal_actions'),
    CurrentUserStore = require('./../../stores/current_user_store'),
    CookieStore = require('./../../stores/cookie_store');

var SignupForm = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return({ toShow: this.props.toShow });
  },

  submitSignup: function (e) {
    e.preventDefault();
    var credentials = e.currentTarget;
    UsersApiUtil.createUser(credentials, this.callback);
  },

  callback: function (userId) {
    if (CookieStore.curCompletions()[0]) {
      CookieStore.curCompletions().forEach(function (completion) {
        var completionParams = {},
            id = completion.completionId,
            type = completion.completionType;
        completionParams.completable_id = id;
        if (CurrentUserStore.isLoggedIn()) {
          completionParams.user_id = CurrentUserStore.currentUser().id;
        } else {
          completionParams.user_id = userId;
        }
        completionParams.completable_type = type;
        if (!CurrentUserStore.findCompletion(id, type)) {
          UsersApiUtil.createCompletionForUser(completionParams);
        }
      }.bind(this));
    }
    this.addEnrollments(userId);
    this._closeModal();
  },

  addEnrollments: function (userId) {
    if (CookieStore.enrolledCourses()[0]) {
      CookieStore.enrolledCourses().forEach(function (courseId) {
        var enrollmentParams = {};
        enrollmentParams.course_id = courseId;
        if (CurrentUserStore.isLoggedIn()) {
          enrollmentParams.user_id = CurrentUserStore.currentUser().id;
        } else {
          enrollmentParams.user_id = userId;
        }

      this.addNewEnrollment(enrollmentParams);
      }.bind(this));
    }
  },

  addNewEnrollment: function (enrollmentParams) {
    if (!CurrentUserStore.findEnrollment(enrollmentParams)) {
      UsersApiUtil.createCourseEnrollment(enrollmentParams);
    }
  },

  submitLogin: function (e) {
    e.preventDefault();
    var credentials = e.currentTarget;
    SessionsApiUtil.logIn(credentials, this.callback);
  },

  _closeModal: function () {
    ModalActions.hideModal("signupModal");
  },

  _showSignup: function () {
      this.setState({ toShow: "signup" });
  },

  _showLogin: function () {
      this.setState({ toShow: "login" });
  },

  signupView: function () {
    return(
      <div className="signup-inputs group">
        <h2 className="signup-header">Sign Up</h2>
        <form className="group" onSubmit={this.submitSignup}>
          <div className="inputs group">
            <div className="signup-input group">
                <label htmlFor="username-signup">Username:</label>
                <input id="username-signup"name="user[username]" />
            </div>
            <div className="signup-input group">
                <label htmlFor="email-signup">Email:</label>
                <input id="email-signup"name="user[email]" />
            </div>
            <div className="signup-input group">
                <label htmlFor="password-signup">Password:</label>
                <input id="password-signup"type="password" name="user[password]" />
            </div>
            <div className="signup-input group">
                <label htmlFor="fname-signup">First name:</label>
                <input id="fname-signup"name="user[fname]" />
            </div>
            <div className="signup-input group">
                <label htmlFor="lname-signup">Last name:</label>
                <input id="lname-signup"name="user[lname]" />
            </div>
          </div>
          <button className="signup-button">Create account</button>
        </form>
        <form onSubmit={this.submitLogin}>
          <div className="guest-inputs">

            <input type="hidden"
                   name="session[username]"
                   value="guest" />

            <input type="hidden"
                   name="session[password]"
                   value="password" />

            <button className="guest-signup-button">
              Log in as guest
            </button>
          </div>
        </form>

        <div className="oauth-buttons group">
          <button className="facebook-login">
            <a href="/auth/facebook">
              Log in with Facebook
            </a>
          </button>
          <button className="google-login">
            <a href="/auth/google_oauth2">
              Log in with Google
            </a>
          </button>
        </div>
        <div className="signup-bottom-bar">
          <h3 className="signup-bottom-bar-text">
            Have an account?
          </h3>
          <button onClick={this._showLogin}> Log in.</button>
        </div>
      </div>
    );
  },

  loginView: function () {
    return(
      <div className="signup-inputs group">
        <h2 className="signup-header">Log In</h2>
          <form className="login-form-form" onSubmit={this.submitLogin}>
            <div className="login-form-form-inputs">
              <input name="session[username]"
                     placeholder="Username" />

              <input type="password"
                     name="session[password]"
                     placeholder="Password" />

           </div>
           <button id="signup-button">Log in</button>
          </form>
        <div className="login-bottom-bar">
          <button onClick={this._showSignup}>Create an account.</button>
        </div>
      </div>
    );
  },

  render: function () {
    var toRender,
        className;
    if (this.state.toShow === "signup") {
      toRender = this.signupView();
      className="signup-form group box-shadowed";
    } else {
      toRender = this.loginView();
      className="login-form group box-shadowed";
    }
    return (
        <div className={className}>
          <i className="fa fa-2x fa-times-circle-o"
             onClick={this._closeModal}>
          </i>
          {toRender}
        </div>
    );
  },

});

module.exports = SignupForm;
