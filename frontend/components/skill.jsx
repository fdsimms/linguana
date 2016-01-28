var React = require('react'),
    SkillStore = require('../stores/skill_store'),
    SkillIndex = require('./skill_index'),
    SkillsApiUtil = require('../util/skills_api_util');

var Skill = React.createClass({
  getInitialState: function () {
    return({ skills: null });
  },

  componentDidMount: function () {
    var skillId = this.props.params.skillId;
    SkillsApiUtil.fetchSkill(skillId);
    var skillListener = SkillStore.addListener(this._skillsChanged);
  },

  _skillsChanged: function () {
    this.setState({ skill: SkillStore.find(this.props.params.skillId) });
  },

  render: function () {
    if(this.state.skill === undefined) { return <div></div>; }

    return(
      <div className="skill-page">
        <div className="skill-page-content">
          <h2 className="skill-page-header">
            Lessons
          </h2>
        </div>
      </div>
    );
  }
});

module.exports = Skill;
