var React = require('react'),
    ModalActions = require('../actions/modal_actions'),
    ModalStore = require('../stores/modal_store'),
    CurrentUserStore = require("../stores/current_user_store"),
    CookieStore = require("../stores/cookie_store"),
    LanguageStore = require("../stores/language_store"),
    CoursesApiUtil = require('../util/courses_api_util'),
    LanguagesApiUtil = require('../util/languages_api_util'),
    CookieActions = require("../actions/cookie_actions"),
    SessionsApiUtil = require("../util/sessions_api_util"),
    LanguageIndexDropdown = require("./modals/language_index_dropdown"),
    UserInfoDropdown = require("./modals/user_info_dropdown"),
    CourseIndexDropdown = require("./modals/course_index_dropdown"),
    LoginDropdown = require("./modals/login_dropdown");

var NavBar = React.createClass({
  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._onChange);
    this.coursesListener = CourseStore.addListener(this._onChange);
    this.currentUserListener = CurrentUserStore.addListener(this._onChange);
    LanguagesApiUtil.fetchLanguages(function () {
      CoursesApiUtil.fetchCourses(CookieStore.curLng());
    });
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
    this.coursesListener.remove();
    this.currentUserListener.remove();
  },

  componentWillReceiveProps: function () {
    this.forceUpdate();
  },

  _onChange: function () {
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

  _handleCoursesEnter: function () {
    ModalActions.displayModal("courseIndexDropdown");
  },

  _handleCoursesLeave: function () {
    ModalActions.hideModal("courseIndexDropdown");
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
          <div className="login-button-wrapper">
            <button onClick={ this._handleLoginClick }
                className="splash-header-login-button">
              Login
            </button>
            <LoginDropdown />
          </div>
        </div>
      </nav>
    );
  },

  normalNavBarButtons: function () {
    if (CurrentUserStore.isLoggedIn()) {
      return(
        <button className="user-info-button"
                onMouseEnter={this._handleUserInfoEnter}
                onMouseLeave={this._handleUserInfoLeave}>
          <i className="fa fa-chevron-down" />
          <div className="profile-pic-nav">
            <img src={CurrentUserStore.currentUser().profile_pic_url} />
          </div>
          {CurrentUserStore.currentUser().fname}
          <UserInfoDropdown />
        </button>
      );
    } else {
      return(
        <a className="create-profile-button"
          onClick={this._handleCreateProfClick}>
          Create a profile
        </a>
      );
    }
  },

  normalNavBar: function () {
    var points_counter,
        course_index_button,
        flag;
    if (CurrentUserStore.isLoggedIn()) {
      points_counter = (
        <h2 className="points-counter">
          <i className="fa fa-adjust fa-lg" />
          {CurrentUserStore.currentUser().points}
        </h2>
      );
      var curCourse = CookieStore.getCurCourse(),
          flagDiv;


      if (curCourse) {
        flag = curCourse.flag;
        flagDiv = (
          <div className="language-nav-flag" >
            <img src={flag} />
          </div>
        );
      }
      course_index_button = (
        <button className="course-index-button"
                onMouseEnter={this._handleCoursesEnter}
                onMouseLeave={this._handleCoursesLeave}>
                <i className="fa fa-chevron-down" />
          {flagDiv}
          <CourseIndexDropdown />
        </button>
      );
    }

      return (

      <nav className="header-nav group">
        <h1 className="header-nav-logo">
          <a href="/">Linguana</a>
        </h1>
        <div className="header-buttons group">
          {course_index_button}
          {points_counter}
          {this.normalNavBarButtons()}
        </div>
      </nav>
    );
  },

  render: function () {
    if (!CurrentUserStore.userHasBeenFetched()) {
      return <div />;
    }

    if (this.props.view === "main") {
      return this.normalNavBar();
    } else {
      return this.splashNavBar();
    }
  }
});

  module.exports = NavBar;
