class Api::UsersController < ApplicationController
    def index # note: edit for User.includes(:posts)
        @users = User.all
        render :index
    end

    def show # note: edit for User.includes(:posts)
        @user = User.find_by(id: params[:id])
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

    def update # note: edit for User.includes(:posts)
        @user = User.find_by(id: params[:id])
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