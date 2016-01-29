var React = require('react'),
    SkillStore = require('../stores/skill_store'),
    LessonIndex = require('./lessons/lesson_index'),
    SkillsApiUtil = require('../util/skills_api_util');

var Skill = React.createClass({
  getInitialState: function () {
    return({ skill: null });
  },

  componentDidMount: function () {
    var skillId = this.props.params.skillId;
    SkillsApiUtil.fetchSkill(skillId);
    this.skillListener = SkillStore.addListener(this._skillsChanged);
  },

  componentWillUnmount: function () {
    this.skillListener.remove();
  },

  _skillsChanged: function () {
    this.setState({ skill: SkillStore.find(this.props.params.skillId) });
  },

  render: function () {
    if(this.state.skill === null) { return <div></div>; }

    return(
      <div className="skill-page">
        <div className="skill-page-content">
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
      </div>
    );
  }
});

module.exports = Skill;
