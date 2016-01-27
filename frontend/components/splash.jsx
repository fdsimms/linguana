var React = require('react'),
    History = require('react-router').History;


module.exports = React.createClass({
  mixins: [History],

  _handleClick: function () {
    this.history.pushState(null, "/courses", {});
  },

  render: function () {
    return(
      <div className="splash group">
        <div className="splash-contents group">
          <h2 className="splash-header">
            Learn a language. Or maybe not. We'll see.
          </h2>
          <form className="splash-button-form">
            <button className="splash-button"
                    onClick={this._handleClick}>
              Get started
            </button>
          </form>
        </div>
      </div>
    );
  }
});
