var React = require('react'),
    LessonStore = require('../../stores/lesson_store'),
    LessonIndex = require('./lesson_index'),
    LessonsApiUtil = require('../../util/lessons_api_util'),
    TipsAndNotesModal = require("../modals/tips_and_notes_modal"),
    ModalActions = require("../../actions/modal_actions"),
    LessonBottomBar = require("./lesson_bottom_bar");

var Lesson = React.createClass({
  getInitialState: function () {
    return({ lesson: LessonStore.find(this.props.params.lessonId),
      showModal: false });
  },

  componentDidMount: function () {
    var lessonId = this.props.params.lessonId;
    this.lessonListener = LessonStore.addListener(this._lessonsChanged);
    LessonsApiUtil.fetchLesson(lessonId, function () {
      this.setState({ lesson: LessonStore.find(this.props.params.lessonId), showModal: true});
    }.bind(this));
  },

  componentWillUnmount: function () {
    this.lessonListener.remove();
  },

  _lessonsChanged: function () {
    this.setState({ lesson: LessonStore.find(this.props.params.lessonId),
    showModal: this.state.showModal });

  },

  _handleTipsAndNotesClick: function () {
    ModalActions.toggleModalDisplay("tipsAndNotesModal");
  },

  render: function () {
    if(typeof this.state.lesson === "undefined") { return <div></div>; }

      var modal;
      if (this.state.showModal) {
        modal =
          <TipsAndNotesModal
            tipsAndNotes={this.state.lesson.tips_and_notes}/>;
      }

    return(
      <div className="lesson-page">
        <div className="lesson-page-content box-shadowed">
          <div className="tips-and-notes-wrapper">
            <h3 onClick={this._handleTipsAndNotesClick}
                className="tips-and-notes-modal-button">
              Tips & notes
            </h3>
            {modal}
          </div>
          <LessonBottomBar />
        </div>
      </div>
    );
  }
});

module.exports = Lesson;
