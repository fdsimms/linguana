var React = require('react'),
    LoginModal = require('./login_modal'),
    ModalActions = require('../actions/modal_actions');

module.exports = React.createClass({
  _handleLoginClick: function () {
    ModalActions.toggleModalDisplay("loginModal");
  },

  render: function () {
    return(
      <div className="login-modal">
        <header className="header">
          <nav className="header-nav group">
            <h1 className="header-nav-logo">
              <a href="/">Linguana</a>
            </h1>
            <h2 onClick={this._handleLoginClick}
                className="header-nav-login-button">
              Login
            </h2>
            <LoginModal />
          </nav>
        </header>
        <div>{this.props.children}</div>
      </div>
    );
  }
});
