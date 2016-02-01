var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
    ModalStore = require('../../stores/modal_store'),
    NewSessionForm = require('../sessions/new_session_form');

var LoginDropdown = React.createClass({
  getInitialState: function () {
    return { modalName: "signupModal" };
  },

  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._modalsChanged);
    var modalName = this.state.modalName;
    ModalActions.addModal(modalName);
    this.setState({ modalName: modalName });
  },

  _modalsChanged: function () {
    var modalName = this.state.modalName;
    this.setState({ modalName: modalName});
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
    ModalActions.removeModal(this.state.modalName);
  },

  visibleRender: function () {
    return <NewUserForm />;
  },

  render: function () {
    var isDisplayed = ModalStore.isModalDisplayed(this.state.modalName);
    var renderedHTML = isDisplayed === true ? this.visibleRender() : <div />;

    return renderedHTML;
  }
});
