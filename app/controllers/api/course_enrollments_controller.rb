class Api::CourseEnrollmentsController < ApplicationController

  def create

    new_params = {
      course_id: course_enrollment_params[:course_id].to_i,
      user_id: course_enrollment_params[:user_id].to_i,
    }

    @course_enrollment = CourseEnrollment.new(new_params)

    if @course_enrollment.save
      @user = User.find(@course_enrollment.user_id)
      render "api/users/show"
    else
      render json: @course_enrollment.errors.full_messages, status: 422
    end
  end

  private

  def course_enrollment_params
    params.require(:course_enrollment).permit(:user_id, :course_id)
  end
end
