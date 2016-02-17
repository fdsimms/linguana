var React = require('react');

var SkillIndexItem = React.createClass({
  renderUncompleted: function () {
    return(
      <div className="skill-list-item-wrapper incomplete">
        <p className="skill-list-item">
          <a className="skill-list-circle"
             href={"#/skill/" + this.props.skill.id }>
             <i className="fa fa-comment fa-3x" />
          </a>
          {this.props.skill.name}
        </p>
      </div>
    );
  },

  renderCompleted: function () {
    return(
      <div className="skill-list-item-wrapper completed">
        <p className="skill-list-item">
          <a className="skill-list-circle"
             href={"#/skill/" + this.props.skill.id }>
             <i className="fa fa-trophy fa-3x" />
             <i className="fa fa-comment" />
          </a>
          {this.props.skill.name}
        </p>
      </div>
    );
  },

  renderLocked: function () {
    return(
      <div className="skill-list-item-wrapper locked">
        <p className="skill-list-item">
          <a className="skill-list-circle">
            <i className="fa fa-lock fa-3x" />
          </a>
          {this.props.skill.name}
        </p>
      </div>
    );
  },

  completionExists: function (id) {
    return(
      CurrentUserStore.findCompletion(id, "skill") ||
      CookieStore.findCompletionByTypeAndID("skill", id)
    );
  },

  render: function () {
    var toRender,
        findCompletion = CurrentUserStore.findCompletion,
        prevSkill = this.props.prevSkill;

    if (this.completionExists(this.props.skill.id)) {
      toRender = this.renderCompleted();
    } else if ((prevSkill && this.completionExists(prevSkill.id)) ||
                !prevSkill) {
      toRender = this.renderUncompleted();
    } else {
      toRender = this.renderLocked();
    }

    return toRender;
  }
});

module.exports = SkillIndexItem;
