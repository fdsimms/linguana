var Store = require('flux/utils').Store;
var ModalConstants = require('../constants/modal_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var _modals = {};
var ModalStore = new Store(AppDispatcher);

var toggleModalDisplay = function(modalName) {
  _modals[modalName] = _modals[modalName] === "displayed" ? "hidden" : "displayed";
};

var addModal = function(modalName) {
  _modals[modalName] = "hidden";
};

var removeModal = function(modalName) {
  delete _modals[modalName];
};

var hideAllModals = function () {
  Object.keys(_modals).forEach(function (modalName) {
    _modals[modalName] = "hidden";
  });
};

ModalStore.all = function () {
  return Object.assign({}, _modals);
};

ModalStore.isModalDisplayed = function (modalName) {
  if ( !_modals[modalName] || _modals[modalName] === "hidden") {
    return false;
  } else {
    return true;
  }
};

ModalStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ModalConstants.TOGGLE_MODAL_DISPLAY:
      toggleModalDisplay(payload.modalName);
      ModalStore.__emitChange();
      break;
    case ModalConstants.ADD_MODAL:
      addModal(payload.modalName);
      ModalStore.__emitChange();
      break;
    case ModalConstants.REMOVE_MODAL:
      addModal(payload.modalName);
      ModalStore.__emitChange();
      break;
    case ModalConstants.HIDE_MODALS:
      hideAllModals();
      ModalStore.__emitChange();
      break;
  }
};

window.ModalStore = ModalStore;

module.exports = ModalStore;
