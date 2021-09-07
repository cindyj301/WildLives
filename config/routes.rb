Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :show, :create] do 
      resources :posts, only: [:index]
    end

    resources :posts, only: [:update, :create, :destroy]

    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
