var React = require('react'),
    LanguageStore = require('../stores/language_store'),
    LanguagesApiUtil = require('../util/languages_api_util');

var LanguageIndex = React.createClass({
  getInitialState: function () {
    return { languages: LanguageStore.all() };
  },

  _onChange: function () {
    this.setState({ languages: LanguageStore.all() });
  },

  componentDidMount: function () {
    this.languageListener = LanguageStore.addListener(this._onChange);
    LanguagesApiUtil.fetchLanguages();
  },

  componentWillUnmount: function () {
    this.languageListener.remove();
  },

  render: function () {
    var languages = this.state.languages.map(function (lng) {
      return <li key={lng.id}> {lng.name} </li>;
    });

    return(
      <div className="language-index">
        <ul className="language-list">
          {languages}
        </ul>
      </div>
    );
  }
});

module.exports = LanguageIndex;
