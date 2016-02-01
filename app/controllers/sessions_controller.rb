class SessionsController < ApplicationController

  def new
  end

  def create
    debugger
    password = session_params[:password]
    username = session_params[:username]
    user = User.find_by_credentials(username, password)
    debugger
    if user
      log_in!(user)
      redirect_to root_url
    else
      flash.now[:errors] = "Invalid username or password!"
      render :new
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
