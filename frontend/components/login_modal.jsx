var React = require('react'),
    ModalActions = require('../actions/modal_actions'),
    ModalStore = require('../stores/modal_store');

var LoginModal = React.createClass({
  getInitialState: function () {
    return { modalName: "loginModal", token: "" };
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
      <div className="splash-login-form splash-form">
        <div className="up-triangle">
        </div>

        <div className="splash-login-inputs">
        <form action="/session" method="post">
          {this.authToken()}
            <input name="session[username]"
                   placeholder="Username" />

            <input type="password"
                   name="session[password]"
                   placeholder="Password" />

            <button id="modal-login-button">Log in</button>
        </form>

        <form action="/session" method="post">
        {this.authToken()}
          <div className="guest-inputs">

            <input type="hidden"
                   name="session[username]"
                   value="guest" />

            <input type="hidden"
                   name="session[password]"
                   value="password" />

            <button>Log in as guest</button>
          </div>
        </form>


        <form className="signup-button" action="/users/new" method="get">
          <button>Not a member yet?</button>
        </form>

        </div>
      </div>
    );
  },

  render: function () {
    var isDisplayed = ModalStore.isModalDisplayed(this.state.modalName);
    var renderedHTML = isDisplayed === true ? this.visibleRender() : <div />;

    return renderedHTML;
  }
});

module.exports = LoginModal;
