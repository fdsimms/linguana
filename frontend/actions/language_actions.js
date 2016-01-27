var AppDispatcher = require('../dispatcher/dispatcher'),
    LanguageConstants = require('../constants/language_constants');

var LanguageActions = {
  receiveAll: function (languages) {
    AppDispatcher.dispatch({
      actionType: LanguageConstants.LANGUAGES_RECEIVED,
      languages: languages
    });
  }
};

module.exports = LanguageActions;
