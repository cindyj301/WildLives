class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user && @user.update(user_params)
            render :show
        else
            render json: ["Unsuccessful upload"], status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname, :animal, :status, :profile_pic, :cover_photo)
    end
end