var React = require('react');
var History = require('react-router').History;

var CourseIndexItem = React.createClass({
  mixins: [History],

  showCourse: function () {
    this.history.pushState(null, '/course/' + this.props.course.id, {});
  },

  render: function () {
    return(
      <div className="course-list-item-wrapper">
        <li onClick={this.showCourse} className="course-list-item">
          {this.props.course.name}
        </li>
      </div>
    );
  }
});

module.exports = CourseIndexItem;
