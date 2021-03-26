class PlansController < ApplicationController

  def index
    @plans = Plan.all
  end

  def create
    plan = Plan.create(todo: params[:todo])
    redirect_to root_path
  end

end
