var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
    CookieActions = require('../../actions/cookie_actions'),
    SessionsApiUtil = require('../../util/sessions_api_util'),
    ModalStore = require('../../stores/modal_store'),
    History = require('react-router').History;

var UserInfoDropdown = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { modalName: "userInfoDropdown" };
  },

  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._modalsChanged);
    ModalActions.addModal(this.state.modalName);
    this.forceUpdate();
  },

  _modalsChanged: function () {
    var modalName = this.state.modalName;
    this.forceUpdate();
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
  },

  _onLogoutClick: function () {
    SessionsApiUtil.logOut(function () {
      ModalActions.hideModal(this.state.modalName);
      CookieActions.clearCookies();
      this.history.pushState(null, "/");
    }.bind(this));
  },


  visibleRender: function () {
    var user_path = "#/user/" + CurrentUserStore.currentUser().id;
    return(
      <ul className="box-shadowed user-info-dropdown">
        <li><a href={user_path}>Your Profile</a></li>
        <li onClick={this._onLogoutClick}>Log Out</li>
      </ul>
    );
  },

  render: function () {
    var isDisplayed = ModalStore.isModalDisplayed(this.state.modalName);
    var renderedHTML = isDisplayed === true ? this.visibleRender() : <div />;

    return renderedHTML;
  }
});

module.exports = UserInfoDropdown;
