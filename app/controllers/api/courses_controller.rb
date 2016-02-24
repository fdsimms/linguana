class Api::CoursesController < ApplicationController

  def create
    @course = Course.new(course_params)

    if @course.save
      render :show
    else
      render json: @course.errors.full_messages, status: 422
    end
  end

  def update
    @course = Course.find(params[:id])

    if @course.update
      render :show
    else
      render json: @course.errors.full_messages, status: 422
    end
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy!
    render :show
  end

  def show
    @course = Course.includes(:target_language).find(params[:id])
  end

  def index
    language = Language.find_by_name(params[:lngName])
    @courses = Course.includes(:target_language).all.where(known_language_id: language.id)
  end

  private

  def course_params
    params.require(:course).permit(
      :name,
      :known_language_id,
      :target_language_id
    )
  end
end
