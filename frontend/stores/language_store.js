var Store = require('flux/utils').Store;
var LanguageConstants = require('../constants/language_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _languages = {};
var LanguageStore = new Store(AppDispatcher);

var resetLanguages = function(languages) {
  _languages = Object.assign({}, languages);
};

LanguageStore.all = function () {
  return Object.assign({}, _languages);
};

LanguageStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case LanguageConstants.LANGUAGES_RECEIVED:
      var result = resetLanguages(payload.languages);
      LanguageStore.__emitChange();
      break;
  }
};

window.LanguageStore = LanguageStore;

module.exports = LanguageStore;
