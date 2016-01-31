class Api::AnswerChoicesController < ApplicationController

  def create
    @answer_choice = AnswerChoice.new(answer_choice_params)

    if @answer_choice.save
      render :show
    else
      render json: @answer_choice.errors.full_messages, status: 422
    end
  end

  def update
    @answer_choice = AnswerChoice.find(params[:id])

    if @answer_choice.update
      render :show
    else
      render json: @answer_choice.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer_choice = AnswerChoice.find(params[:id])
    @answer_choice.destroy!
    render :show
  end

  def show
    @answer_choice = AnswerChoice.find(params[:id])
    @exercise = @answer_choice.exercise
  end

  def index
    @exercise = Lesson.find(params[:exercise_id])
    @answer_choices = AnswerChoice.all.where(exercise_id: @exercise.id)
  end

  private

  def answer_choice_params
    params.require(:answer_choice).permit(
      :exercise_id,
      :is_correct,
      :body
    )
  end

end
