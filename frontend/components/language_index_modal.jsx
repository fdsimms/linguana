var React = require('react'),
    ModalActions = require('../actions/modal_actions'),
    ModalStore = require('../stores/modal_store'),
    LanguageIndex = require('./language_index');

var LanguageIndexModal = React.createClass({
  getInitialState: function () {
    return { modalName: "languageIndexModal", token: "" };
  },

  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._modalsChanged);
    var modalName = this.state.modalName;
    ModalActions.addModal(modalName);
    this.setState({
      modalName: modalName,
      token: $('meta[name=csrf-token]').attr('content')
    });
  },

  _modalsChanged: function () {
    var modalName = this.state.modalName;
    this.setState({ modalName: modalName});
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
    ModalActions.removeModal(this.state.modalName);
  },

  authToken: function () {
    return(
      <input name="authenticity_token" type="hidden" value={this.state.token} />
    );
  },

  visibleRender: function () {
    return(
      <div className="languages-modal">
        <LanguageIndex />
      </div>
    );
  },

  render: function () {
    var isDisplayed = ModalStore.isModalDisplayed(this.state.modalName);
    var renderedHTML = isDisplayed === true ? this.visibleRender() : <div />;

    return renderedHTML;
  }
});

module.exports = LanguageIndexModal;
