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

  render: function () {
    return(
      <div className="main">
        <header className="header-bar">
          <NavBar />
        </header>
        <main className="main-content">
          {this.props.children}
        </main>
      </div>
    );
  }
});
