var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
    SessionsApiUtil = require('../../util/sessions_api_util'),
    ModalStore = require('../../stores/modal_store');

var UserInfoDropdown = React.createClass({
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

  visibleRender: function () {
    return(
      <ul className="box-shadowed user-info-dropdown">
        <li onClick={SessionsApiUtil.logOut}>Log Out</li>
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
