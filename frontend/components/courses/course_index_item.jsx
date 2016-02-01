var React = require('react'),
    CookieActions = require('./../../actions/cookie_actions');

var CourseIndexItem = React.createClass({
  setCourseCookie: function (curCourse) {
    CookieActions.receiveCookie({ curCourse: this.props.course.name });
  },
  render: function () {
    var courseName = this.props.course.name;

    return(
      <div className="course-list-item-wrapper">
        <a href={"#/courses/" + this.props.course.id }
           className="course-list-item"
           onClick={this.setCourseCookie}>
          {courseName}
        </a>
      </div>
    );
  }
});

module.exports = CourseIndexItem;
