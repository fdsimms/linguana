var React = require('react'),
    LoginModal = require('./login_modal'),
    LanguageIndexModal = require('./language_index_modal'),
    ModalActions = require('../actions/modal_actions'),
    ModalStore = require('../stores/modal_store'),
    CurrentUserStore = require("../stores/current_user_store"),
    CookieStore = require("../stores/cookie_store"),
    CookieActions = require("../actions/cookie_actions"),
    SessionsApiUtil = require("../util/sessions_api_util");

module.exports = React.createClass({
  componentDidMount: function () {
    this.modelListener =
      ModalStore.addListener(this.forceUpdate.bind(this));
    this.currentUserListener =
      CurrentUserStore.addListener(this.forceUpdate.bind(this));
    this.cookieListener =
      CookieStore.addListener(this.forceUpdate.bind(this));
    CookieActions.fetchCookiesFromBrowser();
    SessionsApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
    this.cookieListener.remove();
    this.modalListener.remove();
  },

  _handleLoginClick: function () {
    ModalActions.toggleModalDisplay("loginModal");
    this._hideOtherModal("languageIndexModal");
  },
  _handleLanguagesHover: function () {
    ModalActions.toggleModalDisplay("languageIndexModal");
    this._hideOtherModal("loginModal");
  },

  _hideOtherModal: function (modalName) {
    ModalActions.addModal(modalName);
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
                Site language: {CookieStore.curLng()}
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

        <div className="main-content">{this.props.children}</div>
      </div>
    );
  }
});
