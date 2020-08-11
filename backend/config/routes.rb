Rails.application.routes.draw do
  resources :purposes
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :products do 
    resources :purposes 
  end

end
