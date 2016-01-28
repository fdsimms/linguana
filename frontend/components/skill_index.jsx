var React = require('react'),
    SkillStore = require('../stores/skill_store'),
    SkillIndexItem = require('./skill_index_item'),
    SkillsApiUtil = require('../util/skills_api_util');

var CourseIndex = React.createClass({
  getInitialState: function () {
    return { skills: SkillStore.all() };
  },

  _onChange: function () {
    this.setState({ skills: SkillStore.all() });
  },

  componentDidMount: function () {
    this.skillListener = SkillStore.addListener(this._onChange);
    SkillsApiUtil.fetchCourses();
  },

  componentWillUnmount: function () {
    this.skillListener.remove();
  },

  render: function () {
    var skills = this.state.skills;
    var skillKeys = Object.keys(this.state.skills);
    skills = skillKeys.map(function (key, idx) {
      var skill = skills[key];
      return <SkillIndexItem key={idx} skill={skill} />;
    });

    return(
      <div className="skill-index-container">
        <div className="skill-index">
          <h2 className="skill-index-header">I want to learn...</h2>
          <ul className="skill-list group">
            {skills}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = SkillIndex;
