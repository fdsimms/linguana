var LanguageActions = require('../actions/language_actions'),
    LanguageStore = require('../stores/language_store');

var LanguageApiUtil = {
	fetchLanguages: function () {
		$.ajax({
			type: "GET",
			url: "api/languages/",
			dataType: "json",
			success: function (languages) {
				LanguageActions.receiveAll(languages);
			},
		});
	}
};

window.LanguageApiUtil = LanguageApiUtil;

module.exports = LanguageApiUtil;
