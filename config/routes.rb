Rails.application.routes.draw do
  root to: 'plans#index'
  resources :plans, only: [:create]
  get 'plans/:id', to: 'plans#done' 
end
