class Api::UsersController < ApplicationController
    def index
        @users = User.all.includes(:posts)
        render :index
    end

    def show
        @user = User.includes(:posts).find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            # render json: @user.errors.full_messages, status: 422
            render json: ["Fields can't be blank!"], status: 422
        end
    end

    def update
        @user = User.includes(:posts).find_by(id: params[:id])
        if @user && @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname, :animal, :status)
    end
end