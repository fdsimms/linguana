var React = require('react'),
    ModalActions = require('../actions/modal_actions'),
    NavBar = require('./nav_bar'),
    CurrentUserStore = require("../stores/current_user_store"),
    CookieStore = require("../stores/cookie_store"),
    LanguagesApiUtil = require("../util/languages_api_util"),
    CookieActions = require("../actions/cookie_actions"),
    SignupModal = require("./modals/signup_modal"),
    SessionsApiUtil = require("../util/sessions_api_util");

module.exports = React.createClass({
  componentDidMount: function () {
    this.currentUserListener =
      CurrentUserStore.addListener(this.forceUpdate.bind(this));
    this.cookieListener =
      CookieStore.addListener(this.forceUpdate.bind(this));
    this.languageListener =
      LanguageStore.addListener(this.forceUpdate.bind(this));
    CookieActions.fetchCookiesFromBrowser();
    SessionsApiUtil.fetchCurrentUser();
    LanguagesApiUtil.fetchLanguages();
  },

  componentWillUnmount: function () {
    this.currentUserListener.remove();
    this.cookieListener.remove();
    this.languageListener.remove();
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
    var children;

    if (CookieStore.cookiesHaveBeenFetched() &&
        LanguageStore.languagesHaveBeenFetched() &&
        CurrentUserStore.userHasBeenFetched()) {
        children = this.props.children;
    }

    return(
      <div className="splash-wrapper">
        <header className="splash-header-bar">
          <NavBar view="splash" />
        </header>
        {children}
      </div>
    );
  },

  fetchesCompleted: function () {
    return(
      CookieStore.cookiesHaveBeenFetched() &&
      LanguageStore.languagesHaveBeenFetched() &&
      CurrentUserStore.userHasBeenFetched()
    );
  },

  lessonView: function () {
    var children;
    if (this.fetchesCompleted()) {
      children = this.props.children;
    }

    return(
      <div className="main-wrapper">
        <SignupModal />
        <header className="header-bar">
          <NavBar view="main" />
        </header>
          {children}
      </div>
    );
  },

  mainView: function () {
    var children;
    if (this.fetchesCompleted()) {
      children = this.props.children;
    }

    return(
      <div className="main-wrapper">
        <SignupModal />
        <header className="header-bar">
          <NavBar view="main" />
        </header>
        <div className="main group">
          <main className="main-content box-shadowed">
            {children}
          </main>
        </div>
      </div>
    );
  },

  render: function () {
    if (/.*(lessons).*/.test(location.hash)) {
      return this.lessonView();
    } else if (CookieStore.curCourse() || CurrentUserStore.currentUser()) {
      return this.mainView();
    } else {
      return this.splashView();
    }
  }
});
