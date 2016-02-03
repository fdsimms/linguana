var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
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

  visibleRender: function () {
    var courses;

    if (CurrentUserStore.currentUser()) {
      courses = CurrentUserStore.currentUser().enrolled_courses;
      if (courses) {
        courses = courses.map(function (course, idx) {
          return <li key={idx}>{course.name}</li>;
        }.bind(this));
      }
    }
    return(
      <div className="courses-dropdown box-shadowed group">
        <div className="courses-dropdown-header">
          <h3>Learning</h3>
        </div>
        <ul className="courses-dropdown-list">
          {courses}
        </ul>
        <a href="#">Add a new course</a>
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
