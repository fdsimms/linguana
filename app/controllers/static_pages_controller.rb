class StaticPagesController < ApplicationController
  before_action :require_logged_in!  

  def root
  end
end
