var React = require('react'),
    CookieActions = require('./../../actions/cookie_actions'),
    LanguageStore = require('./../../stores/language_store'),
    LanguagesApiUtil = require('./../../util/languages_api_util'),
    CurrentUserStore = require('./../../stores/current_user_store'),
    UsersApiUtil = require('./../../util/users_api_util');

var CourseIndexItem = React.createClass({
  getInitialState: function () {
    return { language: LanguageStore.find(this.props.course.target_language_id) };
  },

  componentDidMount: function () {
    this.languagesListener = LanguageStore.addListener(this._languagesChanged);
    LanguagesApiUtil.fetchLanguages();
  },

  componentWillUnmount: function () {
    this.languagesListener.remove();
  },

  _languagesChanged: function () {
    this.setState({ language: LanguageStore.find(this.props.course.target_language_id) });
  },

  setCourseCookie: function () {
    var courseId = this.props.course.id;

    if (CurrentUserStore.isLoggedIn()) {
      var userParams = { current_course_id: courseId };
      UsersApiUtil.updateUser(userParams, function () {
        var userId = CurrentUserStore.currentUser().id,
            enrollmentParams = { user_id: userId, course_id: courseId };

        if (!CurrentUserStore.findEnrollment(courseId)) {
          UsersApiUtil.createCourseEnrollment(enrollmentParams, function () {
            CookieActions.receiveCookie({ curCourseId: courseId });
          });
        } else {
          CookieActions.receiveCookie({ curCourseId: courseId });
        }
      });
    } else {
      CookieActions.receiveCookie({ curCourseId: courseId});
    }
  },

  render: function () {
    var flag;
    if (this.state.language) {
      flag = (
        <div className="language-index-flag" >
          <img src={this.state.language.flag} />
        </div>
      );
    } else {
      return <div />;
    }
    
    var courseName = this.props.course.name;

    return(
      <div className="course-list-item-wrapper">
        {flag}
        <a href={"#/course/" + this.props.course.id }
           className="course-list-item"
           onClick={this.setCourseCookie}>
          {courseName}
        </a>
      </div>
    );
  }
});

module.exports = CourseIndexItem;
