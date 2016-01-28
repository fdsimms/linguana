var AppDispatcher = require('../dispatcher/dispatcher'),
    ModalConstants = require('../constants/modal_constants');

var ModalActions = {
  receiveAll: function (modals) {
    AppDispatcher.dispatch({
      actionType: ModalConstants.MODALS_RECEIVED,
      modals: modals
    });
  }
};

module.exports = ModalActions;
