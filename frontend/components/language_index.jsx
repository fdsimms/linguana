var React = require('react'),
    LanguageStore = require('../stores/language_store'),
    LanguageIndexItem = require('./language_index_item');

var LanguageIndex = React.createClass({
  getInitialState: function () {
    return { languages: LanguageStore.all() };
  },

  _onChange: function () {
    this.setState({ languages: LanguageStore.all() });
  },

  componentDidMount: function () {
    this.languageListener = LanguageStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.languageListener.remove();
  },

  render: function () {
    var languages = this.state.languages.map(function (lng) {
      return <LanguageIndexItem language={lng} key={lng.id} />;
    });

    return(
      <div className="language-index">
        <ul className="language-list box-shadowed">
          {languages}
        </ul>
      </div>
    );
  }
});

module.exports = LanguageIndex;
