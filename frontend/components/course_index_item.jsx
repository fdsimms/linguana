var React = require('react');
var History = require('react-router').History;

var CourseIndexItem = React.createClass({
  mixins: [History],

  render: function () {
    return(
      <div className="course-list-item-wrapper">
        <a href={"#/courses/" + this.props.course.id }
           className="course-list-item">
          {this.props.course.name}
        </a>
      </div>
    );
  }
});

module.exports = CourseIndexItem;
