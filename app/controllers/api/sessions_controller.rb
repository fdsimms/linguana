class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      session_params[:username],
      session_params[:password]
    )

    if @user.nil?
      render json: ["Incorrect username or password."], status: 401
    else
      log_in!(@user)
      render "api/users/show"
    end
  end

  def show
  if current_user
    @user = current_user
    render "api/users/show"
  else
    render json: {}
  end
end

  def destroy
    log_out!
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
