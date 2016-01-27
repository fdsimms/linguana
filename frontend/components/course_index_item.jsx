var React = require('react');
var History = require('react-router').History;

var CourseIndexItem = React.createClass({
  mixins: [History],

  showCourse: function () {
    this.history.pushState(null, '/course/' + this.props.course.id, {});
  },

  render: function () {
    return(
      <li onClick={this.showCourse} className="course-list-item">
        <p>{this.props.course.name}</p>
      </li>
    );
  }
});

module.exports = CourseIndexItem;
