var React = require('react');
var History = require('react-router').History;

var LanguageIndexItem = React.createClass({
  render: function () {
    return(
      <li>
        {this.props.language.name}
      </li>
    );
  }
});

module.exports = LanguageIndexItem;
