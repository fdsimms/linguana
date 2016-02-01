var React = require('react'),
    History = require('react-router').History,
    ModalActions = require('./../../actions/modal_actions');

var SignupForm = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();
    var credentials = e.currentTarget;
    UsersApiUtil.createUser(credentials, function () {
      ModalActions.hideModals();
      this.history.pushState(null, "/");
    }.bind(this));
  },

  render: function() {

    return (
      <div className="signup-form group box-shadowed">
        <div className="signup-inputs group">
          <h2 className="signup-header">Sign Up</h2>
          <form className="group" onSubmit={this.submit}>
            <div className="inputs group">
              <div className="signup-input group">
                  <label htmlFor="username-signup">Username</label>
                  <input id="username-signup"name="user[email]" />
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
        </div>
      </div>
    );
  },

});

module.exports = SignupForm;
