Rails.application.routes.draw do
  root to: 'static_pages#root'
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :users, except: [:new, :edit]
    resources :languages, except: [:new, :edit]
    resources :courses, except: [:new, :edit] do
      resources :skills, except: [:new, :edit, :create, :show]
    end
    resources :skills, only: [:create, :show, :destroy, :update] do
      resources :lessons, except: [:new, :edit, :create, :show]
    end
    resources :lessons, only: [:create, :show, :destroy, :update]
  end
end
