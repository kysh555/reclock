class PlansController < ApplicationController

  def index
    @plans = Plan.all
  end

  def create
    plan = Plan.create(todo: params[:todo], done: false)
    redirect_to root_path
  end

  def done
    plan = Plan.find(params[:id])
    if plan.done
      plan.update(done: false)
    else
      plan.update(done: true)
    end

    item = Plan.find(params[:id])
    render json:{plan: item}
  end

end
