var React = require('react'),
    LanguageStore = require('../stores/language_store');

var LanguageIndex = React.createClass({
  getInitialState: function () {
    return { languages: LanguageStore.all() };
  }
});
