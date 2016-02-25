var React = require('react'),
    LessonStore = require('../../stores/lesson_store'),
    LessonsApiUtil = require('../../util/lessons_api_util'),
    ExercisesApiUtil = require('../../util/exercises_api_util'),
    SkillsApiUtil = require('../../util/skills_api_util'),
    SkillStore = require('../../stores/skill_store'),
    TipsAndNotesModal = require("../modals/tips_and_notes_modal"),
    ModalActions = require("../../actions/modal_actions"),
    ExerciseActions = require("../../actions/exercise_actions"),
    Exercise = require("../exercises/exercise"),
    ProgressBar = require("./progress_bar"),
    LessonBottomBar = require("./lesson_bottom_bar"),
    History = require("react-router").History,
    LessonFinalPage = require("./lesson_final_page");

var Lesson = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return({
      lesson: LessonStore.find(this.props.params.lessonId),
      showModal: false,
      showExercise: false,
      showFinalPage: false,
      checkButtonClicked: false,
      lessonOver: false,
      currentExerciseIdx: 0,
      answerChoiceStatus: "",
      currentAnswerChoiceIdx: -1,
    });
  },

  componentDidMount: function () {
    this.lessonListener = LessonStore.addListener(this._lessonsChanged);
    this.skillListener = SkillStore.addListener(function () {
      this.forceUpdate();
    }.bind(this));

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
    SkillsApiUtil.fetchSkills(CookieStore.getLocalStorage("curCourseId"));
  },

  componentWillUnmount: function () {
    this.lessonListener.remove();
    this.skillListener.remove();
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
    if (this.state.answerChoiceStatus === "otherIsSelected") {
      ExerciseActions.pushExercise(this.state.currentExerciseIdx);
    }
    var exercisesLength = ExerciseStore.all().length,
        nextExerciseIdx = this.state.currentExerciseIdx + 1,
        isCorrect = this.state.answerChoiceStatus === "correctIsSelected";
    if (exercisesLength === nextExerciseIdx && isCorrect ) {
      this.setState({ checkButtonClicked: true, lessonOver: true });
    } else {
      this.setState({ checkButtonClicked: true });
    }
  },

  _handleContinueClick: function () {
    var nextExerciseIdx = this.state.currentExerciseIdx + 1;
    if (this.state.showFinalPage) {
      var url = "/skill/" + this.state.lesson.skill_id;
      this.history.pushState(null, url);
    } else if (this.state.lessonOver) {
      this.setState({ showFinalPage: true});
    }
    else if (this.state.answerChoiceStatus === "otherIsSelected") {
      ExerciseActions.removeFirstExercise();
      nextExerciseIdx = this.state.currentExerciseIdx;
    }

    if (!this.state.showFinalPage) {
      this.setState({
        currentExerciseIdx: nextExerciseIdx,
        checkButtonClicked: false,
        answerChoiceStatus: "",
        currentAnswerChoiceIdx: -1
      });
    }
  },

  _handleSkipClick: function () {
    ExerciseActions.pushExercise(this.state.currentExerciseIdx);
    this.setState({
      answerChoiceStatus: "otherIsSelected",
      checkButtonClicked: true
    });
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
    var bottomBar = <LessonBottomBar
                      selected={this.state.answerChoiceStatus}
                      showFinalPageBar={this.state.showFinalPage}
                      checkClicked={this.state.checkButtonClicked}
                      onClickContinue={this._handleContinueClick}
                      onClickCheck={this._handleCheckClick}
                      onClickSkip={this._handleSkipClick} />;

    return bottomBar;
  },

  progressBar: function () {
    var currentIdx = this.state.currentExerciseIdx;
    if (this.state.lessonOver) {
      currentIdx = this.state.currentExerciseIdx + 1;
    }
    return <ProgressBar currentIdx={currentIdx} />;
  },

  exercisePage: function () {
    var tipsAndNotes,
        tipsAndNotesButton

    if (this.state.showModal && this.state.lesson.tips_and_notes) {
      tipsAndNotesButton = (
        <h3 onClick={this._handleTipsAndNotesClick}
            className="tips-and-notes-modal-button">
          Tips & notes
        </h3>
      );

      tipsAndNotes = (
        <TipsAndNotesModal
        tipsAndNotes={this.state.lesson.tips_and_notes}/>
      );
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
      <div className="lesson-page-content">
        <div className="tips-and-notes-wrapper group">
          {tipsAndNotesButton}
          {tipsAndNotes}
          <a className="tips-and-notes-quit"
            href={"#/skill/" + this.state.lesson.skill_id }>
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
    <div className="lesson-page-content">
      <LessonFinalPage lesson={this.state.lesson} />
      {this.bottomBar()}
    </div>
    );
  },

  render: function () {
    var lessonClass = "lesson-page";
    if (this.state.checkButtonClicked) {
      lessonClass = "disabled-lesson lesson-page";
    }
    if(typeof this.state.lesson === "undefined") { return <div></div>; }

    var toRender = this.exercisePage();
    if (this.state.showFinalPage) {
      toRender = this.finalPage();
    }
    return(
      <div className={lessonClass}>
        {toRender}
      </div>
    );
  }
});

module.exports = Lesson;
