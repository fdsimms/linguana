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
            <a className="splash-button"
               href="#/courses">
              Get started
            </a>
        </div>
      </div>
    );
  }
});
