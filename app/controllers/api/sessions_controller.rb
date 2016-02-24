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

  def omniauth_facebook
    @user = User.find_or_create_by_auth_hash(auth_hash)
    log_in!(@user)
    redirect_to root_url + '#/'
  end

  def omniauth_google
    @user = User.find_or_create_by_auth_hash(auth_hash)
    log_in!(@user)
    redirect_to root_url + '#/'
  end

  def destroy
    log_out!
    render json: {}
  end

  private

  def auth_hash
    request.env['omniauth.auth']
  end

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
