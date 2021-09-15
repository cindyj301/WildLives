Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :show, :create, :update]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :show, :create, :update, :destroy]
    resources :friends, only: [:show, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
