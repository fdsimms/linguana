var React = require('react');

var SkillIndexItem = React.createClass({
  render: function () {
    return(
      <div className="skill-list-item-wrapper">
        <a href={"#/skills/" + this.props.skill.id }
           className="skill-list-item">
          {this.props.skill.name}
        </a>
      </div>
    );
  }
});

module.exports = SkillIndexItem;
