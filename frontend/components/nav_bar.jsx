var React = require('react'),
    ModalActions = require('../actions/modal_actions'),
    ModalStore = require('../stores/modal_store'),
    CurrentUserStore = require("../stores/current_user_store"),
    CookieStore = require("../stores/cookie_store"),
    CookieActions = require("../actions/cookie_actions"),
    LanguageIndexDropdown = require("./modals/language_index_dropdown"),
    LoginDropdown = require("./modals/login_dropdown");

var NavBar = React.createClass({
  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._modalsChanged);
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
  },

  componentWillReceiveProps: function () {
    this.forceUpdate();
  },

  _modalsChanged: function () {
    this.forceUpdate();
  },

  _handleLoginClick: function () {
    ModalActions.toggleModalDisplay("loginDropdown");
    ModalActions.hideModal("languageIndexDropdown");
  },

  _handleLanguagesHover: function () {
    ModalActions.toggleModalDisplay("languageIndexDropdown");
    ModalActions.hideModal("loginDropdown");
  },

  splashNavBar: function () {
    return(
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
    );
  },

  normalNavBar: function () {

  },

  render: function () {
    return this.splashNavBar();
  }
});

  module.exports = NavBar;
