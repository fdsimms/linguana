var React = require('react'),
    ModalActions = require('../actions/modal_actions'),
    ModalStore = require('../stores/modal_store'),
    CurrentUserStore = require("../stores/current_user_store"),
    CookieStore = require("../stores/cookie_store"),
    LanguageStore = require("../stores/language_store"),
    CookieActions = require("../actions/cookie_actions"),
    SessionsApiUtil = require("../util/sessions_api_util"),
    LanguageIndexDropdown = require("./modals/language_index_dropdown"),
    UserInfoDropdown = require("./modals/user_info_dropdown"),
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

  _handleUserInfoEnter: function () {
    ModalActions.displayModal("userInfoDropdown");
  },

  _handleUserInfoLeave: function () {
    ModalActions.hideModal("userInfoDropdown");
  },

  _handleLanguagesEnter: function () {
    ModalActions.displayModal("languageIndexDropdown");
    ModalActions.hideModal("loginDropdown");
  },

  _handleLanguagesLeave: function () {
    ModalActions.hideModal("languageIndexDropdown");
  },

  splashNavBar: function () {
    var siteLang = CookieStore.curLng();

    return(
      <nav className="splash-header group">
        <h1 onClick={this.props.handleHeaderClick}
            className="splash-header-logo">
          Linguana
        </h1>
          <div className="splash-header-buttons group">
          <button onMouseEnter={ this._handleLanguagesEnter }
                  onMouseLeave={ this._handleLanguagesLeave }
                  className="splash-header-languages-button">
            Site language: { siteLang }
            <LanguageIndexDropdown />
          </button>
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
          <button className="user-info-button"
                  onMouseEnter={this._handleUserInfoEnter}
                  onMouseLeave={this._handleUserInfoLeave}>
            <i className="fa fa-chevron-down" />
           {CurrentUserStore.currentUser().username}
           <UserInfoDropdown />
          </button>
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
