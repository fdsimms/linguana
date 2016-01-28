var Store = require('flux/utils').Store;
var ModalConstants = require('../constants/modal_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _modals = [];
var ModalStore = new Store(AppDispatcher);

var resetModals = function(modals) {
  _modals = modals.slice();
};

ModalStore.all = function () {
  return _modals.slice();
};

ModalStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ModalConstants.MODALS_RECEIVED:
      var result = resetModals(payload.modals);
      ModalStore.__emitChange();
      break;
  }
};

window.ModalStore = ModalStore;

module.exports = ModalStore;
