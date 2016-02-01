var React = require('react');

var SkillIndexItem = React.createClass({
  render: function () {
    return(
      <div className="skill-list-item-wrapper">
        <p className="skill-list-item">
          <a className="skill-list-circle"
             href={"#/skills/" + this.props.skill.id }>
          </a>
          {this.props.skill.name}
        </p>
      </div>
    );
  }
});

module.exports = SkillIndexItem;
