var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
    ModalStore = require('../../stores/modal_store'),
    LanguageIndex = require('../languages/language_index'),
    LanguagesApiUtil = require('../../util/languages_api_util');

var LanguageIndexDropdown = React.createClass({
  getInitialState: function () {
    return { modalName: "languageIndexDropdown" };
  },

  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._modalsChanged);
    LanguagesApiUtil.fetchLanguages();
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

module.exports = LanguageIndexDropdown;
