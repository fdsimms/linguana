var React = require('react'),
    SkillStore = require('./../../stores/skill_store'),
    SkillIndexItem = require('./skill_index_item'),
    SkillsApiUtil = require('./../../util/skills_api_util');

var SkillIndex = React.createClass({
  getInitialState: function () {
    return { skills: SkillStore.findByCourse(this.props.courseId) };
  },

  _onChange: function () {
    this.setState({ skills: SkillStore.all() });
  },

  componentDidMount: function () {
    this.skillListener = SkillStore.addListener(this._onChange);
    SkillsApiUtil.fetchSkills(this.props.courseId);
  },

  componentWillUnmount: function () {
    this.skillListener.remove();
  },

  render: function () {
    if (this.state.skills === {}) { return <div />; }

    var skills = this.state.skills;
    var skillKeys = Object.keys(this.state.skills);
    skills = skillKeys.map(function (key, idx) {
      var prevSkill;
      var skill = skills[key];
      if (idx > 0) {
        prevSkill = skills[Object.keys(this.state.skills)[idx - 1]];
      }

      return <SkillIndexItem key={idx} skill={skill} prevSkill={prevSkill}/>;
    }.bind(this));

    return(
      <div className="skill-index">
        <ul className="skill-list group">
          {skills}
        </ul>
      </div>
    );
  }
});

module.exports = SkillIndex;
