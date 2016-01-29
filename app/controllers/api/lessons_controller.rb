class Api::LessonsController < ApplicationController

  def create
    @lesson = Lesson.new(lesson_params)

    if @lesson.save
      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def update
    @lesson = Lesson.find(params[:id])

    if @lesson.update
      render :show
    else
      render json: @lesson.errors.full_messages, status: 422
    end
  end

  def destroy
    @lesson = Lesson.find(params[:id])
    @lesson.destroy!
    render :show
  end

  def show
    @lesson = Lesson.find(params[:id])
    @skill = @lesson.skill
  end

  def index
    @skill = Skill.find(params[:skill_id])
    @lessons = Lesson.all.where(skill_id: @skill.id)
  end

  private

  def lesson_params
    params.require(:lesson).permit(
      :name,
      :skill_id
    )
  end
end
