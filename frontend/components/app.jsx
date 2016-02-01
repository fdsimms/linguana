var React = require('react'),
    LoginDropdown = require('./modals/login_dropdown'),
    LanguageIndexDropdown = require('./modals/language_index_dropdown'),
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
    ModalActions.toggleModalDisplay("loginDropdown");
    this._hideOtherModal("languageIndexDropdown");
  },
  _handleLanguagesHover: function () {
    ModalActions.toggleModalDisplay("languageIndexDropdown");
    this._hideOtherModal("loginDropdown");
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
              <LanguageIndexDropdown />
              <button onClick={this._handleLoginClick}
                  className="header-nav-login-button">
                Login
              </button>
              <LoginDropdown />
            </div>
          </nav>
        </header>

        <div className="main-content">{this.props.children}</div>
      </div>
    );
  }
});
