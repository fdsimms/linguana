var React = require('react'),
    History = require('react-router').History,
    UsersApiUtil = require('./../../util/users_api_util'),
    SessionsApiUtil = require('./../../util/sessions_api_util'),
    ModalActions = require('./../../actions/modal_actions');

var SignupForm = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return({ toShow: "signup" });
  },

  submitSignup: function (e) {
    e.preventDefault();
    var credentials = e.currentTarget;
    UsersApiUtil.createUser(credentials, this._closeModal);
  },

  submitLogin: function (e) {
    e.preventDefault();
    var credentials = e.currentTarget;
    SessionsApiUtil.logIn(credentials);
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
                <label htmlFor="username-signup">Username</label>
                <input id="username-signup"name="user[username]" />
            </div>
            <div className="signup-input group">
                <label htmlFor="email-signup">Email</label>
                <input id="email-signup"name="user[email]" />
            </div>
            <div className="signup-input group">
                <label htmlFor="password-signup">Password</label>
                <input id="password-signup"type="password" name="user[password]" />
            </div>
            <div className="signup-input group">
                <label htmlFor="fname-signup">First Name</label>
                <input id="fname-signup"name="user[fname]" />
            </div>
            <div className="signup-input group">
                <label htmlFor="lname-signup">Last Name</label>
                <input id="lname-signup"name="user[lname]" />
            </div>
          </div>
          <button className="signup-button">Create Account</button>
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
          <button onClick={this._showLogin}> Sign in.</button>
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
          <form onSubmit={this.submit}>
            <div className="guest-inputs">

              <input type="hidden"
                     name="session[username]"
                     value="guest" />

              <input type="hidden"
                     name="session[password]"
                     value="password" />

              <button>Log in as guest</button>
            </div>
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
