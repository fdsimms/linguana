Rails.application.routes.draw do
  root to: 'static_pages#root'

  get '/auth/facebook/callback', to: "api/sessions#omniauth_facebook"
  get '/auth/google_oauth2/callback', to: "api/sessions#omniauth_google"

  resources :users
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :languages, except: [:new, :edit]
    resources :courses, except: [:new, :edit] do
      resources :skills, except: [:new, :edit, :create, :show]
    end
    resources :skills, only: [:create, :show, :destroy, :update] do
      resources :lessons, except: [:new, :edit, :create, :show]
    end
    resources :lessons, only: [:create, :show, :destroy, :update] do
      resources :exercises, only: [:create, :index, :destroy, :update]
    end
    resources :exercises, only: [:show]
    resources :completions, only: [:create, :index, :destroy, :update]
  end
end
