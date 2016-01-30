var React = require('react'),
    ModalActions = require('../../actions/modal_actions'),
    ModalStore = require('../../stores/modal_store');

var TipsAndNotesModal = React.createClass({
  getInitialState: function () {
    return { modalName: "tipsAndNotesModal" };
  },


  componentDidMount: function () {
    this.modalListener = ModalStore.addListener(this._modalsChanged);
    var modalName = this.state.modalName;
    ModalActions.addModal(modalName);
    this.forceUpdate();
  },

  _modalsChanged: function () {
    var modalName = this.state.modalName;
    this.forceUpdate();
  },

  componentWillUnmount: function () {
    this.modalListener.remove();
    ModalActions.removeModal(this.state.modalName);
  },

  visibleRender: function () {
    var tipsAndNotes;

    if (this.props.tipsAndNotes) {
      tipsAndNotes = this.props.tipsAndNotes;
    }

    return(
      <div className="tips-and-notes-modal box-shadowed">
        <p className="tips-and-notes-modal-text">
        {tipsAndNotes}
        </p>
      </div>
    );
  },

  render: function () {
    var isDisplayed = ModalStore.isModalDisplayed(this.state.modalName);
    var renderedHTML = isDisplayed === true ? this.visibleRender() : <div />;

    return renderedHTML;
  }
});

module.exports = TipsAndNotesModal;
