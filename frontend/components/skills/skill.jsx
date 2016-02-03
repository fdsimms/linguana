var React = require('react'),
    SkillStore = require('../../stores/skill_store'),
    LessonIndex = require('../lessons/lesson_index'),
    CurrentUserStore = require('../../stores/current_user_store'),
    UsersApiUtil = require('../../util/users_api_util'),
    SkillsApiUtil = require('../../util/skills_api_util');

var Skill = React.createClass({
  getInitialState: function () {
    return({ skill: SkillStore.find(this.props.params.skillId) });
  },

  componentDidMount: function () {
    var skillId = this.props.params.skillId;
    this.skillListener = SkillStore.addListener(this._skillsChanged);
    SkillsApiUtil.fetchSkill(skillId);
  },

  componentWillUnmount: function () {
    this.skillListener.remove();
  },

  // completionCheck: function () {
  //   var bool = true;
  //   this.state.skill.lessons.forEach(function (lesson) {
  //     if (!CurrentUserStore.findCompletion(lesson.id, "lesson")) {
  //       bool = false;
  //     }
  //   });
  //
  //   if (bool) {
  //     var completionParams;
  //     completionParams.completion_id = this.state.skill.id;
  //     completionParams.completion_type = "skill";
  //     completionParams.user_id = CurrentUserStore.currentUser().id;
  //     UsersApiUtil.createCompletionForUser(completionParams);
  //   }
  // },

  _skillsChanged: function () {
    this.setState({ skill: SkillStore.find(this.props.params.skillId) });
  },

  render: function () {
    if (typeof this.state.skill === "undefined") { return <div></div>; }

    return(
        <div className="skill-page">
          <h2 className="skill-page-header">
            Lessons
          </h2>
          <LessonIndex skillId={this.state.skill.id} />
          <div className="tips-and-notes">
            <h2 className="tips-and-notes-header">
            Tips and Notes
            </h2>
            <p className="tips-and-notes-text">
              {this.state.skill.tips_and_notes}
            </p>
          </div>
        </div>
    );
  }
});

module.exports = Skill;
