var React = require('react'),
    CookieStore = require('../../stores/cookie_store'),
    CourseIndex = require("./course_index"),
    LanguageIndexDropdown = require('../modals/language_index_dropdown'),
    ModalActions = require('../../actions/modal_actions');

var CourseSelection = React.createClass({
  componentDidMount: function () {
    this.cookieListener = CookieStore.addListener(this._cookiesChanged);
  },

  _cookiesChanged: function () {
    this.forceUpdate();
  },

  _handleLanguagesEnter: function () {
    ModalActions.displayModal("languageIndexDropdown");
    ModalActions.hideModal("loginDropdown");
  },

  _handleLanguagesLeave: function () {
    ModalActions.hideModal("languageIndexDropdown");
  },

  render: function () {
    var curLng = CookieStore.curLng();

    return(
      <div className="main-content box-shadowed group">
        <div className="course-selection-wrapper">
          <div className="course-selection-header-wrapper group">
            <h2 className="course-selection-header">
              Language Courses for
                <button onMouseEnter={ this._handleLanguagesEnter }
                        onMouseLeave={ this._handleLanguagesLeave }
                        className="add-courses-languages-button">
                  {curLng}

                  <LanguageIndexDropdown />
                </button>
              Speakers
            </h2>
          </div>
          <CourseIndex view="addCourse" />
        </div>
      </div>
    );
  }
});

module.exports = CourseSelection;
