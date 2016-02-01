var React = require('react');

module.exports = React.createClass({
  _handleClick: function () {
    this.history.pushState(null, "/courses", {});
  },

  render: function () {
    var splashText = "Learn a language. Or maybe not. We'll see.";
    return(
      <div className="splash-main group">
        <div className="splash-contents group">
          <h2 className="splash-text">
            {splashText}
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
