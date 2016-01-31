var React = require('react'),
    LessonBottomBar = require('./lesson_bottom_bar');

module.exports = React.createClass({

  render: function () {
    return(
      <div className="lesson-final group">
        <div className="lesson-final-contents group">
          <h2 className="lesson-final-header">
            Lesson complete!
          </h2>
          <h2 className="lesson-final-counter">
            + 10xp
          </h2>
          <i className="fa fa-5x fa-trophy" />
        </div>
      </div>
    );
  }
});
