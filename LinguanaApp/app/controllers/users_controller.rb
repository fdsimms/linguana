class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password_digest,
      :session_token,
      :bio,
      :name,
      :hometown,
      :email
    )
  end

end
