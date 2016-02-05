var Store = require('flux/utils').Store;
var LanguageConstants = require('../constants/language_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _languages = [];
var LanguageStore = new Store(AppDispatcher);

var _languagesHaveBeenFetched = false;

var resetLanguages = function(languages) {
  _languages = languages.slice();
};

LanguageStore.find = function (languageId) {
  var result;
  _languages.forEach(function (language, idx) {
    if (language.id == languageId) {
      result = language;
    }
  }.bind(this));

  return result;
};

LanguageStore.all = function () {
  return _languages.slice();
};

LanguageStore.findByName = function (name) {
  var result;
  _languages.forEach(function (language) {
    if (language.name === name) {
      result = language;
      return;
    }
  });
  return result;
};

LanguageStore.languagesHaveBeenFetched = function () {
  return _languagesHaveBeenFetched;
};

LanguageStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case LanguageConstants.LANGUAGES_RECEIVED:
      _languagesHaveBeenFetched = true;
      var result = resetLanguages(payload.languages);
      LanguageStore.__emitChange();
      break;
  }
};

window.LanguageStore = LanguageStore;

module.exports = LanguageStore;
