var React = require('react'),
    ModalActions = require('../actions/modal_actions'),
    ModalStore = require('../stores/modal_store'),
    CurrentUserStore = require("../stores/current_user_store"),
    CookieStore = require("../stores/cookie_store"),
    LanguageStore = require("../stores/language_store"),
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

  _handleCreateProfClick: function () {
    ModalActions.toggleModalDisplay("signupModal");
  },

  _handleLanguagesHover: function () {
    ModalActions.toggleModalDisplay("languageIndexDropdown");
    ModalActions.hideModal("loginDropdown");
  },

  splashNavBar: function () {
    var siteLang = CookieStore.curLng();

    return(
      <nav className="splash-header group">
        <h1 className="splash-header-logo">
          <a href="/">Linguana</a>
        </h1>
          <div className="splash-header-buttons group">
          <button onClick={ this._handleLanguagesHover }
              className="splash-header-languages-button">
            Site language: { siteLang }
          </button>
          <LanguageIndexDropdown />
          <button onClick={ this._handleLoginClick }
              className="splash-header-login-button">
            Login
          </button>
          <LoginDropdown />
        </div>
      </nav>
    );
  },

  normalNavBarButtons: function () {
    if (CurrentUserStore.isLoggedIn()) {
      return(<div />);
    } else {
      return(
        <a className="create-profile-button"
          onClick={this._handleCreateProfClick}
          href="#">Create a profile</a>
      );
    }
  },

  normalNavBar: function () {
    return (
      <nav className="header-nav group">
        <h1 className="header-nav-logo">
          <a href="/">Linguana</a>
        </h1>
        <div className="header-buttons group">
          {this.normalNavBarButtons()}
        </div>
      </nav>
    );
  },

  render: function () {
    if (this.props.view === "main") {
      return this.normalNavBar();
    } else {
      return this.splashNavBar();
    }
  }
});

  module.exports = NavBar;
