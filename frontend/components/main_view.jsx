var React = require('react'),
    NavBar = require('./nav_bar'),
    SignupModal = require('./modals/signup_modal'),
    Sidebar = require('./sidebar'),
    CourseIndex = require("./courses/course_index");

module.exports = React.createClass({
  getInitialState: function () {
    return { currentView: "courseAndSkill" };
  },

  _handleGetStartedClick: function () {
    this.setState({ currentView: "lesson"} );
  },

  courseAndSkillView: function () {
    return(
      <div className="main-wrapper">
        <div className="main group">
          {this.props.children}

        </div>
      </div>
    );
  },

  lessonView: function () {
    return(
      <div className="main-wrapper">
        <div className="main group">
          {this.props.children}
        </div>
      </div>
    );
  },

  render: function () {
    var toRender;
    if (this.state.currentView === "courseAndSkill") {
      toRender = this.courseAndSkillView();
    } else if (/.*(lessons).*/.test(location.hash)) {
      toRender = this.lessonView();
    }
    return(
      <div className="main-wrapper group">
        <SignupModal />
        <header className="header-bar">
          <NavBar view="main" />
        </header>
        <div className="main group">
          {toRender}
        </div>
      </div>
    );
  }
});
