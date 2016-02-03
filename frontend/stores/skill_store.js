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

SkillStore.findLastSkillId = function () {
  return Object.keys(_skills).slice(-1);
};

SkillStore.findByCourse = function (courseId) {
  var result = {};
  if (_skills === {}) { return {}; }
  Object.keys(_skills).forEach(function (key) {
    var skill = _skills[key];
    if (skill.course_id === courseId) {
      result[skill.id] = skill;
    }
  });
  return result;
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
