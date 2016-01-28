var AppDispatcher = require('../dispatcher/dispatcher'),
    SkillConstants = require('../constants/skill_constants');

var SkillActions = {
  receiveAll: function (skills) {
    AppDispatcher.dispatch({
      actionType: SkillConstants.SKILLS_RECEIVED,
      skills: skills
    });
  },

  receiveSkill: function (skill) {
    AppDispatcher.dispatch({
      actionType: SkillConstants.SKILL_RECEIVED,
      skill: skill
    });
  }
};

module.exports = SkillActions;
