class Api::MultipleChoiceQsController < ApplicationController

  def create
    @multiple_choice_q = MultipleChoiceQ.new(multiple_choice_q_params)

    if @multiple_choice_q.save
      render :show
    else
      render json: @multiple_choice_q.errors.full_messages, status: 422
    end
  end

  def update
    @multiple_choice_q = MultipleChoiceQ.find(params[:id])

    if @multiple_choice_q.update
      render :show
    else
      render json: @multiple_choice_q.errors.full_messages, status: 422
    end
  end

  def destroy
    @multiple_choice_q = MultipleChoiceQ.find(params[:id])
    @multiple_choice_q.destroy!
    render :show
  end

  def show
    @multiple_choice_q = MultipleChoiceQ.find(params[:id])
    @lesson = @multiple_choice_q.lesson
  end

  def index
    @lesson = Lesson.find(params[:lesson_id])
    @multiple_choice_qs = MultipleChoiceQ.all.where(lesson_id: @lesson.id)
  end

  private

  def multiple_choice_q_params
    params.require(:multiple_choice_q).permit(
      :lesson_id,
      :body
    )
  end
  
end
