class Api::ExercisesController < ApplicationController

  def create
    @exercise = Exercise.new(exercise_params)

    if @exercise.save
      render :show
    else
      render json: @exercise.errors.full_messages, status: 422
    end
  end

  def update
    @exercise = Exercise.find(params[:id])

    if @exercise.update
      render :show
    else
      render json: @exercise.errors.full_messages, status: 422
    end
  end

  def destroy
    @exercise = Exercise.find(params[:id])
    @exercise.destroy!
    render :show
  end

  def show
    @exercise = Exercise.find(params[:id])
    @lesson = @exercise.lesson
  end

  def index
    @lesson = Lesson.find(params[:lesson_id])
    @exercises = Exercise.all.where(lesson_id: @lesson.id)
  end

  private

  def exercise_params
    params.require(:exercise).permit(
      :lesson_id,
      :thing_to_translate,
      :exercise_type
    )
  end

end
