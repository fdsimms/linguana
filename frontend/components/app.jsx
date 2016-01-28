var React = require('react'),
    LoginModal = require('./login_modal'),
    LanguageIndexModal = require('./language_index_modal'),
    ModalActions = require('../actions/modal_actions');

module.exports = React.createClass({
  _handleLoginClick: function () {
    ModalActions.toggleModalDisplay("loginModal");
  },
  _handleLanguagesHover: function () {

    ModalActions.toggleModalDisplay("languageIndexModal");
  },

  render: function () {
    return(
      <div className="login-modal">
        <header className="header">
          <nav className="header-nav group">
            <h1 className="header-nav-logo">
              <a href="/">Linguana</a>
            </h1>
              <div className="header-buttons group">
              <button onClick={this._handleLanguagesHover}
                  className="header-nav-languages-button">
                Site language: English
              </button>
              <LanguageIndexModal />
              <button onClick={this._handleLoginClick}
                  className="header-nav-login-button">
                Login
              </button>
              <LoginModal />
            </div>
          </nav>
        </header>
        <div>{this.props.children}</div>
      </div>
    );
  }
});
