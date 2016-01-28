var Store = require('flux/utils').Store;
var SkillConstants = require('../constants/skill_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _skills = {};
var SkillStore = new Store(AppDispatcher);

var resetSkills = function (skills) {
  _skills = Object.assign({}, skills);
};

var addSkill = function (skill) {
  _skills[skill.id] = skill;

};

SkillStore.all = function () {
  return Object.assign({}, _skills);
};

SkillStore.find = function (skillId) {
  return _skills[skillId];
};

SkillStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SkillConstants.SKILLS_RECEIVED:
      resetSkills(payload.skills);
      SkillStore.__emitChange();
      break;
    case SkillConstants.SKILL_RECEIVED:
      addSkill(payload.skill);
      SkillStore.__emitChange();
      break;
  }
};

window.SkillStore = SkillStore;

module.exports = SkillStore;
