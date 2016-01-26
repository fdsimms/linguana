class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.password = user_params[:password]

    if @user.save
      log_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :session_token,
      :bio,
      :name,
      :hometown,
      :email,
      :streak_length,
      :points
    )
  end

end
