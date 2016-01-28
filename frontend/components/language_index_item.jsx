var React = require('react');
var History = require('react-router').History;

var LanguageIndexItem = React.createClass({
  setLanguageCookie: function () {
    window.localStorage.setItem("curLng", this.props.language.id);
  },

  render: function () {
    return(
      <li onClick={this.setLanguageCookie}>
        {this.props.language.name}
      </li>
    );
  }
});

module.exports = LanguageIndexItem;
