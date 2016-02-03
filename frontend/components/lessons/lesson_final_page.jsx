var React = require('react'),
    UsersApiUtil = require('./../../util/users_api_util'),
    LessonBottomBar = require('./lesson_bottom_bar');

module.exports = React.createClass({
  componentDidMount: function () {
    if (CurrentUserStore.isLoggedIn()) {
      this.lessonCompletionCheck();
    }
  },

  lessonCompletionCheck: function () {
    var points = ExerciseStore.all().length;
    var completionParams = {};
    completionParams.user_id = CurrentUserStore.currentUser().id;
    completionParams.completable_id = this.props.lesson.id;
    completionParams.completable_type = "lesson";
    if (!CurrentUserStore.findCompletion(this.props.lesson.id, "lesson")) {
      UsersApiUtil.createCompletionForUser(completionParams, function () {
        UsersApiUtil.awardPoints(points);
      }.bind(this));
    } else {
      UsersApiUtil.awardPoints(points);
    }
  },

  skillCompletionCheck: function () {

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
