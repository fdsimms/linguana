class Api::SkillsController < ApplicationController

  def create
    @skill = Skill.new(skill_params)

    if @skill.save
      render :show
    else
      render json: @skill.errors.full_messages, status: 422
    end
  end

  def update
    @skill = Skill.find(params[:id])

    if @skill.update
      render :show
    else
      render json: @skill.errors.full_messages, status: 422
    end
  end

  def destroy
    @skill = Skill.find(params[:id])
    @skill.destroy!
    render :show
  end

  def show
    @skill = Skill.find(params[:id])
  end

  def index
    @course = Course.find(params[:course_id])
    @skills = Skill.all.where(course_id: @course.id)
  end

  private

  def skill_params
    params.require(:skill).permit(
      :name,
      :course_id,
      :tips_and_notes
    )
  end
end
