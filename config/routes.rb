Rails.application.routes.draw do
  root to: 'plans#index'
  resources :plans, only: [:create, :destroy]
  get 'plans/:id', to: 'plans#done' 
end
