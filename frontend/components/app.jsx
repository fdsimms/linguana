var React = require('react'),
    ModalActions = require('../actions/modal_actions'),
    NavBar = require('./nav_bar'),
    CurrentUserStore = require("../stores/current_user_store"),
    CookieStore = require("../stores/cookie_store"),
    CookieActions = require("../actions/cookie_actions"),
    SessionsApiUtil = require("../util/sessions_api_util");

module.exports = React.createClass({
  componentDidMount: function () {
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

  splashView: function () {
    return(
      <div className="splash-wrapper">
        <header className="splash-header-bar">
          <NavBar view="splash" />
        </header>
        {this.props.children}
      </div>
    );
  },

  mainView: function () {
    return(
      <div className="main-wrapper">
        <header className="header-bar">
          <NavBar view="main" />
        </header>
        <div className="main">
          <main className="main-content box-shadowed">
            {this.props.children}
          </main>
        </div>
      </div>
    );
  },

  render: function () {
    if (CookieStore.curCourse()) {
      return this.mainView();
    } else {
      return this.splashView();
    }
  }
});
