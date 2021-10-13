class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render 'api/users/show' # this is needed to properly extract the info needed upon logging a user, otherwise there will be no data received from the BE to receive a current user when the receiveCurrentUser action is dispatched
        else 
            render json: ['Invalid credentials'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render json: {}
        else
            render json: ["You are not logged in"], status: 404
        end
    end
end