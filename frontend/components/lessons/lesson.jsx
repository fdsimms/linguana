var React = require('react'),
    LessonStore = require('../../stores/lesson_store'),
    LessonsApiUtil = require('../../util/lessons_api_util'),
    ExercisesApiUtil = require('../../util/exercises_api_util'),
    TipsAndNotesModal = require("../modals/tips_and_notes_modal"),
    ModalActions = require("../../actions/modal_actions"),
    ExerciseActions = require("../../actions/exercise_actions"),
    Exercise = require("../exercises/exercise"),
    ProgressBar = require("./progress_bar"),
    LessonBottomBar = require("./lesson_bottom_bar"),
    LessonFinalPage = require("./lesson_final_page"),
    History = require('react-router').History;

var Lesson = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return({
      lesson: LessonStore.find(this.props.params.lessonId),
      showModal: false,
      showExercise: false,
      checkButtonClicked: false,
      currentExerciseIdx: 0,
      answerChoiceStatus: "",
      currentAnswerChoiceIdx: -1,
      lessonOver: false
    });
  },

  componentDidMount: function () {
    this.lessonListener = LessonStore.addListener(this._lessonsChanged);

    var lessonId = this.props.params.lessonId;

    LessonsApiUtil.fetchLesson(lessonId, function () {

      this.setState({
        lesson: LessonStore.find(this.props.params.lessonId),
        showModal: true
      });

      ExercisesApiUtil.fetchExercises(this.state.lesson.id, function () {
        this.setState({ showExercise: true });
      }.bind(this));
    }.bind(this));

  },

  componentWillUnmount: function () {
    this.lessonListener.remove();
  },

  _lessonsChanged: function () {
    this.setState({
      lesson: LessonStore.find(this.props.params.lessonId),
      showModal: this.state.showModal
    });
  },

  _handleTipsAndNotesClick: function () {
    ModalActions.toggleModalDisplay("tipsAndNotesModal");
  },

  _handleCheckClick: function () {
    if (ExerciseStore.all().length === this.state.currentExerciseIdx + 1) {
      setTimeout(function () {
        this.setState({ checkButtonClicked: true, lessonOver: true });
      }.bind(this), 750)
    } else {
      this.setState({ checkButtonClicked: true })
    }
    if (this.state.answerChoiceStatus === "otherIsSelected") {
      ExerciseActions.pushExercise(this.state.currentExerciseIdx);
    }
  },

  _handleContinueClick: function () {
    var nextExerciseIdx = this.state.currentExerciseIdx + 1;
    if (this.state.lessonOver) {
      var skillId = this.state.lesson.skill_id;
      this.history.pushState(null, "/skills/" + skillId);
    }
    else if (this.state.answerChoiceStatus === "otherIsSelected") {
      ExerciseActions.removeFirstExercise();
      nextExerciseIdx = this.state.currentExerciseIdx;
    }

    this.setState({
      currentExerciseIdx: nextExerciseIdx,
      checkButtonClicked: false,
      answerChoiceStatus: "",
      currentAnswerChoiceIdx: -1
     });
  },

  _handleSkipClick: function () {
    this.setState({
      checkButtonClicked: true,
      answerChoiceStatus: "otherIsSelected"
    })
  },

  getAnswerChoiceStatus: function (status, idx ) {
    this.setState({
      answerChoiceStatus: status,
      currentAnswerChoiceIdx: idx
    });
  },

  exercise: function () {
      return(
        <Exercise lessonId={this.state.lesson.id}
                  exerciseIdx={this.state.currentExerciseIdx}
                  currentAnswerChoiceIdx={this.state.currentAnswerChoiceIdx}
                  getAnswerChoiceStatus={this.getAnswerChoiceStatus}
                  checkClicked={this.state.checkButtonClicked} />
      );
  },

  bottomBar: function () {
    var bottomBar;
    if (this.state.lessonOver) {
      bottomBar =
        <LessonBottomBar
          lessonOver={this.state.lessonOver}
          onClickContinue={this._handleContinueClick} />
    }
    else if (this.state.answerChoiceStatus === "correctIsSelected") {
      bottomBar =
        <LessonBottomBar
          selected="correctIsSelected"
          checkClicked={this.state.checkButtonClicked}
          onClickContinue={this._handleContinueClick}
          onClickCheck={this._handleCheckClick}
          onClickSkip={this._handleSkipClick} />;

    } else if (this.state.answerChoiceStatus === "otherIsSelected") {
      bottomBar =
        <LessonBottomBar
          selected="otherIsSelected"
          checkClicked={this.state.checkButtonClicked}
          onClickContinue={this._handleContinueClick}
          onClickCheck={this._handleCheckClick}
          onClickSkip={this._handleSkipClick} />;

    } else {
      bottomBar =
        <LessonBottomBar
          onClickCheck={this._handleCheckClick}
          onClickSkip={this._handleSkipClick} />;
    }
    return bottomBar;
  },

  progressBar: function () {
    return <ProgressBar currentIdx={this.state.currentExerciseIdx} />;
  },

  exercisePage: function () {
    var modal;
    if (this.state.showModal) {
      modal =
        <TipsAndNotesModal
          tipsAndNotes={this.state.lesson.tips_and_notes}/>;
    }

    var exercise,
        progressBar,
        bottomBar;

    if (this.state.showExercise) {
      progressBar = this.progressBar();
      exercise = this.exercise();
      bottomBar = this.bottomBar();
    }


    return(
      <div className="lesson-page-content box-shadowed">
        <div className="tips-and-notes-wrapper group">
          <h3 onClick={this._handleTipsAndNotesClick}
              className="tips-and-notes-modal-button">
            Tips & notes
          </h3>
          {modal}
          <a className="tips-and-notes-quit"
            href={"#/skills/" + this.state.lesson.skill_id }>
            Quit
          </a>
        </div>
        {progressBar}
        {exercise}
        {bottomBar}
      </div>

    );
  },

  finalPage: function () {
    return(
    <div className="lesson-page-content box-shadowed">
      <LessonFinalPage />
      {this.bottomBar()}
    </div>
    )
  },

  render: function () {
    var lessonClass = "lesson-page";
    if (this.state.checkButtonClicked) {
      lessonClass = "disabled-lesson lesson-page";
    }
    if(typeof this.state.lesson === "undefined") { return <div></div>; }
    var toRender;
    if (this.state.lessonOver) {
      toRender = this.finalPage();
    } else {
      toRender = this.exercisePage();
    }

    return(
      <div className={lessonClass}>
        {toRender}
      </div>
    );
  }
});

module.exports = Lesson;
