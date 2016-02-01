var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
    ModalStore = require('../../stores/modal_store'),
    SignupForm = require('./signup_form');

var SignupModal = React.createClass({
  getInitialState: function () {
    return { modalName: "signupModal" };
  },

  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._modalsChanged);
    ModalActions.addModal(this.state.modalName);
    this.forceUpdate();
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
    return <SignupForm />;
  },

  render: function () {
    var isDisplayed = ModalStore.isModalDisplayed(this.state.modalName);
    var renderedHTML = isDisplayed === true ? this.visibleRender() : <div />;

    return renderedHTML;
  }
});

module.exports = SignupModal;
