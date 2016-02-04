var React = require('react'),
    History = require('react-router').History,
    ModalActions = require('./../../actions/modal_actions'),
    SessionsApiUtil = require('./../../util/sessions_api_util');

var NewSessionForm = React.createClass({
  mixins: [History],

  submit: function (e) {
    e.preventDefault();
    var credentials = e.currentTarget;
    SessionsApiUtil.logIn(credentials);
  },

  render: function() {

    return (
      <div className="splash-login-form splash-form">
        <div className="splash-login-inputs box-shadowed">
              <a className="facebook-login" href="/auth/facebook">
                Log in with Facebook
              </a>
              <a href="/auth/google_oauth2" className="google-login">
                Log in with Google
              </a>
            <h3>or</h3>
          <form onSubmit={this.submit}>
              <input name="session[username]"
                     placeholder="Username" />

              <input type="password"
                     name="session[password]"
                     placeholder="Password" />

                   <a id="modal-login-button">Log in</a>
          </form>
          <form onSubmit={this.submit}>
            <div className="guest-inputs">

              <input type="hidden"
                     name="session[username]"
                     value="guest" />

              <input type="hidden"
                     name="session[password]"
                     value="password" />

                   <a className="guest-login-button">Log in as guest</a>
            </div>
          </form>

        </div>
      </div>
    );
  },

});

module.exports = NewSessionForm;
