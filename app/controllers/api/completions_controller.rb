class Api::CompletionsController < ApplicationController

  def create

    completion_params[:completable_id] = completion_params[:completable_id].to_i
    new_params = {
      completable_id: completion_params[:completable_id].to_i,
      user_id: completion_params[:user_id].to_i,
      completable_type: completion_params[:completable_type]
    }

    @completion = Completion.new(new_params)

    if @completion.save
      @user = User.find(@completion.user_id)
      render "api/users/show"
    else
      render json: @completion.errors.full_messages, status: 422
    end
  end

  def update
    @completion = Completion.find(params[:id])

    if @completion.update
      render :show
    else
      render json: @completion.errors.full_messages, status: 422
    end
  end

  def destroy
    @completion = Completion.find(params[:id])
    @completion.destroy!
    render :show
  end

  def show
    @completion = Completion.find(params[:id])
  end

  def index
    @completions = Completion.all.where(user_id: current_user.id)
  end

  private

  def completion_params
    params.require(:completion).permit(
      :user_id,
      :completable_id,
      :completable_type
    )
  end
end
