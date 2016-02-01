var React = require('react'),
    CookieActions = require('../actions/cookie_actions'),
    ModalActions = require('../actions/modal_actions');

var LanguageIndexItem = React.createClass({
  setLanguageCookie: function () {
    var languageCookie = {curLng: this.props.language.name};
    ModalActions.hideModals();
    CookieActions.receiveCookie(languageCookie);
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
