var React = require('react'),
    UsersApiUtil = require('./../../util/users_api_util'),
    LessonBottomBar = require('./lesson_bottom_bar');

module.exports = React.createClass({
  componentDidMount: function () {
    if (CurrentUserStore.isLoggedIn()) {
      var points = ExerciseStore.all().length;
      setTimeout(function () {
        UsersApiUtil.awardPoints(points);
      }, 2500);
    }
  },

  render: function () {
    var points = ExerciseStore.all().length,
        pointsText = "+" + points + " points";
    return(
      <div className="lesson-final group">
        <div className="lesson-final-contents group">
          <h2 className="lesson-final-header">
            Lesson complete!
          </h2>
          <h2 className="lesson-final-counter">
            {pointsText}
          </h2>
          <i className="fa fa-5x fa-trophy" />
        </div>
      </div>
    );
  }
});
