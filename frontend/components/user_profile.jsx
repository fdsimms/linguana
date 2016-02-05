var React = require('react'),
    CurrentUserStore = require('../stores/current_user_store'),
    CourseStore = require('../stores/course_store'),
    LanguageStore = require('../stores/language_store'),
    SessionsApiUtil = require('../util/sessions_api_util'),
    LanguagesApiUtil = require('../util/languages_api_util'),
    CookieStore = require('../stores/cookie_store'),
    SkillIndex = require('./skills/skill_index'),
    UsersApiUtil = require('../util/courses_api_util');

var UserProfile = React.createClass({
  getInitialState: function () {
    return { user: CurrentUserStore.currentUser()};
  },

  _currentUserChanged: function () {
    this.setState({ user: CurrentUserStore.currentUser() });
  },
  _coursesChanged: function () {
    this.forceUpdate();
  },

  componentDidMount: function () {
    this.userListener = CurrentUserStore.addListener(this._currentUserChanged);
    this.coursesListener = CourseStore.addListener(this._coursesChanged);
    var curLng = CookieStore.curLng();
    SessionsApiUtil.fetchCurrentUser(function () {
      CoursesApiUtil.fetchCourses(CookieStore.curLng());
    }.bind(this));

  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.coursesListener.remove();
  },

  renderCourses: function () {
    var courses = CurrentUserStore.currentUser().enrolled_courses;
    if (courses) {
      courses = courses.map(function (course, idx) {
        return(<p className="profile-course" key={idx}>{course.name}</p>);
      }.bind(this));
    }
    return courses;
  },

  render: function () {
    if (this.state.user === "{}") { return <div></div>; }
    var fullName = this.state.user.fname + " " +this.state.user.lname;
    var userInfo = "",
        username = "",
        hometown = "";

    if (!this.state.user.uid) {
      username = <h2>{this.state.user.username}</h2>;
    }

    if (!this.state.user.hometown) {
      userInfo =
        <div className="group user-profile-info">
          <h3 className="name">{fullName}</h3>
      </div>;
    } else {

      hometown = this.state.user.hometown;
      userInfo =
        <div className="group user-profile-info">
          <h3 className="name floated">{fullName}</h3>
          <h3 className="hometown">{hometown}</h3>
        </div>;
    }
    return(
      <div className="user-profile group">
        <div className="main-content box-shadowed">
          <header className="user-profile-header">
            <div className="profile-pic">
              <img src={CurrentUserStore.currentUser().profile_pic_url} />
            </div>
              {username}
            {userInfo}
          </header>
        </div>
        <div className="profile-sidebar">
          <div className="iguana-pic">
            <img src={LinguanaAssets.iguana_book} />
          </div>
          <div className="profile-achievements">
            <h2>Achievements</h2>
            <ul className="profile-achievements-list">
              <li>
                <h3>Total Points</h3>
                <div className="points">
                  <i className="fa fa-adjust fa-lg" />
                  {CurrentUserStore.currentUser().points}
                </div>
              </li>
              <li>
                <h3>All Courses</h3>
                {this.renderCourses()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserProfile;
