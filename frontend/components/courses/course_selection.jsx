var React = require('react'),
    CookieStore = require('../../stores/cookie_store'),
    CourseIndex = require("./course_index");

var CourseSelection = React.createClass({
  render: function () {
    var curLng = CookieStore.curLng();
    return(
      <div className="main-content box-shadowed group">
        <div className="course-selection-wrapper">
          <div className="course-selection-header-wrapper group">
            <h2 className="course-selection-header">
              Language Courses for {curLng} Speakers
            </h2>
          </div>
          <CourseIndex view="addCourse" />
        </div>
      </div>
    );
  }
});

module.exports = CourseSelection;
