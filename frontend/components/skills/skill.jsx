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

  _skillsChanged: function () {
    this.setState({ skill: SkillStore.find(this.props.params.skillId) });
  },

  render: function () {
    if (typeof this.state.skill === "undefined") { return <div></div>; }
    var path = "#/course/" + this.state.skill.course_id;
    return(
        <div className="skill-page">
          <div className="group">
            <h2 className="skill-page-header">
              {this.state.skill.name}
            </h2>
            <a href={path} className="skill-page-back-button">
              Back to Skills
            </a>
          </div>
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
