var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
    CookieStore = require('../../stores/cookie_store'),
    CookieActions = require('../../actions/cookie_actions'),
    UsersApiUtil = require('../../util/users_api_util'),
    CourseStore = require('../../stores/course_store'),
    ModalStore = require('../../stores/modal_store'),
    CourseIndex = require('../courses/course_index'),
    CoursesApiUtil = require('../../util/courses_api_util');

var CourseIndexDropdown = React.createClass({
  getInitialState: function () {
    return { modalName: "courseIndexDropdown" };
  },

  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._modalsChanged);
    var modalName = this.state.modalName;
    ModalActions.addModal(modalName);
    this.setState({ modalName: modalName });
  },

  _modalsChanged: function () {
    var modalName = this.state.modalName;
    this.setState({ modalName: modalName});
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
  },

  setCourseCookie: function (courseId) {

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
    setTimeout(function () {
      ModalActions.hideModal(this.state.modalName);
    }.bind(this), 0);
  },

  visibleRender: function () {
    var courses;

      courses =
        CurrentUserStore.currentUser().enrolled_courses ||
        CourseStore.findEnrolledCoursesFromCookies();

      if (courses) {
        courses = courses.map(function (course, idx) {
          var classes = "course-button",
              onClick = function () {
                this.setCourseCookie(course.id);
              }.bind(this);

          if (CookieStore.curCourseId() == course.id) {
            classes = "current-course course-button";
            onClick = "";
          }

          return(
            <a className={classes}
               onClick={onClick}
               href={"#/course/" + course.id}
               key={idx}>
               <div className="courses-dropdown-flag-container">
                 <img className="courses-dropdown-flag"
                      src={course.flag} />
              </div>
              {course.name}
            </a>
          );
        }.bind(this));
      }

    return(
      <div className="courses-dropdown box-shadowed group">
        <div className="courses-dropdown-header">
          <h3>Your Courses</h3>
        </div>
        <ul className="courses-dropdown-list">
          {courses}
        </ul>
        <a className="add-button" href="#/add">Add a new course</a>
      </div>
    );
  },

  render: function () {
    var isDisplayed = ModalStore.isModalDisplayed(this.state.modalName);
    var renderedHTML = isDisplayed === true ? this.visibleRender() : <div />;

    return renderedHTML;
  }
});

module.exports = CourseIndexDropdown;
