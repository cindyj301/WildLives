class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    # skip_before_action :verify_authenticity_token # for testing, remove later!

    helper_method :current_user, :logged_in?

    private 

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def ensure_logged_in!
        render json: ['You must be logged in'], status: 401 unless logged_in?
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logged_in?
        !!current_user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end