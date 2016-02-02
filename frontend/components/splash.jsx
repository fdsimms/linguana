var React = require('react'),
    NavBar = require('./nav_bar'),
    CourseIndex = require("./courses/course_index");

module.exports = React.createClass({
  getInitialState: function () {
    return { currentView: "splash" };
  },

  _handleGetStartedClick: function () {
    this.setState({ currentView: "courses"} );
  },

  _handleHeaderClick: function () {
    this.setState({ currentView: "splash"} );
  },

  splashView: function () {
    var splashText = "Learn a language. Or maybe not. We'll see.";

    return(
      <div className="splash-contents group">
        <h2 className="splash-text">
          {splashText}
        </h2>
        <button onClick={ this._handleGetStartedClick }
                className="splash-button">
          Get started
        </button>
      </div>
    );
  },

  render: function () {
    var toRender;
    if (this.state.currentView === "splash") {
      toRender = this.splashView();
    } else if (this.state.currentView === "courses") {
      toRender = <CourseIndex />;
    }
    return(
      <div className="splash-wrapper">
        <header className="splash-header-bar">
          <NavBar view="splash" handleHeaderClick={this._handleHeaderClick}/>
        </header>
        <div className="splash-main group">
          {toRender}
        </div>
      </div>
    );
  }
});
