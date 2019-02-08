Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'messages#index'
  resources :users, only: [:index, :edit, :update]
  resources :rroups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
